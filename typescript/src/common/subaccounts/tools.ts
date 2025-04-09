import type { Tool } from "../types";

import {
  compatGetOperatorParameters,
  createSubAccountParameters,
  deactivateSubAccountParameters,
  listSubAccountsParameters,
  updateSubAccountParameters,
} from "./parameters";

export const listSubAccounts: Tool = {
  name: "list_sub_accounts",
  description: `Returns list of operators for currently authorized user's merchant.`,
  parameters: listSubAccountsParameters,
  callback: async (sumup, args) => {
    const res = await sumup.subaccounts.ListSubAccounts(args);
    return JSON.stringify(res);
  },
};

export const createSubAccount: Tool = {
  name: "create_sub_account",
  description: `Creates new operator for currently authorized users' merchant.`,
  parameters: createSubAccountParameters,
  callback: async (sumup, args) => {
    const res = await sumup.subaccounts.CreateSubAccount(args);
    return JSON.stringify(res);
  },
};

export const compatGetOperator: Tool = {
  name: "compat_get_operator",
  description: `Returns specific operator.`,
  parameters: compatGetOperatorParameters,
  callback: async (sumup, { operator_id, ...args }) => {
    const res = await sumup.subaccounts.CompatGetOperator(operator_id, args);
    return JSON.stringify(res);
  },
};

export const updateSubAccount: Tool = {
  name: "update_sub_account",
  description: `Updates operator. If the operator was disabled and their password is updated they will be unblocked.`,
  parameters: updateSubAccountParameters,
  callback: async (sumup, { operator_id, ...args }) => {
    const res = await sumup.subaccounts.UpdateSubAccount(operator_id, args);
    return JSON.stringify(res);
  },
};

export const deactivateSubAccount: Tool = {
  name: "deactivate_sub_account",
  description: `undefined`,
  parameters: deactivateSubAccountParameters,
  callback: async (sumup, { operator_id, ...args }) => {
    const res = await sumup.subaccounts.DeactivateSubAccount(operator_id, args);
    return JSON.stringify(res);
  },
};
