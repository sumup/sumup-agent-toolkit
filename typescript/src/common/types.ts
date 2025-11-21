import type SumUp from "@sumup/sdk";
import type { z } from "zod";

// biome-ignore lint/suspicious/noExplicitAny: necessary evil
type ZodObjectAny = z.ZodObject<any, any>;

export type Tool<Args extends ZodObjectAny = ZodObjectAny> = {
  name: string;
  description: string;
  parameters: Args;
  callback: (sumup: SumUp, args: z.output<Args>) => Promise<string>;
};
