import type { Tool } from "../types";

import {
  createCheckoutParameters,
  deactivateCheckoutParameters,
  getCheckoutParameters,
  getPaymentMethodsParameters,
  listCheckoutsParameters,
  processCheckoutParameters,
} from "./parameters";

export const getPaymentMethods: Tool = {
  name: "get_payment_methods",
  description: `Get payment methods available for the given merchant to use with a checkout.`,
  parameters: getPaymentMethodsParameters,
  callback: async (sumup, { merchant_code, ...args }) => {
    const res = await sumup.checkouts.listAvailablePaymentMethods(
      merchant_code,
      args,
    );
    return JSON.stringify(res);
  },
};

export const createCheckout: Tool = {
  name: "create_checkout",
  description: `Creates a new payment checkout resource. The unique \`checkout_reference\` created by this request, is used for further manipulation of the checkout.

For 3DS checkouts, add the \`redirect_url\` parameter to your request body schema.

Follow by processing a checkout to charge the provided payment instrument.
`,
  parameters: createCheckoutParameters,
  callback: async (sumup, args) => {
    const res = await sumup.checkouts.create(args);
    return JSON.stringify(res);
  },
};

export const listCheckouts: Tool = {
  name: "list_checkouts",
  description: `Lists created checkout resources according to the applied \`checkout_reference\`.`,
  parameters: listCheckoutsParameters,
  callback: async (sumup, args) => {
    const res = await sumup.checkouts.list(args);
    return JSON.stringify(res);
  },
};

export const getCheckout: Tool = {
  name: "get_checkout",
  description: `Retrieves an identified checkout resource. Use this request after processing a checkout to confirm its status and inform the end user respectively.`,
  parameters: getCheckoutParameters,
  callback: async (sumup, { id, ...args }) => {
    const res = await sumup.checkouts.get(id, args);
    return JSON.stringify(res);
  },
};

export const processCheckout: Tool = {
  name: "process_checkout",
  description: `Processing a checkout will attempt to charge the provided payment instrument for the amount of the specified checkout resource initiated in the \`Create a checkout\` endpoint.

Follow this request with \`Retrieve a checkout\` to confirm its status.
`,
  parameters: processCheckoutParameters,
  callback: async (sumup, { id, ...args }) => {
    const res = await sumup.checkouts.process(id, args);
    return JSON.stringify(res);
  },
};

export const deactivateCheckout: Tool = {
  name: "deactivate_checkout",
  description: `Deactivates an identified checkout resource. If the checkout has already been processed it can not be deactivated.`,
  parameters: deactivateCheckoutParameters,
  callback: async (sumup, { id, ...args }) => {
    const res = await sumup.checkouts.deactivate(id, args);
    return JSON.stringify(res);
  },
};
