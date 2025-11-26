import { z } from "zod";

export const compatGetOperatorParameters = z.object({
  operatorId: z
    .number()
    .int()
    .describe(`The unique identifier for the operator.`),
});

export const compatGetOperatorResult = z
  .object({
    id: z.number().int(),
    username: z.string(),
    nickname: z.string().nullable().optional(),
    disabled: z.boolean(),
    created_at: z
      .string()
      .describe(`The timestamp of when the operator was created.`),
    updated_at: z
      .string()
      .describe(`The timestamp of when the operator was last updated.`),
    permissions: z
      .object({
        create_moto_payments: z.boolean(),
        create_referral: z.boolean(),
        full_transaction_history_view: z.boolean(),
        refund_transactions: z.boolean(),
        admin: z.boolean(),
      })
      .describe(`Permissions assigned to an operator or user.`),
    account_type: z.enum(["operator", "normal"]),
  })
  .passthrough()
  .describe(`Operator account for a merchant.`);

export const createSubAccountParameters = z.object({
  username: z.string(),
  password: z.string().min(8),
  nickname: z.string().optional(),
  permissions: z
    .object({
      create_moto_payments: z.boolean().optional(),
      create_referral: z.boolean().optional(),
      full_transaction_history_view: z.boolean().optional(),
      refund_transactions: z.boolean().optional(),
    })
    .optional(),
});

export const createSubAccountResult = z
  .object({
    id: z.number().int(),
    username: z.string(),
    nickname: z.string().nullable().optional(),
    disabled: z.boolean(),
    created_at: z
      .string()
      .describe(`The timestamp of when the operator was created.`),
    updated_at: z
      .string()
      .describe(`The timestamp of when the operator was last updated.`),
    permissions: z
      .object({
        create_moto_payments: z.boolean(),
        create_referral: z.boolean(),
        full_transaction_history_view: z.boolean(),
        refund_transactions: z.boolean(),
        admin: z.boolean(),
      })
      .describe(`Permissions assigned to an operator or user.`),
    account_type: z.enum(["operator", "normal"]),
  })
  .passthrough()
  .describe(`Operator account for a merchant.`);

export const deactivateSubAccountParameters = z.object({
  operatorId: z
    .number()
    .int()
    .describe(`The unique identifier for the operator.`),
});

export const deactivateSubAccountResult = z
  .object({
    id: z.number().int(),
    username: z.string(),
    nickname: z.string().nullable().optional(),
    disabled: z.boolean(),
    created_at: z
      .string()
      .describe(`The timestamp of when the operator was created.`),
    updated_at: z
      .string()
      .describe(`The timestamp of when the operator was last updated.`),
    permissions: z
      .object({
        create_moto_payments: z.boolean(),
        create_referral: z.boolean(),
        full_transaction_history_view: z.boolean(),
        refund_transactions: z.boolean(),
        admin: z.boolean(),
      })
      .describe(`Permissions assigned to an operator or user.`),
    account_type: z.enum(["operator", "normal"]),
  })
  .passthrough()
  .describe(`Operator account for a merchant.`);

export const listSubAccountsParameters = z.object({
  query: z
    .string()
    .optional()
    .describe(`Search query used to filter users that match given query term.

Current implementation allow querying only over the email address.
All operators whos email address contains the query string are returned.`),
  include_primary: z
    .boolean()
    .optional()
    .describe(
      `If true the list of operators will include also the primary user.`,
    ),
});

export const listSubAccountsResult = z
  .array(
    z
      .object({
        id: z.number().int(),
        username: z.string(),
        nickname: z.string().nullable().optional(),
        disabled: z.boolean(),
        created_at: z
          .string()
          .describe(`The timestamp of when the operator was created.`),
        updated_at: z
          .string()
          .describe(`The timestamp of when the operator was last updated.`),
        permissions: z
          .object({
            create_moto_payments: z.boolean(),
            create_referral: z.boolean(),
            full_transaction_history_view: z.boolean(),
            refund_transactions: z.boolean(),
            admin: z.boolean(),
          })
          .describe(`Permissions assigned to an operator or user.`),
        account_type: z.enum(["operator", "normal"]),
      })
      .describe(`Operator account for a merchant.`),
  )
  .describe(`List of operators.`);

export const updateSubAccountParameters = z.object({
  operatorId: z
    .number()
    .int()
    .describe(`The unique identifier for the operator.`),
  password: z.string().min(8).optional(),
  username: z.string().max(256).optional(),
  disabled: z.boolean().optional(),
  nickname: z.string().optional(),
  permissions: z
    .object({
      create_moto_payments: z.boolean().optional(),
      create_referral: z.boolean().optional(),
      full_transaction_history_view: z.boolean().optional(),
      refund_transactions: z.boolean().optional(),
    })
    .optional(),
});

export const updateSubAccountResult = z
  .object({
    id: z.number().int(),
    username: z.string(),
    nickname: z.string().nullable().optional(),
    disabled: z.boolean(),
    created_at: z
      .string()
      .describe(`The timestamp of when the operator was created.`),
    updated_at: z
      .string()
      .describe(`The timestamp of when the operator was last updated.`),
    permissions: z
      .object({
        create_moto_payments: z.boolean(),
        create_referral: z.boolean(),
        full_transaction_history_view: z.boolean(),
        refund_transactions: z.boolean(),
        admin: z.boolean(),
      })
      .describe(`Permissions assigned to an operator or user.`),
    account_type: z.enum(["operator", "normal"]),
  })
  .passthrough()
  .describe(`Operator account for a merchant.`);
