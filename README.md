<div align="center">

# SumUp Agent Toolkit

</div>

Enable AI Agents to interact with SumUp for smarter payment worfklows.

AgentKit is a toolkit that enhances AI applications like [Claude](https://claude.ai), [Cursor](https://www.cursor.com/) and other agentic AI applications with SumUp capabilities.

## Model Context Protocol

You can enhance applications that support [Model Context Protocol (MCP)](https://modelcontextprotocol.com/) such as [Claude](https://claude.ai), [Cursor](https://www.cursor.com/) with capabilities to interact with the SumUp API and documentation.

To run the SumUp MCP server, use:

```sh
SUMUP_API_KEY=YOUR_SUMUP_API_KEY npx -y @sumup/mcp
```

For more information, see [MCP installation instruction](/mcp/README.md#installation).

### Packages

- **[SumUp Agent Toolkit (Typescript)](typescript/README.md):** Typescript agent toolkit.
- **[SumUp Model Context Protocol (MCP) Server](mcp/README.md):** MCP Server that integrates with AI-powered code editors and apps such as Claude or Cursor.

## License

[Apache 2.0](LICENSE)
