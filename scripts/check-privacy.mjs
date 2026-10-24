import { readdir, readFile } from "node:fs/promises";
import { basename, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const documentExtensions = new Set([
  ".pdf",
  ".tex",
  ".latex",
  ".ltx",
  ".doc",
  ".docx",
  ".odt",
  ".rtf",
]);
const privateName =
  /resume|résumé|curriculum[\s_-]*vitae|(?:^|[\s_.-])cv(?:$|[\s_.-])/i;
const textExtensions = new Set([
  ".html",
  ".js",
  ".css",
  ".json",
  ".map",
  ".xml",
  ".txt",
  ".svg",
]);

export function isPrivateDocumentPath(path) {
  return (
    documentExtensions.has(extname(path).toLowerCase()) ||
    privateName.test(basename(path))
  );
}

// Check both names and content so renaming a PDF or LaTeX file cannot publish it.
export async function assertPublicFilesSafe(directory) {
  let checked = 0;
  async function visit(current) {
    for (const entry of await readdir(current, { withFileTypes: true })) {
      const path = join(current, entry.name);
      if (
        isPrivateDocumentPath(path) ||
        /^(?:\.?private|private-reference)$/i.test(entry.name)
      ) {
        throw new Error(
          `Private document or reference path must not be publicly served: ${path}`,
        );
      }
      if (entry.isSymbolicLink())
        throw new Error(
          `Public asset symlinks require removal to avoid exposing private files: ${path}`,
        );
      if (entry.isDirectory()) {
        await visit(path);
        continue;
      }
      const data = await readFile(path);
      const header = data.subarray(0, 1024).toString("latin1");
      const text = data.toString("utf8");
      if (
        header.includes("%PDF-") ||
        /\\documentclass\b|\\begin\s*\{document\}/.test(text)
      ) {
        throw new Error(
          `Private document content must not be publicly served: ${path}`,
        );
      }
      if (
        textExtensions.has(extname(path).toLowerCase()) &&
        /\br[eé]sum[eé]\b|curriculum[\s_-]*vitae/i.test(text)
      ) {
        throw new Error(`Resume reference found in public output: ${path}`);
      }
      checked++;
    }
  }
  await visit(directory);
  return checked;
}

if (
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  const directory = resolve(process.argv[2] || "dist");
  const checked = await assertPublicFilesSafe(directory);
  console.log(
    `Privacy check passed: ${checked} files in ${basename(directory)}; no private documents or resume references.`,
  );
}
