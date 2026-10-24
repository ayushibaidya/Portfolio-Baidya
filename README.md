# Ayushi Baidya — Software Engineering Portfolio

A React/Vite portfolio for 2027 software engineering recruiting, with four technical case studies and static HTML output for search engines, social previews, and visitors without JavaScript. Existing React, JavaScript, Tailwind, and Vite dependencies are retained; no runtime dependency was added.

## Local development

```sh
npm ci
npm run dev
```

## Production verification

```sh
npm run lint
npm run build
npm test
npm run preview
```

Run the build before tests. Tests inspect generated HTML for routes, fragment targets, assets, metadata, recruiting content, project status, sitemap, robots configuration, and resume privacy. They use Node's built-in test runner. There is no separate TypeScript check because this is a JavaScript/JSX application.

The production build creates `dist/index.html`, four `dist/projects/<slug>/index.html` pages, `dist/404.html`, `dist/sitemap.xml`, and `dist/robots.txt`. Serve the whole `dist/` directory with directory-index support. Project navigation uses ordinary links; no new router or catch-all rewrite is required.

## Content and design

- Update project descriptions, technologies, source URLs, contribution scope, development status, and contact links in `src/data/portfolio.js`.
- `src/pages/ProjectDetail.jsx` defines the shared case-study layout. `src/components/ProjectDiagram.jsx` renders accessible SVG architecture diagrams.
- Homepage sections remain in `src/sections/`. Styles, responsive layouts, focus treatment, print styles, and reduced-motion behavior live in `src/index.css`.
- `scripts/prerender.mjs` generates page HTML, route metadata, structured data, search discovery files, and the 404 page using the existing React renderer and Vite transform pipeline.
- The site origin is `profile.site`. Change it before building if the production domain changes.
- The social card source is `public/og-image.svg`; `public/og-image.png` is its 1200×630 browser-rendered sharing asset.

## Resume and source accuracy

The resume is strictly private. Never add its PDF, LaTeX source, document files, or contents to this website, public assets, metadata, API endpoints, hidden pages, or Git. Privately supplied reference material must remain uncommitted and outside served paths. The portfolio communicates education, experience, skills, and projects independently.

Navigation is Home, Projects, Experience, Skills, and About / Contact. Calls to action explore projects, open GitHub/LinkedIn, or contact Ayushi; there are no resume requests, viewing links, or downloads.

`.gitignore` excludes private-reference directories, resume/CV filenames, PDFs, LaTeX, and office documents. `npm run build` checks `public/` before bundling and the entire `dist/` afterward, rejecting private document names, PDF/LaTeX signatures, symlinks, and resume references in served text. Privacy tests also verify the navigation and ignore rules. Do not bypass these checks to publish reference material.

No resume/document files were found in the working tree or reachable local Git history during this update. If one is ever discovered in Git history, flag it for manual history review; deleting the current file does not erase past copies. This task did not rewrite history.

Device Health currently presents documented architecture and a planned stack. The Calendar repository was not publicly accessible; its case study preserves the original paired View/Controller scope and omits unverified time-zone/export claims. ShelfLife credits verified individual and team contributions. RTOS distinguishes working host/FreeRTOS simulation from future hardware deployment.

See [the audit and file map](docs/portfolio-audit.md) and [source verification and manual follow-up](docs/content-verification.md). Commit and push are authorized after local review; the resume privacy requirement continues to apply.

The completed local checks and browser/accessibility results are recorded in [validation results](docs/validation.md).
