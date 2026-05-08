# Tasks: Modern Podcast Website

**Input**: Design documents from `/specs/001-podcast-site/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/site-contract.yaml, quickstart.md

**Tests**: Include Vitest + Testing Library coverage, Playwright smoke coverage, and manual local-preview verification per the implementation plan.

**Organization**: Tasks are grouped by phase and user story so each story can be implemented and validated independently.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel because the work targets different files and has no dependency on incomplete tasks in the same phase
- **[Story]**: Maps the task to a specific user story (`[US1]`, `[US2]`, `[US3]`)
- Every task includes the concrete file path or directory to change

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize the static Next.js app and wire up the required automated test tooling.

- [x] T001 Initialize the Next.js 16, React 19, and TypeScript project scripts and dependencies in `package.json`
- [x] T002 Configure static export and image-safe build behavior in `next.config.ts`
- [x] T003 [P] Configure TypeScript project settings and module resolution in `tsconfig.json`
- [x] T004 [P] Configure Vitest, Testing Library, and shared test setup in `vitest.config.ts` and `tests/unit/setup.ts`
- [x] T005 [P] Configure Playwright for local static preview smoke tests in `playwright.config.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Create the shared shell, base styling, and mock content model that every user story depends on.

**⚠️ CRITICAL**: No user story work should begin until this phase is complete.

- [x] T006 Create the global site layout, route metadata, and semantic page shell in `app/layout.tsx`
- [x] T007 [P] Implement persistent header, navigation, and footer components in `components/site-header.tsx`, `components/site-nav.tsx`, and `components/site-footer.tsx`
- [x] T008 [P] Define global design tokens, typography, focus states, and responsive layout rules in `app/globals.css`
- [x] T009 [P] Model the 20 mocked episodes, enforce exactly one featured episode, and add metadata fallbacks in `content/episodes.ts`
- [x] T010 [P] Add shared brand copy, home-page intro copy, navigation items, and about-page section scaffolding in `content/site-copy.ts`
- [x] T011 [P] Add local artwork and fallback image assets for the mocked catalog in `public/images/`
- [x] T012 [P] Add foundational unit coverage for episode-data invariants and persistent navigation rendering in `tests/unit/content/episodes.test.ts` and `tests/unit/components/site-nav.test.tsx`

**Checkpoint**: Shared layout, styling, and mock data are ready; user stories can proceed independently.

---

## Phase 3: User Story 1 - Discover the featured episode (Priority: P1) 🎯 MVP

**Goal**: Deliver a polished landing page that introduces the show and highlights one featured episode with a clear path to the full catalog.

**Independent Test**: Start the local preview, open `/`, confirm the podcast identity and exactly one featured episode are visible immediately, and verify the primary CTA or navigation reaches `/episodes` in one step.

### Tests for User Story 1

- [x] T013 [P] [US1] Add homepage rendering and keyboard-focus coverage in `tests/integration/home-page.test.tsx`
- [x] T014 [P] [US1] Add homepage smoke coverage for featured-episode visibility and CTA navigation in `tests/e2e/home.spec.ts`

### Implementation for User Story 1

- [x] T015 [P] [US1] Create the featured episode presentation component in `components/featured-episode.tsx`
- [x] T016 [US1] Implement the landing page hero, show introduction, featured episode section, and CTA in `app/page.tsx`
- [x] T017 [US1] Refine homepage copy, emphasis text, and featured-callout content in `content/site-copy.ts` and `content/episodes.ts`
- [x] T018 [US1] Tune homepage responsive layout, focus treatment, and featured-section polish in `app/globals.css` and `components/featured-episode.tsx`
- [x] T019 [US1] Run the homepage manual verification flow described in `specs/001-podcast-site/quickstart.md`

**Checkpoint**: The landing page is fully functional and independently testable as the MVP.

---

## Phase 4: User Story 2 - Browse the episode catalog (Priority: P2)

**Goal**: Deliver a browseable episodes page that renders the full set of 20 mocked episodes with consistent metadata and artwork treatment.

**Independent Test**: Start the local preview, open `/episodes`, confirm exactly 20 episode cards render, and verify each entry exposes the number, title, summary, publish date, duration, and artwork or placeholder artwork.

### Tests for User Story 2

- [x] T020 [P] [US2] Add reusable episode-card component coverage in `tests/unit/components/episode-card.test.tsx`
- [x] T021 [P] [US2] Add episodes-page integration coverage for the 20-item catalog in `tests/integration/episodes-page.test.tsx`
- [x] T022 [P] [US2] Add Playwright smoke coverage for the catalog route and card metadata in `tests/e2e/episodes.spec.ts`

### Implementation for User Story 2

- [x] T023 [P] [US2] Create the reusable catalog card component for episode metadata and artwork fallback rendering in `components/episode-card.tsx`
- [x] T024 [US2] Implement the episodes catalog route and page copy in `app/episodes/page.tsx`
- [x] T025 [US2] Finalize catalog-ready episode summaries, publish-date formatting, and fallback labels in `content/episodes.ts`
- [x] T026 [US2] Tune the episodes grid, card spacing, and narrow-screen behavior in `app/globals.css` and `components/episode-card.tsx`
- [x] T027 [US2] Run the episodes-page manual verification flow described in `specs/001-podcast-site/quickstart.md`

**Checkpoint**: The full mocked catalog works independently alongside the MVP landing page.

---

## Phase 5: User Story 3 - Learn about the show and common questions (Priority: P3)

**Goal**: Deliver About and FAQ pages that explain the show's premise, voice, host context, and common listener questions through the shared navigation.

**Independent Test**: Start the local preview, open `/about` and `/faq`, confirm both routes are reachable from the main navigation, and verify their content remains readable on desktop and mobile widths.

### Tests for User Story 3

- [x] T028 [P] [US3] Add About and FAQ route rendering coverage in `tests/integration/about-page.test.tsx` and `tests/integration/faq-page.test.tsx`
- [x] T029 [P] [US3] Add Playwright smoke coverage for About and FAQ navigation paths in `tests/e2e/supporting-pages.spec.ts`

### Implementation for User Story 3

- [x] T030 [P] [US3] Author the final About page sections for premise, tone, and host context in `content/site-copy.ts`
- [x] T031 [P] [US3] Author the ordered FAQ collection and answers in `content/faqs.ts`
- [x] T032 [US3] Implement the About page route with semantic sections in `app/about/page.tsx`
- [x] T033 [US3] Implement the FAQ page route with ordered, readable answer blocks in `app/faq/page.tsx`
- [x] T034 [US3] Tune supporting-page spacing, heading hierarchy, and mobile readability in `app/globals.css`, `app/about/page.tsx`, and `app/faq/page.tsx`
- [x] T035 [US3] Run the About and FAQ manual verification flow described in `specs/001-podcast-site/quickstart.md`

**Checkpoint**: All requested public routes are complete and independently testable.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Finish export validation, shared route consistency, and final review tasks that cut across all stories.

- [x] T036 [P] Add cross-route shell coverage for persistent navigation, page landmarks, and footer visibility in `tests/integration/site-shell.test.tsx`
- [x] T037 [P] Add final static-export smoke coverage for `/`, `/episodes`, `/about`, and `/faq` in `tests/e2e/site-smoke.spec.ts`
- [x] T038 Optimize static metadata, export readiness, and route-level accessibility details in `app/layout.tsx` and `next.config.ts`
- [x] T039 Run the full verification sequence (`npm run test`, `npm run test:e2e`, `npm run build`, `npx serve out`) against `specs/001-podcast-site/quickstart.md` and `specs/001-podcast-site/checklists/requirements.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Starts immediately and establishes the project, test tooling, and export configuration.
- **Foundational (Phase 2)**: Depends on Setup and blocks all story work because it creates the shared layout, global styles, and the 20-episode content source.
- **User Story 1 (Phase 3)**: Depends on Foundational and delivers the MVP landing experience.
- **User Story 2 (Phase 4)**: Depends on Foundational and reuses the shared `content/episodes.ts` dataset created there.
- **User Story 3 (Phase 5)**: Depends on Foundational but does not depend on the catalog implementation in US2.
- **Polish (Phase 6)**: Depends on the completion of the desired user stories and validates the final exported site.

### User Story Dependencies

- **US1**: Requires the shared shell, home-page copy scaffolding, and featured episode dataset from Phase 2.
- **US2**: Requires the shared shell plus the complete mocked episode dataset from Phase 2; it does not require About or FAQ work.
- **US3**: Requires the shared shell and shared copy scaffolding from Phase 2; it can proceed without waiting for US2 once the foundation is complete.

### Sequencing Notes

- Write story tests before the corresponding implementation tasks and confirm they fail before building the feature.
- Keep `content/episodes.ts` in Phase 2 so the featured homepage episode and the 20-item catalog stay sourced from the same mocked dataset.
- Leave manual verification tasks at the end of each story so each increment can be reviewed independently before moving on.

---

## Parallel Opportunities

- Setup tasks `T003`, `T004`, and `T005` can run in parallel after `T001` and `T002` establish the app baseline.
- Foundational tasks `T007` through `T012` can be split across contributors because they target separate components, styles, content modules, assets, and tests.
- Within US1, `T013`, `T014`, and `T015` can proceed in parallel before the page assembly task `T016`.
- Within US2, `T020`, `T021`, `T022`, and `T023` can proceed in parallel before final page assembly in `T024`.
- Within US3, `T028`, `T029`, `T030`, and `T031` can proceed in parallel before wiring the page routes in `T032` and `T033`.
- After Phase 2 completes, US1, US2, and US3 can be staffed in parallel if the team accepts the shared-content merge coordination.

---

## Parallel Example: User Story 1

```bash
# Run these in parallel once Phase 2 is complete:
Task: T013 Add homepage rendering and keyboard-focus coverage in tests/integration/home-page.test.tsx
Task: T014 Add homepage smoke coverage for featured-episode visibility and CTA navigation in tests/e2e/home.spec.ts
Task: T015 Create the featured episode presentation component in components/featured-episode.tsx
```

## Parallel Example: User Story 2

```bash
# Run these in parallel once US2 starts:
Task: T020 Add reusable episode-card component coverage in tests/unit/components/episode-card.test.tsx
Task: T021 Add episodes-page integration coverage for the 20-item catalog in tests/integration/episodes-page.test.tsx
Task: T022 Add Playwright smoke coverage for the catalog route and card metadata in tests/e2e/episodes.spec.ts
Task: T023 Create the reusable catalog card component in components/episode-card.tsx
```

## Parallel Example: User Story 3

```bash
# Run these in parallel once US3 starts:
Task: T028 Add About and FAQ route rendering coverage in tests/integration/about-page.test.tsx and tests/integration/faq-page.test.tsx
Task: T029 Add Playwright smoke coverage for About and FAQ navigation paths in tests/e2e/supporting-pages.spec.ts
Task: T030 Author the final About page sections in content/site-copy.ts
Task: T031 Author the ordered FAQ collection in content/faqs.ts
```

---

## Implementation Strategy

### MVP First

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. Validate the homepage independently before opening US2 and US3 for completion.

### Incremental Delivery

1. Finish Setup and Foundational to establish the static export shell and shared mock content.
2. Deliver US1 as the first reviewable increment.
3. Add US2 to complete the full 20-episode browsing experience.
4. Add US3 to complete the requested About and FAQ pages.
5. Finish with Phase 6 export validation and cross-route regression checks.

### Suggested MVP Scope

1. Phases 1 through 3 only.
2. Stop after `T019` and validate the landing page before expanding scope.
