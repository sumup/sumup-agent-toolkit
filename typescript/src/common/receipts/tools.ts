import type SumUp from "@sumup/sdk";
import type z from "zod";
import type { Tool } from "../types";

import { getReceiptParameters } from "./parameters";

export const getReceipt: Tool = {
  name: "get_receipt",
  description: `Retrieves receipt specific data for a transaction.`,
  parameters: getReceiptParameters,
  callback: async (
    sumup: SumUp,
    { id, ...args }: z.infer<typeof getReceiptParameters>,
  ) => {
    const res = await sumup.receipts.get(id, args);
    return JSON.stringify(res);
  },
};
