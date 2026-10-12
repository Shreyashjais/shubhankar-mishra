"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { about, achievements, images } from "@/lib/content";
import Media from "../ui/Media";
import Button from "../ui/Button";
import Magnetic from "../ui/Magnetic";
import Marquee from "../ui/Marquee";
import Counter from "../ui/Counter";
import RotatingBadge from "../ui/RotatingBadge";
import { ease } from "../ui/motion";

// The preloader only plays on a full page load. Use 1.7 if you want the
// reveal to wait for the curtain after a hard refresh, as on the homepage.
const D = 0.3;

export default function AboutHero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="about-hero"
      ref={ref}
      aria-labelledby="about-hero-title"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-bone"
    >
      <motion.div
        aria-hidden
        style={{ y: glowY }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(55%_55%_at_78%_40%,rgba(200,16,46,0.28),transparent_70%),radial-gradient(40%_40%_at_8%_95%,rgba(241,236,227,0.07),transparent_70%)]"
      />

      <div className="relative mx-auto grid w-full max-w-[1600px] flex-1 grid-cols-1 items-end gap-12 px-5 pt-32 md:px-10 lg:grid-cols-12 lg:gap-8">
        {/* Headline */}
        <div className="relative z-20 pb-10 lg:col-span-7 lg:pb-20">
          <motion.p
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease, delay: D }}
            className="mb-6 flex items-center gap-4 text-sm font-medium text-bone/75"
          >
            <span className="h-px w-12 bg-red" />
            The person behind the microphone
          </motion.p>

          <motion.h1
            id="about-hero-title"
            style={{ y: nameY }}
            className="font-cond font-extrabold uppercase leading-[0.9] tracking-tight text-[clamp(4.6rem,19vw,19rem)] lg:text-[clamp(5rem,11.5vw,11.5rem)]"
          >
            <span className="sr-only">About Shubhankar Mishra</span>

            <span aria-hidden className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "108%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.3, ease, delay: D }}
              >
                About
              </motion.span>
            </span>

            <span aria-hidden className="block overflow-hidden">
              <motion.span
                className="block text-outline"
                initial={{ y: "108%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.3, ease, delay: D + 0.14 }}
              >
                Shubhankar
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: D + 0.5 }}
            className="mt-8 max-w-xl font-display text-3xl italic leading-[1.1] text-bone/90 md:text-5xl"
          >
            A host who listens louder than he talks.
          </motion.p>

          {/* Quick numbers */}
          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: D + 0.65 }}
            className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-bone/20 pt-6"
          >
            {achievements.slice(0, 3).map((a) => (
              <div key={a.label}>
                <dd className="font-cond text-4xl font-extrabold leading-none md:text-5xl">
                  <Counter to={a.value} decimals={a.decimals ?? 0} suffix={a.suffix} suffixClassName="text-red" duration={2} />
                </dd>
                <dt className="mt-2 text-sm text-bone/60">{a.label}</dt>
              </div>
            ))}
          </motion.dl>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: D + 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Button href="#about">Read the story</Button>
            </Magnetic>
            <Button href="/#contact" variant="outline">
              Work with me
            </Button>
          </motion.div>
        </div>

        {/* Portrait: sized by width AND screen height so the head is never cut off */}
        <motion.div
          style={{ y: portraitY, opacity: fade }}
          className="relative z-10 mx-auto w-[78%] max-w-[460px] lg:col-span-5 lg:mx-0 lg:w-[min(100%,calc((100svh_-_12rem)*0.8))] lg:max-w-[640px] lg:justify-self-end"
        >
          <motion.div
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease, delay: D + 0.2 }}
          >
            <motion.div
              style={{ scale: portraitScale }}
              className="relative aspect-[4/5] origin-bottom [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent)] [mask-image:linear-gradient(to_bottom,black_75%,transparent)]"
            >
              <Media
                src={images.portrait}
                alt="Portrait of Shubhankar Mishra"
                priority
                sizes="(min-width:1024px) 40vw, 80vw"
              />
            </motion.div>
          </motion.div>

          <span aria-hidden className="absolute -left-4 top-10 hidden h-[55%] w-px bg-red lg:block" />
          <RotatingBadge
            className="absolute -left-6 bottom-[20%] hidden h-28 w-28 text-bone lg:block xl:-left-14 xl:h-36 xl:w-36"
            id="about-hero-badge"
            text="Curious • Unhurried • Unfiltered • "
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: D + 0.9 }}
        className="relative z-20 border-y border-bone/15 bg-ink/60 py-4 backdrop-blur-sm"
      >
        <Marquee
          items={[...about.traits, "Podcast host", "Interviewer", "Storyteller"]}
          duration={36}
          itemClassName="font-cond text-4xl font-extrabold uppercase text-outline md:text-6xl"
        />
      </motion.div>
    </section>
  );
}