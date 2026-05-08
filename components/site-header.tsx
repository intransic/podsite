import Link from "next/link";
import { siteCopy } from "@/content/site-copy";
import SiteNav from "./site-nav";

export default function SiteHeader() {
  return (
    <header className="site-header" role="banner">
      <div className="container site-header__inner">
        <Link href="/" className="site-header__logo" aria-label={`${siteCopy.siteName} — Home`}>
          {siteCopy.siteName}
        </Link>
        <SiteNav />
      </div>
    </header>
  );
}
