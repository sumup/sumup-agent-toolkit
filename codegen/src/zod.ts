import type { OpenAPIV3_1 } from "openapi-types";
import { formatPropertyKey, toTemplateLiteral } from "./utils";

const PROPERTY_OVERRIDES: Record<string, OpenAPIV3_1.SchemaObject> = {
  vat_rates: {
    type: "array",
    items: {
      type: "object",
      additionalProperties: true,
      "x-codegen-skip-nullable-additional-properties": true,
    } as OpenAPIV3_1.SchemaObject,
  },
};

export type SchemaResult = {
  code: string;
  hasDescription: boolean;
};

export type ObjectField = {
  name: string;
  schema: OpenAPIV3_1.SchemaObject;
  required: boolean;
};

type BuildObjectResult = {
  code: string;
  hasOnlyAdditionalProperties: boolean;
};

type SchemaToZodOptions = {
  allowNullableAdditionalProperties?: boolean;
};

function applyPropertyOverrides(
  name: string,
  schema: OpenAPIV3_1.SchemaObject,
): OpenAPIV3_1.SchemaObject {
  const override = PROPERTY_OVERRIDES[name];
  if (!override) {
    return schema;
  }

  return {
    ...schema,
    ...override,
    description: schema.description ?? override.description,
  };
}

function shouldSkipNullableAdditionalProperties(
  schema: OpenAPIV3_1.SchemaObject,
): boolean {
  return Boolean(
    (schema as {
      "x-codegen-skip-nullable-additional-properties"?: boolean;
    })["x-codegen-skip-nullable-additional-properties"],
  );
}

export function schemaToZod(
  schema: OpenAPIV3_1.SchemaObject,
  options: SchemaToZodOptions = {},
): SchemaResult {
  if (schema.enum && schema.enum.length > 0) {
    const allStrings = schema.enum.every((value) => typeof value === "string");
    if (allStrings) {
      const values = (schema.enum as string[])
        .map((value) => JSON.stringify(value))
        .join(", ");
      return finalize(`z.enum([${values}])`, schema);
    }

    const literals = schema.enum
      .map((value) => `z.literal(${JSON.stringify(value)})`)
      .join(", ");
    const expression =
      schema.enum.length === 1 ? literals : `z.union([${literals}])`;
    return finalize(expression, schema);
  }

  if (schema.oneOf && schema.oneOf.length > 0) {
    const variants = schema.oneOf
      .map(
        (variant) =>
          schemaToZod(variant as OpenAPIV3_1.SchemaObject, options).code,
      )
      .join(", ");
    return finalize(`z.union([${variants}])`, schema);
  }

  if (schema.anyOf && schema.anyOf.length > 0) {
    const variants = schema.anyOf
      .map(
        (variant) =>
          schemaToZod(variant as OpenAPIV3_1.SchemaObject, options).code,
      )
      .join(", ");
    return finalize(`z.union([${variants}])`, schema);
  }

  if (schema.allOf && schema.allOf.length > 0) {
    const fields = collectObjectFields(schema);
    if (fields.length > 0) {
      const properties: Record<string, OpenAPIV3_1.SchemaObject> = {};
      const required: string[] = [];
      for (const field of fields) {
        properties[field.name] = field.schema;
        if (field.required) {
          required.push(field.name);
        }
      }

      const mergedSchema: OpenAPIV3_1.SchemaObject = {
        type: "object",
        properties,
      };

      if (required.length > 0) {
        mergedSchema.required = required;
      }

      if (hasAdditionalProperties(schema)) {
        mergedSchema.additionalProperties = true;
      }

      const objectResult = buildObject(mergedSchema, options);
      let expr = objectResult.code;
      if (
        objectResult.hasOnlyAdditionalProperties &&
        options.allowNullableAdditionalProperties &&
        !shouldSkipNullableAdditionalProperties(schema)
      ) {
        // Temporary workaround for incorrect response schemas that only contain additionalProperties.
        expr += ".nullable()";
      }
      return finalize(expr, schema);
    }

    const [first, ...rest] = schema.allOf as OpenAPIV3_1.SchemaObject[];
    let expression = schemaToZod(first, options).code;
    for (const part of rest) {
      expression = `z.intersection(${expression}, ${schemaToZod(part, options).code})`;
    }
    return finalize(expression, schema);
  }

  if (schema.type === "array") {
    const itemSchema = schema.items
      ? schemaToZod(schema.items as OpenAPIV3_1.SchemaObject, options).code
      : "z.any()";
    let expr = `z.array(${itemSchema})`;
    if (typeof schema.minItems === "number") {
      expr += `.min(${schema.minItems})`;
    }
    if (typeof schema.maxItems === "number") {
      expr += `.max(${schema.maxItems})`;
    }
    return finalize(expr, schema);
  }

  if (
    schema.type === "object" ||
    schema.properties ||
    schema.additionalProperties
  ) {
    const objectResult = buildObject(schema, options);
    let expr = objectResult.code;
    if (
      objectResult.hasOnlyAdditionalProperties &&
      options.allowNullableAdditionalProperties &&
      !shouldSkipNullableAdditionalProperties(schema)
    ) {
      // Temporary workaround for incorrect response schemas that only contain additionalProperties.
      expr += ".nullable()";
    }
    return finalize(expr, schema);
  }

  if (schema.type === "string") {
    let expr = "z.string()";
    if (typeof schema.minLength === "number") {
      expr += `.min(${schema.minLength})`;
    }
    if (typeof schema.maxLength === "number") {
      expr += `.max(${schema.maxLength})`;
    }
    return finalize(expr, schema);
  }

  if (schema.type === "integer") {
    return finalize("z.number().int()", schema);
  }

  if (schema.type === "number") {
    return finalize("z.number()", schema);
  }

  if (schema.type === "boolean") {
    return finalize("z.boolean()", schema);
  }

  // default to a record of unknown values when a schema does not define a specific type.
  // This mirrors the behaviour of the SDK generator where these schemas represent maps.
  return finalize("z.record(z.unknown())", schema);
}

export function collectObjectFields(
  schema: OpenAPIV3_1.SchemaObject,
): ObjectField[] {
  const map = new Map<string, ObjectField>();

  function visit(node?: OpenAPIV3_1.SchemaObject) {
    if (!node) return;

    if (node.allOf && node.allOf.length > 0) {
      for (const part of node.allOf as OpenAPIV3_1.SchemaObject[]) {
        visit(part);
      }
    }

    if (node.type === "object" || node.properties) {
      const required = new Set(node.required ?? []);
      for (const [name, propSchema] of Object.entries(node.properties ?? {})) {
        const existing = map.get(name);
        const resolved = applyPropertyOverrides(
          name,
          propSchema as OpenAPIV3_1.SchemaObject,
        );
        const entry: ObjectField = {
          name,
          schema: resolved,
          required: required.has(name) || existing?.required === true,
        };
        if (existing) {
          existing.required = existing.required || entry.required;
        } else {
          map.set(name, entry);
        }
      }
    }
  }

  visit(schema);
  return Array.from(map.values());
}

function hasAdditionalProperties(schema: OpenAPIV3_1.SchemaObject): boolean {
  if (schema.additionalProperties) {
    return true;
  }

  if (schema.allOf && schema.allOf.length > 0) {
    return (schema.allOf as OpenAPIV3_1.SchemaObject[]).some((part) =>
      hasAdditionalProperties(part),
    );
  }

  return false;
}

function buildObject(
  schema: OpenAPIV3_1.SchemaObject,
  options: SchemaToZodOptions,
): BuildObjectResult {
  const required = new Set(schema.required ?? []);
  const lines: string[] = [];

  for (const [name, propSchema] of Object.entries(schema.properties ?? {})) {
    const normalized = applyPropertyOverrides(
      name,
      propSchema as OpenAPIV3_1.SchemaObject,
    );
    const prop = schemaToZod(normalized, options);
    let expr = prop.code;
    if (!required.has(name)) {
      expr += ".optional()";
    }
    lines.push(`${formatPropertyKey(name)}: ${expr}`);
  }

  let expression = `z.object({${lines.length > 0 ? `\n  ${lines.join(",\n  ")}\n` : ""}})`;

  if (schema.additionalProperties) {
    if (schema.additionalProperties === true) {
      expression += `.catchall(z.unknown())`;
    } else {
      const additionalSchema = schemaToZod(
        schema.additionalProperties as OpenAPIV3_1.SchemaObject,
        options,
      );
      expression += `.catchall(${additionalSchema.code})`;
    }
  }

  return {
    code: expression,
    hasOnlyAdditionalProperties:
      lines.length === 0 && Boolean(schema.additionalProperties),
  };
}

function finalize(
  expr: string,
  schema: OpenAPIV3_1.SchemaObject,
): SchemaResult {
  let code = expr;

  if ("nullable" in schema && schema.nullable) {
    code += ".nullable()";
  }

  if (schema.description) {
    code += `.describe(${toTemplateLiteral(schema.description)})`;
    return { code, hasDescription: true };
  }

  return { code, hasDescription: false };
}
