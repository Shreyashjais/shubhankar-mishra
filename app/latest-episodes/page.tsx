import type { Metadata } from "next";

import Featured from "@/components/sections/Featured";
import Episodes from "@/components/sections/Episodes";
import Shorts from "@/components/sections/Shorts";
import EpisodesHero from "@/components/episodes/episodesHero";

export const metadata: Metadata = {
  title: "Latest Episodes",
  description:
    "Watch the latest long-form podcast episodes and interviews from Shubhankar Mishra: new conversations with founders, athletes, artists and thinkers.",
  alternates: { canonical: "/latest-episodes" },
};

export default function LatestEpisodesPage() {
  return (
    <>
      <EpisodesHero />
      <Featured />
      <Episodes />
      <Shorts />
    </>
  );
}