import { z } from "zod";

export const createCustomerParameters = z.object({
  customer_id: z.string().describe(`Unique ID of the customer.`),
  personal_details: z
    .object({
      first_name: z.string().describe(`First name of the customer.`).optional(),
      last_name: z.string().describe(`Last name of the customer.`).optional(),
      email: z.string().describe(`Email address of the customer.`).optional(),
      phone: z.string().describe(`Phone number of the customer.`).optional(),
      birth_date: z
        .string()
        .describe(`Date of birth of the customer.`)
        .optional(),
      tax_id: z
        .string()
        .max(255)
        .describe(`An identification number user for tax purposes (e.g. CPF)`)
        .optional(),
      address: z
        .object({
          city: z.string().describe(`City name from the address.`).optional(),
          country: z
            .string()
            .describe(
              `Two letter country code formatted according to [ISO3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).`,
            )
            .optional(),
          line_1: z
            .string()
            .describe(
              `First line of the address with details of the street name and number.`,
            )
            .optional(),
          line_2: z
            .string()
            .describe(
              `Second line of the address with details of the building, unit, apartment, and floor numbers.`,
            )
            .optional(),
          postal_code: z
            .string()
            .describe(`Postal code from the address.`)
            .optional(),
          state: z
            .string()
            .describe(`State name or abbreviation from the address.`)
            .optional(),
        })
        .describe(`Profile's personal address information.`)
        .optional(),
    })
    .describe(`Personal details for the customer.`)
    .optional(),
});

export const deactivatePaymentInstrumentParameters = z.object({
  customerId: z.string().describe(`Unique ID of the saved customer resource.`),
  token: z
    .string()
    .describe(
      `Unique token identifying the card saved as a payment instrument resource.`,
    ),
});

export const getCustomerParameters = z.object({
  customerId: z.string().describe(`Unique ID of the saved customer resource.`),
});

export const listPaymentInstrumentsParameters = z.object({
  customerId: z.string().describe(`Unique ID of the saved customer resource.`),
});

export const updateCustomerParameters = z.object({
  customerId: z.string().describe(`Unique ID of the saved customer resource.`),
  personal_details: z
    .object({
      first_name: z.string().describe(`First name of the customer.`).optional(),
      last_name: z.string().describe(`Last name of the customer.`).optional(),
      email: z.string().describe(`Email address of the customer.`).optional(),
      phone: z.string().describe(`Phone number of the customer.`).optional(),
      birth_date: z
        .string()
        .describe(`Date of birth of the customer.`)
        .optional(),
      tax_id: z
        .string()
        .max(255)
        .describe(`An identification number user for tax purposes (e.g. CPF)`)
        .optional(),
      address: z
        .object({
          city: z.string().describe(`City name from the address.`).optional(),
          country: z
            .string()
            .describe(
              `Two letter country code formatted according to [ISO3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).`,
            )
            .optional(),
          line_1: z
            .string()
            .describe(
              `First line of the address with details of the street name and number.`,
            )
            .optional(),
          line_2: z
            .string()
            .describe(
              `Second line of the address with details of the building, unit, apartment, and floor numbers.`,
            )
            .optional(),
          postal_code: z
            .string()
            .describe(`Postal code from the address.`)
            .optional(),
          state: z
            .string()
            .describe(`State name or abbreviation from the address.`)
            .optional(),
        })
        .describe(`Profile's personal address information.`)
        .optional(),
    })
    .describe(`Personal details for the customer.`)
    .optional(),
});
