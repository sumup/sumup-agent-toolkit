import type SumUp from "@sumup/sdk";
import type { z } from "zod";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type ZodObjectAny = z.ZodObject<any, any, any, any>;

export type Tool<Args extends ZodObjectAny = ZodObjectAny> = {
  name: string;
  description: string;
  parameters: Args;
  callback: (sumup: SumUp, args: z.output<Args>) => Promise<string>;
};
