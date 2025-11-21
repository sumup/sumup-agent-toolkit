import SumUp from "@sumup/sdk";
import { type Tool, tool } from "ai";
import { tools } from "../common";

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

    for (const t of tools) {
      this.tools[t.name] = tool({
        description: t.description,
        parameters: t.parameters,
        execute: async (args) => {
          return await t.callback(this._sumup, args);
        },
      });
    }
  }

  getTools(): { [key: string]: Tool } {
    return this.tools;
  }
}

export default SumUpAgentToolkit;
