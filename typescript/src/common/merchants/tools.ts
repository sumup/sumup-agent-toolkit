import type SumUp from "@sumup/sdk";
import type z from "zod";
import type { Tool } from "../types";

import {
  getMerchantParameters,
  getMerchantResult,
  getPersonParameters,
  getPersonResult,
  listPersonsParameters,
  listPersonsResult,
} from "./parameters";

export const getMerchant: Tool = {
  name: "get_merchant",
  title: `Retrieve a Merchant`,
  description: `Retrieve a merchant.`,
  parameters: getMerchantParameters,
  result: getMerchantResult,
  callback: async (
    sumup: SumUp,
    { merchantCode, ...args }: z.infer<typeof getMerchantParameters>,
  ) => {
    return await sumup.merchants.get(merchantCode, args);
  },
  annotations: {
    title: `Retrieve a Merchant`,
    readOnly: true,
    destructive: false,
    idempotent: false,
  },
};

export const getPerson: Tool = {
  name: "get_person",
  title: `Retrieve a Person`,
  description: `Returns a single person related to the merchant.`,
  parameters: getPersonParameters,
  result: getPersonResult,
  callback: async (
    sumup: SumUp,
    { merchantCode, personId, ...args }: z.infer<typeof getPersonParameters>,
  ) => {
    return await sumup.merchants.getPerson(merchantCode, personId, args);
  },
  annotations: {
    title: `Retrieve a Person`,
    readOnly: true,
    destructive: false,
    idempotent: false,
  },
};

export const listPersons: Tool = {
  name: "list_persons",
  title: `List Persons`,
  description: `Returns a list of persons related to the merchant.`,
  parameters: listPersonsParameters,
  result: listPersonsResult,
  callback: async (
    sumup: SumUp,
    { merchantCode, ...args }: z.infer<typeof listPersonsParameters>,
  ) => {
    return await sumup.merchants.listPersons(merchantCode, args);
  },
  annotations: {
    title: `List Persons`,
    readOnly: true,
    destructive: false,
    idempotent: false,
  },
};
