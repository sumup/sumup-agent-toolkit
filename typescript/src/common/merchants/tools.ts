import type SumUp from "@sumup/sdk";
import type z from "zod";
import type { Tool } from "../types";

import {
  getMerchantParameters,
  getPersonParameters,
  listPersonsParameters,
} from "./parameters";

export const getMerchant: Tool = {
  name: "get_merchant",
  description: `Retrieve a merchant.`,
  parameters: getMerchantParameters,
  callback: async (
    sumup: SumUp,
    { merchantCode, ...args }: z.infer<typeof getMerchantParameters>,
  ) => {
    const res = await sumup.merchants.get(merchantCode, args);
    return JSON.stringify(res);
  },
};

export const listPersons: Tool = {
  name: "list_persons",
  description: `Returns a list of persons related to the merchant.`,
  parameters: listPersonsParameters,
  callback: async (
    sumup: SumUp,
    { merchantCode, ...args }: z.infer<typeof listPersonsParameters>,
  ) => {
    const res = await sumup.merchants.listPersons(merchantCode, args);
    return JSON.stringify(res);
  },
};

export const getPerson: Tool = {
  name: "get_person",
  description: `Returns a single person related to the merchant.`,
  parameters: getPersonParameters,
  callback: async (
    sumup: SumUp,
    { merchantCode, personId, ...args }: z.infer<typeof getPersonParameters>,
  ) => {
    const res = await sumup.merchants.getPerson(merchantCode, personId, args);
    return JSON.stringify(res);
  },
};
