import type SumUp from "@sumup/sdk";
import type z from "zod";
import type { Tool } from "../types";

import {
  getTransactionParameters,
  getTransactionV2_1Parameters,
  listTransactionsParameters,
  listTransactionsV2_1Parameters,
  refundTransactionParameters,
} from "./parameters";

export const refundTransaction: Tool = {
  name: "refund_transaction",
  description: `Refunds an identified transaction either in full or partially.`,
  parameters: refundTransactionParameters,
  callback: async (
    sumup: SumUp,
    { txn_id, ...args }: z.infer<typeof refundTransactionParameters>,
  ) => {
    const res = await sumup.transactions.refund(txn_id, args);
    return JSON.stringify(res);
  },
};

export const getTransactionV2_1: Tool = {
  name: "get_transaction_v2_1",
  description: `Retrieves the full details of an identified transaction. The transaction resource is identified by a query parameter and *one* of following parameters is required:

 *  \`id\`
 *  \`internal_id\`
 *  \`transaction_code\`
 *  \`foreign_transaction_id\`
 *  \`client_transaction_id\`
`,
  parameters: getTransactionV2_1Parameters,
  callback: async (
    sumup: SumUp,
    { merchant_code, ...args }: z.infer<typeof getTransactionV2_1Parameters>,
  ) => {
    const res = await sumup.transactions.get(merchant_code, args);
    return JSON.stringify(res);
  },
};

export const getTransaction: Tool = {
  name: "get_transaction",
  description: `Retrieves the full details of an identified transaction. The transaction resource is identified by a query parameter and *one* of following parameters is required:

 *  \`id\`
 *  \`internal_id\`
 *  \`transaction_code\`
 *  \`foreign_transaction_id\`
 *  \`client_transaction_id\`
`,
  parameters: getTransactionParameters,
  callback: async (
    sumup: SumUp,
    args: z.infer<typeof getTransactionParameters>,
  ) => {
    const res = await sumup.transactions.getDeprecated(args);
    return JSON.stringify(res);
  },
};

export const listTransactionsV2_1: Tool = {
  name: "list_transactions_v2_1",
  description: `Lists detailed history of all transactions associated with the merchant profile.`,
  parameters: listTransactionsV2_1Parameters,
  callback: async (
    sumup: SumUp,
    { merchant_code, ...args }: z.infer<typeof listTransactionsV2_1Parameters>,
  ) => {
    const res = await sumup.transactions.list(merchant_code, args);
    return JSON.stringify(res);
  },
};

export const listTransactions: Tool = {
  name: "list_transactions",
  description: `Lists detailed history of all transactions associated with the merchant profile.`,
  parameters: listTransactionsParameters,
  callback: async (
    sumup: SumUp,
    args: z.infer<typeof listTransactionsParameters>,
  ) => {
    const res = await sumup.transactions.listDeprecated(args);
    return JSON.stringify(res);
  },
};
