import type { OpenAPIV3_1 } from "openapi-types";
import { formatPropertyKey, toTemplateLiteral } from "./utils";

export type SchemaResult = {
  code: string;
  hasDescription: boolean;
};

export type ObjectField = {
  name: string;
  schema: OpenAPIV3_1.SchemaObject;
  required: boolean;
};

export function schemaToZod(schema: OpenAPIV3_1.SchemaObject): SchemaResult {
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
      .map((variant) => schemaToZod(variant as OpenAPIV3_1.SchemaObject).code)
      .join(", ");
    return finalize(`z.union([${variants}])`, schema);
  }

  if (schema.anyOf && schema.anyOf.length > 0) {
    const variants = schema.anyOf
      .map((variant) => schemaToZod(variant as OpenAPIV3_1.SchemaObject).code)
      .join(", ");
    return finalize(`z.union([${variants}])`, schema);
  }

  if (schema.allOf && schema.allOf.length > 0) {
    const [first, ...rest] = schema.allOf as OpenAPIV3_1.SchemaObject[];
    let expression = schemaToZod(first).code;
    for (const part of rest) {
      expression = `z.intersection(${expression}, ${schemaToZod(part).code})`;
    }
    return finalize(expression, schema);
  }

  if (schema.type === "array") {
    const itemSchema = schema.items
      ? schemaToZod(schema.items as OpenAPIV3_1.SchemaObject).code
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
    return finalize(buildObject(schema), schema);
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

  // default to string
  let expr = "z.string()";
  if (typeof schema.minLength === "number") {
    expr += `.min(${schema.minLength})`;
  }
  if (typeof schema.maxLength === "number") {
    expr += `.max(${schema.maxLength})`;
  }
  return finalize(expr, schema);
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
      return;
    }

    if (node.type === "object" || node.properties) {
      const required = new Set(node.required ?? []);
      for (const [name, propSchema] of Object.entries(node.properties ?? {})) {
        const existing = map.get(name);
        const entry: ObjectField = {
          name,
          schema: propSchema as OpenAPIV3_1.SchemaObject,
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

function buildObject(schema: OpenAPIV3_1.SchemaObject): string {
  const required = new Set(schema.required ?? []);
  const lines: string[] = [];

  for (const [name, propSchema] of Object.entries(schema.properties ?? {})) {
    const prop = schemaToZod(propSchema as OpenAPIV3_1.SchemaObject);
    let expr = prop.code;
    if (!required.has(name)) {
      expr += ".optional()";
    }
    lines.push(`${formatPropertyKey(name)}: ${expr}`);
  }

  let expression = `z.object({${lines.length > 0 ? `\n  ${lines.join(",\n  ")}\n` : ""}})`;

  if (schema.additionalProperties) {
    expression += `.catchall(z.any())`;
  }

  return expression;
}

function finalize(
  expr: string,
  schema: OpenAPIV3_1.SchemaObject,
): SchemaResult {
  let code = expr;

  // if (schema.nullable) {
  //   code += ".nullable()";
  // }

  if (schema.description) {
    code += `.describe(${toTemplateLiteral(schema.description)})`;
    return { code, hasDescription: true };
  }

  return { code, hasDescription: false };
}
