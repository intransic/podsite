import Image from "next/image";
import type { Episode } from "@/content/episodes";

interface EpisodeCardProps {
  episode: Episode;
}

export default function EpisodeCard({ episode }: EpisodeCardProps) {
  const artworkSrc = episode.artworkSrc || "/images/placeholder.svg";
  const artworkAlt = episode.artworkAlt || `Artwork for episode ${episode.episodeNumber}`;

  return (
    <article className="episode-card" aria-label={`Episode ${episode.episodeNumber}: ${episode.title}`}>
      <Image
        src={artworkSrc}
        alt={artworkAlt}
        width={400}
        height={400}
        className="episode-card__artwork"
      />
      <div className="episode-card__body">
        <div className="episode-card__meta">
          <span className="episode-card__ep">Ep. {episode.episodeNumber}</span>
        </div>
        <h2 className="episode-card__title">{episode.title}</h2>
        <p className="episode-card__summary">{episode.summary}</p>
        <div className="episode-card__footer">
          <span>{episode.publishDate}</span>
          <span>·</span>
          <span>{episode.durationMinutes} min</span>
        </div>
      </div>
    </article>
  );
}
