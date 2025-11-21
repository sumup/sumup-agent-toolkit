import type { ServerOptions } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import SumUp from "@sumup/sdk";
import type z from "zod";
import { tools, VERSION } from "../common";

class SumUpAgentToolkit extends McpServer {
  private _sumup: SumUp;

  constructor({
    apiKey,
    host,
  }: {
    apiKey: string;
    host?: string;
    configuration: ServerOptions;
  }) {
    super(
      {
        name: "SumUp",
        version: VERSION,
      },
      {
        capabilities: {
          resources: {},
          tools: {},
        },
      },
    );

    this._sumup = new SumUp({
      apiKey,
      host,
    });

    this.registerResource(
      "SumUp developer documentation",
      "https://developer.sumup.com/llms.txt",
      {
        mimeType: "text/plain",
      },
      async (uri) => {
        // TODO: use URI once new developer portal is rolled out.
        const content = await fetch("https://developer.sumup.com/llms.txt");
        return {
          contents: [
            {
              uri: uri.toString(),
              mimeType: "text/plain",
              text: await content.text(),
            },
          ],
        };
      },
    );

    this.registerResource(
      "SumUp API OpenAPI specification",
      "https://developer.sumup.com/openapi.json",
      {
        mimeType: "text/plain",
      },
      async (uri) => {
        // TODO: use URI once we serve the raw OpenAPI specs in the developer portal.
        const content = await fetch(
          "https://raw.githubusercontent.com/sumup/openapi/refs/heads/main/openapi.json",
        );
        return {
          contents: [
            {
              uri: uri.toString(),
              mimeType: "application/json",
              text: await content.text(),
            },
          ],
        };
      },
    );

    for (const tool of tools) {
      this.registerTool(
        tool.name,
        {
          description: tool.description,
          inputSchema: tool.parameters.shape,
        },
        async (args: z.infer<typeof tool.parameters>) => {
          const result = await tool.callback(this._sumup, args);
          return {
            content: [
              {
                type: "text" as const,
                text: result,
              },
            ],
          };
        },
      );
    }
  }
}

export default SumUpAgentToolkit;
