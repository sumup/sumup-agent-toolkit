import type { Tool } from "../types";

import { getReceiptParameters } from "./parameters";

export const getReceipt: Tool = {
  name: "get_receipt",
  description: `Retrieves receipt specific data for a transaction.`,
  parameters: getReceiptParameters,
  callback: async (sumup, { id, ...args }) => {
    const res = await sumup.receipts.get(id, args);
    return JSON.stringify(res);
  },
};
