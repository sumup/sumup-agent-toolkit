import { z } from "zod";

export const listPayoutsParameters = z.object({
  start_date: z
    .string()
    .describe(
      `Start date (in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) format).`,
    ),
  end_date: z
    .string()
    .describe(
      `End date (in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) format).`,
    ),
  format: z.enum(["json", "csv"]).optional(),
  limit: z.number().int().optional(),
  order: z.enum(["desc", "asc"]).optional(),
});

export const listPayoutsV1Parameters = z.object({
  merchantCode: z.string(),
  start_date: z
    .string()
    .describe(
      `Start date (in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) format).`,
    ),
  end_date: z
    .string()
    .describe(
      `End date (in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) format).`,
    ),
  format: z.enum(["json", "csv"]).optional(),
  limit: z.number().int().optional(),
  order: z.enum(["desc", "asc"]).optional(),
});
