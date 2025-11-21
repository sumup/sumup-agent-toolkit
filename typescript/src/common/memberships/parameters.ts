import { z } from "zod";

export const listMembershipsParameters = z.object({
  offset: z
    .number()
    .int()
    .optional()
    .describe(`Offset of the first member to return.`),
  limit: z
    .number()
    .int()
    .optional()
    .describe(`Maximum number of members to return.`),
  kind: z
    .string()
    .describe(
      `The type of the membership resource.
Possible values are:
* \`merchant\` - merchant account(s)
* \`organization\` - organization(s)`,
    )
    .optional(),
  status: z
    .enum(["accepted", "pending", "expired", "disabled", "unknown"])
    .describe(`The status of the membership.`)
    .optional(),
  "resource.type": z
    .string()
    .describe(
      `The type of the membership resource.
Possible values are:
* \`merchant\` - merchant account(s)
* \`organization\` - organization(s)`,
    )
    .optional(),
  "resource.attributes.sandbox": z
    .boolean()
    .optional()
    .describe(
      `Filter memberships by the sandbox status of the resource the membership is in.`,
    ),
  "resource.name": z
    .string()
    .optional()
    .describe(
      `Filter memberships by the name of the resource the membership is in.`,
    ),
});
