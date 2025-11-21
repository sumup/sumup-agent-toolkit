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

export const getAccountResult = z
  .object({
    account: z
      .object({
        username: z
          .string()
          .describe(`Username of the user profile.`)
          .optional(),
        type: z
          .enum(["normal", "operator"])
          .describe(`The role of the user.`)
          .optional(),
      })
      .describe(`Profile information.`)
      .optional(),
    personal_profile: z
      .object({
        first_name: z.string().describe(`First name of the user`).optional(),
        last_name: z.string().describe(`Last name of the user`).optional(),
        date_of_birth: z.string().describe(`Date of birth`).optional(),
        mobile_phone: z.string().describe(`Mobile phone number`).optional(),
        address: z
          .object({
            address_line1: z.string().describe(`Address line 1`).optional(),
            address_line2: z.string().describe(`Address line 2`).optional(),
            city: z.string().describe(`City`).optional(),
            country: z.string().describe(`Country ISO 3166-1 code`).optional(),
            region_id: z.number().describe(`Country region id`).optional(),
            region_name: z.string().describe(`Region name`).optional(),
            region_code: z.string().describe(`Region code`).optional(),
            post_code: z.string().describe(`Postal code`).optional(),
            landline: z.string().describe(`Landline number`).optional(),
            first_name: z.string().describe(`undefined`).optional(),
            last_name: z.string().describe(`undefined`).optional(),
            company: z.string().describe(`undefined`).optional(),
            country_details: z
              .object({
                currency: z
                  .string()
                  .describe(`Currency ISO 4217 code`)
                  .optional(),
                iso_code: z.string().describe(`Country ISO code`).optional(),
                en_name: z.string().describe(`Country EN name`).optional(),
                native_name: z
                  .string()
                  .describe(`Country native name`)
                  .optional(),
              })
              .describe(`Country Details`)
              .optional(),
            timeoffset_details: z
              .object({
                post_code: z.string().describe(`Postal code`).optional(),
                offset: z.number().describe(`UTC offset`).optional(),
                dst: z.boolean().describe(`Daylight Saving Time`).optional(),
              })
              .describe(`TimeOffset Details`)
              .optional(),
            state_id: z.string().describe(`undefined`).optional(),
          })
          .describe(`Details of the registered address.`)
          .optional(),
        complete: z.boolean().optional(),
      })
      .describe(`Account's personal profile.`)
      .optional(),
    merchant_profile: z
      .object({
        merchant_code: z
          .string()
          .describe(`Unique identifying code of the merchant profile`)
          .optional(),
        company_name: z.string().describe(`Company name`).optional(),
        website: z.string().describe(`Website`).optional(),
        legal_type: z
          .object({
            id: z.number().describe(`Unique id`).optional(),
            full_description: z
              .string()
              .describe(`Legal type description`)
              .optional(),
            description: z
              .string()
              .describe(`Legal type short description`)
              .optional(),
            sole_trader: z
              .boolean()
              .describe(`Sole trader legal type if true`)
              .optional(),
          })
          .describe(`Id of the legal type of the merchant profile`)
          .optional(),
        merchant_category_code: z
          .string()
          .describe(`Merchant category code`)
          .optional(),
        mobile_phone: z.string().describe(`Mobile phone number`).optional(),
        company_registration_number: z
          .string()
          .describe(`Company registration number`)
          .optional(),
        vat_id: z.string().describe(`Vat ID`).optional(),
        permanent_certificate_access_code: z
          .string()
          .describe(`Permanent certificate access code &#40;Portugal&#41;`)
          .optional(),
        nature_and_purpose: z
          .string()
          .describe(`Nature and purpose of the business`)
          .optional(),
        address: z
          .object({
            address_line1: z.string().describe(`Address line 1`).optional(),
            address_line2: z.string().describe(`Address line 2`).optional(),
            city: z.string().describe(`City`).optional(),
            country: z.string().describe(`Country ISO 3166-1 code`).optional(),
            region_id: z.number().describe(`Country region id`).optional(),
            region_name: z.string().describe(`Region name`).optional(),
            region_code: z.string().describe(`Region code`).optional(),
            post_code: z.string().describe(`Postal code`).optional(),
            landline: z.string().describe(`Landline number`).optional(),
            first_name: z.string().describe(`undefined`).optional(),
            last_name: z.string().describe(`undefined`).optional(),
            company: z.string().describe(`undefined`).optional(),
            country_details: z
              .object({
                currency: z
                  .string()
                  .describe(`Currency ISO 4217 code`)
                  .optional(),
                iso_code: z.string().describe(`Country ISO code`).optional(),
                en_name: z.string().describe(`Country EN name`).optional(),
                native_name: z
                  .string()
                  .describe(`Country native name`)
                  .optional(),
              })
              .describe(`Country Details`)
              .optional(),
            timeoffset_details: z
              .object({
                post_code: z.string().describe(`Postal code`).optional(),
                offset: z.number().describe(`UTC offset`).optional(),
                dst: z.boolean().describe(`Daylight Saving Time`).optional(),
              })
              .describe(`TimeOffset Details`)
              .optional(),
            state_id: z.string().describe(`undefined`).optional(),
          })
          .describe(`Details of the registered address.`)
          .optional(),
        business_owners: z
          .array(
            z.object({
              first_name: z.string().describe(`BO's first name`).optional(),
              last_name: z
                .string()
                .describe(`BO's last name of the user`)
                .optional(),
              date_of_birth: z.string().describe(`Date of birth`).optional(),
              mobile_phone: z
                .string()
                .describe(`Mobile phone number`)
                .optional(),
              landline: z.string().describe(`BO's Landline`).optional(),
              ownership: z.number().describe(`Ownership percentage`).optional(),
            }),
          )
          .describe(`Business owners information.`)
          .optional(),
        doing_business_as: z
          .object({
            business_name: z
              .string()
              .describe(`Doing business as name`)
              .optional(),
            company_registration_number: z
              .string()
              .describe(`Doing business as company registration number`)
              .optional(),
            vat_id: z.string().describe(`Doing business as VAT ID`).optional(),
            website: z
              .string()
              .describe(`Doing business as website`)
              .optional(),
            email: z.string().describe(`Doing business as email`).optional(),
            address: z
              .object({
                address_line1: z.string().describe(`Address line 1`).optional(),
                address_line2: z.string().describe(`Address line 2`).optional(),
                city: z.string().describe(`City`).optional(),
                country: z
                  .string()
                  .describe(`Country ISO 3166-1 code`)
                  .optional(),
                region_id: z.number().describe(`Country region ID`).optional(),
                region_name: z
                  .string()
                  .describe(`Country region name`)
                  .optional(),
                post_code: z.string().describe(`Postal code`).optional(),
              })
              .optional(),
          })
          .describe(`Doing Business As information`)
          .optional(),
        settings: z
          .object({
            tax_enabled: z
              .boolean()
              .describe(
                `Whether to show tax in receipts &#40;saved per transaction&#41;`,
              )
              .optional(),
            payout_type: z.string().describe(`Payout type`).optional(),
            payout_period: z.string().describe(`Payout frequency`).optional(),
            payout_on_demand_available: z
              .boolean()
              .describe(`Whether merchant can edit payouts on demand`)
              .optional(),
            payout_on_demand: z
              .boolean()
              .describe(`Whether merchant will receive payouts on demand`)
              .optional(),
            printers_enabled: z
              .boolean()
              .describe(`Whether to show printers in mobile app`)
              .optional(),
            payout_instrument: z
              .string()
              .describe(`Payout Instrument`)
              .optional(),
            moto_payment: z
              .enum(["UNAVAILABLE", "ENFORCED", "ON", "OFF"])
              .describe(`Whether merchant can make MOTO payments`)
              .optional(),
            stone_merchant_code: z
              .string()
              .describe(`Stone merchant code`)
              .optional(),
            daily_payout_email: z
              .boolean()
              .describe(`Whether merchant will receive daily payout emails`)
              .optional(),
            monthly_payout_email: z
              .boolean()
              .describe(`Whether merchant will receive monthly payout emails`)
              .optional(),
            gross_settlement: z
              .boolean()
              .describe(`Whether merchant has gross settlement enabled`)
              .optional(),
          })
          .describe(
            `Merchant settings &#40;like \\"payout_type\\", \\"payout_period\\"&#41;`,
          )
          .optional(),
        locale: z
          .string()
          .describe(`Merchant locale &#40;for internal usage only&#41;`)
          .optional(),
        bank_accounts: z
          .array(
            z.object({
              bank_code: z.string().describe(`Bank code`).optional(),
              branch_code: z.string().describe(`Branch code`).optional(),
              swift: z.string().describe(`SWIFT code`).optional(),
              account_number: z.string().describe(`Account number`).optional(),
              iban: z.string().describe(`IBAN`).optional(),
              account_type: z
                .string()
                .describe(`Type of the account`)
                .optional(),
              account_category: z
                .string()
                .describe(`Account category - business or personal`)
                .optional(),
              account_holder_name: z.string().optional(),
              status: z
                .string()
                .describe(`Status in the verification process`)
                .optional(),
              primary: z
                .boolean()
                .describe(
                  `The primary bank account is the one used for payouts`,
                )
                .optional(),
              created_at: z
                .string()
                .describe(`Creation date of the bank account`)
                .optional(),
              bank_name: z.string().describe(`Bank name`).optional(),
            }),
          )
          .optional(),
        extdev: z
          .boolean()
          .describe(`True if the merchant is extdev`)
          .optional(),
        payout_zone_migrated: z
          .boolean()
          .describe(`True if the payout zone of this merchant is migrated`)
          .optional(),
        country: z
          .string()
          .describe(
            `Merchant country code formatted according to [ISO3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) &#40;for internal usage only&#41;`,
          )
          .optional(),
      })
      .describe(`Account's merchant profile`)
      .optional(),
    app_settings: z
      .object({
        checkout_preference: z
          .string()
          .describe(`Checkout preference`)
          .optional(),
        include_vat: z.boolean().describe(`Include vat.`).optional(),
        manual_entry_tutorial: z
          .boolean()
          .describe(`Manual entry tutorial.`)
          .optional(),
        mobile_payment_tutorial: z
          .boolean()
          .describe(`Mobile payment tutorial.`)
          .optional(),
        tax_enabled: z.boolean().describe(`Tax enabled.`).optional(),
        mobile_payment: z.string().describe(`Mobile payment.`).optional(),
        reader_payment: z.string().describe(`Reader payment.`).optional(),
        cash_payment: z.string().describe(`Cash payment.`).optional(),
        advanced_mode: z.string().describe(`Advanced mode.`).optional(),
        expected_max_transaction_amount: z
          .number()
          .describe(`Expected max transaction amount.`)
          .optional(),
        manual_entry: z.string().describe(`Manual entry.`).optional(),
        terminal_mode_tutorial: z
          .boolean()
          .describe(`Terminal mode tutorial.`)
          .optional(),
        tipping: z.string().describe(`Tipping.`).optional(),
        tip_rates: z.array(z.number()).describe(`Tip rates.`).optional(),
        barcode_scanner: z.string().describe(`Barcode scanner.`).optional(),
        referral: z.string().describe(`Referral.`).optional(),
      })
      .describe(`Mobile app settings`)
      .optional(),
    permissions: z
      .object({
        create_moto_payments: z
          .boolean()
          .describe(`Create MOTO payments`)
          .optional(),
        full_transaction_history_view: z
          .boolean()
          .describe(`Can view full merchant transaction history`)
          .optional(),
        refund_transactions: z
          .boolean()
          .describe(`Refund transactions`)
          .optional(),
        create_referral: z.boolean().describe(`Create referral`).optional(),
      })
      .describe(`User permissions`)
      .optional(),
  })
  .passthrough()
  .describe(`Details of the merchant account.`);

export const getDoingBusinessAsParameters = z.object({});

export const getDoingBusinessAsResult = z
  .object({
    business_name: z.string().describe(`Doing business as name`).optional(),
    company_registration_number: z
      .string()
      .describe(`Doing business as company registration number`)
      .optional(),
    vat_id: z.string().describe(`Doing business as VAT ID`).optional(),
    website: z.string().describe(`Doing business as website`).optional(),
    email: z.string().describe(`Doing business as email`).optional(),
    address: z
      .object({
        address_line1: z.string().describe(`Address line 1`).optional(),
        address_line2: z.string().describe(`Address line 2`).optional(),
        city: z.string().describe(`City`).optional(),
        country: z.string().describe(`Country ISO 3166-1 code`).optional(),
        region_id: z.number().describe(`Country region ID`).optional(),
        region_name: z.string().describe(`Country region name`).optional(),
        post_code: z.string().describe(`Postal code`).optional(),
      })
      .optional(),
  })
  .passthrough()
  .describe(`Doing Business As information`);

export const getMerchantProfileParameters = z.object({});

export const getMerchantProfileResult = z
  .object({
    merchant_code: z
      .string()
      .describe(`Unique identifying code of the merchant profile`)
      .optional(),
    company_name: z.string().describe(`Company name`).optional(),
    website: z.string().describe(`Website`).optional(),
    legal_type: z
      .object({
        id: z.number().describe(`Unique id`).optional(),
        full_description: z
          .string()
          .describe(`Legal type description`)
          .optional(),
        description: z
          .string()
          .describe(`Legal type short description`)
          .optional(),
        sole_trader: z
          .boolean()
          .describe(`Sole trader legal type if true`)
          .optional(),
      })
      .describe(`Id of the legal type of the merchant profile`)
      .optional(),
    merchant_category_code: z
      .string()
      .describe(`Merchant category code`)
      .optional(),
    mobile_phone: z.string().describe(`Mobile phone number`).optional(),
    company_registration_number: z
      .string()
      .describe(`Company registration number`)
      .optional(),
    vat_id: z.string().describe(`Vat ID`).optional(),
    permanent_certificate_access_code: z
      .string()
      .describe(`Permanent certificate access code &#40;Portugal&#41;`)
      .optional(),
    nature_and_purpose: z
      .string()
      .describe(`Nature and purpose of the business`)
      .optional(),
    address: z
      .object({
        address_line1: z.string().describe(`Address line 1`).optional(),
        address_line2: z.string().describe(`Address line 2`).optional(),
        city: z.string().describe(`City`).optional(),
        country: z.string().describe(`Country ISO 3166-1 code`).optional(),
        region_id: z.number().describe(`Country region id`).optional(),
        region_name: z.string().describe(`Region name`).optional(),
        region_code: z.string().describe(`Region code`).optional(),
        post_code: z.string().describe(`Postal code`).optional(),
        landline: z.string().describe(`Landline number`).optional(),
        first_name: z.string().describe(`undefined`).optional(),
        last_name: z.string().describe(`undefined`).optional(),
        company: z.string().describe(`undefined`).optional(),
        country_details: z
          .object({
            currency: z.string().describe(`Currency ISO 4217 code`).optional(),
            iso_code: z.string().describe(`Country ISO code`).optional(),
            en_name: z.string().describe(`Country EN name`).optional(),
            native_name: z.string().describe(`Country native name`).optional(),
          })
          .describe(`Country Details`)
          .optional(),
        timeoffset_details: z
          .object({
            post_code: z.string().describe(`Postal code`).optional(),
            offset: z.number().describe(`UTC offset`).optional(),
            dst: z.boolean().describe(`Daylight Saving Time`).optional(),
          })
          .describe(`TimeOffset Details`)
          .optional(),
        state_id: z.string().describe(`undefined`).optional(),
      })
      .describe(`Details of the registered address.`)
      .optional(),
    business_owners: z
      .array(
        z.object({
          first_name: z.string().describe(`BO's first name`).optional(),
          last_name: z
            .string()
            .describe(`BO's last name of the user`)
            .optional(),
          date_of_birth: z.string().describe(`Date of birth`).optional(),
          mobile_phone: z.string().describe(`Mobile phone number`).optional(),
          landline: z.string().describe(`BO's Landline`).optional(),
          ownership: z.number().describe(`Ownership percentage`).optional(),
        }),
      )
      .describe(`Business owners information.`)
      .optional(),
    doing_business_as: z
      .object({
        business_name: z.string().describe(`Doing business as name`).optional(),
        company_registration_number: z
          .string()
          .describe(`Doing business as company registration number`)
          .optional(),
        vat_id: z.string().describe(`Doing business as VAT ID`).optional(),
        website: z.string().describe(`Doing business as website`).optional(),
        email: z.string().describe(`Doing business as email`).optional(),
        address: z
          .object({
            address_line1: z.string().describe(`Address line 1`).optional(),
            address_line2: z.string().describe(`Address line 2`).optional(),
            city: z.string().describe(`City`).optional(),
            country: z.string().describe(`Country ISO 3166-1 code`).optional(),
            region_id: z.number().describe(`Country region ID`).optional(),
            region_name: z.string().describe(`Country region name`).optional(),
            post_code: z.string().describe(`Postal code`).optional(),
          })
          .optional(),
      })
      .describe(`Doing Business As information`)
      .optional(),
    settings: z
      .object({
        tax_enabled: z
          .boolean()
          .describe(
            `Whether to show tax in receipts &#40;saved per transaction&#41;`,
          )
          .optional(),
        payout_type: z.string().describe(`Payout type`).optional(),
        payout_period: z.string().describe(`Payout frequency`).optional(),
        payout_on_demand_available: z
          .boolean()
          .describe(`Whether merchant can edit payouts on demand`)
          .optional(),
        payout_on_demand: z
          .boolean()
          .describe(`Whether merchant will receive payouts on demand`)
          .optional(),
        printers_enabled: z
          .boolean()
          .describe(`Whether to show printers in mobile app`)
          .optional(),
        payout_instrument: z.string().describe(`Payout Instrument`).optional(),
        moto_payment: z
          .enum(["UNAVAILABLE", "ENFORCED", "ON", "OFF"])
          .describe(`Whether merchant can make MOTO payments`)
          .optional(),
        stone_merchant_code: z
          .string()
          .describe(`Stone merchant code`)
          .optional(),
        daily_payout_email: z
          .boolean()
          .describe(`Whether merchant will receive daily payout emails`)
          .optional(),
        monthly_payout_email: z
          .boolean()
          .describe(`Whether merchant will receive monthly payout emails`)
          .optional(),
        gross_settlement: z
          .boolean()
          .describe(`Whether merchant has gross settlement enabled`)
          .optional(),
      })
      .describe(
        `Merchant settings &#40;like \\"payout_type\\", \\"payout_period\\"&#41;`,
      )
      .optional(),
    locale: z
      .string()
      .describe(`Merchant locale &#40;for internal usage only&#41;`)
      .optional(),
    bank_accounts: z
      .array(
        z.object({
          bank_code: z.string().describe(`Bank code`).optional(),
          branch_code: z.string().describe(`Branch code`).optional(),
          swift: z.string().describe(`SWIFT code`).optional(),
          account_number: z.string().describe(`Account number`).optional(),
          iban: z.string().describe(`IBAN`).optional(),
          account_type: z.string().describe(`Type of the account`).optional(),
          account_category: z
            .string()
            .describe(`Account category - business or personal`)
            .optional(),
          account_holder_name: z.string().optional(),
          status: z
            .string()
            .describe(`Status in the verification process`)
            .optional(),
          primary: z
            .boolean()
            .describe(`The primary bank account is the one used for payouts`)
            .optional(),
          created_at: z
            .string()
            .describe(`Creation date of the bank account`)
            .optional(),
          bank_name: z.string().describe(`Bank name`).optional(),
        }),
      )
      .optional(),
    extdev: z.boolean().describe(`True if the merchant is extdev`).optional(),
    payout_zone_migrated: z
      .boolean()
      .describe(`True if the payout zone of this merchant is migrated`)
      .optional(),
    country: z
      .string()
      .describe(
        `Merchant country code formatted according to [ISO3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) &#40;for internal usage only&#41;`,
      )
      .optional(),
  })
  .passthrough()
  .describe(`Account's merchant profile`);

export const getPersonalProfileParameters = z.object({});

export const getPersonalProfileResult = z
  .object({
    first_name: z.string().describe(`First name of the user`).optional(),
    last_name: z.string().describe(`Last name of the user`).optional(),
    date_of_birth: z.string().describe(`Date of birth`).optional(),
    mobile_phone: z.string().describe(`Mobile phone number`).optional(),
    address: z
      .object({
        address_line1: z.string().describe(`Address line 1`).optional(),
        address_line2: z.string().describe(`Address line 2`).optional(),
        city: z.string().describe(`City`).optional(),
        country: z.string().describe(`Country ISO 3166-1 code`).optional(),
        region_id: z.number().describe(`Country region id`).optional(),
        region_name: z.string().describe(`Region name`).optional(),
        region_code: z.string().describe(`Region code`).optional(),
        post_code: z.string().describe(`Postal code`).optional(),
        landline: z.string().describe(`Landline number`).optional(),
        first_name: z.string().describe(`undefined`).optional(),
        last_name: z.string().describe(`undefined`).optional(),
        company: z.string().describe(`undefined`).optional(),
        country_details: z
          .object({
            currency: z.string().describe(`Currency ISO 4217 code`).optional(),
            iso_code: z.string().describe(`Country ISO code`).optional(),
            en_name: z.string().describe(`Country EN name`).optional(),
            native_name: z.string().describe(`Country native name`).optional(),
          })
          .describe(`Country Details`)
          .optional(),
        timeoffset_details: z
          .object({
            post_code: z.string().describe(`Postal code`).optional(),
            offset: z.number().describe(`UTC offset`).optional(),
            dst: z.boolean().describe(`Daylight Saving Time`).optional(),
          })
          .describe(`TimeOffset Details`)
          .optional(),
        state_id: z.string().describe(`undefined`).optional(),
      })
      .describe(`Details of the registered address.`)
      .optional(),
    complete: z.boolean().optional(),
  })
  .passthrough()
  .describe(`Account's personal profile.`);
