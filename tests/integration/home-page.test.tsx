import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import FeaturedEpisode from "@/components/featured-episode";
import { featuredEpisode } from "@/content/episodes";
import { siteCopy } from "@/content/site-copy";

// Mock next/link
vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: unknown }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("FeaturedEpisode component", () => {
  it("renders the episode title", () => {
    render(<FeaturedEpisode episode={featuredEpisode} />);
    expect(screen.getByText(featuredEpisode.title)).toBeInTheDocument();
  });

  it("renders the episode summary", () => {
    render(<FeaturedEpisode episode={featuredEpisode} />);
    expect(screen.getByText(featuredEpisode.summary)).toBeInTheDocument();
  });

  it("renders the featured label", () => {
    render(<FeaturedEpisode episode={featuredEpisode} />);
    expect(screen.getByText(siteCopy.featuredLabel)).toBeInTheDocument();
  });

  it("renders a CTA link to the episodes page", () => {
    render(<FeaturedEpisode episode={featuredEpisode} />);
    const cta = screen.getByRole("link", { name: siteCopy.ctaLabel });
    expect(cta).toHaveAttribute("href", siteCopy.ctaHref);
  });

  it("renders the episode artwork with alt text", () => {
    render(<FeaturedEpisode episode={featuredEpisode} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("alt", featuredEpisode.artworkAlt);
  });
});

describe("Home page structure", () => {
  it("FeaturedEpisode has a section element for semantic structure", () => {
    const { container } = render(<FeaturedEpisode episode={featuredEpisode} />);
    expect(container.querySelector("section")).not.toBeNull();
  });
});
