import type SumUp from "@sumup/sdk";
import type z from "zod";
import type { Tool } from "../types";

import {
  createReaderCheckoutParameters,
  createReaderParameters,
  createReaderTerminateParameters,
  deleteReaderParameters,
  getReaderParameters,
  listReadersParameters,
  updateReaderParameters,
} from "./parameters";

export const createReaderCheckout: Tool = {
  name: "create_reader_checkout",
  description: `Create a Checkout for a Reader.

This process is asynchronous and the actual transaction may take some time to be stared on the device.


There are some caveats when using this endpoint:
* The target device must be online, otherwise checkout won't be accepted
* After the checkout is accepted, the system has 60 seconds to start the payment on the target device. During this time, any other checkout for the same device will be rejected.

**Note**: If the target device is a Solo, it must be in version 3.3.24.3 or higher.
`,
  parameters: createReaderCheckoutParameters,
  callback: async (
    sumup: SumUp,
    {
      merchantCode,
      id,
      ...args
    }: z.infer<typeof createReaderCheckoutParameters>,
  ) => {
    const res = await sumup.readers.createCheckout(merchantCode, id, args);
    return JSON.stringify(res);
  },
};

export const createReaderTerminate: Tool = {
  name: "create_reader_terminate",
  description: `Create a Terminate action for a Reader.

It stops the current transaction on the target device.

This process is asynchronous and the actual termination may take some time to be performed on the device.


There are some caveats when using this endpoint:
* The target device must be online, otherwise terminate won't be accepted
* The action will succeed only if the device is waiting for cardholder action: e.g: waiting for card, waiting for PIN, etc.
* There is no confirmation of the termination.

If a transaction is successfully terminated and \`return_url\` was provided on Checkout, the transaction status will be sent as \`failed\` to the provided URL.

**Note**: If the target device is a Solo, it must be in version 3.3.28.0 or higher.
`,
  parameters: createReaderTerminateParameters,
  callback: async (
    sumup: SumUp,
    {
      merchantCode,
      id,
      ...args
    }: z.infer<typeof createReaderTerminateParameters>,
  ) => {
    const res = await sumup.readers.terminateCheckout(merchantCode, id, args);
    return JSON.stringify(res);
  },
};

export const listReaders: Tool = {
  name: "list_readers",
  description: `List all readers of the merchant.`,
  parameters: listReadersParameters,
  callback: async (
    sumup: SumUp,
    { merchantCode, ...args }: z.infer<typeof listReadersParameters>,
  ) => {
    const res = await sumup.readers.list(merchantCode, args);
    return JSON.stringify(res);
  },
};

export const createReader: Tool = {
  name: "create_reader",
  description: `Create a new Reader for the merchant account.`,
  parameters: createReaderParameters,
  callback: async (
    sumup: SumUp,
    { merchantCode, ...args }: z.infer<typeof createReaderParameters>,
  ) => {
    const res = await sumup.readers.create(merchantCode, args);
    return JSON.stringify(res);
  },
};

export const getReader: Tool = {
  name: "get_reader",
  description: `Retrieve a Reader.`,
  parameters: getReaderParameters,
  callback: async (
    sumup: SumUp,
    { merchantCode, id, ...args }: z.infer<typeof getReaderParameters>,
  ) => {
    const res = await sumup.readers.get(merchantCode, id, args);
    return JSON.stringify(res);
  },
};

export const deleteReader: Tool = {
  name: "delete_reader",
  description: `Delete a reader.`,
  parameters: deleteReaderParameters,
  callback: async (
    sumup: SumUp,
    { merchantCode, id, ...args }: z.infer<typeof deleteReaderParameters>,
  ) => {
    const res = await sumup.readers.deleteReader(merchantCode, id, args);
    return JSON.stringify(res);
  },
};

export const updateReader: Tool = {
  name: "update_reader",
  description: `Update a Reader.`,
  parameters: updateReaderParameters,
  callback: async (
    sumup: SumUp,
    { merchantCode, id, ...args }: z.infer<typeof updateReaderParameters>,
  ) => {
    const res = await sumup.readers.update(merchantCode, id, args);
    return JSON.stringify(res);
  },
};
