# Research: Modern Podcast Website

## Decision: Use Next.js App Router with static export

**Rationale**: The site is a small content-driven web app with four public routes and no live backend requirements. Next.js App Router supports a modern component model while still exporting static HTML via `output: 'export'`, which satisfies the constitution's static-first requirement and keeps deployment simple.

**Alternatives considered**:
- A fully dynamic Next.js deployment was rejected because the feature does not need request-time rendering or server infrastructure.
- A generic static site generator was rejected because the user explicitly chose Next.js.

## Decision: Store all mocked content in typed in-repo modules

**Rationale**: The episode catalog, FAQ entries, and supporting page copy are fixed mock content for this feature. Keeping them in TypeScript modules provides simple editing, compile-time structure checks, and zero runtime fetch cost.

**Alternatives considered**:
- A database was rejected because the user explicitly ruled it out.
- Pulling from a real podcast feed was rejected because the feature only requires mocked content.
- Markdown or JSON files were considered, but typed modules are the simplest choice for a small Next.js app with no content pipeline yet.

## Decision: Use a single root-level Next.js app structure

**Rationale**: There is no existing scaffold in the repository. A single app rooted at the repository top level keeps setup, routing, and build output straightforward while leaving room for reusable components, embedded content, and lightweight tests.

**Alternatives considered**:
- A split `frontend/` and `backend/` structure was rejected because there is no backend in scope.
- A nested monorepo layout was rejected because it adds complexity without improving delivery for four static pages.

## Decision: Style with global CSS plus component-scoped styling primitives

**Rationale**: The site needs a sleek, standout visual direction, but the constitution favors minimal tooling. Global CSS with clear design tokens and component-scoped styles supports a custom editorial look without adding a utility framework or design-system dependency prematurely.

**Alternatives considered**:
- A heavier styling framework was rejected to preserve simplicity until the implementation proves it is necessary.
- Inline-only styling was rejected because it would make reusable visual patterns harder to maintain.

## Decision: Use targeted automated checks plus manual responsive review

**Rationale**: The product is a static website with embedded content and limited behavioral complexity. Vitest with Testing Library is sufficient for component and page rendering checks, while a Playwright smoke test can validate the exported routes, navigation, and the presence of all 20 episodes. Manual preview remains appropriate for visual polish and responsive review.

**Alternatives considered**:
- Broad end-to-end coverage was rejected because it would increase maintenance cost without materially improving confidence for this scope.
- Manual-only verification was rejected because a few automated checks provide cheap regression protection for route structure and content volume.

## Decision: Keep v1 route scope to the four requested pages only

**Rationale**: The feature specification requires a landing page, episodes page, About page, and FAQ page. Avoiding episode detail routes preserves static simplicity and keeps the MVP aligned with the requested scope.

**Alternatives considered**:
- Individual episode detail pages were rejected because they are not required for the current feature and would introduce additional routing and content overhead.