import type { Metadata } from "next";
import { siteCopy } from "@/content/site-copy";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteCopy.siteName} — ${siteCopy.tagline}`,
};

export default function AboutPage() {
  return (
    <div className="container">
      <header className="about-page-heading">
        <h1 className="page-header__heading">{siteCopy.about.pageHeading}</h1>
      </header>
      {siteCopy.about.sections.map((section) => (
        <section key={section.id} className="about-section" aria-labelledby={`section-${section.id}`}>
          <h2 id={`section-${section.id}`} className="about-section__heading">
            {section.heading}
          </h2>
          <p className="about-section__body">{section.body}</p>
        </section>
      ))}
    </div>
  );
}
