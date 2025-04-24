<div align="center">

# SumUp Agent Toolkit - Typescript

Allow LLM agents to integrate with the SumUp API using function calling from frameworks such as [LangChain](https://www.langchain.com/), and [Vercel's AI SDK](https://sdk.vercel.ai/). For full documentation, see [sumup.github.io/sumup-agent-toolkit](https://sumup.github.io/sumup-agent-toolkit/).

[![NPM Version](https://img.shields.io/npm/v/@sumup/agent-toolkit.svg)](https://www.npmjs.org/package/@sumup/agent-toolkit)
[![JSR Version](https://jsr.io/badges/@sumup/agent-toolkit)](https://jsr.io/@sumup/agent-toolkit)

</div>

## Install

Install SumUp Agent Toolkit using:

```sh
npm install @sumup/agent-toolkit
# or
yarn add @sumup/agent-toolkit
```

## [LangChain](https://www.langchain.com/)

```ts
import { SumUpAgentToolkit } from '@sumup/agent-toolkit/langchain';
import { AgentExecutor, createStructuredChatAgent } from 'langchain/agents';

const sumupAgentToolkit = new SumUpAgentToolkit({
  apiKey: process.env.SUMUP_API_KEY!,
});

const llm = new ChatOpenAI({
  model: 'gpt-4o',
});

const prompt = await pull<ChatPromptTemplate>(
  'hwchase17/structured-chat-agent'
);

const tools = sumupAgentToolkit.getTools();

const agent = await createStructuredChatAgent({
  llm,
  tools,
  prompt,
});

const agentExecutor = new AgentExecutor({
  agent,
  tools,
});

const response = await agentExecutor.invoke({
  input: "Tell me about my last 10 transactions please.",
});
```

For full example see [Langchain Example](./examples/langchain/).

## [AI SDK](https://sdk.vercel.ai/)

```ts
import { SumUpAgentToolkit } from '@sumup/agent-toolkit/langchain';
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

const sumupAgentToolkit = new SumUpAgentToolkit({
  apiKey: process.env.SUMUP_API_KEY!,
});

const model = openai("gpt-4o");

const response = await generateText({
  model: model,
  tools: {
    ...sumupAgentToolkit.getTools(),
  },
  maxSteps: 5,
  prompt: "Tell me about my last 10 transactions please.",
});
```

For full example see [AI SDK Example](./examples/ai/).

## [OpenAI](https://github.com/openai/openai-node)

```ts
import { SumUpAgentToolkit } from "@sumup/agent-toolkit/openai";
import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources";

const openai = new OpenAI();

const sumupAgentToolkit = new SumUpAgentToolkit({
  apiKey: process.env.SUMUP_API_KEY!,
});

let messages: ChatCompletionMessageParam[] = [
  {
    role: "user",
    content: "Tell me about my last 10 transactions please.",
  },
];

const completion = await openai.chat.completions.create({
  model: "gpt-4o",
  messages,
  tools: sumupAgentToolkit.getTools(),
});

const message = completion.choices[0].message;

messages.push(message);

if (message.tool_calls) {
  const toolMessages = await Promise.all(
    message.tool_calls.map((tc) => sumupAgentToolkit.handleToolCall(tc)),
  );
  messages = [...messages, ...toolMessages];
} else {
  console.log(completion.choices[0].message);
  break;
}
```

For full example see [OpenAI Example](./examples/openai/).

## License

[Apache 2.0](https://github.com/sumup/sumup-agent-toolkit/blob/main/LICENSE)

