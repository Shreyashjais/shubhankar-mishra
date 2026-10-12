"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { images, journey } from "@/lib/content";
import Media from "../ui/Media";
import Button from "../ui/Button";
import Magnetic from "../ui/Magnetic";
import Marquee from "../ui/Marquee";
import Counter from "../ui/Counter";
import RotatingBadge from "../ui/RotatingBadge";

import { ease } from "../ui/motion";
import { useHeroDelay } from "../useHeroDelay";

export default function JourneyHero() {
  const D = useHeroDelay();

  // Track page scroll directly (the hero is always at the top of the page)
  const { scrollY } = useScroll();
  const nameY = useTransform(scrollY, [0, 900], ["0%", "-20%"]);
  const stackY = useTransform(scrollY, [0, 900], ["0%", "12%"]);
  const backY = useTransform(scrollY, [0, 900], ["0%", "-8%"]);
  const glowY = useTransform(scrollY, [0, 900], ["0%", "30%"]);
  const fade = useTransform(scrollY, [0, 650], [1, 0]);

  const first = journey[0].year;
  const last = journey[journey.length - 1].year;
  const years = Number(last) - Number(first);

  return (
    <section
      id="journey-hero"
      aria-labelledby="journey-hero-title"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-bone"
    >
      <motion.div
        aria-hidden
        style={{ y: glowY }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(55%_55%_at_78%_45%,rgba(200,16,46,0.28),transparent_70%),radial-gradient(40%_40%_at_8%_95%,rgba(241,236,227,0.07),transparent_70%)]"
      />

      <div className="relative mx-auto grid w-full max-w-[1600px] flex-1 grid-cols-1 items-end gap-16 px-5 pb-16 pt-32 md:px-10 lg:grid-cols-12 lg:gap-8 lg:pb-24">
        {/* Headline */}
        <div className="relative z-20 lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease, delay: D }}
            className="mb-6 flex items-center gap-4 text-sm font-medium text-bone/75"
          >
            <span className="h-px w-12 bg-red" />
            {first} to {last}, and still recording
          </motion.p>

          <motion.h1
            id="journey-hero-title"
            style={{ y: nameY }}
            className="font-cond font-extrabold uppercase leading-[0.9] tracking-tight text-[clamp(4.6rem,19vw,19rem)] lg:text-[clamp(5rem,11.5vw,11.5rem)]"
          >
            <span className="sr-only">The journey of Shubhankar Mishra</span>

            <span aria-hidden className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "108%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.3, ease, delay: D }}
              >
                The
              </motion.span>
            </span>

            <span aria-hidden className="block overflow-hidden">
              <motion.span
                className="block text-outline"
                initial={{ y: "108%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.3, ease, delay: D + 0.14 }}
              >
                Journey
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: D + 0.5 }}
            className="mt-8 max-w-xl font-display text-3xl italic leading-[1.1] text-bone/90 md:text-5xl"
          >
            From a borrowed microphone to a seat at every table.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: D + 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Button href="#journey">Follow the timeline</Button>
            </Magnetic>
            <Button href="#social" variant="outline">
              Follow along
            </Button>
          </motion.div>
        </div>

        {/* Then-and-now photo stack */}
        <motion.div style={{ y: stackY, opacity: fade }} className="relative z-10 lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-[70%] max-w-[420px] lg:w-[min(78%,calc((100svh_-_16rem)*0.8))] lg:max-w-[520px]">
            {/* Back frame: "then" lands first */}
            <motion.div style={{ y: backY }} className="absolute inset-0">
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0, rotate: -14, x: "-30%" }}
                animate={{ opacity: 1, rotate: -6, x: "-14%" }}
                transition={{ duration: 1.4, ease, delay: D + 0.2 }}
              >
                <div className="relative h-full w-full overflow-hidden bg-smoke grayscale">
                  <Media src={images.old} alt="Shubhankar Mishra in the early years" sizes="(min-width:1024px) 30vw, 70vw" />
                  <div aria-hidden className="absolute inset-0 bg-ink/35" />
                  <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold backdrop-blur">{first}</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Front frame: "now" follows */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0, rotate: 12, x: "30%", y: "10%" }}
              animate={{ opacity: 1, rotate: 3, x: "10%", y: "6%" }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 1.4, ease, delay: D + 0.8 }}
            >
              <div className="relative h-full w-full overflow-hidden bg-smoke shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
                <Media src={images.portrait} alt="Shubhankar Mishra today" priority sizes="(min-width:1024px) 30vw, 70vw" />
                <span className="absolute left-4 top-4 rounded-full bg-red px-3 py-1 text-xs font-semibold">{last}</span>
              </div>
            </motion.div>

            {/* Years on air */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease, delay: D + 1.5 }}
              className="absolute -bottom-8 -left-4 z-20 flex h-32 w-32 flex-col items-center justify-center rounded-full bg-red md:-left-10 md:h-40 md:w-40"
            >
              <p className="font-cond text-5xl font-extrabold leading-none md:text-6xl">
                <Counter to={years} suffix="+" duration={2.2} />
              </p>
              <p className="mt-1 text-xs font-medium text-bone/90 md:text-sm">years on air</p>
            </motion.div>

            <RotatingBadge
              className="absolute -right-4 -top-10 z-20 hidden h-28 w-28 text-bone lg:block xl:-right-10 xl:h-36 xl:w-36"
              id="journey-hero-badge"
              text="Then • Now • Next • Then • Now • "
              icon={false}
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: D + 0.9 }}
        className="relative z-20 border-y border-bone/15 bg-ink/60 py-4 backdrop-blur-sm"
      >
        <Marquee
          items={journey.map((j) => j.title)}
          duration={48}
          itemClassName="font-cond text-4xl font-extrabold uppercase text-outline md:text-6xl"
        />
      </motion.div>
    </section>
  );
}