<div align="center">

# SumUp Agent Toolkit

[![Documentation][docs-badge]](https://developer.sumup.com)
[![License](https://img.shields.io/github/license/sumup/sumup-agent-toolkit)](./LICENSE)

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

[docs-badge]: https://img.shields.io/badge/SumUp-documentation-white.svg?logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgY29sb3I9IndoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPHBhdGggZD0iTTIyLjI5IDBIMS43Qy43NyAwIDAgLjc3IDAgMS43MVYyMi4zYzAgLjkzLjc3IDEuNyAxLjcxIDEuN0gyMi4zYy45NCAwIDEuNzEtLjc3IDEuNzEtMS43MVYxLjdDMjQgLjc3IDIzLjIzIDAgMjIuMjkgMFptLTcuMjIgMTguMDdhNS42MiA1LjYyIDAgMCAxLTcuNjguMjQuMzYuMzYgMCAwIDEtLjAxLS40OWw3LjQ0LTcuNDRhLjM1LjM1IDAgMCAxIC40OSAwIDUuNiA1LjYgMCAwIDEtLjI0IDcuNjlabTEuNTUtMTEuOS03LjQ0IDcuNDVhLjM1LjM1IDAgMCAxLS41IDAgNS42MSA1LjYxIDAgMCAxIDcuOS03Ljk2bC4wMy4wM2MuMTMuMTMuMTQuMzUuMDEuNDlaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+
