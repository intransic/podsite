import type { Metadata } from "next";
import { episodes } from "@/content/episodes";
import { siteCopy } from "@/content/site-copy";
import EpisodeCard from "@/components/episode-card";

export const metadata: Metadata = {
  title: "Episodes",
  description: siteCopy.episodesPageSubheading,
};

export default function EpisodesPage() {
  return (
    <div className="container">
      <header className="page-header">
        <h1 className="page-header__heading">{siteCopy.episodesPageHeading}</h1>
        <p className="page-header__subheading">{siteCopy.episodesPageSubheading}</p>
      </header>
      <ol className="episode-grid" aria-label="Episode catalog" reversed>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <EpisodeCard episode={episode} />
          </li>
        ))}
      </ol>
    </div>
  );
}
