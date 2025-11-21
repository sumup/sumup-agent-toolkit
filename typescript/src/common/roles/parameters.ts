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

export const deleteMerchantRoleParameters = z.object({
  merchantCode: z.string().describe(`Merchant code.`),
  roleId: z.string().describe(`The ID of the role to retrieve.`),
});

export const getMerchantRoleParameters = z.object({
  merchantCode: z.string().describe(`Merchant code.`),
  roleId: z.string().describe(`The ID of the role to retrieve.`),
});

export const listMerchantRolesParameters = z.object({
  merchantCode: z.string().describe(`Merchant code.`),
});

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
