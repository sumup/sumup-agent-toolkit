import { z } from "zod";

export const listMerchantRolesParameters = {
  merchant_code: z.string().describe(`Merchant code.`),
};

export const createMerchantRoleParameters = {
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
};

export const getMerchantRoleParameters = {
  merchant_code: z.string().describe(`Merchant code.`),
  role_id: z.string().describe(`The ID of the role to retrieve.`),
};

export const deleteMerchantRoleParameters = {
  merchant_code: z.string().describe(`Merchant code.`),
  role_id: z.string().describe(`The ID of the role to retrieve.`),
};

export const updateMerchantRoleParameters = {
  name: z.string().describe(`User-defined name of the role.`).optional(),
  permissions: z.array(z.string()).describe(`User's permissions.`).optional(),
  description: z
    .string()
    .describe(`User-defined description of the role.`)
    .optional(),
  merchant_code: z.string().describe(`Merchant code.`),
  role_id: z.string().describe(`The ID of the role to retrieve.`),
};
