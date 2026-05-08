import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutPage from "@/app/about/page";
import FaqPage from "@/app/faq/page";
import { siteCopy } from "@/content/site-copy";
import { faqs } from "@/content/faqs";

// Mock FaqAccordionItem as it uses client hooks
vi.mock("@/components/faq-accordion-item", () => ({
  default: ({ item }: { item: { question: string; answer: string } }) => (
    <div>
      <button>{item.question}</button>
      <div>{item.answer}</div>
    </div>
  ),
}));

describe("About page", () => {
  it("renders the about page heading", () => {
    render(<AboutPage />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders all about sections", () => {
    render(<AboutPage />);
    for (const section of siteCopy.about.sections) {
      expect(screen.getByText(section.heading)).toBeInTheDocument();
    }
  });

  it("renders section body text", () => {
    render(<AboutPage />);
    for (const section of siteCopy.about.sections) {
      expect(screen.getByText(section.body)).toBeInTheDocument();
    }
  });

  it("sections are labelled with headings for accessibility", () => {
    render(<AboutPage />);
    const sections = screen.getAllByRole("region");
    expect(sections.length).toBeGreaterThan(0);
  });
});

describe("FAQ page", () => {
  it("renders the FAQ page heading", () => {
    render(<FaqPage />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders all FAQ questions", () => {
    render(<FaqPage />);
    for (const item of faqs) {
      expect(screen.getByText(item.question)).toBeInTheDocument();
    }
  });

  it("renders an accessible FAQ list", () => {
    render(<FaqPage />);
    expect(screen.getByRole("list", { name: /frequently asked questions/i })).toBeInTheDocument();
  });
});
