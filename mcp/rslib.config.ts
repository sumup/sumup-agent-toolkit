import { defineConfig } from "@rslib/core";

export default defineConfig({
  lib: [
    {
      format: "esm",
      syntax: "esnext",
    },
  ],
  output: {
    cleanDistPath: true,
    sourceMap: true,
    target: "node",
  },
});
