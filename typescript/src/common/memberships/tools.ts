import type SumUp from "@sumup/sdk";
import type z from "zod";
import type { Tool } from "../types";

import { listMembershipsParameters } from "./parameters";

export const listMemberships: Tool = {
  name: "list_memberships",
  description: `List memberships of the current user.`,
  parameters: listMembershipsParameters,
  callback: async (
    sumup: SumUp,
    args: z.infer<typeof listMembershipsParameters>,
  ) => {
    const res = await sumup.memberships.list(args);
    return JSON.stringify(res);
  },
};
