import SumUp from "@sumup/sdk";
import type {
  ChatCompletionMessageToolCall,
  ChatCompletionTool,
  ChatCompletionToolMessageParam,
} from "openai/resources";
import z from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { tools } from "../common";

class SumUpAgentToolkit {
  private _sumup: SumUp;

  tools: ChatCompletionTool[];

  constructor({
    apiKey,
  }: {
    apiKey: string;
  }) {
    this._sumup = new SumUp({
      apiKey,
    });

    this.tools = tools.map(
      ({ name, description, parameters }) =>
        ({
          type: "function",
          function: {
            name,
            description,
            parameters: zodToJsonSchema(z.object(parameters)),
          },
        }) as ChatCompletionTool,
    );
  }

  getTools(): ChatCompletionTool[] {
    return this.tools;
  }

  /**
   * Handle a single OpenAI tool call by executing the requested function.
   */
  async handleToolCall(
    toolCall: ChatCompletionMessageToolCall,
  ): Promise<ChatCompletionToolMessageParam> {
    const args = JSON.parse(toolCall.function.arguments);
    const tool = tools.find(({ name }) => name === toolCall.function.name);

    const response = await tool?.callback(this._sumup, args);
    return {
      role: "tool",
      tool_call_id: toolCall.id,
      content: response,
    } as ChatCompletionToolMessageParam;
  }
}

export default SumUpAgentToolkit;
