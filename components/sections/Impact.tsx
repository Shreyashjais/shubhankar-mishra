"use client";

import { motion } from "framer-motion";
import { impact } from "@/lib/content";
import Section from "../ui/Section";
import SectionHead from "../ui/SectionHead";
import Counter from "../ui/Counter";
import RotatingBadge from "../ui/RotatingBadge";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";
import { ease } from "../ui/motion";

export default function Impact() {
  return (
    <Section id="impact" tone="bone">
      <SectionHead id="impact" no="08" kicker="Global impact & stats" title="An audience with no home address." light />

      <div className="grid gap-20 lg:grid-cols-12 lg:gap-24">
        <Stagger className="grid grid-cols-2 gap-x-6 gap-y-14 lg:col-span-6" gap={0.12}>
          {impact.stats.map((s) => (
            <StaggerItem key={s.label}>
              <p className="font-cond font-extrabold leading-none text-[clamp(4.2rem,9vw,8.5rem)]">
                <Counter to={s.value} suffix={s.suffix} suffixClassName="text-red text-[0.5em]" />
              </p>
              <p className="mt-3 border-t border-ink/20 pt-3 text-ink/65">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="relative lg:col-span-6">
          <RotatingBadge className="absolute -top-16 right-0 hidden h-36 w-36 text-ink md:block" id="impact-badge" text="Global reach • Global reach • " icon={false} />
          <Reveal>
            <h3 className="font-display text-3xl italic">Where the audience watches from</h3>
          </Reveal>
          <ul className="mt-10 space-y-7">
            {impact.regions.map((r, i) => (
              <li key={r.name}>
                <div className="flex items-baseline justify-between">
                  <span className="text-lg">{r.name}</span>
                  <span className="font-cond text-2xl font-extrabold">{r.pct}%</span>
                </div>
                <div className="mt-2 h-[3px] w-full bg-ink/12">
                  <motion.div
                    className="h-full origin-left bg-red"
                    style={{ width: `${r.pct}%` }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 1.5, ease, delay: i * 0.1 }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <Reveal className="mt-12">
            <p className="text-sm text-ink/55">Top cities</p>
            <p className="mt-2 font-display text-2xl leading-snug">{impact.cities.join(", ")}</p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
