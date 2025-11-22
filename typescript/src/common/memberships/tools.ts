import type SumUp from "@sumup/sdk";
import type z from "zod";
import type { Tool } from "../types";

import { listMembershipsParameters, listMembershipsResult } from "./parameters";

export const listMemberships: Tool = {
  name: "list_memberships",
  title: `List memberships`,
  description: `List memberships of the current user.`,
  parameters: listMembershipsParameters,
  result: listMembershipsResult,
  callback: async (
    sumup: SumUp,
    args: z.infer<typeof listMembershipsParameters>,
  ) => {
    return await sumup.memberships.list(args);
  },
  annotations: {
    title: `List memberships`,
    readOnly: true,
    destructive: false,
    idempotent: false,
  },
};
