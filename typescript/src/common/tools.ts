import type SumUp from "@sumup/sdk";
import { ZodArray, type ZodTypeAny } from "zod";
import { type ZodObject, type ZodRawShape, z } from "zod";

export interface Action<TActionSchema extends z.ZodSchema = z.ZodSchema> {
  name: string;
  description: string;
  schema: TActionSchema;
  invoke: (sumup: SumUp, args: z.infer<TActionSchema>) => Promise<string>;
}

type ToolCallback<Args extends ZodRawShape = ZodRawShape> = (
  sumup: SumUp,
  args: z.objectOutputType<Args, ZodTypeAny>,
) => Promise<string>;

type Tool<Args extends ZodRawShape = ZodRawShape> = {
  name: string;
  description: string;
  parameters: Args;
  callback: ToolCallback<Args>;
};

export const retrieveCheckoutParams = {
  checkout_id: z.string(),
};

const retrieveCheckout: Tool = {
  name: "retrieve_checkout",
  description: "Retrieve details of a specific checkout using its ID.",
  parameters: retrieveCheckoutParams,
  callback: async (sumup, args) => {
    const checkout = await sumup.checkouts.get(args.checkout_id);
    return `Checkout Details: ${JSON.stringify(checkout)}`;
  },
};

const listTransactionsParams = {
  merchant_code: z.string(),
  limit: z.number().optional(),
};

const listTransactions: Tool = {
  name: "list_transactions",
  description: "Retrieve a list of transactions within a specified date range.",
  parameters: listTransactionsParams,
  callback: async (sumup, args) => {
    const transactions = await sumup.transactions.list(args.merchant_code, {
      limit: args.limit,
    });
    return `Transactions: ${JSON.stringify(transactions)}`;
  },
};

const createRefundParams = {
  transaction_id: z.string(),
  amount: z.number().optional(),
};

const createRefund: Tool = {
  name: "create_refunds",
  description: "Initiate a refund for a specific transaction.",
  parameters: createRefundParams,
  callback: async (sumup, args) => {
    const refund = await sumup.transactions.refund(args.transaction_id, {
      amount: args.amount,
    });
    return `Refund Details: ${JSON.stringify(refund)}`;
  },
};

const retrieveMerchantProfileParams = {} satisfies ZodRawShape;

const retrieveMerchantProfile: Tool = {
  name: "retrieve_merchant_profile",
  description: "Get details of the authenticated merchant's profile.",
  parameters: retrieveMerchantProfileParams,
  callback: async (sumup) => {
    const profile = await sumup.merchant.get();
    return `Merchant Profile: ${JSON.stringify(profile)}`;
  },
};

const tools = [
  retrieveCheckout,
  listTransactions,
  createRefund,
  retrieveMerchantProfile,
];

export { tools };
