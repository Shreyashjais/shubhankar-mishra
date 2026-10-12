"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { images, site, topics } from "@/lib/content";
import Media from "../ui/Media";
import Button from "../ui/Button";
import Magnetic from "../ui/Magnetic";
import Marquee from "../ui/Marquee";
import RotatingBadge from "../ui/RotatingBadge";
import { ease } from "../ui/motion";

// The preloader only plays on a full page load. Use 1.7 if you want the
// reveal to wait for the curtain after a hard refresh, as on the homepage.
const D = 0.3;

export default function ContactHero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="contact-hero"
      ref={ref}
      aria-labelledby="contact-hero-title"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-bone"
    >
      <motion.div
        aria-hidden
        style={{ y: glowY }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(55%_55%_at_78%_45%,rgba(200,16,46,0.28),transparent_70%),radial-gradient(40%_40%_at_8%_95%,rgba(241,236,227,0.07),transparent_70%)]"
      />

      <div className="relative mx-auto grid w-full max-w-[1600px] flex-1 grid-cols-1 items-end gap-16 px-5 pb-16 pt-32 md:px-10 lg:grid-cols-12 lg:gap-10 lg:pb-24">
        {/* Headline (centered vertically on large screens; add lg:-translate-y-10 to lift it further) */}
        <div className="relative z-20 lg:col-span-7 lg:self-center">
          <motion.p
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease, delay: D }}
            className="mb-6 flex items-center gap-4 text-sm font-medium text-bone/75"
          >
            <span className="h-px w-12 bg-red" />
            Every message is read by a person
          </motion.p>

          <motion.h1
            id="contact-hero-title"
            style={{ y: nameY }}
            className="font-cond font-extrabold uppercase leading-[0.9] tracking-tight text-[clamp(4.6rem,19vw,19rem)] lg:text-[clamp(5rem,12vw,12rem)]"
          >
            <span className="sr-only">Contact Shubhankar Mishra</span>

            <span aria-hidden className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "108%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.3, ease, delay: D }}
              >
                Let&apos;s
              </motion.span>
            </span>

            <span aria-hidden className="block overflow-hidden">
              <motion.span
                className="block text-outline"
                initial={{ y: "108%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.3, ease, delay: D + 0.14 }}
              >
                Talk
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: D + 0.5 }}
            className="mt-8 max-w-xl font-display text-3xl italic leading-[1.1] text-bone/90 md:text-5xl"
          >
            Partnerships, guest pitches, press and big ideas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: D + 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Button href="#contact">Send a message</Button>
            </Magnetic>
            <Button href={`mailto:${site.email}`} variant="outline" external>
              Email directly
            </Button>
          </motion.div>
        </div>

        {/* Portrait */}
        <div className="relative z-10 lg:col-span-5">
          <div className="relative mx-auto w-[78%] max-w-[440px] lg:mx-0 lg:ml-auto lg:w-[min(86%,calc((100svh_-_16rem)*0.8))] lg:max-w-[520px]">
            <motion.div style={{ y: photoY, opacity: fade }}>
              <motion.div
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease, delay: D + 0.2 }}
                className="relative"
              >
                <span aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 bg-red/90" />
                <div className="relative aspect-[4/5] overflow-hidden bg-smoke">
                  <Media src={images.portrait} alt="Shubhankar Mishra" priority sizes="(min-width:1024px) 34vw, 78vw" />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                </div>
              </motion.div>
            </motion.div>

            <RotatingBadge
              className="absolute -right-4 -top-10 z-20 hidden h-28 w-28 text-bone lg:block xl:-right-10 xl:h-36 xl:w-36"
              id="contact-hero-badge"
              text="Say hello • Say hello • Say hello • "
              icon={false}
            />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: D + 0.9 }}
        className="relative z-20 border-y border-bone/15 bg-ink/60 py-4 backdrop-blur-sm"
      >
        <Marquee
          items={topics}
          duration={36}
          itemClassName="font-cond text-4xl font-extrabold uppercase text-outline md:text-6xl"
        />
      </motion.div>
    </section>
  );
}