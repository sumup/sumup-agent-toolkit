import { z } from "zod";

export const getPaymentMethodsParameters = z.object({
  merchantCode: z.string().describe(`The SumUp merchant code.`),
  amount: z
    .number()
    .describe(
      `The amount for which the payment methods should be eligible, in major units. Note that currency must also be provided when filtering by amount.`,
    )
    .optional(),
  currency: z
    .string()
    .describe(`The currency for which the payment methods should be eligible.`)
    .optional(),
});

export const createCheckoutParameters = z
  .object({
    checkout_reference: z
      .string()
      .describe(
        `Unique ID of the payment checkout specified by the client application when creating the checkout resource.`,
      ),
    amount: z.number().describe(`Amount of the payment.`),
    currency: z
      .enum([
        "BGN",
        "BRL",
        "CHF",
        "CLP",
        "CZK",
        "DKK",
        "EUR",
        "GBP",
        "HRK",
        "HUF",
        "NOK",
        "PLN",
        "RON",
        "SEK",
        "USD",
      ])
      .describe(
        `Three-letter [ISO4217](https://en.wikipedia.org/wiki/ISO_4217) code of the currency for the amount. Currently supported currency values are enumerated above.`,
      ),
    merchant_code: z
      .string()
      .describe(`Unique identifying code of the merchant profile.`),
    description: z
      .string()
      .describe(
        `Short description of the checkout visible in the SumUp dashboard. The description can contribute to reporting, allowing easier identification of a checkout.`,
      )
      .optional(),
    return_url: z
      .string()
      .describe(
        `URL to which the SumUp platform sends the processing status of the payment checkout.`,
      )
      .optional(),
    customer_id: z
      .string()
      .describe(
        `Unique identification of a customer. If specified, the checkout session and payment instrument are associated with the referenced customer.`,
      )
      .optional(),
    purpose: z
      .enum(["CHECKOUT", "SETUP_RECURRING_PAYMENT"])
      .describe(`Purpose of the checkout.`)
      .optional(),
    id: z.string().describe(`Unique ID of the checkout resource.`).optional(),
    status: z
      .enum(["PENDING", "FAILED", "PAID"])
      .describe(`Current status of the checkout.`)
      .optional(),
    date: z
      .string()
      .describe(
        `Date and time of the creation of the payment checkout. Response format expressed according to [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) code.`,
      )
      .optional(),
    valid_until: z
      .string()
      .describe(
        `Date and time of the checkout expiration before which the client application needs to send a processing request. If no value is present, the checkout does not have an expiration time.`,
      )
      .optional(),
    transactions: z
      .array(z.any())
      .describe(`List of transactions related to the payment.`)
      .optional(),
    redirect_url: z
      .string()
      .describe(
        `__Required__ for [APMs](https://developer.sumup.com/online-payments/apm/introduction) and __recommended__ for card payments. Refers to a url where the end user is redirected once the payment processing completes. If not specified, the [Payment Widget](https://developer.sumup.com/online-payments/tools/card-widget) renders [3DS challenge](https://developer.sumup.com/online-payments/features/3ds) within an iframe instead of performing a full-page redirect.`,
      )
      .optional(),
  })
  .describe(`Details of the payment checkout.`);

export const listCheckoutsParameters = z.object({
  checkout_reference: z
    .string()
    .describe(
      `Filters the list of checkout resources by the unique ID of the checkout.`,
    )
    .optional(),
});

export const getCheckoutParameters = z.object({
  id: z.string().describe(`Unique ID of the checkout resource.`),
});

export const processCheckoutParameters = z
  .object({
    payment_type: z
      .enum(["card", "boleto", "ideal", "blik", "bancontact"])
      .describe(`Describes the payment method used to attempt processing`),
    installments: z
      .number()
      .int()
      .describe(
        `Number of installments for deferred payments. Available only to merchant users in Brazil.`,
      )
      .optional(),
    mandate: z
      .object({
        type: z.enum(["recurrent"]).describe(`Indicates the mandate type`),
        user_agent: z
          .string()
          .describe(`Operating system and web client used by the end-user`),
        user_ip: z
          .string()
          .describe(`IP address of the end user. Supports IPv4 and IPv6`)
          .optional(),
      })
      .describe(`Mandate is passed when a card is to be tokenized`)
      .optional(),
    card: z
      .object({
        name: z
          .string()
          .describe(
            `Name of the cardholder as it appears on the payment card.`,
          ),
        number: z
          .string()
          .describe(`Number of the payment card (without spaces).`),
        expiry_year: z
          .string()
          .describe(
            `Year from the expiration time of the payment card. Accepted formats are \`YY\` and \`YYYY\`.`,
          ),
        expiry_month: z
          .enum([
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
          ])
          .describe(
            `Month from the expiration time of the payment card. Accepted format is \`MM\`.`,
          ),
        cvv: z
          .string()
          .describe(
            `Three or four-digit card verification value (security code) of the payment card.`,
          ),
        zip_code: z
          .string()
          .describe(
            `Required five-digit ZIP code. Applicable only to merchant users in the USA.`,
          )
          .optional(),
        last_4_digits: z
          .string()
          .describe(`Last 4 digits of the payment card number.`),
        type: z
          .enum([
            "AMEX",
            "CUP",
            "DINERS",
            "DISCOVER",
            "ELO",
            "ELV",
            "HIPERCARD",
            "JCB",
            "MAESTRO",
            "MASTERCARD",
            "VISA",
            "VISA_ELECTRON",
            "VISA_VPAY",
            "UNKNOWN",
          ])
          .describe(`Issuing card network of the payment card.`),
      })
      .describe(
        `__Required when payment type is \`card\`.__ Details of the payment card.`,
      )
      .optional(),
    token: z
      .string()
      .describe(
        `__Required when using a tokenized card to process a checkout.__ Unique token identifying the saved payment card for a customer.`,
      )
      .optional(),
    customer_id: z
      .string()
      .describe(
        `__Required when \`token\` is provided.__ Unique ID of the customer.`,
      )
      .optional(),
    personal_details: z
      .object({
        first_name: z.string().describe(`First name of the customer.`),
        last_name: z.string().describe(`Last name of the customer.`),
        email: z.string().describe(`Email address of the customer.`),
        phone: z.string().describe(`Phone number of the customer.`),
        birth_date: z.string().describe(`Date of birth of the customer.`),
        tax_id: z
          .string()
          .describe(
            `An identification number user for tax purposes (e.g. CPF)`,
          ),
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
    id: z.string().describe(`Unique ID of the checkout resource.`),
  })
  .describe(`Details of the payment instrument for processing the checkout.`);

export const deactivateCheckoutParameters = z.object({
  id: z.string().describe(`Unique ID of the checkout resource.`),
});
