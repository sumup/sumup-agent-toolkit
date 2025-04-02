import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["./src/langchain/index.ts"],
    outDir: "./dist/langchain",
    format: ["cjs", "esm"],
    dts: true,
    sourcemap: true,
  },
  {
    entry: ["./src/mcp/index.ts"],
    outDir: "./dist/mcp",
    format: ["cjs", "esm"],
    dts: true,
    sourcemap: true,
  },
  {
    entry: ["./src/openai/index.ts"],
    outDir: "./dist/openai",
    format: ["cjs", "esm"],
    dts: true,
    sourcemap: true,
  },
  {
    entry: ["./src/ai/index.ts"],
    outDir: "./dist/ai",
    format: ["cjs", "esm"],
    dts: true,
    sourcemap: true,
  },
]);
