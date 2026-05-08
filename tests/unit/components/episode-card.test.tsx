import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import EpisodeCard from "@/components/episode-card";
import { episodes } from "@/content/episodes";

// Mock next/image
vi.mock("next/image", () => ({
  default: ({ src, alt, ...props }: { src: string; alt: string; [key: string]: unknown }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} {...props} />
  ),
}));

describe("EpisodeCard", () => {
  const ep = episodes[0];

  it("renders the episode title", () => {
    render(<EpisodeCard episode={ep} />);
    expect(screen.getByText(ep.title)).toBeInTheDocument();
  });

  it("renders the episode summary", () => {
    render(<EpisodeCard episode={ep} />);
    expect(screen.getByText(ep.summary)).toBeInTheDocument();
  });

  it("renders the episode number", () => {
    render(<EpisodeCard episode={ep} />);
    expect(screen.getByText(`Ep. ${ep.episodeNumber}`)).toBeInTheDocument();
  });

  it("renders the publish date", () => {
    render(<EpisodeCard episode={ep} />);
    expect(screen.getByText(ep.publishDate)).toBeInTheDocument();
  });

  it("renders the duration", () => {
    render(<EpisodeCard episode={ep} />);
    expect(screen.getByText(`${ep.durationMinutes} min`)).toBeInTheDocument();
  });

  it("renders artwork with alt text", () => {
    render(<EpisodeCard episode={ep} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("alt", ep.artworkAlt);
  });

  it("has an accessible article label", () => {
    render(<EpisodeCard episode={ep} />);
    expect(
      screen.getByRole("article", { name: `Episode ${ep.episodeNumber}: ${ep.title}` })
    ).toBeInTheDocument();
  });
});
