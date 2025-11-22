import type SumUp from "@sumup/sdk";
import type z from "zod";
import type { Tool } from "../types";

import {
  createCustomerParameters,
  createCustomerResult,
  deactivatePaymentInstrumentParameters,
  deactivatePaymentInstrumentResult,
  getCustomerParameters,
  getCustomerResult,
  listPaymentInstrumentsParameters,
  listPaymentInstrumentsResult,
  updateCustomerParameters,
  updateCustomerResult,
} from "./parameters";

export const createCustomer: Tool = {
  name: "create_customer",
  title: `Create a customer`,
  description: `Creates a new saved customer resource which you can later manipulate and save payment instruments to.`,
  parameters: createCustomerParameters,
  result: createCustomerResult,
  callback: async (
    sumup: SumUp,
    args: z.infer<typeof createCustomerParameters>,
  ) => {
    return await sumup.customers.create(args);
  },
  annotations: {
    title: `Create a customer`,
    readOnly: false,
    destructive: false,
    idempotent: false,
  },
};

export const deactivatePaymentInstrument: Tool = {
  name: "deactivate_payment_instrument",
  title: `Deactivate a payment instrument`,
  description: `Deactivates an identified card payment instrument resource for a customer.`,
  parameters: deactivatePaymentInstrumentParameters,
  result: deactivatePaymentInstrumentResult,
  callback: async (
    sumup: SumUp,
    {
      customerId,
      token,
      ...args
    }: z.infer<typeof deactivatePaymentInstrumentParameters>,
  ) => {
    return await sumup.customers.deactivatePaymentInstrument(
      customerId,
      token,
      args,
    );
  },
  annotations: {
    title: `Deactivate a payment instrument`,
    readOnly: false,
    destructive: true,
    idempotent: false,
  },
};

export const getCustomer: Tool = {
  name: "get_customer",
  title: `Retrieve a customer`,
  description: `Retrieves an identified saved customer resource through the unique \`customer_id\` parameter, generated upon customer creation.`,
  parameters: getCustomerParameters,
  result: getCustomerResult,
  callback: async (
    sumup: SumUp,
    { customerId, ...args }: z.infer<typeof getCustomerParameters>,
  ) => {
    return await sumup.customers.get(customerId, args);
  },
  annotations: {
    title: `Retrieve a customer`,
    readOnly: true,
    destructive: false,
    idempotent: false,
  },
};

export const listPaymentInstruments: Tool = {
  name: "list_payment_instruments",
  title: `List payment instruments`,
  description: `Lists all payment instrument resources that are saved for an identified customer.`,
  parameters: listPaymentInstrumentsParameters,
  result: listPaymentInstrumentsResult,
  callback: async (
    sumup: SumUp,
    { customerId, ...args }: z.infer<typeof listPaymentInstrumentsParameters>,
  ) => {
    return await sumup.customers.listPaymentInstruments(customerId, args);
  },
  annotations: {
    title: `List payment instruments`,
    readOnly: true,
    destructive: false,
    idempotent: false,
  },
};

export const updateCustomer: Tool = {
  name: "update_customer",
  title: `Update a customer`,
  description: `Updates an identified saved customer resource's personal details.

The request only overwrites the parameters included in the request, all other parameters will remain with their initially assigned values.`,
  parameters: updateCustomerParameters,
  result: updateCustomerResult,
  callback: async (
    sumup: SumUp,
    { customerId, ...args }: z.infer<typeof updateCustomerParameters>,
  ) => {
    return await sumup.customers.update(customerId, args);
  },
  annotations: {
    title: `Update a customer`,
    readOnly: false,
    destructive: false,
    idempotent: true,
  },
};
