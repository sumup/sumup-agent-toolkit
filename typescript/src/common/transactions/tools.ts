import type SumUp from "@sumup/sdk";
import type z from "zod";
import type { Tool } from "../types";

import {
  getTransactionParameters,
  getTransactionResult,
  getTransactionV2_1Parameters,
  getTransactionV2_1Result,
  listTransactionsParameters,
  listTransactionsResult,
  listTransactionsV2_1Parameters,
  listTransactionsV2_1Result,
  refundTransactionParameters,
  refundTransactionResult,
} from "./parameters";

export const getTransaction: Tool = {
  name: "get_transaction",
  title: `Retrieve a transaction`,
  description: `Retrieves the full details of an identified transaction. The transaction resource is identified by a query parameter and *one* of following parameters is required:

 *  \`id\`
 *  \`internal_id\`
 *  \`transaction_code\`
 *  \`foreign_transaction_id\`
 *  \`client_transaction_id\``,
  parameters: getTransactionParameters,
  result: getTransactionResult,
  callback: async (
    sumup: SumUp,
    args: z.infer<typeof getTransactionParameters>,
  ) => {
    return await sumup.transactions.getDeprecated(args);
  },
  annotations: {
    title: `Retrieve a transaction`,
    readOnly: true,
    destructive: false,
    idempotent: false,
  },
};

export const getTransactionV2_1: Tool = {
  name: "get_transaction_v2_1",
  title: `Retrieve a transaction`,
  description: `Retrieves the full details of an identified transaction. The transaction resource is identified by a query parameter and *one* of following parameters is required:

 *  \`id\`
 *  \`internal_id\`
 *  \`transaction_code\`
 *  \`foreign_transaction_id\`
 *  \`client_transaction_id\``,
  parameters: getTransactionV2_1Parameters,
  result: getTransactionV2_1Result,
  callback: async (
    sumup: SumUp,
    { merchantCode, ...args }: z.infer<typeof getTransactionV2_1Parameters>,
  ) => {
    return await sumup.transactions.get(merchantCode, args);
  },
  annotations: {
    title: `Retrieve a transaction`,
    readOnly: true,
    destructive: false,
    idempotent: false,
  },
};

export const listTransactions: Tool = {
  name: "list_transactions",
  title: `List transactions`,
  description: `Lists detailed history of all transactions associated with the merchant profile.`,
  parameters: listTransactionsParameters,
  result: listTransactionsResult,
  callback: async (
    sumup: SumUp,
    args: z.infer<typeof listTransactionsParameters>,
  ) => {
    return await sumup.transactions.listDeprecated(args);
  },
  annotations: {
    title: `List transactions`,
    readOnly: true,
    destructive: false,
    idempotent: false,
  },
};

export const listTransactionsV2_1: Tool = {
  name: "list_transactions_v2_1",
  title: `List transactions`,
  description: `Lists detailed history of all transactions associated with the merchant profile.`,
  parameters: listTransactionsV2_1Parameters,
  result: listTransactionsV2_1Result,
  callback: async (
    sumup: SumUp,
    { merchantCode, ...args }: z.infer<typeof listTransactionsV2_1Parameters>,
  ) => {
    return await sumup.transactions.list(merchantCode, args);
  },
  annotations: {
    title: `List transactions`,
    readOnly: true,
    destructive: false,
    idempotent: false,
  },
};

export const refundTransaction: Tool = {
  name: "refund_transaction",
  title: `Refund a transaction`,
  description: `Refunds an identified transaction either in full or partially.`,
  parameters: refundTransactionParameters,
  result: refundTransactionResult,
  callback: async (
    sumup: SumUp,
    { txnId, ...args }: z.infer<typeof refundTransactionParameters>,
  ) => {
    return await sumup.transactions.refund(txnId, args);
  },
  annotations: {
    title: `Refund a transaction`,
    readOnly: false,
    destructive: false,
    idempotent: false,
  },
};
