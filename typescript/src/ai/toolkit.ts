import SumUp from "@sumup/sdk";
import { type Tool, tool, zodSchema } from "ai";
import { registerTools } from "src/common";
import type z from "zod";

class SumUpAgentToolkit {
  private _sumup: SumUp;

  tools: { [key: string]: Tool };

  constructor({
    apiKey,
    host,
  }: {
    apiKey: string;
    host?: string;
  }) {
    this._sumup = new SumUp({ apiKey, host });
    this.tools = {};

    registerTools((t) => {
      this.tools[t.name] = tool<
        z.infer<typeof t.parameters>,
        z.infer<typeof t.result>
      >({
        name: t.name,
        description: t.description,
        inputSchema: zodSchema(t.parameters),
        outputSchema: zodSchema(t.result),
        execute: async (input: z.infer<typeof t.parameters>) => {
          const res = await t.callback(this._sumup, input);
          return JSON.stringify(res);
        },
      });
    });
  }

  getTools(): { [key: string]: Tool } {
    return this.tools;
  }
}

export default SumUpAgentToolkit;
