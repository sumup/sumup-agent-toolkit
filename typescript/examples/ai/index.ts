import { openai } from "@ai-sdk/openai";
import { SumUpAgentToolkit } from "@sumup/agent-toolkit/ai";
import { generateText } from "ai";

require("dotenv").config();

const sumupAgentToolkit = new SumUpAgentToolkit({
  apiKey: process.env.SUMUP_API_KEY!,
});

const model = openai("gpt-4o");

(async () => {
  const result = await generateText({
    model: model,
    tools: {
      ...sumupAgentToolkit.getTools(),
    },
    maxSteps: 5,
    prompt: "Tell me about my last 5 transactions and their status.",
  });

  console.log(result);
})();
