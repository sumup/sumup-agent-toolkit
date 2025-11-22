import { z } from "zod";

export const createMerchantRoleParameters = z.object({
  merchantCode: z.string().describe(`Merchant code.`),
  name: z.string().describe(`User-defined name of the role.`),
  permissions: z.array(z.string()).max(100).describe(`User's permissions.`),
  metadata: z
    .object({})
    .catchall(z.any())
    .describe(
      `Set of user-defined key-value pairs attached to the object. Partial updates are not supported. When updating, always submit whole metadata.`,
    )
    .optional(),
  description: z
    .string()
    .describe(`User-defined description of the role.`)
    .optional(),
});

export const createMerchantRoleResult = z
  .object({
    id: z.string().describe(`Unique identifier of the role.`),
    name: z.string().describe(`User-defined name of the role.`),
    description: z
      .string()
      .describe(`User-defined description of the role.`)
      .optional(),
    permissions: z
      .array(z.string())
      .max(100)
      .describe(`List of permission granted by this role.`),
    is_predefined: z
      .boolean()
      .describe(`True if the role is provided by SumUp.`),
    metadata: z
      .object({})
      .catchall(z.any())
      .describe(
        `Set of user-defined key-value pairs attached to the object. Partial updates are not supported. When updating, always submit whole metadata.`,
      )
      .optional(),
    created_at: z
      .string()
      .describe(`The timestamp of when the role was created.`),
    updated_at: z
      .string()
      .describe(`The timestamp of when the role was last updated.`),
  })
  .describe(
    `A custom role that can be used to assign set of permissions to members.`,
  );

export const deleteMerchantRoleParameters = z.object({
  merchantCode: z.string().describe(`Merchant code.`),
  roleId: z.string().describe(`The ID of the role to retrieve.`),
});

export const deleteMerchantRoleResult = z.any();

export const getMerchantRoleParameters = z.object({
  merchantCode: z.string().describe(`Merchant code.`),
  roleId: z.string().describe(`The ID of the role to retrieve.`),
});

export const getMerchantRoleResult = z
  .object({
    id: z.string().describe(`Unique identifier of the role.`),
    name: z.string().describe(`User-defined name of the role.`),
    description: z
      .string()
      .describe(`User-defined description of the role.`)
      .optional(),
    permissions: z
      .array(z.string())
      .max(100)
      .describe(`List of permission granted by this role.`),
    is_predefined: z
      .boolean()
      .describe(`True if the role is provided by SumUp.`),
    metadata: z
      .object({})
      .catchall(z.any())
      .describe(
        `Set of user-defined key-value pairs attached to the object. Partial updates are not supported. When updating, always submit whole metadata.`,
      )
      .optional(),
    created_at: z
      .string()
      .describe(`The timestamp of when the role was created.`),
    updated_at: z
      .string()
      .describe(`The timestamp of when the role was last updated.`),
  })
  .describe(
    `A custom role that can be used to assign set of permissions to members.`,
  );

export const listMerchantRolesParameters = z.object({
  merchantCode: z.string().describe(`Merchant code.`),
});

export const listMerchantRolesResult = z
  .object({
    items: z.array(
      z
        .object({
          id: z.string().describe(`Unique identifier of the role.`),
          name: z.string().describe(`User-defined name of the role.`),
          description: z
            .string()
            .describe(`User-defined description of the role.`)
            .optional(),
          permissions: z
            .array(z.string())
            .max(100)
            .describe(`List of permission granted by this role.`),
          is_predefined: z
            .boolean()
            .describe(`True if the role is provided by SumUp.`),
          metadata: z
            .object({})
            .catchall(z.any())
            .describe(
              `Set of user-defined key-value pairs attached to the object. Partial updates are not supported. When updating, always submit whole metadata.`,
            )
            .optional(),
          created_at: z
            .string()
            .describe(`The timestamp of when the role was created.`),
          updated_at: z
            .string()
            .describe(`The timestamp of when the role was last updated.`),
        })
        .describe(
          `A custom role that can be used to assign set of permissions to members.`,
        ),
    ),
  })
  .describe(`Returns a list of Role objects.`);

export const updateMerchantRoleParameters = z.object({
  merchantCode: z.string().describe(`Merchant code.`),
  roleId: z.string().describe(`The ID of the role to retrieve.`),
  name: z.string().describe(`User-defined name of the role.`).optional(),
  permissions: z
    .array(z.string())
    .max(100)
    .describe(`User's permissions.`)
    .optional(),
  description: z
    .string()
    .describe(`User-defined description of the role.`)
    .optional(),
});

export const updateMerchantRoleResult = z
  .object({
    id: z.string().describe(`Unique identifier of the role.`),
    name: z.string().describe(`User-defined name of the role.`),
    description: z
      .string()
      .describe(`User-defined description of the role.`)
      .optional(),
    permissions: z
      .array(z.string())
      .max(100)
      .describe(`List of permission granted by this role.`),
    is_predefined: z
      .boolean()
      .describe(`True if the role is provided by SumUp.`),
    metadata: z
      .object({})
      .catchall(z.any())
      .describe(
        `Set of user-defined key-value pairs attached to the object. Partial updates are not supported. When updating, always submit whole metadata.`,
      )
      .optional(),
    created_at: z
      .string()
      .describe(`The timestamp of when the role was created.`),
    updated_at: z
      .string()
      .describe(`The timestamp of when the role was last updated.`),
  })
  .describe(
    `A custom role that can be used to assign set of permissions to members.`,
  );
