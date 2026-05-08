# Data Model: Modern Podcast Website

## Episode

**Purpose**: Represents one mocked podcast entry shown in the featured area or episodes catalog.

**Fields**:
- `id`: Stable string identifier used for rendering keys and content references.
- `episodeNumber`: Positive integer displayed in the catalog.
- `title`: Short display title.
- `summary`: Listener-facing description for browsing.
- `publishDate`: Human-readable or ISO-backed publish date used for display.
- `durationMinutes`: Positive integer duration for quick scanning.
- `artworkSrc`: Path to artwork asset or placeholder image.
- `artworkAlt`: Descriptive alt text for the artwork.
- `isFeatured`: Boolean flag indicating homepage promotion.

**Validation Rules**:
- Exactly 20 episode records must exist.
- Exactly one episode must have `isFeatured = true`.
- `title` and `summary` must be non-empty.
- `episodeNumber` and `durationMinutes` must be positive values.
- `artworkSrc` must point to a local static asset or placeholder.

## FAQ Item

**Purpose**: Represents one question-and-answer pair shown on the FAQ page.

**Fields**:
- `id`: Stable string identifier.
- `question`: Short user-facing question.
- `answer`: Plain-language response.
- `displayOrder`: Positive integer for rendering order.

**Validation Rules**:
- `question` and `answer` must be non-empty.
- `displayOrder` values must be unique.

## About Section

**Purpose**: Represents a content block on the About page.

**Fields**:
- `id`: Stable string identifier.
- `heading`: Section heading.
- `body`: One or more paragraphs describing the show premise, voice, or host context.

**Validation Rules**:
- `heading` must be non-empty.
- `body` must contain enough text to explain the intended concept without relying on external links.

## Navigation Item

**Purpose**: Represents a persistent primary navigation link.

**Fields**:
- `label`: Visible link text.
- `href`: Route path.

**Validation Rules**:
- Navigation must include `/`, `/episodes`, `/about`, and `/faq`.
- Labels must be unique and descriptive.

## Relationships

- One `Episode` is marked as the single featured episode for the homepage.
- The episodes page renders the full collection of `Episode` records.
- The FAQ page renders an ordered collection of `FAQ Item` records.
- The About page renders one or more `About Section` records.
- Shared `Navigation Item` records appear on all public pages.

## State Notes

- This feature uses build-time mock content only; there are no authoring, publishing, or user-generated state transitions in scope.