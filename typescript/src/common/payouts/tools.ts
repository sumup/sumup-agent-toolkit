import type SumUp from "@sumup/sdk";
import type z from "zod";
import type { Tool } from "../types";

import { listPayoutsParameters, listPayoutsV1Parameters } from "./parameters";

export const listPayoutsV1: Tool = {
  name: "list_payouts_v1",
  description: `Lists ordered payouts for the merchant profile.`,
  parameters: listPayoutsV1Parameters,
  callback: async (
    sumup: SumUp,
    { merchant_code, ...args }: z.infer<typeof listPayoutsV1Parameters>,
  ) => {
    const res = await sumup.payouts.list(merchant_code, args);
    return JSON.stringify(res);
  },
};

export const listPayouts: Tool = {
  name: "list_payouts",
  description: `Lists ordered payouts for the merchant profile.`,
  parameters: listPayoutsParameters,
  callback: async (
    sumup: SumUp,
    args: z.infer<typeof listPayoutsParameters>,
  ) => {
    const res = await sumup.payouts.listDeprecated(args);
    return JSON.stringify(res);
  },
};
