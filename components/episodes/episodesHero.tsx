"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { episodes } from "@/lib/content";
import Media from "../ui/Media";
import Button from "../ui/Button";
import Magnetic from "../ui/Magnetic";
import Marquee from "../ui/Marquee";
import RotatingBadge from "../ui/RotatingBadge";
import { ease } from "../ui/motion";

// Entrance delay. The homepage waits ~1.7s for the preloader curtain; on this
// page, client-side navigation doesn't replay the preloader, so we start fast.
const D = 0.3;

const categories = Array.from(new Set(episodes.map((e) => e.category)));

export default function EpisodesHero() {
  const latest = episodes[0];
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="latest-hero"
      ref={ref}
      aria-labelledby="latest-title"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-bone"
    >
      <motion.div
        aria-hidden
        style={{ y: glowY }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(55%_55%_at_78%_45%,rgba(200,16,46,0.28),transparent_70%),radial-gradient(40%_40%_at_8%_95%,rgba(241,236,227,0.07),transparent_70%)]"
      />

      <div className="relative mx-auto grid w-full max-w-[1600px] flex-1 grid-cols-1 items-end gap-12 px-5 pb-12 pt-32 md:px-10 lg:grid-cols-12 lg:gap-8 lg:pb-20">
        {/* Headline */}
        <div className="relative z-20 lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease, delay: D }}
            className="mb-6 flex items-center gap-4 text-sm font-medium text-bone/75"
          >
            <span className="h-px w-12 bg-red" />
            New conversations, every week
          </motion.p>

          <motion.h1
            id="latest-title"
            style={{ y: nameY }}
            className="font-cond font-extrabold uppercase leading-[0.9] tracking-tight text-[clamp(4.4rem,18vw,18rem)] lg:text-[clamp(5rem,10.5vw,11rem)]"
          >
            <span className="sr-only">Latest episodes</span>

            <span aria-hidden className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "108%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.3, ease, delay: D }}
              >
                Latest
              </motion.span>
            </span>

            <span aria-hidden className="block overflow-hidden">
              <motion.span
                className="block text-outline"
                initial={{ y: "108%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.3, ease, delay: D + 0.14 }}
              >
                Episodes
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: D + 0.5 }}
            className="mt-8 max-w-xl font-display text-3xl italic leading-[1.1] text-bone/90 md:text-5xl"
          >
            Long conversations, fresh off the recording table.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: D + 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Button href={latest.href} external>
                Watch the newest episode
              </Button>
            </Magnetic>
            <Button href="#episodes" variant="outline">
              Browse all episodes
            </Button>
          </motion.div>
        </div>

        {/* Newest episode card (full 16:9, no cropping) */}
        <motion.div style={{ y: cardY, opacity: fade }} className="relative z-10 lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 1.04 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.4, ease, delay: D + 0.2 }}
          >
            <a
              href={latest.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch episode ${latest.no}: ${latest.title}`}
              className="group relative block"
            >
              <div className="relative aspect-video overflow-hidden bg-smoke">
                <Media
                  src={latest.img}
                  alt={`Thumbnail for episode ${latest.no}: ${latest.title}`}
                  priority
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-red px-3 py-1 text-xs font-semibold">Newest</span>
                <span
                  aria-hidden
                  className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red transition-transform duration-500 group-hover:scale-110"
                >
                  <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor">
                    <path d="M6 4l14 8-14 8z" />
                  </svg>
                </span>
                <span className="absolute bottom-4 right-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold backdrop-blur">
                  {latest.duration}
                </span>
              </div>

              <div className="mt-5 flex items-start gap-5">
                <span aria-hidden className="font-cond text-6xl font-extrabold leading-none text-outline">
                  {latest.no}
                </span>
                <div>
                  <p className="text-sm font-medium text-red">{latest.category}</p>
                  <h2 className="mt-1 font-display text-3xl leading-tight md:text-4xl">{latest.title}</h2>
                  <p className="mt-2 text-sm text-bone/60">With {latest.guest}</p>
                </div>
              </div>
            </a>

            <RotatingBadge
              className="absolute -left-8 -top-10 hidden h-28 w-28 text-bone lg:block xl:-left-14 xl:h-36 xl:w-36"
              id="latest-badge"
              text="Watch • Listen • Feel • Repeat • "
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: D + 0.9 }}
        className="relative z-20 border-y border-bone/15 bg-ink/60 py-4 backdrop-blur-sm"
      >
        <Marquee
          items={categories}
          duration={36}
          itemClassName="font-cond text-4xl font-extrabold uppercase text-outline md:text-6xl"
        />
      </motion.div>
    </section>
  );
}