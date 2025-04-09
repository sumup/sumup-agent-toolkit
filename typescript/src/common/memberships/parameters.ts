import { z } from "zod";

export const listMembershipsParameters = {
  offset: z
    .number()
    .int()
    .describe(`Offset of the first member to return.`)
    .optional(),
  limit: z
    .number()
    .int()
    .describe(`Maximum number of members to return.`)
    .optional(),
  kind: z
    .enum(["merchant"])
    .describe(`Filter memberships by resource kind.`)
    .optional(),
  "resource.attributes.sandbox": z
    .boolean()
    .describe(
      `Filter memberships by the sandbox status of the resource the membership is in.`,
    )
    .optional(),
};
