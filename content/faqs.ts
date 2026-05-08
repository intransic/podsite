export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  displayOrder: number;
}

export const faqs: FaqItem[] = [
  {
    id: "faq-001",
    question: "How often do new episodes come out?",
    answer:
      "New episodes of Waveform drop every Thursday. We have been on a weekly cadence since the show launched and intend to keep it that way.",
    displayOrder: 1,
  },
  {
    id: "faq-002",
    question: "How long is a typical episode?",
    answer:
      "Most episodes run between 38 and 72 minutes. We do not cut conversations short to fit a format — the episode ends when the conversation is done.",
    displayOrder: 2,
  },
  {
    id: "faq-003",
    question: "Where can I listen?",
    answer:
      "Right here on this site. You can also find Waveform on Apple Podcasts, Spotify, and any podcast app that supports standard RSS feeds.",
    displayOrder: 3,
  },
  {
    id: "faq-004",
    question: "Who is the host?",
    answer:
      "Jordan Reeve hosts the show. Jordan is a producer and audio journalist with over a decade of experience across public radio, documentary podcasting, and independent audio production.",
    displayOrder: 4,
  },
  {
    id: "faq-005",
    question: "Can I suggest a guest or topic?",
    answer:
      "Yes — we read every suggestion. Send ideas to the contact address in the footer. We can not respond to every message, but the ones that spark something tend to end up in the show.",
    displayOrder: 5,
  },
  {
    id: "faq-006",
    question: "Are transcripts available?",
    answer:
      "Transcripts are something we are actively working toward. We plan to publish them alongside each new episode in the near future.",
    displayOrder: 6,
  },
  {
    id: "faq-007",
    question: "Is Waveform suitable for beginner podcasters?",
    answer:
      "Absolutely. We ground every technical discussion in plain language, and many of our episodes focus on the fundamentals that matter regardless of experience level.",
    displayOrder: 7,
  },
  {
    id: "faq-008",
    question: "Do you accept advertising or sponsorships?",
    answer:
      "We work with a small number of sponsors whose products genuinely fit the show's audience. We do not run ads that are unrelated to audio, media, or creative work.",
    displayOrder: 8,
  },
];
