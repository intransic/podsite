# Podsite Constitution

## Core Principles

### I. Static-First Delivery
The product must be deliverable as a static web app: prebuilt HTML, CSS, JavaScript, and static assets deployable on a CDN or static host without a required application server.

### II. Accessible By Default
User-facing pages must use semantic HTML, keyboard-accessible interactions, and sufficient text alternatives so the default experience remains usable without custom assistive workarounds.

### III. Fast Initial Load
Pages must prioritize fast first render through lean assets, minimal runtime dependencies, and progressive enhancement where JavaScript is optional for core content.

### IV. Simple Verification
Each shipped change must include a basic verification path appropriate to the change: local preview for visual changes, targeted automated checks when available, and manual confirmation for navigation, content, and responsiveness.

### V. Keep It Simple
Prefer straightforward files, predictable structure, and minimal tooling. Add build complexity, frameworks, or third-party services only when they materially improve the static site and are justified in the related spec or plan.

## Technical Constraints

The site must remain compatible with static hosting. Required runtime secrets, server-only rendering, and mandatory backend dependencies are out of scope unless the constitution is amended. External services may be used only when the site still degrades safely without them or clearly isolates them as optional integrations.

## Delivery Workflow

Work begins from a written spec or plan, implementation stays aligned with the smallest viable change, and reviews must confirm the change preserves static hosting, accessibility, and basic performance expectations before merge.

## Governance

This constitution governs project decisions and overrides conflicting local practice. Changes to it require a documented amendment in the same repository. All future specs, plans, tasks, and reviews must check compliance with these principles.

**Version**: 1.0.0 | **Ratified**: 2026-05-08 | **Last Amended**: 2026-05-08
