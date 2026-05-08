"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteCopy } from "@/content/site-copy";

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label="Primary navigation">
      <button
        className="site-nav__toggle"
        aria-expanded={open}
        aria-controls="primary-nav-list"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <ul
        id="primary-nav-list"
        className={`site-nav__list${open ? " is-open" : ""}`}
        role="list"
      >
        {siteCopy.nav.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="site-nav__link"
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
