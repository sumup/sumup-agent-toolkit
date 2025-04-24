import { z } from "zod";

export const listPayoutsV1Parameters = z.object({
  merchantCode: z.string(),
  startDate: z
    .string()
    .describe(
      `Start date (in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) format).`,
    ),
  endDate: z
    .string()
    .describe(
      `End date (in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) format).`,
    ),
  format: z.enum(["json", "csv"]).optional(),
  limit: z.number().int().optional(),
  order: z.enum(["desc", "asc"]).optional(),
});

export const listPayoutsParameters = z.object({
  startDate: z
    .string()
    .describe(
      `Start date (in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) format).`,
    ),
  endDate: z
    .string()
    .describe(
      `End date (in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) format).`,
    ),
  format: z.enum(["json", "csv"]).optional(),
  limit: z.number().int().optional(),
  order: z.enum(["desc", "asc"]).optional(),
});
