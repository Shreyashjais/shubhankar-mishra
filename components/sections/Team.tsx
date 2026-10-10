"use client";

import { team } from "@/lib/content";
import Section from "../ui/Section";
import SectionHead from "../ui/SectionHead";
import Media from "../ui/Media";
import { Reveal } from "../ui/Reveal";

const offsets = ["", "md:mt-24", "md:mt-8", "md:mt-32", "md:mt-14"];

export default function Team() {
  return (
    <Section id="team" tone="bone">
      <SectionHead id="team" no="17" kicker="Behind the brand" title="The small crew behind every episode." light />

      <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-5 md:gap-x-6">
        {team.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.08} className={offsets[i]}>
            <figure className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-smoke">
                <Media src={m.img} alt={`${m.name}, ${m.role}`} sizes="(min-width:768px) 20vw, 50vw" className="grayscale transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:grayscale-0" />
              </div>
              <figcaption className="mt-4">
                <p className="font-display text-2xl leading-tight">{m.name}</p>
                <p className="text-sm text-ink/60">{m.role}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
