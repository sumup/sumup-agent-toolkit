import type SumUp from "@sumup/sdk";
import type { ZodTypeAny } from "zod";
import type { ZodRawShape, z } from "zod";

export interface Action<TActionSchema extends z.ZodSchema = z.ZodSchema> {
  name: string;
  description: string;
  schema: TActionSchema;
  invoke: (sumup: SumUp, args: z.infer<TActionSchema>) => Promise<string>;
}

export type ToolCallback<Args extends ZodRawShape = ZodRawShape> = (
  sumup: SumUp,
  args: z.objectOutputType<Args, ZodTypeAny>,
) => Promise<string>;

export type Tool<Args extends ZodRawShape = ZodRawShape> = {
  name: string;
  description: string;
  parameters: Args;
  callback: ToolCallback<Args>;
};
