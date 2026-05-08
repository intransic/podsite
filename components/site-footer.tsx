import { siteCopy } from "@/content/site-copy";

export default function SiteFooter() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container site-footer__inner">
        <span>{siteCopy.footer.credit}</span>
        <span>{siteCopy.siteName} — {siteCopy.tagline}</span>
      </div>
    </footer>
  );
}
