import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: unknown }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("Site shell", () => {
  it("header has a banner landmark", () => {
    render(<SiteHeader />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("footer has a contentinfo landmark", () => {
    render(<SiteFooter />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("header contains the primary navigation", () => {
    render(<SiteHeader />);
    expect(screen.getByRole("navigation", { name: /primary navigation/i })).toBeInTheDocument();
  });

  it("header contains all four nav links", () => {
    render(<SiteHeader />);
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Episodes" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "FAQ" })).toBeInTheDocument();
  });

  it("footer contains copyright text", () => {
    render(<SiteFooter />);
    expect(screen.getByText(/2026 Waveform/)).toBeInTheDocument();
  });
});
