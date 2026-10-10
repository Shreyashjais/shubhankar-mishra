
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { featured } from "@/lib/content";
import Section from "../ui/Section";
import SectionHead from "../ui/SectionHead";
import { Reveal } from "../ui/Reveal";

export default function Featured() {
  const [lead, ...rest] = featured;

  const imageAnimation = {
    initial: { opacity: 0, scale: 0.97 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.05 },
    transition: { duration: 0.7, ease: "easeOut" as const },
  };

  return (
    <Section id="featured" tone="bone">
      <SectionHead
        id="featured"
        no="02"
        kicker="Featured conversations"
        title="The conversations worth the long way round."
        light
      />

      {lead && (
        <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="relative pb-12 lg:col-span-7">
            <a
              href={lead.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch ${lead.title}`}
              className="block"
            >
              <motion.div
                {...imageAnimation}
                className="relative aspect-video overflow-hidden bg-smoke"
              >
                <Image
                  src={lead.img}
                  alt={`${lead.guest} in conversation with Shubhankar Mishra`}
                  fill
                  priority
                  sizes="(min-width:1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            </a>

            <span
              aria-hidden
              className="pointer-events-none absolute bottom-0 right-0 z-10 font-cond text-[clamp(5rem,11vw,10rem)] font-extrabold leading-none text-red md:-right-4"
            >
              {lead.no}
            </span>
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-sm font-medium text-ink/60">
                {lead.guest}, {lead.role}
              </p>
              <h3 className="mt-4 font-display text-[clamp(2.4rem,4.6vw,4.6rem)] leading-[1] tracking-tight">
                {lead.title}
              </h3>
            </Reveal>

            <Reveal delay={0.15}>
              <blockquote className="mt-8 border-l-2 border-red pl-6 font-display text-2xl italic leading-snug text-ink/85 md:text-3xl">
                &ldquo;{lead.quote}&rdquo;
              </blockquote>

              <p className="mt-8 text-sm text-ink/60">
                {lead.duration} &nbsp;|&nbsp; {lead.views}
              </p>

              <a
                href={lead.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 border-b-2 border-ink pb-1 font-semibold transition-colors hover:border-red hover:text-red"
              >
                Watch the conversation
              </a>
            </Reveal>
          </div>
        </article>
      )}

      <div className="mt-24 grid gap-16 md:mt-36 md:grid-cols-12 md:gap-10">
        {rest.map((f, i) => (
          <article
            key={f.no}
            className={
              i === 0
                ? "md:col-span-5 md:col-start-2"
                : "md:col-span-5 md:col-start-8 md:mt-48"
            }
          >
            <a
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch ${f.title}`}
              className="block"
            >
              <motion.div
                {...imageAnimation}
                className="relative aspect-video overflow-hidden bg-smoke"
              >
                <Image
                  src={f.img}
                  alt={`${f.guest}, ${f.role}`}
                  fill
                  loading="lazy"
                  sizes="(min-width:768px) 42vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
              </motion.div>
            </a>

            <Reveal className="mt-6">
              <div className="flex items-start gap-5">
                <span
                  aria-hidden
                  className="font-cond text-6xl font-extrabold leading-none text-red"
                >
                  {f.no}
                </span>

                <div>
                  <h3 className="font-display text-3xl leading-tight md:text-4xl">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/60">
                    {f.guest}, {f.role}
                  </p>
                  <p className="mt-4 font-display text-xl italic text-ink/80">
                    &ldquo;{f.quote}&rdquo;
                  </p>
                </div>
              </div>
            </Reveal>
          </article>
        ))}
      </div>
    </Section>
  );
}
