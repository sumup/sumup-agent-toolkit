import { z } from "zod";

export const getAccountParameters = z.object({
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
});

export const getPersonalProfileParameters = z.object({});

export const getMerchantProfileParameters = z.object({});

export const getDoingBusinessAsParameters = z.object({});

export const listBankAccountsV11Parameters = z.object({
  merchant_code: z.string(),
  primary: z
    .boolean()
    .describe(
      `If true only the primary bank account (the one used for payouts) will be returned.`,
    )
    .optional(),
});

export const listBankAccountsParameters = z.object({
  primary: z
    .boolean()
    .describe(
      `If true only the primary bank account (the one used for payouts) will be returned.`,
    )
    .optional(),
});

export const getSettingsParameters = z.object({});
