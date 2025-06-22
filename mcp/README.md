<div align="center">

# SumUp Model Context Protocol (MCP) Server

![MCP SumUp](https://img.shields.io/badge/MCP-SumUp-blue)
[![NPM Version](https://img.shields.io/npm/v/@sumup/mcp.svg)](https://www.npmjs.com/package/@sumup/mcp)
[![Documentation][docs-badge]](https://developer.sumup.com)
[![License](https://img.shields.io/github/license/sumup/sumup-agent-toolkit)](../LICENSE)

</div>

[Model Context Protocol (MCP)](https://modelcontextprotocol.io) is a [standardized protocol](https://modelcontextprotocol.io/introduction) designed to manage context between large language models (LLMs) and external systems.

## Prerequisites

The SumUp Model Context Protocol (MCP) Server requires Node.js LTS version to run properly.

## Setup

To run the SumUp Model Context Protocol (MCP) Server using [Node.js npx](https://docs.npmjs.com/cli/v10/commands/npx), use the following command:

```sh
npx -y @sumup/mcp@latest
```

## Installation

### [Cursor](https://www.cursor.com/)

1. Go to `Cursor Settings` > `MCP`
2. Click `+ Add new Global MCP Server`
3. Add the following configuration to your global `.cursor/mcp.json` file.

```json
{
  "mcpServers": {
    "sumup": {
      "command": "npx",
      "args": [
          "-y",
          "@sumup/mcp"
      ],
      "env": {
      	"SUMUP_API_KEY": "sup_sk_..."
      }
    }
  }
}
```

See the [Cursor documentation](https://docs.cursor.com/context/model-context-protocol) for more details. Note: You can also add this to your project specific cursor configuration. (Supported in Cursor 0.46+)

### [Claude](https://claude.ai)

Add the following to your `claude_desktop_config.json` file. See the [Claude Desktop documentation](https://modelcontextprotocol.io/quickstart/user) for more details.

```json
{
  "mcpServers": {
    "sumup": {
      "command": "npx",
      "args": [
          "-y",
          "@sumup/mcp"
      ],
      "env": {
      	"SUMUP_API_KEY": "sup_sk_..."
      }
    }
  }
}
```

[docs-badge]: https://img.shields.io/badge/SumUp-documentation-white.svg?logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgY29sb3I9IndoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPHBhdGggZD0iTTIyLjI5IDBIMS43Qy43NyAwIDAgLjc3IDAgMS43MVYyMi4zYzAgLjkzLjc3IDEuNyAxLjcxIDEuN0gyMi4zYy45NCAwIDEuNzEtLjc3IDEuNzEtMS43MVYxLjdDMjQgLjc3IDIzLjIzIDAgMjIuMjkgMFptLTcuMjIgMTguMDdhNS42MiA1LjYyIDAgMCAxLTcuNjguMjQuMzYuMzYgMCAwIDEtLjAxLS40OWw3LjQ0LTcuNDRhLjM1LjM1IDAgMCAxIC40OSAwIDUuNiA1LjYgMCAwIDEtLjI0IDcuNjlabTEuNTUtMTEuOS03LjQ0IDcuNDVhLjM1LjM1IDAgMCAxLS41IDAgNS42MSA1LjYxIDAgMCAxIDcuOS03Ljk2bC4wMy4wM2MuMTMuMTMuMTQuMzUuMDEuNDlaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+
