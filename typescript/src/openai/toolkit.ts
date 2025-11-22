import { type FunctionTool, tool } from "@openai/agents";
import SumUp from "@sumup/sdk";
import { tools } from "../common";

class SumUpAgentToolkit {
  private _sumup: SumUp;

  tools: FunctionTool[];

  constructor({
    apiKey,
    host,
  }: {
    apiKey: string;
    host?: string;
  }) {
    this._sumup = new SumUp({
      apiKey,
      host,
    });

    this.tools = tools.map(
      ({ name, description, parameters, callback, annotations }) =>
        tool({
          name,
          description,
          parameters,
          needsApproval: !!annotations?.destructive,
          execute: async (input) => {
            const res = await callback(this._sumup, input);
            return JSON.stringify(res);
          },
        }),
    );
  }

  getTools(): FunctionTool[] {
    return this.tools;
  }
}

export default SumUpAgentToolkit;
