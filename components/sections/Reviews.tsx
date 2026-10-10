"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { reviews, topEpisodes } from "@/lib/content";
import Section from "../ui/Section";
import SectionHead from "../ui/SectionHead";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";
import { ease } from "../ui/motion";

export default function Reviews() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 7000);
    return () => clearInterval(t);
  }, [paused]);

  const go = (d: number) => setI((v) => (v + d + reviews.length) % reviews.length);

  return (
    <Section id="reviews" tone="charcoal">
      <SectionHead id="reviews" no="14" kicker="Reviews & episodes" title="In their words. On repeat." />

      <div className="grid gap-20 lg:grid-cols-12 lg:gap-24">
        <div className="lg:col-span-7" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
          <span aria-hidden className="block font-display text-[10rem] leading-[0.6] text-red">&ldquo;</span>
          <div className="min-h-[22rem] md:min-h-[19rem]" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.figure key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.65, ease }}>
                <blockquote className="font-display text-[clamp(1.9rem,3.4vw,3.2rem)] leading-[1.15]">{reviews[i].quote}</blockquote>
                <figcaption className="mt-8">
                  <span className="font-semibold">{reviews[i].name}</span>
                  <span className="text-bone/55"> · {reviews[i].role}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center gap-6">
            <button type="button" onClick={() => go(-1)} aria-label="Previous review" className="flex h-12 w-12 items-center justify-center rounded-full border border-bone/30 transition-colors hover:border-red hover:bg-red">
              ←
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Next review" className="flex h-12 w-12 items-center justify-center rounded-full border border-bone/30 transition-colors hover:border-red hover:bg-red">
              →
            </button>
            <div className="ml-2 flex gap-2" role="tablist" aria-label="Choose review">
              {reviews.map((r, k) => (
                <button key={r.name} type="button" role="tab" aria-selected={k === i} aria-label={`Review ${k + 1}`} onClick={() => setI(k)} className="py-3">
                  <span className={`block h-[3px] transition-all duration-500 ${k === i ? "w-12 bg-red" : "w-6 bg-bone/25"}`} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <Reveal>
            <h3 className="font-display text-3xl italic">Most-watched episodes</h3>
          </Reveal>
          <Stagger className="mt-8" gap={0.09}>
            <ol>
              {topEpisodes.map((e, k) => (
                <StaggerItem key={e.title}>
                  <li>
                    <a href="#episodes" className="group flex items-center gap-5 border-t border-bone/15 py-5 transition-colors hover:text-red">
                      <span className="w-14 font-cond text-5xl font-extrabold text-outline transition-colors group-hover:text-red">{k + 1}</span>
                      <span className="flex-1 font-display text-2xl leading-tight transition-transform duration-500 group-hover:translate-x-2">{e.title}</span>
                      <span className="text-sm text-bone/55">{e.plays}</span>
                    </a>
                  </li>
                </StaggerItem>
              ))}
              <li className="border-t border-bone/15" aria-hidden />
            </ol>
          </Stagger>
        </div>
      </div>
    </Section>
  );
}
