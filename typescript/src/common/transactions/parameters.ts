import { z } from "zod";

export const getTransactionParameters = z.object({
  id: z
    .string()
    .optional()
    .describe(
      `Retrieves the transaction resource with the specified transaction ID (the \`id\` parameter in the transaction resource).`,
    ),
  internal_id: z
    .string()
    .optional()
    .describe(
      `Retrieves the transaction resource with the specified internal transaction ID (the \`internal_id\` parameter in the transaction resource).`,
    ),
  transaction_code: z
    .string()
    .optional()
    .describe(
      `Retrieves the transaction resource with the specified transaction code.`,
    ),
});

export const getTransactionV2_1Parameters = z.object({
  merchantCode: z.string(),
  id: z
    .string()
    .optional()
    .describe(
      `Retrieves the transaction resource with the specified transaction ID (the \`id\` parameter in the transaction resource).`,
    ),
  internal_id: z
    .string()
    .optional()
    .describe(
      `Retrieves the transaction resource with the specified internal transaction ID (the \`internal_id\` parameter in the transaction resource).`,
    ),
  transaction_code: z
    .string()
    .optional()
    .describe(
      `Retrieves the transaction resource with the specified transaction code.`,
    ),
  foreign_transaction_id: z
    .string()
    .optional()
    .describe(`External/foreign transaction id (passed by clients).`),
  client_transaction_id: z
    .string()
    .optional()
    .describe(`Client transaction id.`),
});

export const listTransactionsParameters = z.object({
  transaction_code: z
    .string()
    .optional()
    .describe(
      `Retrieves the transaction resource with the specified transaction code.`,
    ),
  order: z
    .enum(["ascending", "descending"])
    .optional()
    .describe(
      `Specifies the order in which the returned results are displayed.`,
    ),
  limit: z
    .number()
    .int()
    .optional()
    .describe(
      `Specifies the maximum number of results per page. Value must be a positive integer and if not specified, will return 10 results.`,
    ),
  users: z
    .array(z.string())
    .optional()
    .describe(`Filters the returned results by user email.`),
  statuses: z
    .array(
      z.enum(["SUCCESSFUL", "CANCELLED", "FAILED", "REFUNDED", "CHARGE_BACK"]),
    )
    .optional()
    .describe(
      `Filters the returned results by the specified list of final statuses of the transactions.`,
    ),
  payment_types: z
    .array(
      z.enum(["CASH", "POS", "ECOM", "BALANCE", "MOTO", "BOLETO", "UNKNOWN"]),
    )
    .optional()
    .describe(
      `Filters the returned results by the specified list of payment types used for the transactions.`,
    ),
  types: z
    .array(z.enum(["PAYMENT", "REFUND", "CHARGE_BACK"]))
    .optional()
    .describe(
      `Filters the returned results by the specified list of transaction types.`,
    ),
  changes_since: z
    .string()
    .optional()
    .describe(
      `Filters the results by the latest modification time of resources and returns only transactions that are modified *at or after* the specified timestamp (in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) format).`,
    ),
  newest_time: z
    .string()
    .optional()
    .describe(
      `Filters the results by the creation time of resources and returns only transactions that are created *before* the specified timestamp (in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) format).`,
    ),
  newest_ref: z
    .string()
    .optional()
    .describe(
      `Filters the results by the reference ID of transaction events and returns only transactions with events whose IDs are *smaller* than the specified value. This parameters supersedes the \`newest_time\` parameter (if both are provided in the request).`,
    ),
  oldest_time: z
    .string()
    .optional()
    .describe(
      `Filters the results by the creation time of resources and returns only transactions that are created *at or after* the specified timestamp (in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) format).`,
    ),
  oldest_ref: z
    .string()
    .optional()
    .describe(
      `Filters the results by the reference ID of transaction events and returns only transactions with events whose IDs are *greater* than the specified value. This parameters supersedes the \`oldest_time\` parameter (if both are provided in the request).`,
    ),
});

export const listTransactionsV2_1Parameters = z.object({
  merchantCode: z.string(),
  transaction_code: z
    .string()
    .optional()
    .describe(
      `Retrieves the transaction resource with the specified transaction code.`,
    ),
  order: z
    .enum(["ascending", "descending"])
    .optional()
    .describe(
      `Specifies the order in which the returned results are displayed.`,
    ),
  limit: z
    .number()
    .int()
    .optional()
    .describe(
      `Specifies the maximum number of results per page. Value must be a positive integer and if not specified, will return 10 results.`,
    ),
  users: z
    .array(z.string())
    .optional()
    .describe(`Filters the returned results by user email.`),
  statuses: z
    .array(
      z.enum(["SUCCESSFUL", "CANCELLED", "FAILED", "REFUNDED", "CHARGE_BACK"]),
    )
    .optional()
    .describe(
      `Filters the returned results by the specified list of final statuses of the transactions.`,
    ),
  payment_types: z
    .array(
      z.enum(["CASH", "POS", "ECOM", "BALANCE", "MOTO", "BOLETO", "UNKNOWN"]),
    )
    .optional()
    .describe(
      `Filters the returned results by the specified list of payment types used for the transactions.`,
    ),
  types: z
    .array(z.enum(["PAYMENT", "REFUND", "CHARGE_BACK"]))
    .optional()
    .describe(
      `Filters the returned results by the specified list of transaction types.`,
    ),
  changes_since: z
    .string()
    .optional()
    .describe(
      `Filters the results by the latest modification time of resources and returns only transactions that are modified *at or after* the specified timestamp (in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) format).`,
    ),
  newest_time: z
    .string()
    .optional()
    .describe(
      `Filters the results by the creation time of resources and returns only transactions that are created *before* the specified timestamp (in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) format).`,
    ),
  newest_ref: z
    .string()
    .optional()
    .describe(
      `Filters the results by the reference ID of transaction events and returns only transactions with events whose IDs are *smaller* than the specified value. This parameters supersedes the \`newest_time\` parameter (if both are provided in the request).`,
    ),
  oldest_time: z
    .string()
    .optional()
    .describe(
      `Filters the results by the creation time of resources and returns only transactions that are created *at or after* the specified timestamp (in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) format).`,
    ),
  oldest_ref: z
    .string()
    .optional()
    .describe(
      `Filters the results by the reference ID of transaction events and returns only transactions with events whose IDs are *greater* than the specified value. This parameters supersedes the \`oldest_time\` parameter (if both are provided in the request).`,
    ),
});

export const refundTransactionParameters = z
  .object({
    txnId: z.string().describe(`Unique ID of the transaction.`),
    amount: z
      .number()
      .describe(
        `Amount to be refunded. Eligible amount can't exceed the amount of the transaction and varies based on country and currency. If you do not specify a value, the system performs a full refund of the transaction.`,
      )
      .optional(),
  })
  .describe(`Optional amount for partial refunds of transactions.`);
