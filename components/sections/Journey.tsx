"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { journey } from "@/lib/content";
import Section from "../ui/Section";
import SectionHead from "../ui/SectionHead";
import { Reveal } from "../ui/Reveal";

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 65%", "end 55%"] });

  return (
    <Section id="journey" tone="ink">
      <SectionHead id="journey" no="09" kicker="The journey" title="Seven years, one microphone, a lot of questions." />

      <ol ref={ref} className="relative">
        <span aria-hidden className="absolute left-3 top-0 h-full w-px bg-bone/15 md:left-1/2" />
        <motion.span aria-hidden style={{ scaleY: scrollYProgress }} className="absolute left-3 top-0 h-full w-px origin-top bg-red md:left-1/2" />

        {journey.map((j, i) => {
          const left = i % 2 === 0;
          return (
            <li key={j.year} className="relative py-10 pl-12 md:grid md:grid-cols-2 md:gap-28 md:py-16 md:pl-0">
              <span aria-hidden className="absolute left-3 top-14 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-red bg-ink md:left-1/2 md:top-[4.5rem]" />
              <Reveal className={left ? "md:col-start-1 md:text-right" : "md:col-start-2"}>
                <p className="font-cond font-extrabold leading-[0.85] text-outline text-[clamp(5rem,12vw,11rem)]">{j.year}</p>
                <h3 className="mt-4 font-display text-3xl md:text-5xl">{j.title}</h3>
                <p className={`mt-4 max-w-md text-lg text-bone/65 ${left ? "md:ml-auto" : ""}`}>{j.text}</p>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
