"use client";

import { achievements } from "@/lib/content";
import Section from "../ui/Section";
import SectionHead from "../ui/SectionHead";
import Counter from "../ui/Counter";
import { Reveal } from "../ui/Reveal";

export default function Achievements() {
  return (
    <Section id="achievements" tone="charcoal">
      <SectionHead id="achievements" no="07" kicker="Views & achievements" title="Numbers that started as conversations." />

      <div>
        {achievements.map((a, i) => (
          <div key={a.label} className={`flex flex-col gap-4 border-t border-bone/15 py-10 md:py-14 lg:flex-row lg:items-end lg:justify-between ${i % 2 ? "lg:flex-row-reverse" : ""}`}>
            <Reveal className="max-w-sm">
              <h3 className="font-display text-3xl md:text-4xl">{a.label}</h3>
              <p className="mt-3 text-bone/60">{a.note}</p>
            </Reveal>
            <p className="font-cond font-extrabold leading-[0.82] tracking-tight text-[clamp(6rem,21vw,22rem)]">
              <Counter to={a.value} decimals={a.decimals ?? 0} suffix={a.suffix} suffixClassName="text-red" />
            </p>
          </div>
        ))}
        <div className="border-t border-bone/15" />
      </div>
    </Section>
  );
}
