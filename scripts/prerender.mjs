import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { createServer } from "vite";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { projects, profile } from "../src/data/portfolio.js";
import { getMetadata } from "../src/data/metadata.js";

const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
const template = await readFile(resolve("dist/index.html"), "utf8");
const server = await createServer({
  server: { middlewareMode: true, hmr: false, ws: false, watch: null },
  appType: "custom",
});

try {
  const { default: App } = await server.ssrLoadModule("/src/App.jsx");
  const pages = [
    { path: "/", file: "index.html" },
    ...projects.map((project) => ({
      path: `/projects/${project.slug}/`,
      file: `projects/${project.slug}/index.html`,
      project,
    })),
    { path: "/404", file: "404.html", notFound: true },
  ];
  for (const page of pages) {
    const metadata = getMetadata(page.project, page.notFound);
    let html = template.replace(
      '<div id="root"></div>',
      `<div id="root" data-route="${page.path}">${renderToString(createElement(App, { path: page.path }))}</div>`,
    );
    html = html.replace(
      /<title>.*?<\/title>/s,
      `<title>${escape(metadata.title)}</title>`,
    );
    for (const [attribute, key, value] of [
      ["name", "description", metadata.description],
      ["property", "og:title", metadata.title],
      ["property", "og:description", metadata.description],
      ["property", "og:url", metadata.url],
      ["name", "twitter:title", metadata.title],
      ["name", "twitter:description", metadata.description],
      ["name", "robots", page.notFound ? "noindex, follow" : "index, follow"],
    ])
      html = html.replace(
        new RegExp(`<meta\\s+${attribute}="${key}"\\s+content="[^"]*"\\s*/?>`),
        `<meta ${attribute}="${key}" content="${escape(value)}" />`,
      );
    html = html.replace(
      /<link rel="canonical" href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${metadata.url}" />`,
    );
    if (!page.notFound) {
      const schema = {
        "@context": "https://schema.org",
        "@type": page.project ? "CreativeWork" : "ProfilePage",
        name: page.project?.name || profile.name,
        description: metadata.description,
        url: metadata.url,
        ...(page.project
          ? { author: { "@type": "Person", name: profile.name } }
          : {
              mainEntity: {
                "@type": "Person",
                name: profile.name,
                url: profile.site,
                sameAs: [profile.github, profile.linkedin],
                homeLocation: { "@type": "Place", name: "Boston, MA" },
              },
            }),
      };
      html = html.replace(
        "</head>",
        `<script type="application/ld+json">${JSON.stringify(schema).replaceAll("<", "\\u003c")}</script></head>`,
      );
    }
    const output = resolve("dist", page.file);
    await mkdir(resolve(output, ".."), { recursive: true });
    await writeFile(output, html);
    console.log(`Prerendered ${page.path}`);
  }
  const urls = [
    "/",
    ...projects.map((project) => `/projects/${project.slug}/`),
  ];
  await writeFile(
    resolve("dist/sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((path) => `  <url><loc>${profile.site}${path}</loc></url>`).join("\n")}\n</urlset>\n`,
  );
  await writeFile(
    resolve("dist/robots.txt"),
    `User-agent: *\nAllow: /\nSitemap: ${profile.site}/sitemap.xml\n`,
  );
} finally {
  await server.close();
}
