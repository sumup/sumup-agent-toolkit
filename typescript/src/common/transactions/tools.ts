import type SumUp from "@sumup/sdk";
import type { ToolDefinition } from "../types";

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

export const getTransaction: ToolDefinition<
  typeof getTransactionParameters,
  typeof getTransactionResult
> = {
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
  callback: async (sumup: SumUp, args) => {
    return await sumup.transactions.getDeprecated(args);
  },
  annotations: {
    title: `Retrieve a transaction`,
    readOnly: true,
    destructive: false,
    idempotent: false,
  },
};

export const getTransactionV2_1: ToolDefinition<
  typeof getTransactionV2_1Parameters,
  typeof getTransactionV2_1Result
> = {
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
  callback: async (sumup: SumUp, { merchantCode, ...args }) => {
    return await sumup.transactions.get(merchantCode, args);
  },
  annotations: {
    title: `Retrieve a transaction`,
    readOnly: true,
    destructive: false,
    idempotent: false,
  },
};

export const listTransactions: ToolDefinition<
  typeof listTransactionsParameters,
  typeof listTransactionsResult
> = {
  name: "list_transactions",
  title: `List transactions`,
  description: `Lists detailed history of all transactions associated with the merchant profile.`,
  parameters: listTransactionsParameters,
  result: listTransactionsResult,
  callback: async (sumup: SumUp, args) => {
    return await sumup.transactions.listDeprecated(args);
  },
  annotations: {
    title: `List transactions`,
    readOnly: true,
    destructive: false,
    idempotent: false,
  },
};

export const listTransactionsV2_1: ToolDefinition<
  typeof listTransactionsV2_1Parameters,
  typeof listTransactionsV2_1Result
> = {
  name: "list_transactions_v2_1",
  title: `List transactions`,
  description: `Lists detailed history of all transactions associated with the merchant profile.`,
  parameters: listTransactionsV2_1Parameters,
  result: listTransactionsV2_1Result,
  callback: async (sumup: SumUp, { merchantCode, ...args }) => {
    return await sumup.transactions.list(merchantCode, args);
  },
  annotations: {
    title: `List transactions`,
    readOnly: true,
    destructive: false,
    idempotent: false,
  },
};

export const refundTransaction: ToolDefinition<
  typeof refundTransactionParameters,
  typeof refundTransactionResult
> = {
  name: "refund_transaction",
  title: `Refund a transaction`,
  description: `Refunds an identified transaction either in full or partially.`,
  parameters: refundTransactionParameters,
  result: refundTransactionResult,
  callback: async (sumup: SumUp, { txnId, ...args }) => {
    return await sumup.transactions.refund(txnId, args);
  },
  annotations: {
    title: `Refund a transaction`,
    readOnly: false,
    destructive: false,
    idempotent: false,
  },
};
