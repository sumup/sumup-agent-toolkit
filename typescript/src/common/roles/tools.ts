import type SumUp from "@sumup/sdk";
import type z from "zod";
import type { Tool } from "../types";

import {
  createMerchantRoleParameters,
  createMerchantRoleResult,
  deleteMerchantRoleParameters,
  deleteMerchantRoleResult,
  getMerchantRoleParameters,
  getMerchantRoleResult,
  listMerchantRolesParameters,
  listMerchantRolesResult,
  updateMerchantRoleParameters,
  updateMerchantRoleResult,
} from "./parameters";

export const createMerchantRole: Tool = {
  name: "create_merchant_role",
  title: `Create a role`,
  description: `Create a custom role for the merchant. Roles are defined by the set of permissions that they grant to the members that they are assigned to.`,
  parameters: createMerchantRoleParameters,
  result: createMerchantRoleResult,
  callback: async (
    sumup: SumUp,
    { merchantCode, ...args }: z.infer<typeof createMerchantRoleParameters>,
  ) => {
    return await sumup.roles.create(merchantCode, args);
  },
  annotations: {
    title: `Create a role`,
    readOnly: false,
    destructive: false,
    idempotent: false,
  },
};

export const deleteMerchantRole: Tool = {
  name: "delete_merchant_role",
  title: `Delete a role`,
  description: `Delete a custom role.`,
  parameters: deleteMerchantRoleParameters,
  result: deleteMerchantRoleResult,
  callback: async (
    sumup: SumUp,
    {
      merchantCode,
      roleId,
      ...args
    }: z.infer<typeof deleteMerchantRoleParameters>,
  ) => {
    return await sumup.roles.delete(merchantCode, roleId, args);
  },
  annotations: {
    title: `Delete a role`,
    readOnly: false,
    destructive: true,
    idempotent: false,
  },
};

export const getMerchantRole: Tool = {
  name: "get_merchant_role",
  title: `Retrieve a role`,
  description: `Retrieve a custom role by ID.`,
  parameters: getMerchantRoleParameters,
  result: getMerchantRoleResult,
  callback: async (
    sumup: SumUp,
    {
      merchantCode,
      roleId,
      ...args
    }: z.infer<typeof getMerchantRoleParameters>,
  ) => {
    return await sumup.roles.get(merchantCode, roleId, args);
  },
  annotations: {
    title: `Retrieve a role`,
    readOnly: true,
    destructive: false,
    idempotent: false,
  },
};

export const listMerchantRoles: Tool = {
  name: "list_merchant_roles",
  title: `List roles`,
  description: `List merchant's custom roles.`,
  parameters: listMerchantRolesParameters,
  result: listMerchantRolesResult,
  callback: async (
    sumup: SumUp,
    { merchantCode, ...args }: z.infer<typeof listMerchantRolesParameters>,
  ) => {
    return await sumup.roles.list(merchantCode, args);
  },
  annotations: {
    title: `List roles`,
    readOnly: true,
    destructive: false,
    idempotent: false,
  },
};

export const updateMerchantRole: Tool = {
  name: "update_merchant_role",
  title: `Update a role`,
  description: `Update a custom role.`,
  parameters: updateMerchantRoleParameters,
  result: updateMerchantRoleResult,
  callback: async (
    sumup: SumUp,
    {
      merchantCode,
      roleId,
      ...args
    }: z.infer<typeof updateMerchantRoleParameters>,
  ) => {
    return await sumup.roles.update(merchantCode, roleId, args);
  },
  annotations: {
    title: `Update a role`,
    readOnly: false,
    destructive: false,
    idempotent: false,
  },
};
