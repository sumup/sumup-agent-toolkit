import { z } from "zod";

export const getReceiptParameters = z.object({
  id: z
    .string()
    .describe(
      `SumUp unique transaction ID or transaction code, e.g. TS7HDYLSKD.`,
    ),
  mid: z.string().describe(`Merchant code.`),
  tx_event_id: z
    .number()
    .int()
    .optional()
    .describe(`The ID of the transaction event (refund).`),
});
