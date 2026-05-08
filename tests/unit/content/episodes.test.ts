import { describe, it, expect } from "vitest";
import { episodes, featuredEpisode } from "@/content/episodes";

describe("episodes content invariants", () => {
  it("has exactly 20 episodes", () => {
    expect(episodes).toHaveLength(20);
  });

  it("has exactly one featured episode", () => {
    const featured = episodes.filter((ep) => ep.isFeatured);
    expect(featured).toHaveLength(1);
  });

  it("every episode has a non-empty title and summary", () => {
    for (const ep of episodes) {
      expect(ep.title.trim()).not.toBe("");
      expect(ep.summary.trim()).not.toBe("");
    }
  });

  it("every episode has a positive episode number and duration", () => {
    for (const ep of episodes) {
      expect(ep.episodeNumber).toBeGreaterThan(0);
      expect(ep.durationMinutes).toBeGreaterThan(0);
    }
  });

  it("featuredEpisode helper returns the one featured episode", () => {
    expect(featuredEpisode).toBeDefined();
    expect(featuredEpisode.isFeatured).toBe(true);
  });

  it("episode ids are unique", () => {
    const ids = episodes.map((ep) => ep.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });

  it("episode numbers are unique", () => {
    const nums = episodes.map((ep) => ep.episodeNumber);
    const unique = new Set(nums);
    expect(unique.size).toBe(nums.length);
  });
});
