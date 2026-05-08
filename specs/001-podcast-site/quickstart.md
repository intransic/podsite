# Quickstart: Modern Podcast Website

## Prerequisites

- Node.js 22 LTS or newer
- npm 10 or newer

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the local development server:

```bash
npm run dev
```

3. Open the local site in a browser and verify the four routes:

- `/`
- `/episodes`
- `/about`
- `/faq`

## Expected Verification Flow

1. Confirm the landing page shows the site identity and exactly one featured episode.
2. Confirm the episodes page renders 20 mocked episodes with title, number, summary, publish date, duration, and artwork or placeholder artwork.
3. Confirm the About and FAQ pages are reachable from shared navigation.
4. Confirm the layout remains readable on desktop and mobile-sized viewports.
5. Confirm keyboard navigation reaches the primary navigation and page content in a sensible order.

## Automated Checks

Run the targeted automated checks once the project scripts are in place:

```bash
npm run test
npm run test:e2e
npm run build
```

## Static Output Preview

After a successful build, preview the exported static site:

```bash
npx serve out
```

Use the preview to validate the final exported output rather than relying only on the development server.