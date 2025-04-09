import type { Tool } from "../types";

import {
  getAccountParameters,
  getDoingBusinessAsParameters,
  getMerchantProfileParameters,
  getPersonalProfileParameters,
  getSettingsParameters,
  listBankAccountsParameters,
  listBankAccountsV11Parameters,
} from "./parameters";

export const getAccount: Tool = {
  name: "get_account",
  description: `Returns user profile information.`,
  parameters: getAccountParameters,
  callback: async (sumup, args) => {
    const res = await sumup.merchant.get(args);
    return JSON.stringify(res);
  },
};

export const getPersonalProfile: Tool = {
  name: "get_personal_profile",
  description: `Retrieves personal profile data.`,
  parameters: getPersonalProfileParameters,
  callback: async (sumup, args) => {
    const res = await sumup.merchant.getPersonalProfile(args);
    return JSON.stringify(res);
  },
};

export const getMerchantProfile: Tool = {
  name: "get_merchant_profile",
  description: `Retrieves merchant profile data.`,
  parameters: getMerchantProfileParameters,
  callback: async (sumup, args) => {
    const res = await sumup.merchant.getMerchantProfile(args);
    return JSON.stringify(res);
  },
};

export const getDoingBusinessAs: Tool = {
  name: "get_doing_business_as",
  description: `Retrieves Doing Business As profile.`,
  parameters: getDoingBusinessAsParameters,
  callback: async (sumup, args) => {
    const res = await sumup.merchant.getDoingBusinessAs(args);
    return JSON.stringify(res);
  },
};

export const listBankAccountsV11: Tool = {
  name: "list_bank_accounts_v11",
  description: `Retrieves bank accounts of the merchant.`,
  parameters: listBankAccountsV11Parameters,
  callback: async (sumup, { merchant_code, ...args }) => {
    const res = await sumup.merchant.listBankAccounts(merchant_code, args);
    return JSON.stringify(res);
  },
};

export const listBankAccounts: Tool = {
  name: "list_bank_accounts",
  description: `Retrieves bank accounts of the merchant.`,
  parameters: listBankAccountsParameters,
  callback: async (sumup, args) => {
    const res = await sumup.merchant.listBankAccountsDeprecated(args);
    return JSON.stringify(res);
  },
};

export const getSettings: Tool = {
  name: "get_settings",
  description: `Retrieves merchant settings.`,
  parameters: getSettingsParameters,
  callback: async (sumup, args) => {
    const res = await sumup.merchant.getSettings(args);
    return JSON.stringify(res);
  },
};
