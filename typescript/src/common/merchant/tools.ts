import type SumUp from "@sumup/sdk";
import type z from "zod";
import type { Tool } from "../types";
import {
  getAccountParameters,
  getAccountResult,
  getDoingBusinessAsParameters,
  getDoingBusinessAsResult,
  getMerchantProfileParameters,
  getMerchantProfileResult,
  getPersonalProfileParameters,
  getPersonalProfileResult,
} from "./parameters";

export const getAccount: Tool<
  typeof getAccountParameters,
  typeof getAccountResult
> = {
  name: "get_account",
  title: `Retrieve a profile`,
  description: `Returns user profile information.`,
  parameters: getAccountParameters,
  result: getAccountResult,
  callback: async (
    sumup: SumUp,
    args: z.infer<typeof getAccountParameters>,
  ) => {
    return await sumup.merchant.get(args);
  },
  annotations: {
    title: `Retrieve a profile`,
    readOnly: true,
    destructive: false,
    idempotent: false,
  },
};

export const getDoingBusinessAs: Tool<
  typeof getDoingBusinessAsParameters,
  typeof getDoingBusinessAsResult
> = {
  name: "get_doing_business_as",
  title: `Retrieve DBA`,
  description: `Retrieves Doing Business As profile.`,
  parameters: getDoingBusinessAsParameters,
  result: getDoingBusinessAsResult,
  callback: async (sumup: SumUp, args) => {
    return await sumup.merchant.getDoingBusinessAs(args);
  },
  annotations: {
    title: `Retrieve DBA`,
    readOnly: true,
    destructive: false,
    idempotent: false,
  },
};

export const getMerchantProfile: Tool<
  typeof getMerchantProfileParameters,
  typeof getMerchantProfileResult
> = {
  name: "get_merchant_profile",
  title: `Retrieve a merchant profile`,
  description: `Retrieves merchant profile data.`,
  parameters: getMerchantProfileParameters,
  result: getMerchantProfileResult,
  callback: async (sumup: SumUp, args) => {
    return await sumup.merchant.getMerchantProfile(args);
  },
  annotations: {
    title: `Retrieve a merchant profile`,
    readOnly: true,
    destructive: false,
    idempotent: false,
  },
};

export const getPersonalProfile: Tool<
  typeof getPersonalProfileParameters,
  typeof getPersonalProfileResult
> = {
  name: "get_personal_profile",
  title: `Retrieve a personal profile`,
  description: `Retrieves personal profile data.`,
  parameters: getPersonalProfileParameters,
  result: getPersonalProfileResult,
  callback: async (sumup: SumUp, args) => {
    return await sumup.merchant.getPersonalProfile(args);
  },
  annotations: {
    title: `Retrieve a personal profile`,
    readOnly: true,
    destructive: false,
    idempotent: false,
  },
};
