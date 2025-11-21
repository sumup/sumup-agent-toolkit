import type SumUp from "@sumup/sdk";
import type z from "zod";
import type { Tool } from "../types";

import {
  compatGetOperatorParameters,
  createSubAccountParameters,
  deactivateSubAccountParameters,
  listSubAccountsParameters,
  updateSubAccountParameters,
} from "./parameters";

export const compatGetOperator: Tool = {
  name: "compat_get_operator",
  description: `Returns specific operator.`,
  parameters: compatGetOperatorParameters,
  callback: async (
    sumup: SumUp,
    { operatorId, ...args }: z.infer<typeof compatGetOperatorParameters>,
  ) => {
    const res = await sumup.subaccounts.compatGetOperator(operatorId, args);
    return JSON.stringify(res);
  },
};

export const createSubAccount: Tool = {
  name: "create_sub_account",
  description: `Creates new operator for currently authorized users' merchant.`,
  parameters: createSubAccountParameters,
  callback: async (
    sumup: SumUp,
    args: z.infer<typeof createSubAccountParameters>,
  ) => {
    const res = await sumup.subaccounts.createSubAccount(args);
    return JSON.stringify(res);
  },
};

export const deactivateSubAccount: Tool = {
  name: "deactivate_sub_account",
  description: `Disable the specified operator for the merchant account.`,
  parameters: deactivateSubAccountParameters,
  callback: async (
    sumup: SumUp,
    { operatorId, ...args }: z.infer<typeof deactivateSubAccountParameters>,
  ) => {
    const res = await sumup.subaccounts.deactivateSubAccount(operatorId, args);
    return JSON.stringify(res);
  },
};

export const listSubAccounts: Tool = {
  name: "list_sub_accounts",
  description: `Returns list of operators for currently authorized user's merchant.`,
  parameters: listSubAccountsParameters,
  callback: async (
    sumup: SumUp,
    args: z.infer<typeof listSubAccountsParameters>,
  ) => {
    const res = await sumup.subaccounts.listSubAccounts(args);
    return JSON.stringify(res);
  },
};

export const updateSubAccount: Tool = {
  name: "update_sub_account",
  description: `Updates operator. If the operator was disabled and their password is updated they will be unblocked.`,
  parameters: updateSubAccountParameters,
  callback: async (
    sumup: SumUp,
    { operatorId, ...args }: z.infer<typeof updateSubAccountParameters>,
  ) => {
    const res = await sumup.subaccounts.updateSubAccount(operatorId, args);
    return JSON.stringify(res);
  },
};
