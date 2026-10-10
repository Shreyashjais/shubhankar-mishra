"use client";

import { motion } from "framer-motion";
import { about, images } from "@/lib/content";
import Section from "../ui/Section";
import SectionHead from "../ui/SectionHead";
import ParallaxImage from "../ui/ParallaxImage";
import RotatingBadge from "../ui/RotatingBadge";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";

export default function About() {
  return (
    <Section id="about" tone="bone">
      <SectionHead id="about" no="05" kicker="About Shubhankar" title="A host who listens louder than he talks." light />

      <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="relative lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            {/* Wrapper owns the 4:5 size; the red frame and the photo both fill it */}
            <div className="relative aspect-[4/5] w-full">
              <span aria-hidden className="absolute inset-0 translate-x-5 translate-y-5 bg-red/90" />
              <div className="absolute inset-0">
                <ParallaxImage
                  src={images.about}
                  alt="Shubhankar Mishra in the studio"
                  className="h-full w-full"
                  strength={0}
                  sizes="(min-width:1024px) 40vw, 100vw"
                />
              </div>
              <RotatingBadge
                className="absolute -right-4 -top-10 z-10 h-28 w-28 text-ink md:-right-8 md:h-36 md:w-36"
                id="about-badge"
                text="Curious • Unhurried • Unfiltered • "
                icon={false}
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="font-display text-[clamp(2rem,3.8vw,3.6rem)] leading-[1.08] tracking-tight">&ldquo;{about.statement}&rdquo;</p>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <p className="text-lg leading-relaxed text-ink/75">{p}</p>
              </Reveal>
            ))}
          </div>

          <Stagger className="mt-20 border-t border-ink/15" gap={0.1}>
            {about.traits.map((t, i) => (
              <StaggerItem key={t}>
                <motion.div
                  whileHover={{ x: 24 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="group flex items-baseline justify-between border-b border-ink/15 py-4"
                >
                  <span className="font-cond text-[clamp(3.4rem,8vw,7.5rem)] font-extrabold uppercase leading-[0.95] text-outline transition-colors duration-500 [--stroke:#0C0B0B] group-hover:text-red group-hover:[--stroke:#C8102E]">
                    {t}
                  </span>
                  <span className="hidden text-sm text-ink/50 sm:block">
                    Trait {i + 1} of {about.traits.length}
                  </span>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>

          <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4">
            {about.facts.map((f) => (
              <Reveal key={f.k}>
                <dt className="text-sm text-ink/55">{f.k}</dt>
                <dd className="mt-1 font-display text-2xl leading-tight">{f.v}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}