import { readFile, access } from "node:fs/promises";
import { resolve } from "node:path";
import assert from "node:assert/strict";
import test from "node:test";
import { projects, profile } from "../src/data/portfolio.js";

const routes = [
  "/",
  ...projects.map((project) => `/projects/${project.slug}/`),
];
const documents = new Map(
  await Promise.all(
    routes.map(async (route) => [
      route,
      await readFile(resolve("dist", `.${route}index.html`), "utf8"),
    ]),
  ),
);

test("all public routes contain readable HTML and route-specific SEO before JavaScript", () => {
  const titles = new Set();
  const descriptions = new Set();
  for (const [route, html] of documents) {
    assert.equal(
      (html.match(/<h1\b/g) || []).length,
      1,
      `${route}: exactly one primary heading`,
    );
    assert.match(html, /<main id="main"/);
    assert.match(html, /<meta name="description" content="[^"]{50,}"/);
    assert.ok(
      html.includes(`<link rel="canonical" href="${profile.site}${route}"`),
      `${route}: canonical URL`,
    );
    assert.ok(
      html.includes(
        `<meta property="og:url" content="${profile.site}${route}"`,
      ),
      `${route}: social URL`,
    );
    assert.match(html, /<script type="application\/ld\+json">/);
    titles.add(html.match(/<title>(.*?)<\/title>/)[1]);
    descriptions.add(
      html.match(/<meta name="description" content="([^"]*)"/)[1],
    );
    if (route !== "/") assert.match(html, /My contributions/);
  }
  assert.equal(titles.size, routes.length, "each page has a unique title");
  assert.equal(
    descriptions.size,
    routes.length,
    "each page has a unique description",
  );
});

test("internal navigation, fragment destinations, and image assets resolve", async () => {
  for (const [route, html] of documents) {
    for (const [, href] of html.matchAll(/<a\b[^>]*\bhref="([^"]*)"/g)) {
      const url = new URL(href, `${profile.site}${route}`);
      if (url.origin !== profile.site) continue;
      const destination = documents.get(url.pathname);
      assert.ok(destination, `${route}: route ${url.pathname} exists`);
      if (url.hash)
        assert.ok(
          destination.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),
          `${route}: target ${href} exists`,
        );
    }
    for (const [, src] of html.matchAll(
      /<(?:img|script)\b[^>]*\bsrc="([^"]*)"/g,
    )) {
      if (src.startsWith("/")) await access(resolve("dist", `.${src}`));
    }
    assert.doesNotMatch(
      html,
      /href="(?:#"|javascript:|https:\/\/github.com\/your)/,
    );
  }
});

test("recruiting dates, contact details, and project progress remain accurate", () => {
  const home = documents.get("/");
  assert.match(home, /September 2025 – May 2027/);
  assert.match(home, /CRM Operations Analyst/);
  assert.match(home, /Salesforce Support Analyst Intern/);
  assert.match(home, /baidya\.ay@gmail\.com/);
  assert.doesNotMatch(
    home,
    /Aug 2025|Apr 2027|baidya\.ay@northeastern/,
  );
  assert.match(home, /Explore Projects/);
  assert.match(home, /View GitHub/);
  assert.match(home, /Connect on LinkedIn/);
  assert.match(home, /Contact Me/);
  const device = documents.get("/projects/device-health/");
  assert.match(device, /Not yet implemented/);
  assert.match(
    device,
    /No simulator, Kafka consumer, ML pipeline, API, dashboard, or deployment is implemented/,
  );
  assert.match(
    documents.get("/projects/shelflife/"),
    /collaborator contributions/,
  );
  assert.match(
    documents.get("/projects/mvc-calendar/"),
    /Public source is currently unavailable/,
  );
});

test("search discovery and the not-found page match the public routes", async () => {
  const sitemap = await readFile(resolve("dist/sitemap.xml"), "utf8");
  for (const route of routes)
    assert.ok(sitemap.includes(`<loc>${profile.site}${route}</loc>`));
  assert.equal((sitemap.match(/<url>/g) || []).length, routes.length);
  assert.match(
    await readFile(resolve("dist/robots.txt"), "utf8"),
    /Sitemap: https:\/\/portfolio-baidya\.vercel\.app\/sitemap.xml/,
  );
  assert.match(
    await readFile(resolve("dist/404.html"), "utf8"),
    /content="noindex, follow"/,
  );
  await access(resolve("dist/favicon.svg"));
  await access(resolve("dist/og-image.png"));
});
