import { SumUpAgentToolkit } from "@sumup/agent-toolkit/openai";
import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources";

require("dotenv").config();

const openai = new OpenAI();

const sumupAgentToolkit = new SumUpAgentToolkit({
  apiKey: process.env.SUMUP_API_KEY!,
});

(async (): Promise<void> => {
  let messages: ChatCompletionMessageParam[] = [
    {
      role: "user",
      content: "Tell me about my last 10 transactions please.",
    },
  ];

  while (true) {
    // eslint-disable-next-line no-await-in-loop
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages,
      tools: sumupAgentToolkit.getTools(),
    });

    const message = completion.choices[0].message;

    messages.push(message);

    if (message.tool_calls) {
      // eslint-disable-next-line no-await-in-loop
      const toolMessages = await Promise.all(
        message.tool_calls.map((tc) => sumupAgentToolkit.handleToolCall(tc)),
      );
      messages = [...messages, ...toolMessages];
    } else {
      console.log(completion.choices[0].message);
      break;
    }
  }
})();
