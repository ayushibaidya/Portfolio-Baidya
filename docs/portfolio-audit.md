# Portfolio upgrade audit

Audit date: October 24, 2026. This audit covers local development and validation. Commit and push were authorized separately after review.

## Existing application

- React 19, Vite 6, JavaScript/JSX, Tailwind 3, and plain CSS. Single-page section navigation; no router, backend, test runner, or type-check command.
- Reusable section components, a warm rose/taupe palette, personal photo, school/company logos, a typing effect, animated background, and project animation.
- Installed Three.js packages were not imported into the application. Dependencies were retained and no runtime dependencies were added.
- `npm run build` passed before changes. `npm run lint` failed because `tailwind.config.js` used CommonJS `module.exports` in an ESM project.

## Findings before implementation

- Master's dates were `Aug 2025 – Apr 2027`; corrected to September 2025 – May 2027.
- Recruiting copy needed explicit timelines. The current portfolio states full-time software engineering roles starting in 2027 and internship/co-op opportunities in Spring 2027.
- Contact email was the Northeastern address instead of the supplied Gmail address.
- Hero lacked an engineering headline, clear graduation/location context, project/contact CTAs, and profile links.
- Featured projects had no repository links or case studies. Device Health was missing; MVC Calendar was buried in coursework.
- No resume file or resume link existed in the source or public assets. No current resume was inferred or fabricated.
- `/vite.svg` was referenced as a favicon but did not exist. Page description, social metadata, canonical links, sitemap, and robots configuration were absent.
- Fixed-width navigation had no mobile disclosure. Mandatory scroll snapping, a nested scrolling main, hidden body overflow, and full-screen sections impaired ordinary scrolling and reading.
- No skip link, explicit keyboard focus treatment, reduced-motion behavior, or intentional heading structure across wrapper sections.

## Implementation plan and outcome

1. Preserve the React/Vite stack, section components, warm palette, useful assets, and existing technical coursework.
2. Introduce a shared project/profile data source, verify public repositories and contribution history, and separate planned functionality from implementation.
3. Rework the homepage hierarchy around the requested headline and four engineering projects. Add consistent technical case studies with lightweight SVG diagrams.
4. Correct education, recruiting context, experience wording, contact details, and organized skill groups.
5. Add responsive navigation, focus states, semantic landmarks, native expandable coursework, reduced-motion support, and no-JavaScript navigation.
6. Prerender all public routes with React's existing server renderer so direct links, page content, metadata, and social previews are available without running JavaScript.
7. Fix the existing lint error; validate the production output, routes, fragments, assets, content constraints, responsive layouts, and accessibility.

## File map

- `src/data/portfolio.js`: profile links, project descriptions, contributions, status, source links, skill groups.
- `src/data/metadata.js`, `src/components/Metadata.jsx`: route-specific metadata.
- `src/App.jsx`, `src/main.jsx`: page selection and static HTML hydration.
- `src/sections/*.jsx`: homepage content, experience, education, skills, contact, retained coursework.
- `src/pages/ProjectDetail.jsx`: shared nine-part case-study structure.
- `src/components/Navbar.jsx`, `Footer.jsx`, `Icon.jsx`, `ProjectDiagram.jsx`: navigation, footer, icons, accessible diagrams.
- `src/index.css`: responsive visual system, focus styles, reduced-motion and print behavior.
- `scripts/prerender.mjs`: static pages, metadata, structured data, sitemap, robots, and 404 output.
- `tests/site.test.mjs`: production-output regression checks using Node's built-in test runner.
- `scripts/check-privacy.mjs`, `tests/privacy.test.mjs`, `.gitignore`: protect private reference material from commits and public build output.
- `public/favicon.svg`, `public/og-image.svg`, `public/og-image.png`: maintained vector favicon/social card and rendered sharing PNG.
- `index.html`, `package.json`, `tailwind.config.js`: metadata, build/test commands, ESM lint fix.

## Resume privacy requirement

The resume must remain private. No PDF, LaTeX source, copied resume contents, resume link, embed, metadata field, endpoint, or hidden page may be published. The navigation has exactly the five requested links. Resume actions were removed and replaced with Explore Projects, View GitHub, Connect on LinkedIn, and Contact Me.

No resume file existed locally, so there was no document to remove. Ignore rules cover private-reference directories, resume/CV names, and PDF, LaTeX, and office document formats. A build guard rejects private documents and resume references in `public/` and `dist/`, including renamed PDF/LaTeX files. Reachable local Git history was checked for document names and signatures; none were found. Previously committed documents, if later discovered, require manual Git history review. Current-file deletion would not erase historical copies.

See [content verification](content-verification.md) for evidence and limitations.
