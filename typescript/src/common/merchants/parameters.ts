import { z } from "zod";

export const getMerchantParameters = z.object({
  merchantCode: z
    .string()
    .describe(`Short unique identifier for the merchant.`),
  version: z
    .string()
    .optional()
    .describe(`The version of the resource. At the moment, the only supported value is \`latest\`. When provided and the requested resource's \`change_status\` is pending, the resource will be returned with all pending changes applied. When no changes are pending the resource is returned as is. The \`change_status\` in the response body will reflect the current state of the resource.
`),
});

export const getPersonParameters = z.object({
  merchantCode: z
    .string()
    .describe(`Short unique identifier for the merchant.`),
  personId: z.string().describe(`Person ID`),
  version: z
    .string()
    .optional()
    .describe(`The version of the resource. At the moment, the only supported value is \`latest\`. When provided and the requested resource's \`change_status\` is pending, the resource will be returned with all pending changes applied. When no changes are pending the resource is returned as is. The \`change_status\` in the response body will reflect the current state of the resource.
`),
});

export const listPersonsParameters = z.object({
  merchantCode: z
    .string()
    .describe(`Short unique identifier for the merchant.`),
  version: z
    .string()
    .optional()
    .describe(`The version of the resource. At the moment, the only supported value is \`latest\`. When provided and the requested resource's \`change_status\` is pending, the resource will be returned with all pending changes applied. When no changes are pending the resource is returned as is. The \`change_status\` in the response body will reflect the current state of the resource.
`),
});
