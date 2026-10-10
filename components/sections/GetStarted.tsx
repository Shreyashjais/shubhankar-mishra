"use client";

import { motion } from "framer-motion";
import { getStarted } from "@/lib/content";
import Section from "../ui/Section";
import Marquee from "../ui/Marquee";
import { Words, Stagger, StaggerItem } from "../ui/Reveal";

export default function GetStarted() {
  return (
    <Section id="get-started" tone="red" className="!pb-0 overflow-hidden">
      <p className="mb-6 text-sm font-medium text-bone/80">Get started</p>
      <h2 id="get-started-title" className="font-display leading-[0.92] tracking-tight text-[clamp(3.4rem,11vw,11rem)]">
        <Words text="Press play. Start something." />
      </h2>

      <Stagger className="mt-20 md:mt-28" gap={0.12}>
        <ul>
          {getStarted.map((g) => (
            <StaggerItem key={g.who}>
              <li>
                <motion.a
                  href={g.href}
                  whileHover={{ x: 16 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="group flex flex-col gap-1 border-t border-bone/40 py-7 transition-colors hover:text-ink md:flex-row md:items-baseline md:justify-between"
                >
                  <span className="text-lg text-bone/80 transition-colors group-hover:text-ink/70">{g.who}</span>
                  <span className="flex items-center gap-4 font-display text-[clamp(2.2rem,5vw,4.6rem)] leading-none">
                    {g.action}
                    <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-2">↗</span>
                  </span>
                </motion.a>
              </li>
            </StaggerItem>
          ))}
          <li className="border-t border-bone/40" aria-hidden />
        </ul>
      </Stagger>

      <div className="-mx-5 mt-24 border-t border-bone/40 py-5 md:-mx-10">
        <Marquee items={["Watch", "Listen", "Partner", "Collaborate", "Subscribe"]} duration={30} itemClassName="font-cond text-5xl font-extrabold uppercase text-outline md:text-7xl" dotClassName="text-ink" />
      </div>
    </Section>
  );
}
