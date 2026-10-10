"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/lib/content";
import Section from "../ui/Section";
import SectionHead from "../ui/SectionHead";
import Media from "../ui/Media";
import { Reveal } from "../ui/Reveal";
import { ease } from "../ui/motion";

export default function Projects() {
  const [active, setActive] = useState(0);

  return (
    <Section id="projects" tone="ink">
      <SectionHead id="projects" no="15" kicker="Featured projects & initiatives" title="Work that goes beyond the episode." />

      <div className="grid gap-16 lg:grid-cols-12">
        <ul className="lg:col-span-7">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <li onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} className="border-t border-bone/15 py-8">
                <button type="button" onClick={() => setActive(i)} aria-pressed={active === i} className="group block w-full text-left">
                  <span className="flex items-baseline justify-between gap-6">
                    <span className={`font-display text-[clamp(2.4rem,5.4vw,5rem)] leading-none transition-all duration-500 ${active === i ? "translate-x-4 text-red" : "text-bone/80"}`}>
                      {p.name}
                    </span>
                    <span className="hidden whitespace-nowrap text-sm text-bone/55 sm:block">{p.kind} · {p.year}</span>
                  </span>
                  <span className="mt-4 block max-w-xl text-lg text-bone/60">{p.text}</span>
                </button>
                {/* Mobile: show the image inline */}
                <div className="relative mt-6 aspect-[4/3] overflow-hidden bg-smoke lg:hidden">
                  <Media src={p.img} alt={`${p.name} project artwork`} sizes="100vw" />
                </div>
              </li>
            </Reveal>
          ))}
          <li className="border-t border-bone/15" aria-hidden />
        </ul>

        <div className="relative hidden self-start lg:sticky lg:top-28 lg:col-span-5 lg:block">
          <div className="relative aspect-[4/5] overflow-hidden bg-smoke">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={active}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.12, clipPath: "inset(0 0 100% 0)" }}
                animate={{ opacity: 1, scale: 1, clipPath: "inset(0 0 0% 0)" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease }}
              >
                <Media src={projects[active].img} alt={`${projects[active].name} project artwork`} sizes="40vw" />
              </motion.div>
            </AnimatePresence>
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
            <p className="absolute bottom-6 left-6 font-cond text-6xl font-extrabold text-outline" aria-hidden>
              {String(active + 1).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
