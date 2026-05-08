import Image from "next/image";
import Link from "next/link";
import type { Episode } from "@/content/episodes";
import { siteCopy } from "@/content/site-copy";

interface FeaturedEpisodeProps {
  episode: Episode;
}

export default function FeaturedEpisode({ episode }: FeaturedEpisodeProps) {
  return (
    <section className="featured container" aria-label="Featured episode">
      <p className="featured__label">{siteCopy.featuredLabel}</p>
      <article className="featured__card">
        <Image
          src={episode.artworkSrc}
          alt={episode.artworkAlt}
          width={280}
          height={280}
          className="featured__artwork"
          priority
        />
        <div className="featured__body">
          <div className="featured__meta">
            <span className="featured__ep-number">Ep. {episode.episodeNumber}</span>
            <span>{episode.publishDate}</span>
            <span>{episode.durationMinutes} min</span>
          </div>
          <h2 className="featured__title">{episode.title}</h2>
          <p className="featured__summary">{episode.summary}</p>
          <Link href={siteCopy.ctaHref} className="featured__cta" aria-label={siteCopy.ctaLabel}>
            {siteCopy.ctaLabel} →
          </Link>
        </div>
      </article>
    </section>
  );
}
