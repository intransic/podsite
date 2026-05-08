import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SiteNav from "@/components/site-nav";
import { siteCopy } from "@/content/site-copy";

// Mock next/navigation since we're not in a Next.js environment
vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

// Mock next/link
vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: unknown }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("SiteNav", () => {
  it("renders all navigation links", () => {
    render(<SiteNav />);
    for (const item of siteCopy.nav) {
      expect(screen.getByRole("link", { name: item.label })).toBeInTheDocument();
    }
  });

  it("marks the current page link with aria-current", () => {
    render(<SiteNav />);
    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).toHaveAttribute("aria-current", "page");
  });

  it("has a nav landmark with an accessible label", () => {
    render(<SiteNav />);
    expect(screen.getByRole("navigation", { name: /primary navigation/i })).toBeInTheDocument();
  });

  it("has exactly 4 navigation items", () => {
    render(<SiteNav />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(siteCopy.nav.length);
  });
});
