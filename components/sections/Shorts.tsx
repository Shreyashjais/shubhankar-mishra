"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { shorts } from "@/lib/content";
import SectionHead from "../ui/SectionHead";
import Media from "../ui/Media";

/** Scroll-pinned horizontal gallery: vertical scroll drives the sideways travel. */
export default function Shorts() {
  const target = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);

  useEffect(() => {
    const calc = () => setDist(Math.max(0, (track.current?.scrollWidth ?? 0) - window.innerWidth));
    calc();
    window.addEventListener("resize", calc);
    const t = setTimeout(calc, 600); // after fonts settle
    return () => {
      window.removeEventListener("resize", calc);
      clearTimeout(t);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);

  return (
    <section id="shorts" ref={target} aria-labelledby="shorts-title" className="relative bg-charcoal text-bone" style={{ height: `calc(100vh + ${dist}px)` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <motion.div ref={track} style={{ x }} className="flex w-max items-center gap-6 px-5 will-change-transform md:gap-10 md:px-10">
          <div className="w-[86vw] max-w-3xl shrink-0 pr-6 md:pr-16">
            <SectionHead id="shorts" no="04" kicker="Shorts & highlights" title="Sixty seconds. Zero filler." className="!mb-8">
              <p className="mt-8 max-w-md text-lg text-bone/70">Scroll to travel through the moments that stopped the feed. Each clip is cut from a full-length episode.</p>
            </SectionHead>
          </div>

          {shorts.map((s, i) => (
            <a
              key={s.title}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch short: ${s.title}`}
              className={`group relative block aspect-[9/16] w-[64vw] shrink-0 overflow-hidden bg-smoke sm:w-[40vw] md:w-[27vw] lg:w-[19vw] ${i % 2 ? "translate-y-10" : "-translate-y-6"}`}
            >
              <Media src={s.img} alt={s.title} sizes="(min-width:1024px) 20vw, 64vw" className="transition-transform duration-[1400ms] ease-out group-hover:scale-110" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/30" />
              <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold backdrop-blur">
                <svg viewBox="0 0 24 24" className="h-3 w-3 text-red" fill="currentColor" aria-hidden>
                  <path d="M6 4l14 8-14 8z" />
                </svg>
                {s.views}
              </span>
              {/* <p className="absolute inset-x-4 bottom-5 font-display text-2xl leading-tight md:text-3xl">{s.title}</p> */}
              <span aria-hidden className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-red transition-transform duration-700 group-hover:scale-x-100" />
            </a>
          ))}
          <div className="w-[10vw] shrink-0" aria-hidden />
        </motion.div>

        <div aria-hidden className="absolute inset-x-5 bottom-8 h-px bg-bone/15 md:inset-x-10">
          <motion.div style={{ scaleX: scrollYProgress }} className="h-full origin-left bg-red" />
        </div>
      </div>
    </section>
  );
}
