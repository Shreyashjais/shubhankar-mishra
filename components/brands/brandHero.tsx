"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { brands, episodes } from "@/lib/content";
import Media from "../ui/Media";
import Button from "../ui/Button";
import Magnetic from "../ui/Magnetic";
import Marquee from "../ui/Marquee";
import RotatingBadge from "../ui/RotatingBadge";
import { ease } from "../ui/motion";

// The preloader only plays on a full page load. Use 1.7 if you want the
// reveal to wait for the curtain after a hard refresh, as on the homepage.
const D = 0.3;

export default function BrandsHero() {
  const ep = episodes[0];
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const playerY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="brands-hero"
      ref={ref}
      aria-labelledby="brands-hero-title"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-bone"
    >
      <motion.div
        aria-hidden
        style={{ y: glowY }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(55%_55%_at_78%_45%,rgba(200,16,46,0.28),transparent_70%),radial-gradient(40%_40%_at_8%_95%,rgba(241,236,227,0.07),transparent_70%)]"
      />

      <div className="relative mx-auto grid w-full max-w-[1600px] flex-1 grid-cols-1 items-end gap-16 px-5 pb-14 pt-32 md:px-10 lg:grid-cols-12 lg:gap-10 lg:pb-20">
        {/* Headline */}
        <div className="relative z-20 lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease, delay: D }}
            className="mb-6 flex items-center gap-4 text-sm font-medium text-bone/75"
          >
            <span className="h-px w-12 bg-red" />
            Sponsored content that audiences actually watch
          </motion.p>

          <motion.h1
            id="brands-hero-title"
            style={{ y: nameY }}
            className="font-cond font-extrabold uppercase leading-[0.9] tracking-tight text-[clamp(4rem,16.5vw,17rem)] lg:text-[clamp(5rem,10.5vw,10.5rem)]"
          >
            <span className="sr-only">Brand integrations</span>

            <span aria-hidden className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "108%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.3, ease, delay: D }}
              >
                Brand
              </motion.span>
            </span>

            <span aria-hidden className="block overflow-hidden">
              <motion.span
                className="block text-outline"
                initial={{ y: "108%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.3, ease, delay: D + 0.14 }}
              >
                Integrations
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: D + 0.5 }}
            className="mt-8 max-w-xl font-display text-3xl italic leading-[1.1] text-bone/90 md:text-5xl"
          >
            Your story, told inside a conversation people finish.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: D + 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Button href="#contact">Request the media kit</Button>
            </Magnetic>
            <Button href="#brands" variant="outline">
              See past campaigns
            </Button>
          </motion.div>
        </div>

        {/* Mock sponsored episode with an integration marker */}
        <motion.div style={{ y: playerY, opacity: fade }} className="relative z-10 lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 1.03 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.4, ease, delay: D + 0.2 }}
          >
            <div className="relative aspect-video overflow-hidden bg-smoke">
              <Media src={ep.img} alt={`Sample sponsored episode: ${ep.title}`} priority sizes="(min-width:1024px) 40vw, 100vw" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold backdrop-blur">Sponsored</span>
              <span
                aria-hidden
                className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red"
              >
                <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6" fill="currentColor">
                  <path d="M6 4l14 8-14 8z" />
                </svg>
              </span>

              {/* Timeline scrubber */}
              <div aria-hidden className="absolute inset-x-4 bottom-4">
                <div className="relative h-1 bg-bone/25">
                  <motion.span
                    className="absolute inset-y-0 bg-red"
                    style={{ left: "38%", width: "16%" }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, ease, delay: D + 1 }}
                  />
                  <motion.span
                    className="absolute -top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-bone"
                    initial={{ left: "0%" }}
                    animate={{ left: "46%" }}
                    transition={{ duration: 3, ease: "easeInOut", delay: D + 0.8 }}
                  />
                </div>
                <div className="relative mt-2 h-4 text-xs font-medium text-bone/85">
                  <span className="absolute" style={{ left: "38%" }}>
                    Your story starts here
                  </span>
                </div>
              </div>
            </div>

            {/* Best results, pulled from your case studies */}
            <ul className="mt-6 grid grid-cols-3 gap-4 border-t border-bone/20 pt-5">
              {brands.cases.map((c, i) => (
                <motion.li
                  key={c.brand}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease, delay: D + 0.9 + i * 0.12 }}
                >
                  <p className="font-cond text-3xl font-extrabold leading-none md:text-4xl">{c.result}</p>
                  <p className="mt-2 text-xs text-bone/60 md:text-sm">{c.brand}</p>
                </motion.li>
              ))}
            </ul>

            <RotatingBadge
              className="absolute -right-4 -top-10 hidden h-28 w-28 text-bone lg:block xl:-right-10 xl:h-36 xl:w-36"
              id="brands-hero-badge"
              text="Host-read • Trusted • Measured • "
              icon={false}
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
          items={brands.partners}
          duration={40}
          itemClassName="font-cond text-4xl font-extrabold uppercase text-outline md:text-6xl"
        />
      </motion.div>
    </section>
  );
}