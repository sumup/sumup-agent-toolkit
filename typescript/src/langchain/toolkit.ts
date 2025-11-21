import {
  type BaseToolkit,
  type StructuredTool,
  tool,
} from "@langchain/core/tools";
import SumUp from "@sumup/sdk";
import { tools } from "../common";

class SumUpAgentToolkit implements BaseToolkit {
  private _sumup: SumUp;

  tools: StructuredTool[];

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

    this.tools = tools.map((t) =>
      tool(
        async (input): Promise<string> => {
          return await t.callback(
            this._sumup,
            input as Record<string, unknown>,
          );
        },
        {
          name: t.name,
          description: t.description,
          schema: t.parameters,
        },
      ),
    );
  }

  getTools(): StructuredTool[] {
    return this.tools;
  }
}

export default SumUpAgentToolkit;
