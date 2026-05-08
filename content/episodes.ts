export interface Episode {
  id: string;
  episodeNumber: number;
  title: string;
  summary: string;
  publishDate: string;
  durationMinutes: number;
  artworkSrc: string;
  artworkAlt: string;
  isFeatured: boolean;
}

export const episodes: Episode[] = [
  {
    id: "ep-020",
    episodeNumber: 20,
    title: "The Future of Storytelling",
    summary:
      "We close out the season by looking ahead — where is audio storytelling going, and what makes a story genuinely worth telling in a crowded landscape?",
    publishDate: "2026-05-01",
    durationMinutes: 54,
    artworkSrc: "/images/placeholder.svg",
    artworkAlt: "Abstract gradient artwork for episode 20",
    isFeatured: true,
  },
  {
    id: "ep-019",
    episodeNumber: 19,
    title: "Silence as a Tool",
    summary:
      "Veteran sound designers explain why the moments without audio are often the most powerful moments in any production.",
    publishDate: "2026-04-24",
    durationMinutes: 47,
    artworkSrc: "/images/placeholder.svg",
    artworkAlt: "Abstract gradient artwork for episode 19",
    isFeatured: false,
  },
  {
    id: "ep-018",
    episodeNumber: 18,
    title: "Finding Your Voice",
    summary:
      "Three first-time podcast hosts share what it really took to stop second-guessing themselves and start hitting record.",
    publishDate: "2026-04-17",
    durationMinutes: 51,
    artworkSrc: "/images/placeholder.svg",
    artworkAlt: "Abstract gradient artwork for episode 18",
    isFeatured: false,
  },
  {
    id: "ep-017",
    episodeNumber: 17,
    title: "Interview Craft",
    summary:
      "What separates a forgettable conversation from an unforgettable one? We dig into the techniques that produce breakthrough moments.",
    publishDate: "2026-04-10",
    durationMinutes: 62,
    artworkSrc: "/images/placeholder.svg",
    artworkAlt: "Abstract gradient artwork for episode 17",
    isFeatured: false,
  },
  {
    id: "ep-016",
    episodeNumber: 16,
    title: "The Edit That Changes Everything",
    summary:
      "A master editor walks through the invisible work that transforms a rough conversation into a tightly paced, emotionally resonant episode.",
    publishDate: "2026-04-03",
    durationMinutes: 58,
    artworkSrc: "/images/placeholder.svg",
    artworkAlt: "Abstract gradient artwork for episode 16",
    isFeatured: false,
  },
  {
    id: "ep-015",
    episodeNumber: 15,
    title: "Room Tone & Atmosphere",
    summary:
      "Why where you record is as important as what you say — and practical ways to make any space sound intentional.",
    publishDate: "2026-03-27",
    durationMinutes: 44,
    artworkSrc: "/images/placeholder.svg",
    artworkAlt: "Abstract gradient artwork for episode 15",
    isFeatured: false,
  },
  {
    id: "ep-014",
    episodeNumber: 14,
    title: "Narrative Arc in Non-Fiction",
    summary:
      "Documentary makers explain how they borrow fiction techniques to give true stories the shape and pull of a great novel.",
    publishDate: "2026-03-20",
    durationMinutes: 66,
    artworkSrc: "/images/placeholder.svg",
    artworkAlt: "Abstract gradient artwork for episode 14",
    isFeatured: false,
  },
  {
    id: "ep-013",
    episodeNumber: 13,
    title: "Monetisation Without Compromise",
    summary:
      "How independent creators are building sustainable revenue without alienating the audiences they spent years earning.",
    publishDate: "2026-03-13",
    durationMinutes: 53,
    artworkSrc: "/images/placeholder.svg",
    artworkAlt: "Abstract gradient artwork for episode 13",
    isFeatured: false,
  },
  {
    id: "ep-012",
    episodeNumber: 12,
    title: "Growing an Audience Slowly",
    summary:
      "A contrarian take on growth: why the most loyal communities are built through depth, not virality.",
    publishDate: "2026-03-06",
    durationMinutes: 49,
    artworkSrc: "/images/placeholder.svg",
    artworkAlt: "Abstract gradient artwork for episode 12",
    isFeatured: false,
  },
  {
    id: "ep-011",
    episodeNumber: 11,
    title: "Scripts vs. Free Form",
    summary:
      "The ongoing debate: does a tight script kill spontaneity, or does winging it waste everyone's time? We test both sides.",
    publishDate: "2026-02-27",
    durationMinutes: 41,
    artworkSrc: "/images/placeholder.svg",
    artworkAlt: "Abstract gradient artwork for episode 11",
    isFeatured: false,
  },
  {
    id: "ep-010",
    episodeNumber: 10,
    title: "Sound Design 101",
    summary:
      "An accessible primer on how layered sound — music, effects, ambience — transforms passive listening into an immersive experience.",
    publishDate: "2026-02-20",
    durationMinutes: 55,
    artworkSrc: "/images/placeholder.svg",
    artworkAlt: "Abstract gradient artwork for episode 10",
    isFeatured: false,
  },
  {
    id: "ep-009",
    episodeNumber: 9,
    title: "The Trust Economy",
    summary:
      "Credibility is the only currency that matters in audio journalism. How top reporters build it, protect it, and occasionally lose it.",
    publishDate: "2026-02-13",
    durationMinutes: 60,
    artworkSrc: "/images/placeholder.svg",
    artworkAlt: "Abstract gradient artwork for episode 9",
    isFeatured: false,
  },
  {
    id: "ep-008",
    episodeNumber: 8,
    title: "Pacing & Breath",
    summary:
      "The underrated art of knowing when to slow down, let silence land, and give listeners room to feel something.",
    publishDate: "2026-02-06",
    durationMinutes: 38,
    artworkSrc: "/images/placeholder.svg",
    artworkAlt: "Abstract gradient artwork for episode 8",
    isFeatured: false,
  },
  {
    id: "ep-007",
    episodeNumber: 7,
    title: "Research That Transforms",
    summary:
      "The best podcast episodes often start with months of reporting nobody sees. We trace the hidden work behind three acclaimed series.",
    publishDate: "2026-01-30",
    durationMinutes: 71,
    artworkSrc: "/images/placeholder.svg",
    artworkAlt: "Abstract gradient artwork for episode 7",
    isFeatured: false,
  },
  {
    id: "ep-006",
    episodeNumber: 6,
    title: "Co-hosting Chemistry",
    summary:
      "What makes two voices feel natural together? Chemistry, conflict, and the productive tension that keeps listeners tuning in.",
    publishDate: "2026-01-23",
    durationMinutes: 46,
    artworkSrc: "/images/placeholder.svg",
    artworkAlt: "Abstract gradient artwork for episode 6",
    isFeatured: false,
  },
  {
    id: "ep-005",
    episodeNumber: 5,
    title: "Accessibility in Audio",
    summary:
      "Transcripts, chapter markers, and thoughtful production choices that make podcasts genuinely welcoming to all listeners.",
    publishDate: "2026-01-16",
    durationMinutes: 43,
    artworkSrc: "/images/placeholder.svg",
    artworkAlt: "Abstract gradient artwork for episode 5",
    isFeatured: false,
  },
  {
    id: "ep-004",
    episodeNumber: 4,
    title: "Gear Without the Obsession",
    summary:
      "Stop agonising over microphones. Here is what actually matters for sounding professional on any budget.",
    publishDate: "2026-01-09",
    durationMinutes: 36,
    artworkSrc: "/images/placeholder.svg",
    artworkAlt: "Abstract gradient artwork for episode 4",
    isFeatured: false,
  },
  {
    id: "ep-003",
    episodeNumber: 3,
    title: "Story Hooks",
    summary:
      "The first 90 seconds decide whether someone stays or skips. We break down the structural patterns that open strong.",
    publishDate: "2026-01-02",
    durationMinutes: 39,
    artworkSrc: "/images/placeholder.svg",
    artworkAlt: "Abstract gradient artwork for episode 3",
    isFeatured: false,
  },
  {
    id: "ep-002",
    episodeNumber: 2,
    title: "Why Audio Endures",
    summary:
      "In an era of short-form video, podcast listeners are still going deeper and staying longer. We look at why intimacy wins.",
    publishDate: "2025-12-26",
    durationMinutes: 42,
    artworkSrc: "/images/placeholder.svg",
    artworkAlt: "Abstract gradient artwork for episode 2",
    isFeatured: false,
  },
  {
    id: "ep-001",
    episodeNumber: 1,
    title: "What Makes a Great Podcast?",
    summary:
      "We open with the fundamental question: in a world of millions of shows, what actually separates the ones worth returning to?",
    publishDate: "2025-12-19",
    durationMinutes: 48,
    artworkSrc: "/images/placeholder.svg",
    artworkAlt: "Abstract gradient artwork for episode 1",
    isFeatured: false,
  },
];

export const featuredEpisode = episodes.find((ep) => ep.isFeatured)!;

// Runtime invariant check (runs at build time)
if (episodes.length !== 20) {
  throw new Error(`Episode count must be exactly 20, got ${episodes.length}`);
}
const featuredCount = episodes.filter((ep) => ep.isFeatured).length;
if (featuredCount !== 1) {
  throw new Error(`Exactly one episode must be featured, got ${featuredCount}`);
}
