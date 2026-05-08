# Implementation Plan: Modern Podcast Website

**Branch**: `[001-podcast-site]` | **Date**: 2026-05-08 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-podcast-site/spec.md`

## Summary

Build a responsive, static-exported Next.js podcast site with a standout editorial landing page, a single featured episode, a browseable catalog of 20 mocked episodes, and supporting About and FAQ pages. The implementation will keep all content embedded in-repo, avoid any database or runtime feed dependency, and use a minimal test strategy that combines local preview, targeted component checks, and a smoke test of the exported site.

## Technical Context

**Language/Version**: TypeScript 5.x, React 19, Next.js 16 with App Router  
**Primary Dependencies**: `next`, `react`, `react-dom`; dev dependencies for `typescript`, `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `playwright`  
**Storage**: N/A; mocked content embedded in TypeScript content modules and static assets in `public/`  
**Testing**: Vitest + Testing Library for component/render checks, Playwright for route and content smoke coverage, manual local-preview verification  
**Target Platform**: Modern evergreen desktop and mobile browsers deployed to a static host/CDN  
**Project Type**: Static web app  
**Performance Goals**: All four primary pages pre-rendered at build time, first-view content available without client-side data fetching, and mobile layouts readable without horizontal scrolling  
**Constraints**: `output: 'export'`, no database, no server-only runtime APIs, no live podcast feed, no auth, no comments, no search/filtering for v1, and responsive behavior must work from narrow mobile widths upward  
**Scale/Scope**: 4 public routes, 20 mocked episodes, 1 featured episode, shared site navigation, and a small set of reusable presentational components

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Pre-Phase 0 Gate

- **Static-First Delivery**: PASS. Next.js will be configured for static export with all podcast data embedded in the repository.
- **Accessible By Default**: PASS. The design will use semantic landmarks, keyboard-reachable navigation, and descriptive text for episode artwork.
- **Fast Initial Load**: PASS. Primary content is built into the exported pages and does not rely on runtime network fetches.
- **Simple Verification**: PASS. The plan includes a local preview flow, targeted tests, and a small smoke test against the generated site.
- **Keep It Simple**: PASS. A single Next.js application at the repository root is sufficient; no CMS, database, or backend service is introduced.

### Post-Phase 1 Re-Check

- **Static-First Delivery**: PASS. The data model and contracts keep all content build-time only and compatible with static hosting.
- **Accessible By Default**: PASS. The route contract requires persistent navigation, readable content sections, and semantic page structure.
- **Fast Initial Load**: PASS. The structure keeps content local to the app and limits runtime dependencies to the framework and presentation layer.
- **Simple Verification**: PASS. Quickstart and contracts define a concrete preview and smoke-test workflow.
- **Keep It Simple**: PASS. The chosen structure is a single app with local content modules and minimal test tooling.

## Project Structure

### Documentation (this feature)

```text
specs/001-podcast-site/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── site-contract.yaml
└── tasks.md
```

### Source Code (repository root)

```text
app/
├── about/
│   └── page.tsx
├── episodes/
│   └── page.tsx
├── faq/
│   └── page.tsx
├── globals.css
├── layout.tsx
└── page.tsx

components/
├── episode-card.tsx
├── featured-episode.tsx
├── site-footer.tsx
├── site-header.tsx
└── site-nav.tsx

content/
├── episodes.ts
├── faqs.ts
└── site-copy.ts

public/
└── images/

tests/
├── e2e/
├── integration/
└── unit/

next.config.ts
package.json
playwright.config.ts
tsconfig.json
vitest.config.ts
```

**Structure Decision**: Use a single Next.js application at the repository root. This keeps the site static-host compatible, avoids unnecessary monorepo or backend split complexity, and maps cleanly to the four required routes plus local mocked content.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

No constitution violations require justification for this feature.
