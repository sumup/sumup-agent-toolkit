import fs from "node:fs";
import path from "node:path";

const packageJsonPath = path.resolve(__dirname, "../package.json");
const constFilePath = path.resolve(__dirname, "../src/common/const.ts");

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
const newVersion = packageJson.version;

if (!newVersion) {
  console.error("Error: version not found in package.json");
  process.exit(1);
}

const constFileContent = fs.readFileSync(constFilePath, "utf8");

const updatedContent = constFileContent.replace(
  /export const VERSION = "[^"]+";/,
  `export const VERSION = "${newVersion}";`,
);

fs.writeFileSync(constFilePath, updatedContent, "utf8");

console.log(`Updated VERSION in const.ts to ${newVersion}`);
