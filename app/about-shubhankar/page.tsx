import type { Metadata } from "next";

import About from "@/components/sections/About";
import MediaRecognition from "@/components/sections/MediaRecognition";
import Achievements from "@/components/sections/Achievements";
import Impact from "@/components/sections/Impact";
import AboutHero from "@/components/about/aboutHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Shubhankar Mishra: podcast host, interviewer and storyteller. His story, press features, awards, audience milestones and global reach.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <About />
      <MediaRecognition />
      <Achievements />
      <Impact />
    </>
  );
}