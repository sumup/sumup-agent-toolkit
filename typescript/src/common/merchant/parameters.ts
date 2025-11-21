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
    .optional()
    .describe(
      `A list of additional information you want to receive for the user. By default only personal and merchant profile information will be returned.`,
    ),
});

export const getDoingBusinessAsParameters = z.object({});

export const getMerchantProfileParameters = z.object({});

export const getPersonalProfileParameters = z.object({});
