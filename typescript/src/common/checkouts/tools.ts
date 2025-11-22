import type SumUp from "@sumup/sdk";
import type z from "zod";
import type { Tool } from "../types";

import {
  createCheckoutParameters,
  createCheckoutResult,
  deactivateCheckoutParameters,
  deactivateCheckoutResult,
  getCheckoutParameters,
  getCheckoutResult,
  getPaymentMethodsParameters,
  getPaymentMethodsResult,
  listCheckoutsParameters,
  listCheckoutsResult,
  processCheckoutParameters,
  processCheckoutResult,
} from "./parameters";

export const createCheckout: Tool = {
  name: "create_checkout",
  title: `Create a checkout`,
  description: `Creates a new payment checkout resource. The unique \`checkout_reference\` created by this request, is used for further manipulation of the checkout.

For 3DS checkouts, add the \`redirect_url\` parameter to your request body schema.

Follow by processing a checkout to charge the provided payment instrument.`,
  parameters: createCheckoutParameters,
  result: createCheckoutResult,
  callback: async (
    sumup: SumUp,
    args: z.infer<typeof createCheckoutParameters>,
  ) => {
    return await sumup.checkouts.create(args);
  },
  annotations: {
    title: `Create a checkout`,
    readOnly: false,
    destructive: false,
    idempotent: false,
  },
};

export const deactivateCheckout: Tool = {
  name: "deactivate_checkout",
  title: `Deactivate a checkout`,
  description: `Deactivates an identified checkout resource. If the checkout has already been processed it can not be deactivated.`,
  parameters: deactivateCheckoutParameters,
  result: deactivateCheckoutResult,
  callback: async (
    sumup: SumUp,
    { id, ...args }: z.infer<typeof deactivateCheckoutParameters>,
  ) => {
    return await sumup.checkouts.deactivate(id, args);
  },
  annotations: {
    title: `Deactivate a checkout`,
    readOnly: false,
    destructive: true,
    idempotent: false,
  },
};

export const getCheckout: Tool = {
  name: "get_checkout",
  title: `Retrieve a checkout`,
  description: `Retrieves an identified checkout resource. Use this request after processing a checkout to confirm its status and inform the end user respectively.`,
  parameters: getCheckoutParameters,
  result: getCheckoutResult,
  callback: async (
    sumup: SumUp,
    { id, ...args }: z.infer<typeof getCheckoutParameters>,
  ) => {
    return await sumup.checkouts.get(id, args);
  },
  annotations: {
    title: `Retrieve a checkout`,
    readOnly: true,
    destructive: false,
    idempotent: false,
  },
};

export const getPaymentMethods: Tool = {
  name: "get_payment_methods",
  title: `Get available payment methods`,
  description: `Get payment methods available for the given merchant to use with a checkout.`,
  parameters: getPaymentMethodsParameters,
  result: getPaymentMethodsResult,
  callback: async (
    sumup: SumUp,
    { merchantCode, ...args }: z.infer<typeof getPaymentMethodsParameters>,
  ) => {
    return await sumup.checkouts.listAvailablePaymentMethods(
      merchantCode,
      args,
    );
  },
  annotations: {
    title: `Get available payment methods`,
    readOnly: true,
    destructive: false,
    idempotent: false,
  },
};

export const listCheckouts: Tool = {
  name: "list_checkouts",
  title: `List checkouts`,
  description: `Lists created checkout resources according to the applied \`checkout_reference\`.`,
  parameters: listCheckoutsParameters,
  result: listCheckoutsResult,
  callback: async (
    sumup: SumUp,
    args: z.infer<typeof listCheckoutsParameters>,
  ) => {
    return await sumup.checkouts.list(args);
  },
  annotations: {
    title: `List checkouts`,
    readOnly: true,
    destructive: false,
    idempotent: false,
  },
};

export const processCheckout: Tool = {
  name: "process_checkout",
  title: `Process a checkout`,
  description: `Processing a checkout will attempt to charge the provided payment instrument for the amount of the specified checkout resource initiated in the \`Create a checkout\` endpoint.

Follow this request with \`Retrieve a checkout\` to confirm its status.`,
  parameters: processCheckoutParameters,
  result: processCheckoutResult,
  callback: async (
    sumup: SumUp,
    { id, ...args }: z.infer<typeof processCheckoutParameters>,
  ) => {
    return await sumup.checkouts.process(id, args);
  },
  annotations: {
    title: `Process a checkout`,
    readOnly: false,
    destructive: false,
    idempotent: true,
  },
};
