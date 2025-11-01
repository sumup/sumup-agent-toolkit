import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import process from "node:process";

const root = process.cwd();
const packageJsonPath = resolve(root, "package.json");
const serverJsonPath = resolve(root, "server.json");

const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));
const serverJson = JSON.parse(readFileSync(serverJsonPath, "utf8"));

const version = packageJson.version;

serverJson.version = version;

if (Array.isArray(serverJson.packages)) {
  serverJson.packages = serverJson.packages.map((pkg) => {
    if (pkg && typeof pkg === "object") {
      return { ...pkg, version };
    }
    return pkg;
  });
}

writeFileSync(serverJsonPath, `${JSON.stringify(serverJson, null, 2)}\n`);
