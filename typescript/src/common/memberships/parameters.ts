import { z } from "zod";

export const listMembershipsParameters = z.object({
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
});
