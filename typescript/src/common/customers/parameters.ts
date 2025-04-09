import { z } from "zod";

export const createCustomerParameters = {
  customer_id: z.string().describe(`Unique ID of the customer.`),
  personal_details: z
    .object({
      first_name: z.string().describe(`First name of the customer.`),
      last_name: z.string().describe(`Last name of the customer.`),
      email: z.string().describe(`Email address of the customer.`),
      phone: z.string().describe(`Phone number of the customer.`),
      birth_date: z.string().describe(`Date of birth of the customer.`),
      tax_id: z
        .string()
        .describe(`An identification number user for tax purposes (e.g. CPF)`),
      address: z
        .object({
          city: z.string().describe(`City name from the address.`),
          country: z
            .string()
            .describe(
              `Two letter country code formatted according to [ISO3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).`,
            ),
          line_1: z
            .string()
            .describe(
              `First line of the address with details of the street name and number.`,
            ),
          line_2: z
            .string()
            .describe(
              `Second line of the address with details of the building, unit, apartment, and floor numbers.`,
            ),
          postal_code: z.string().describe(`Postal code from the address.`),
          state: z
            .string()
            .describe(`State name or abbreviation from the address.`),
        })
        .describe(`Profile's personal address information.`),
    })
    .describe(`Personal details for the customer.`)
    .optional(),
};

export const getCustomerParameters = {
  customer_id: z.string().describe(`Unique ID of the saved customer resource.`),
};

export const updateCustomerParameters = {
  personal_details: z
    .object({
      first_name: z.string().describe(`First name of the customer.`),
      last_name: z.string().describe(`Last name of the customer.`),
      email: z.string().describe(`Email address of the customer.`),
      phone: z.string().describe(`Phone number of the customer.`),
      birth_date: z.string().describe(`Date of birth of the customer.`),
      tax_id: z
        .string()
        .describe(`An identification number user for tax purposes (e.g. CPF)`),
      address: z
        .object({
          city: z.string().describe(`City name from the address.`),
          country: z
            .string()
            .describe(
              `Two letter country code formatted according to [ISO3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).`,
            ),
          line_1: z
            .string()
            .describe(
              `First line of the address with details of the street name and number.`,
            ),
          line_2: z
            .string()
            .describe(
              `Second line of the address with details of the building, unit, apartment, and floor numbers.`,
            ),
          postal_code: z.string().describe(`Postal code from the address.`),
          state: z
            .string()
            .describe(`State name or abbreviation from the address.`),
        })
        .describe(`Profile's personal address information.`),
    })
    .describe(`Personal details for the customer.`)
    .optional(),
  customer_id: z.string().describe(`Unique ID of the saved customer resource.`),
};

export const listPaymentInstrumentsParameters = {
  customer_id: z.string().describe(`Unique ID of the saved customer resource.`),
};

export const deactivatePaymentInstrumentParameters = {
  customer_id: z.string().describe(`Unique ID of the saved customer resource.`),
  token: z
    .string()
    .describe(
      `Unique token identifying the card saved as a payment instrument resource.`,
    ),
};
