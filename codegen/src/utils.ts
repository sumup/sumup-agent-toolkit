const IDENTIFIER = /^[A-Za-z_$][A-Za-z0-9_$]*$/;

export function formatPropertyKey(name: string): string {
  return IDENTIFIER.test(name) ? name : JSON.stringify(name);
}

export function toTemplateLiteral(raw: string): string {
  const escaped = raw
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\${/g, "\\${");
  return `\`${escaped}\``;
}
