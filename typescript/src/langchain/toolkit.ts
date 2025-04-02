import {
  type BaseToolkit,
  type StructuredTool,
  tool,
} from "@langchain/core/tools";
import SumUp from "@sumup/sdk";
import z from "zod";
import { tools } from "../common";

class SumUpAgentToolkit implements BaseToolkit {
  private _sumup: SumUp;

  tools: StructuredTool[];

  constructor({
    apiKey,
  }: {
    apiKey: string;
  }) {
    this._sumup = new SumUp({
      apiKey,
    });

    this.tools = tools.map((t) =>
      tool(
        async (input): Promise<string> => {
          return await t.callback(this._sumup, input);
        },
        {
          name: t.name,
          description: t.description,
          schema: z.object(t.parameters),
        },
      ),
    );
  }

  getTools(): StructuredTool[] {
    return this.tools;
  }
}

export default SumUpAgentToolkit;
