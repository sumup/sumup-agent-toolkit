import type SumUp from "@sumup/sdk";
import type z from "zod";
import type { Tool } from "../types";

import {
  createMerchantMemberParameters,
  deleteMerchantMemberParameters,
  getMerchantMemberParameters,
  listMerchantMembersParameters,
  updateMerchantMemberParameters,
} from "./parameters";

export const listMerchantMembers: Tool = {
  name: "list_merchant_members",
  description: `Lists merchant members.`,
  parameters: listMerchantMembersParameters,
  callback: async (
    sumup: SumUp,
    { merchant_code, ...args }: z.infer<typeof listMerchantMembersParameters>,
  ) => {
    const res = await sumup.members.list(merchant_code, args);
    return JSON.stringify(res);
  },
};

export const createMerchantMember: Tool = {
  name: "create_merchant_member",
  description: `Create a merchant member.`,
  parameters: createMerchantMemberParameters,
  callback: async (
    sumup: SumUp,
    { merchant_code, ...args }: z.infer<typeof createMerchantMemberParameters>,
  ) => {
    const res = await sumup.members.create(merchant_code, args);
    return JSON.stringify(res);
  },
};

export const getMerchantMember: Tool = {
  name: "get_merchant_member",
  description: `Retrieve a merchant member.`,
  parameters: getMerchantMemberParameters,
  callback: async (
    sumup: SumUp,
    {
      merchant_code,
      member_id,
      ...args
    }: z.infer<typeof getMerchantMemberParameters>,
  ) => {
    const res = await sumup.members.get(merchant_code, member_id, args);
    return JSON.stringify(res);
  },
};

export const updateMerchantMember: Tool = {
  name: "update_merchant_member",
  description: `Update the merchant member.`,
  parameters: updateMerchantMemberParameters,
  callback: async (
    sumup: SumUp,
    {
      merchant_code,
      member_id,
      ...args
    }: z.infer<typeof updateMerchantMemberParameters>,
  ) => {
    const res = await sumup.members.update(merchant_code, member_id, args);
    return JSON.stringify(res);
  },
};

export const deleteMerchantMember: Tool = {
  name: "delete_merchant_member",
  description: `Deletes a merchant member.`,
  parameters: deleteMerchantMemberParameters,
  callback: async (
    sumup: SumUp,
    {
      merchant_code,
      member_id,
      ...args
    }: z.infer<typeof deleteMerchantMemberParameters>,
  ) => {
    const res = await sumup.members.delete(merchant_code, member_id, args);
    return JSON.stringify(res);
  },
};
