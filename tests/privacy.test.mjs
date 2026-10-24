import { mkdtemp, rm, writeFile, readFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import assert from "node:assert/strict";
import test from "node:test";
import {
  assertPublicFilesSafe,
  isPrivateDocumentPath,
} from "../scripts/check-privacy.mjs";

test("the complete production output contains no private documents or resume references", async () => {
  assert.ok((await assertPublicFilesSafe("dist")) > 0);
  assert.ok((await assertPublicFilesSafe("public")) > 0);
});

test("navigation contains exactly the requested five links on every generated page", async () => {
  const paths = [
    "index.html",
    ...["shelflife", "device-health", "mvc-calendar", "rtos-motion"].map(
      (slug) => `projects/${slug}/index.html`,
    ),
    "404.html",
  ];
  for (const path of paths) {
    const html = await readFile(join("dist", path), "utf8");
    const nav = html.match(
      /<nav[^>]*id="primary-navigation"[^>]*>(.*?)<\/nav>/s,
    )?.[1];
    assert.ok(nav, `${path}: main navigation exists`);
    assert.deepEqual(
      [...nav.matchAll(/<a\b[^>]*>(.*?)<\/a>/gs)].map((match) => match[1]),
      ["Home", "Projects", "Experience", "Skills", "About / Contact"],
    );
    assert.doesNotMatch(
      html,
      /<a\b[^>]*\bdownload\b|<(?:iframe|embed|object)\b/i,
    );
  }
});

test("privacy rules reject document names, renamed document contents, and hidden links", async (t) => {
  const candidates = [
    "public/AyushiBaidya.PDF",
    "public/cv.pdf",
    "references/Resume.DOCX",
    "references/Resume.md",
    "private-reference/reference.md",
    "notes/source.tex",
    "notes/source.LaTeX",
  ];
  for (const path of candidates) {
    const ignored = execFileSync(
      "git",
      ["check-ignore", "--no-index", "--stdin"],
      { input: `${path}\n`, encoding: "utf8" },
    ).trim();
    assert.equal(ignored, path, `${path}: ignored by Git`);
  }
  const tracked = execFileSync("git", ["ls-files", "-z"], { encoding: "utf8" })
    .split("\0")
    .filter(Boolean);
  assert.deepEqual(
    tracked.filter(isPrivateDocumentPath),
    [],
    "no private documents are tracked",
  );
  for (const [name, content] of [
    ["resume.pdf", "Harmless document-name test fixture"],
    ["image.png", "%PDF-1.7\nHarmless PDF-signature test fixture"],
    [
      "notes.txt",
      "\\documentclass{article}\n\\begin{document}\nHarmless LaTeX-signature test fixture",
    ],
    ["hidden.html", '<a hidden href="/resume">View resume</a>'],
    ["metadata.json", '{"resume":"/private-document"}'],
  ]) {
    await t.test(name, async () => {
      const directory = await mkdtemp(join(tmpdir(), "portfolio-privacy-"));
      try {
        await writeFile(join(directory, name), content);
        await assert.rejects(
          assertPublicFilesSafe(directory),
          /Private document|Resume reference/,
        );
      } finally {
        await rm(directory, { recursive: true, force: true });
      }
    });
  }
});
