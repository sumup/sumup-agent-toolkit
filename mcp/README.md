<div align="center">

# SumUp Model Context Protocol (MCP) Server

![MCP SumUp](https://img.shields.io/badge/MCP-SumUp-blue)
[![NPM Version](https://img.shields.io/npm/v/@sumup/mcp.svg)](https://www.npmjs.com/package/@sumup/mcp)

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

## License

[Apache 2.0](https://github.com/sumup/sumup-agent-toolkit/blob/main/LICENSE)

