import type { Tool } from "../types";

import {
  createMerchantRoleParameters,
  deleteMerchantRoleParameters,
  getMerchantRoleParameters,
  listMerchantRolesParameters,
  updateMerchantRoleParameters,
} from "./parameters";

export const listMerchantRoles: Tool = {
  name: "list_merchant_roles",
  description: `List merchant's custom roles.`,
  parameters: listMerchantRolesParameters,
  callback: async (sumup, { merchant_code, ...args }) => {
    const res = await sumup.roles.list(merchant_code, args);
    return JSON.stringify(res);
  },
};

export const createMerchantRole: Tool = {
  name: "create_merchant_role",
  description: `Create a custom role for the merchant. Roles are defined by the set of permissions that they grant to the members that they are assigned to.`,
  parameters: createMerchantRoleParameters,
  callback: async (sumup, { merchant_code, ...args }) => {
    const res = await sumup.roles.create(merchant_code, args);
    return JSON.stringify(res);
  },
};

export const getMerchantRole: Tool = {
  name: "get_merchant_role",
  description: `Retrieve a custom role by ID.`,
  parameters: getMerchantRoleParameters,
  callback: async (sumup, { merchant_code, role_id, ...args }) => {
    const res = await sumup.roles.get(merchant_code, role_id, args);
    return JSON.stringify(res);
  },
};

export const deleteMerchantRole: Tool = {
  name: "delete_merchant_role",
  description: `Delete a custom role.`,
  parameters: deleteMerchantRoleParameters,
  callback: async (sumup, { merchant_code, role_id, ...args }) => {
    const res = await sumup.roles.delete(merchant_code, role_id, args);
    return JSON.stringify(res);
  },
};

export const updateMerchantRole: Tool = {
  name: "update_merchant_role",
  description: `Update a custom role.`,
  parameters: updateMerchantRoleParameters,
  callback: async (sumup, { merchant_code, role_id, ...args }) => {
    const res = await sumup.roles.update(merchant_code, role_id, args);
    return JSON.stringify(res);
  },
};
