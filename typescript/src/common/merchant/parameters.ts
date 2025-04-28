import { z } from "zod";

export const getAccountParameters = z.object({});

export const getPersonalProfileParameters = z.object({});

export const getMerchantProfileParameters = z.object({});

export const getDoingBusinessAsParameters = z.object({});

export const listBankAccountsV11Parameters = z.object({
  merchantCode: z.string(),
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
