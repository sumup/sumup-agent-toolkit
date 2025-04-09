import { z } from "zod";

export const getAccountParameters = {
  "include[]": z
    .array(
      z.enum([
        "settings",
        "doing_business_as",
        "bank_accounts",
        "app_settings",
        "country_details",
      ]),
    )
    .describe(
      `A list of additional information you want to receive for the user. By default only personal and merchant profile information will be returned.`,
    )
    .optional(),
};

export const getPersonalProfileParameters = {};

export const getMerchantProfileParameters = {};

export const getDoingBusinessAsParameters = {};

export const listBankAccountsV11Parameters = {
  merchant_code: z.string(),
  primary: z
    .boolean()
    .describe(
      `If true only the primary bank account (the one used for payouts) will be returned.`,
    )
    .optional(),
};

export const listBankAccountsParameters = {
  primary: z
    .boolean()
    .describe(
      `If true only the primary bank account (the one used for payouts) will be returned.`,
    )
    .optional(),
};

export const getSettingsParameters = {};
