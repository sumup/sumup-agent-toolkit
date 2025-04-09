import type SumUp from "@sumup/sdk";
import type z from "zod";
import type { Tool } from "../types";

import {
  createCustomerParameters,
  deactivatePaymentInstrumentParameters,
  getCustomerParameters,
  listPaymentInstrumentsParameters,
  updateCustomerParameters,
} from "./parameters";

export const createCustomer: Tool = {
  name: "create_customer",
  description: `Creates a new saved customer resource which you can later manipulate and save payment instruments to.`,
  parameters: createCustomerParameters,
  callback: async (
    sumup: SumUp,
    args: z.infer<typeof createCustomerParameters>,
  ) => {
    const res = await sumup.customers.create(args);
    return JSON.stringify(res);
  },
};

export const getCustomer: Tool = {
  name: "get_customer",
  description: `Retrieves an identified saved customer resource through the unique \`customer_id\` parameter, generated upon customer creation.`,
  parameters: getCustomerParameters,
  callback: async (
    sumup: SumUp,
    { customer_id, ...args }: z.infer<typeof getCustomerParameters>,
  ) => {
    const res = await sumup.customers.get(customer_id, args);
    return JSON.stringify(res);
  },
};

export const updateCustomer: Tool = {
  name: "update_customer",
  description: `Updates an identified saved customer resource's personal details.

The request only overwrites the parameters included in the request, all other parameters will remain with their initially assigned values.
`,
  parameters: updateCustomerParameters,
  callback: async (
    sumup: SumUp,
    { customer_id, ...args }: z.infer<typeof updateCustomerParameters>,
  ) => {
    const res = await sumup.customers.update(customer_id, args);
    return JSON.stringify(res);
  },
};

export const listPaymentInstruments: Tool = {
  name: "list_payment_instruments",
  description: `Lists all payment instrument resources that are saved for an identified customer.`,
  parameters: listPaymentInstrumentsParameters,
  callback: async (
    sumup: SumUp,
    { customer_id, ...args }: z.infer<typeof listPaymentInstrumentsParameters>,
  ) => {
    const res = await sumup.customers.listPaymentInstruments(customer_id, args);
    return JSON.stringify(res);
  },
};

export const deactivatePaymentInstrument: Tool = {
  name: "deactivate_payment_instrument",
  description: `Deactivates an identified card payment instrument resource for a customer.`,
  parameters: deactivatePaymentInstrumentParameters,
  callback: async (
    sumup: SumUp,
    {
      customer_id,
      token,
      ...args
    }: z.infer<typeof deactivatePaymentInstrumentParameters>,
  ) => {
    const res = await sumup.customers.deactivatePaymentInstrument(
      customer_id,
      token,
      args,
    );
    return JSON.stringify(res);
  },
};
