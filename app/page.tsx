import type { Metadata } from "next";
import { featuredEpisode } from "@/content/episodes";
import { siteCopy } from "@/content/site-copy";
import FeaturedEpisode from "@/components/featured-episode";

export const metadata: Metadata = {
  title: siteCopy.siteName,
  description: siteCopy.description,
};

export default function HomePage() {
  return (
    <>
      <section className="hero container" aria-label="Introduction">
        <span className="hero__eyebrow">{siteCopy.siteName}</span>
        <h1 className="hero__heading">{siteCopy.heroHeading}</h1>
        <p className="hero__subheading">{siteCopy.heroSubheading}</p>
      </section>
      <FeaturedEpisode episode={featuredEpisode} />
    </>
  );
}
