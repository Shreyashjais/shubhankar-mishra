import type { Metadata } from "next";

import Journey from "@/components/sections/Journey";
import Social from "@/components/sections/Social";
import JourneyHero from "@/components/journey/journeyHero";

export const metadata: Metadata = {
  title: "The Journey",
  description:
    "The career timeline of Shubhankar Mishra: from a borrowed microphone to long-form conversations watched around the world. Follow the milestones and the community.",
  alternates: { canonical: "/journey" },
};

export default function JourneyPage() {
  return (
    <>
      <JourneyHero />
      <Journey />
      <Social />
    </>
  );
}