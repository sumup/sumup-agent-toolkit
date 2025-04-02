import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { SumUpAgentToolkit } from "@sumup/agent-toolkit/mcp";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function handleError(error: any) {
  console.error("\n🚨  Error initializing SumUp MCP server:\n");
  console.error(`   ${error.message}\n`);
}

async function main() {
  const server = new SumUpAgentToolkit({
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    apiKey: process.env.SUMUP_API_KEY!,
    configuration: {},
  });

  const transport = new StdioServerTransport();
  await server.connect(transport);
  // stdio is used for communication, use stderr instead
  console.error("✅ SumUp MCP Server running on stdio");
}

main().catch((error) => {
  handleError(error);
});
