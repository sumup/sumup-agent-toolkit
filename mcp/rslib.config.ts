import { defineConfig } from "@rslib/core";
import { pluginPublint } from "rsbuild-plugin-publint";

export default defineConfig({
  lib: [
    {
      format: "esm",
      syntax: "esnext",
    },
  ],
  output: {
    cleanDistPath: true,
    target: "node",
  },
  plugins: [pluginPublint()],
});
