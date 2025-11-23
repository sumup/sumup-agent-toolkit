import type SumUp from "@sumup/sdk";
import type { ToolDefinition } from "../types";

import {
  createMerchantMemberParameters,
  createMerchantMemberResult,
  deleteMerchantMemberParameters,
  deleteMerchantMemberResult,
  getMerchantMemberParameters,
  getMerchantMemberResult,
  listMerchantMembersParameters,
  listMerchantMembersResult,
  updateMerchantMemberParameters,
  updateMerchantMemberResult,
} from "./parameters";

export const createMerchantMember: ToolDefinition<
  typeof createMerchantMemberParameters,
  typeof createMerchantMemberResult
> = {
  name: "create_merchant_member",
  title: `Create a member`,
  description: `Create a merchant member.`,
  parameters: createMerchantMemberParameters,
  result: createMerchantMemberResult,
  callback: async (sumup: SumUp, { merchantCode, ...args }) => {
    return await sumup.members.create(merchantCode, args);
  },
  annotations: {
    title: `Create a member`,
    readOnly: false,
    destructive: false,
    idempotent: false,
  },
};

export const deleteMerchantMember: ToolDefinition<
  typeof deleteMerchantMemberParameters,
  typeof deleteMerchantMemberResult
> = {
  name: "delete_merchant_member",
  title: `Delete a member`,
  description: `Deletes a merchant member.`,
  parameters: deleteMerchantMemberParameters,
  result: deleteMerchantMemberResult,
  callback: async (sumup: SumUp, { merchantCode, memberId, ...args }) => {
    return await sumup.members.delete(merchantCode, memberId, args);
  },
  annotations: {
    title: `Delete a member`,
    readOnly: false,
    destructive: true,
    idempotent: false,
  },
};

export const getMerchantMember: ToolDefinition<
  typeof getMerchantMemberParameters,
  typeof getMerchantMemberResult
> = {
  name: "get_merchant_member",
  title: `Retrieve a member`,
  description: `Retrieve a merchant member.`,
  parameters: getMerchantMemberParameters,
  result: getMerchantMemberResult,
  callback: async (sumup: SumUp, { merchantCode, memberId, ...args }) => {
    return await sumup.members.get(merchantCode, memberId, args);
  },
  annotations: {
    title: `Retrieve a member`,
    readOnly: true,
    destructive: false,
    idempotent: false,
  },
};

export const listMerchantMembers: ToolDefinition<
  typeof listMerchantMembersParameters,
  typeof listMerchantMembersResult
> = {
  name: "list_merchant_members",
  title: `List members`,
  description: `Lists merchant members.`,
  parameters: listMerchantMembersParameters,
  result: listMerchantMembersResult,
  callback: async (sumup: SumUp, { merchantCode, ...args }) => {
    return await sumup.members.list(merchantCode, args);
  },
  annotations: {
    title: `List members`,
    readOnly: true,
    destructive: false,
    idempotent: false,
  },
};

export const updateMerchantMember: ToolDefinition<
  typeof updateMerchantMemberParameters,
  typeof updateMerchantMemberResult
> = {
  name: "update_merchant_member",
  title: `Update a member`,
  description: `Update the merchant member.`,
  parameters: updateMerchantMemberParameters,
  result: updateMerchantMemberResult,
  callback: async (sumup: SumUp, { merchantCode, memberId, ...args }) => {
    return await sumup.members.update(merchantCode, memberId, args);
  },
  annotations: {
    title: `Update a member`,
    readOnly: false,
    destructive: false,
    idempotent: true,
  },
};
