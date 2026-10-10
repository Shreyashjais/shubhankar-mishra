"use client";

import { foundation, images } from "@/lib/content";
import Section from "../ui/Section";
import SectionHead from "../ui/SectionHead";
import Media from "../ui/Media";
import Counter from "../ui/Counter";
import Button from "../ui/Button";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";

export default function Foundation() {
  return (
    <Section id="foundation" tone="wine" className="overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-30">
        <Media src={images.foundation} alt="" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-wine via-wine/70 to-wine" />
      </div>

      <div className="relative">
        <SectionHead id="foundation" no="16" kicker="Smile Foundation" title="Every view can put a child closer to a classroom." />

        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="font-display text-2xl leading-relaxed text-bone/85 md:text-3xl">{foundation.intro}</p>
            <div className="mt-10">
              <Button href={foundation.href} external>
                Support the cause
              </Button>
            </div>
          </Reveal>

          <Stagger className="grid gap-12 sm:grid-cols-3 lg:col-span-7 lg:pl-10" gap={0.12}>
            {foundation.stats.map((s) => (
              <StaggerItem key={s.label}>
                <p className="font-cond font-extrabold leading-none text-[clamp(4rem,7vw,6.5rem)]">
                  <Counter to={s.value} suffix={s.suffix} suffixClassName="text-red" />
                </p>
                <p className="mt-3 border-t border-bone/25 pt-3 text-bone/70">{s.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Stagger className="mt-24 grid gap-10 md:grid-cols-3" gap={0.12}>
          {foundation.pillars.map((p) => (
            <StaggerItem key={p.name} className="border-l-2 border-red pl-6">
              <h3 className="font-display text-4xl">{p.name}</h3>
              <p className="mt-3 text-bone/65">{p.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
