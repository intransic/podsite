import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import EpisodesPage from "@/app/episodes/page";

// Mock next/image
vi.mock("next/image", () => ({
  default: ({ src, alt, ...props }: { src: string; alt: string; [key: string]: unknown }) => (
    <img src={src} alt={alt} {...props} />
  ),
}));

describe("Episodes page", () => {
  it("renders the page heading", () => {
    render(<EpisodesPage />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders exactly 20 episode cards", () => {
    render(<EpisodesPage />);
    const cards = screen.getAllByRole("article");
    expect(cards).toHaveLength(20);
  });

  it("renders an accessible catalog list", () => {
    render(<EpisodesPage />);
    expect(screen.getByRole("list", { name: /episode catalog/i })).toBeInTheDocument();
  });
});
