import type { Tool } from "../types";

import { listMembershipsParameters } from "./parameters";

export const listMemberships: Tool = {
  name: "list_memberships",
  description: `List memberships of the current user.`,
  parameters: listMembershipsParameters,
  callback: async (sumup, args) => {
    const res = await sumup.memberships.list(args);
    return JSON.stringify(res);
  },
};
