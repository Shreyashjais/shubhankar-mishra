
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { heroMarquee, images, site } from "@/lib/content";
import Media from "../ui/Media";
import Button from "../ui/Button";
import Magnetic from "../ui/Magnetic";
import Marquee from "../ui/Marquee";
import RotatingBadge from "../ui/RotatingBadge";
import { ease } from "../ui/motion";

const D = 1.7; // wait for the preloader curtain

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-bone"
    >
      <motion.div
        aria-hidden
        style={{ y: glowY }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(55%_55%_at_78%_40%,rgba(200,16,46,0.28),transparent_70%),radial-gradient(40%_40%_at_8%_95%,rgba(241,236,227,0.07),transparent_70%)]"
      />

      <div className="relative mx-auto flex w-full max-w-[1600px] flex-1 flex-col px-5 pt-28 md:px-10 lg:pt-32">
        {/* Portrait */}
        <motion.div
          style={{ y: portraitY, opacity: fade }}
          
          className="relative z-10 mx-auto mb-[-18%] w-[78%] max-w-[460px] sm:mb-[-12%] lg:absolute lg:bottom-0 lg:right-10 lg:mx-0 lg:mb-0 lg:w-[min(40vw,calc((100svh_-_12rem)*0.8))] lg:max-w-[700px]">
          <motion.div
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease, delay: D }}
          >
            <motion.div
              style={{ scale: portraitScale }}
              className="relative aspect-[4/5] origin-bottom [-webkit-mask-image:linear-gradient(to_bottom,black_72%,transparent)] [mask-image:linear-gradient(to_bottom,black_72%,transparent)]"
            >
              <Media
                src={images.portrait}
                alt="Portrait of Shubhankar Mishra"
                priority
                sizes="(min-width:1024px) 40vw, 80vw"
              />
            </motion.div>
          </motion.div>

          <span
            aria-hidden
            className="absolute -left-4 top-10 hidden h-[60%] w-px bg-red lg:block"
          />

          <RotatingBadge
            className="absolute -left-6 bottom-[22%] hidden h-32 w-32 text-bone lg:block xl:-left-14 xl:h-40 xl:w-40"
            id="hero-badge"
          />
        </motion.div>

        {/* Headline */}
        <div className="relative z-20 mt-auto pb-10 lg:pb-20">
          <motion.p
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease, delay: D }}
            className="mb-6 flex items-center gap-4 text-sm font-medium text-bone/75"
          >
            <span className="h-px w-12 bg-red" />
            Host of the long-form conversation series
          </motion.p>

          <motion.h1
            id="hero-title"
            style={{ y: nameY }}
            className="max-w-full font-cond font-extrabold uppercase leading-[0.9] tracking-tight text-[clamp(4.6rem,19.5vw,20rem)] lg:max-w-[72%] lg:text-[clamp(5rem,12.5vw,12rem)]"
          >
            <span className="sr-only">{site.name}</span>

            <span aria-hidden className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "108%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.3, ease, delay: D }}
              >
                Shubhankar
              </motion.span>
            </span>

            <span aria-hidden className="block overflow-hidden">
              <motion.span
                className="block text-outline"
                initial={{ y: "108%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.3, ease, delay: D + 0.14 }}
              >
                Mishra
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: D + 0.5 }}
            className="mt-8 max-w-xl font-display text-3xl italic leading-[1.1] text-bone/90 md:text-5xl"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: D + 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Button href="#episodes">Watch episodes</Button>
            </Magnetic>

            <Button href="#contact" variant="outline">
              Work with me
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: D + 0.9 }}
        className="relative z-20 border-y border-bone/15 bg-ink/60 py-4 backdrop-blur-sm"
      >
        <Marquee
          items={heroMarquee}
          duration={36}
          itemClassName="font-cond text-4xl font-extrabold uppercase text-outline md:text-6xl"
        />
      </motion.div>
    </section>
  );
}
