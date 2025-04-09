import { z } from "zod";

export const listMerchantRolesParameters = z.object({
  merchant_code: z.string().describe(`Merchant code.`),
});

export const createMerchantRoleParameters = z.object({
  name: z.string().describe(`User-defined name of the role.`),
  permissions: z.array(z.string()).describe(`User's permissions.`),
  metadata: z
    .object({})
    .describe(
      `Set of user-defined key-value pairs attached to the object. Partial updates are not supported. When updating, always submit whole metadata.`,
    )
    .optional(),
  description: z
    .string()
    .describe(`User-defined description of the role.`)
    .optional(),
  merchant_code: z.string().describe(`Merchant code.`),
});

export const getMerchantRoleParameters = z.object({
  merchant_code: z.string().describe(`Merchant code.`),
  role_id: z.string().describe(`The ID of the role to retrieve.`),
});

export const deleteMerchantRoleParameters = z.object({
  merchant_code: z.string().describe(`Merchant code.`),
  role_id: z.string().describe(`The ID of the role to retrieve.`),
});

export const updateMerchantRoleParameters = z.object({
  name: z.string().describe(`User-defined name of the role.`).optional(),
  permissions: z.array(z.string()).describe(`User's permissions.`).optional(),
  description: z
    .string()
    .describe(`User-defined description of the role.`)
    .optional(),
  merchant_code: z.string().describe(`Merchant code.`),
  role_id: z.string().describe(`The ID of the role to retrieve.`),
});
