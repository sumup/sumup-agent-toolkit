import { z } from "zod";

export const listSubAccountsParameters = z.object({
  query: z
    .string()
    .describe(`Search query used to filter users that match given query term.

Current implementation allow querying only over the email address.
All operators whos email address contains the query string are returned.
`)
    .optional(),
  include_primary: z
    .boolean()
    .describe(
      `If true the list of operators will include also the primary user.`,
    )
    .optional(),
});

export const createSubAccountParameters = z.object({
  username: z.string(),
  password: z.string(),
  nickname: z.string().optional(),
  permissions: z
    .object({
      create_moto_payments: z.boolean(),
      create_referral: z.boolean(),
      full_transaction_history_view: z.boolean(),
      refund_transactions: z.boolean(),
    })
    .optional(),
});

export const compatGetOperatorParameters = z.object({
  operator_id: z.number().int(),
});

export const updateSubAccountParameters = z.object({
  password: z.string().optional(),
  username: z.string().optional(),
  disabled: z.boolean().optional(),
  nickname: z.string().optional(),
  permissions: z
    .object({
      create_moto_payments: z.boolean(),
      create_referral: z.boolean(),
      full_transaction_history_view: z.boolean(),
      refund_transactions: z.boolean(),
    })
    .optional(),
  operator_id: z.number().int(),
});

export const deactivateSubAccountParameters = z.object({
  operator_id: z.number().int(),
});
