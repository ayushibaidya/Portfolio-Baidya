# Validation results

Validated locally on October 24, 2026, before the separately authorized commit and push. Validation commands do not publish the site.

| Check                                 | Result                                                                                       |
| ------------------------------------- | -------------------------------------------------------------------------------------------- |
| `npm run lint`                        | Passed, no errors or warnings                                                                |
| `npm run build`                       | Passed; homepage, four case studies, 404, sitemap, and robots generated                      |
| `npm test`                            | Passed, 12/12 tests including privacy rejection cases                                        |
| `git diff --check`                    | Passed                                                                                       |
| Desktop/mobile browser layout         | Passed, 20 combinations: five public routes at 320, 390, 768, and 1440px                     |
| Horizontal overflow and image loading | None found across those 20 combinations                                                      |
| axe WCAG 2 A/AA, 2.1 AA, 2.2 AA scans | 12 scans passed, zero reported violations                                                    |
| Browser console / local asset errors  | None reported                                                                                |
| Mobile navigation                     | Open, close, Escape/focus return, and link selection passed                                  |
| Keyboard skip link                    | Focus and main-content destination passed                                                    |
| Expandable coursework                 | Open/close and expanded-state accessibility passed                                           |
| No-JavaScript reading                 | Prerendered content, project links, and mobile navigation passed                             |
| Unknown-page view                     | Recovery link and `noindex, follow` behavior passed                                          |
| Public-output privacy scans           | Passed: 7 files in `public/`, 17 files in `dist/`; no resume documents or references         |
| Resume/CV Git history review          | 91 reachable local historical blobs checked; no document names or PDF/LaTeX signatures found |

## What the automated checks cover

The committed Node tests check static, readable HTML; a single primary heading; unique titles and descriptions; canonical/social URLs; structured data; internal routes and fragment destinations; local image/script assets; recruiting dates and contact details; development-status labels; sitemap; robots; favicon; and the sharing image. Privacy tests scan the complete output, enforce the five requested navigation links, verify Git ignore rules and tracked files, and exercise rejection of synthetic document names, renamed PDF/LaTeX content, hidden resume links, and resume metadata. Test fixtures contain no personal resume data and are created in temporary directories and removed. Run `npm run build` before `npm test`.

Browser QA used temporary Playwright and axe packages under `/tmp/portfolio-qa` with the installed Google Chrome. These tools were not added to the portfolio's dependencies. Five routes were checked at all four widths; ten page scans at desktop/mobile plus the open navigation and expanded coursework produced the twelve accessibility scans. Representative desktop/mobile screenshots were visually reviewed.

## Practical limits

- Automated accessibility checks do not replace a complete manual assistive-technology review. Keyboard paths were exercised as described above.
- Lighthouse was not run; no Lighthouse scores are claimed.
- No separate type-check command exists in this JavaScript/JSX project.
- Project-repository tests were inspected for content accuracy, not executed as part of portfolio validation.
- GitHub source paths were checked through public repository APIs and raw files. The supplied Calendar repository returned 404 and has no public button. The unverified ShelfLife live demo is omitted. LinkedIn is retained exactly as provided by the user.
- The resume must remain private. All resume links and request buttons were removed; public source, metadata, and generated assets are checked for exposure.
- Hosting and post-deployment behavior have not been tested because deployment was explicitly excluded from this task.
