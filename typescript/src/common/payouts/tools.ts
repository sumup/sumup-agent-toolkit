import type SumUp from "@sumup/sdk";
import type { ToolDefinition } from "../types";

import {
  listPayoutsParameters,
  listPayoutsResult,
  listPayoutsV1Parameters,
  listPayoutsV1Result,
} from "./parameters";

export const listPayouts: ToolDefinition<
  typeof listPayoutsParameters,
  typeof listPayoutsResult
> = {
  name: "list_payouts",
  title: `List payouts`,
  description: `Lists ordered payouts for the merchant profile.`,
  parameters: listPayoutsParameters,
  result: listPayoutsResult,
  callback: async (sumup: SumUp, args) => {
    return await sumup.payouts.listDeprecated(args);
  },
  annotations: {
    title: `List payouts`,
    readOnly: true,
    destructive: false,
    idempotent: false,
  },
};

export const listPayoutsV1: ToolDefinition<
  typeof listPayoutsV1Parameters,
  typeof listPayoutsV1Result
> = {
  name: "list_payouts_v1",
  title: `List payouts`,
  description: `Lists ordered payouts for the merchant profile.`,
  parameters: listPayoutsV1Parameters,
  result: listPayoutsV1Result,
  callback: async (sumup: SumUp, { merchantCode, ...args }) => {
    return await sumup.payouts.list(merchantCode, args);
  },
  annotations: {
    title: `List payouts`,
    readOnly: true,
    destructive: false,
    idempotent: false,
  },
};
