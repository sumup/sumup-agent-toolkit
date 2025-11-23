import type SumUp from "@sumup/sdk";
import type { ToolDefinition } from "../types";

import {
  compatGetOperatorParameters,
  compatGetOperatorResult,
  createSubAccountParameters,
  createSubAccountResult,
  deactivateSubAccountParameters,
  deactivateSubAccountResult,
  listSubAccountsParameters,
  listSubAccountsResult,
  updateSubAccountParameters,
  updateSubAccountResult,
} from "./parameters";

export const compatGetOperator: ToolDefinition<
  typeof compatGetOperatorParameters,
  typeof compatGetOperatorResult
> = {
  name: "compat_get_operator",
  title: `Retrieve an operator`,
  description: `Returns specific operator.`,
  parameters: compatGetOperatorParameters,
  result: compatGetOperatorResult,
  callback: async (sumup: SumUp, { operatorId, ...args }) => {
    return await sumup.subaccounts.compatGetOperator(operatorId, args);
  },
  annotations: {
    title: `Retrieve an operator`,
    readOnly: true,
    destructive: false,
    idempotent: false,
  },
};

export const createSubAccount: ToolDefinition<
  typeof createSubAccountParameters,
  typeof createSubAccountResult
> = {
  name: "create_sub_account",
  title: `Create an operator`,
  description: `Creates new operator for currently authorized users' merchant.`,
  parameters: createSubAccountParameters,
  result: createSubAccountResult,
  callback: async (sumup: SumUp, args) => {
    return await sumup.subaccounts.createSubAccount(args);
  },
  annotations: {
    title: `Create an operator`,
    readOnly: false,
    destructive: false,
    idempotent: false,
  },
};

export const deactivateSubAccount: ToolDefinition<
  typeof deactivateSubAccountParameters,
  typeof deactivateSubAccountResult
> = {
  name: "deactivate_sub_account",
  title: `Disable an operator.`,
  description: `Disable the specified operator for the merchant account.`,
  parameters: deactivateSubAccountParameters,
  result: deactivateSubAccountResult,
  callback: async (sumup: SumUp, { operatorId, ...args }) => {
    return await sumup.subaccounts.deactivateSubAccount(operatorId, args);
  },
  annotations: {
    title: `Disable an operator.`,
    readOnly: false,
    destructive: true,
    idempotent: false,
  },
};

export const listSubAccounts: ToolDefinition<
  typeof listSubAccountsParameters,
  typeof listSubAccountsResult
> = {
  name: "list_sub_accounts",
  title: `List operators`,
  description: `Returns list of operators for currently authorized user's merchant.`,
  parameters: listSubAccountsParameters,
  result: listSubAccountsResult,
  callback: async (sumup: SumUp, args) => {
    return await sumup.subaccounts.listSubAccounts(args);
  },
  annotations: {
    title: `List operators`,
    readOnly: true,
    destructive: false,
    idempotent: false,
  },
};

export const updateSubAccount: ToolDefinition<
  typeof updateSubAccountParameters,
  typeof updateSubAccountResult
> = {
  name: "update_sub_account",
  title: `Update an operator`,
  description: `Updates operator. If the operator was disabled and their password is updated they will be unblocked.`,
  parameters: updateSubAccountParameters,
  result: updateSubAccountResult,
  callback: async (sumup: SumUp, { operatorId, ...args }) => {
    return await sumup.subaccounts.updateSubAccount(operatorId, args);
  },
  annotations: {
    title: `Update an operator`,
    readOnly: false,
    destructive: false,
    idempotent: true,
  },
};
