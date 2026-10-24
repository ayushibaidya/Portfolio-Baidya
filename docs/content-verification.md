# Content verification

Sources were inspected on October 24, 2026. Public GitHub APIs/raw files were used because browser search returned stale or unavailable pages. Project tests were inspected as evidence of test assets, not executed or reported as passing. No project benchmarks, production availability, model accuracy, or fabricated screenshots are published.

## ShelfLife

- [Repository](https://github.com/Puranjay-del-Mishra/ShelfLife)
- [Go API](https://github.com/Puranjay-del-Mishra/ShelfLife/blob/main/backend/cmd/api/main.go): Gin, authenticated settings, user-scoped PostgreSQL operations, input checks, and subscription upserts.
- [Authentication middleware](https://github.com/Puranjay-del-Mishra/ShelfLife/blob/main/backend/internal/auth/middleware.go): Supabase JWT verification.
- [Connection pool](https://github.com/Puranjay-del-Mishra/ShelfLife/blob/main/backend/internal/db/pool.go): pgx pool.
- [WebSocket hub](https://github.com/Puranjay-del-Mishra/ShelfLife/blob/main/backend/internal/ws/hub.go): per-user clients and mutex protection.
- [Deployment workflow](https://github.com/Puranjay-del-Mishra/ShelfLife/blob/main/.github/workflows/deploy-backend.yml): EC2 SSH deployment, Go build, systemd restart. This verifies deployment automation, not current production uptime.
- [Backend history](https://github.com/Puranjay-del-Mishra/ShelfLife/commits/main/backend/): commits `8e79c67a39` and `ffb97507fa` attribute the initial API/migrations and push registration to Ayushi's account; `b25d99da38` attributes tests/documentation. Other commits attribute WebSocket wiring and follow-up settings work to Puranjay. The portfolio clearly labels this a team project.
- The tree contains React/TypeScript frontend code and backend/frontend tests. The linked Vercel demo could not be reached during verification and is omitted from the portfolio.

## Device Health & Predictive Maintenance

- [README/status](https://github.com/ayushibaidya/Device-Health-Predictive-Maintenance-/blob/main/README.md)
- [Architecture](https://github.com/ayushibaidya/Device-Health-Predictive-Maintenance-/blob/main/docs/architecture.md)
- [Testing strategy](https://github.com/ayushibaidya/Device-Health-Predictive-Maintenance-/blob/main/docs/testing-strategy.md)
- The inspected tree contains `.gitignore`, README, requirements, schema/security/development/testing documents, architecture, and ADRs. It contains no application service implementation.
- C++20, Python/FastAPI, Kafka, PostgreSQL, Redis, Docker, and Next.js are documented planned technologies. The project card, diagram, case study, and skill notes distinguish planned implementation from demonstrated code.
- Durable PostgreSQL history, Redis derived state, simulator ground truth, separate inference and alert evaluation, and local-first deployment are documented design decisions. No operational dashboard, model, API, or deployment is claimed.

## MVC Calendar

- Supplied repository: `https://github.com/neu-cs5010/f25-hw7-part2-group-codeSmells`.
- GitHub returned HTTP 404. This may indicate access restrictions, a rename, or removal; public verification was not possible.
- Retained the existing portfolio's Java/Swing/MVC/Gradle/JUnit descriptions and explicit paired View/Controller contribution scope. GUI, CLI, headless workflows, recurring-event forms, and edit scopes were already documented locally.
- Time-zone functionality and CSV/iCalendar export were supplied in the new task but were not independently verifiable in public source. They were omitted pending access or supporting documentation.
- No broken public repository button or invented alternative URL is displayed. Contact information provides a way to discuss the course project.

## RTOS Motion-Control Firmware Simulator

- No repository URL existed in the old local project content. Discovered the exact repository through Ayushi's public GitHub repository listing and verified its source, rather than constructing a guessed URL.
- [Verified repository](https://github.com/ayushibaidya/RTOS-Motion-Firmware-Simulator)
- [Motion controller](https://github.com/ayushibaidya/RTOS-Motion-Firmware-Simulator/blob/main/firmware/App/motion/motion_controller.c) and [header](https://github.com/ayushibaidya/RTOS-Motion-Firmware-Simulator/blob/main/firmware/App/motion/motion_controller.h): two-axis position logic, bounds, stop/fault/recovery, and all five published states.
- [CMake](https://github.com/ayushibaidya/RTOS-Motion-Firmware-Simulator/blob/main/CMakeLists.txt): CTest suites, host targets, optional FreeRTOS backend and scheduler demo. README documents the same host/FreeRTOS scope and Python smoke tests.
- An ARM toolchain configuration exists, but the ARM build target is an integration placeholder. ARM GCC/hardware deployment is therefore not advertised as an achieved result. QEMU and hardware validation remain future work.

## Background and other content

- Education dates, GPAs, coursework topics, Gmail, profile links, and 2027 recruiting targets come from the user's task brief. Coursework is labeled academic knowledge.
- Adobe titles/dates, 7% case-handling improvement, zero reported migration data loss, 18% clarification reduction, and reporting for a 10+ person team are consistent with the existing source and task. Wording describes support/operations contributions and preserves the real job titles.
- No resume exists locally, so resume-to-experience consistency could not be independently checked against a PDF. Internship wording is limited to existing case-routing, handoff, and SLA tooling content; professional Power BI reporting is attributed to the full-time role.
- AWS Certified Cloud Practitioner was already listed in the portfolio and explicitly requested. No credential ID, issue date, validity, or certification verification URL was invented.
- Extra operating systems and C coursework is retained from the existing portfolio. Public source and course test outcomes were not independently verified.
- LinkedIn is the exact user-supplied URL. Automated LinkedIn requests may be restricted; account ownership/content was not independently verified.

## Manual follow-up

1. Keep any resume/reference material private and uncommitted. Never publish a PDF, LaTeX source, resume page, or download link. If a historical copy is discovered, flag it for manual Git history review.
2. Supply accessible Calendar source/docs before adding time-zone/export claims or a public repository button.
3. Add a ShelfLife live demo only after confirming the deployed frontend and required backend actually work.
4. Update Device Health's status and technology labels when implementation is committed.
5. Commit and push reviewed changes to the existing GitHub remote when explicitly authorized. Use the existing Vercel workflow for hosting; keep all private reference material excluded.
