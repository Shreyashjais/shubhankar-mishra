"use client";

import { brands } from "@/lib/content";
import Section from "../ui/Section";
import SectionHead from "../ui/SectionHead";
import Marquee from "../ui/Marquee";
import ParallaxImage from "../ui/ParallaxImage";
import Button from "../ui/Button";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";

export default function Brands() {
  return (
    <Section id="brands" tone="bone">
      <SectionHead id="brands" no="11" kicker="YouTube brand integrations" title="Brands that belong in the conversation." light />

      <div className="-mx-5 mb-24 border-y border-ink/15 py-6 md:-mx-10 md:mb-26">
        <Marquee items={brands.partners} duration={38} itemClassName="font-cond text-5xl font-extrabold uppercase text-outline [--stroke:#0C0B0B] md:text-7xl" />
      </div>

      {/* <div className="space-y-28 md:space-y-40">
        {brands.cases.map((c, i) => (
          <article key={c.brand} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-20">
            <div className={`lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
              <ParallaxImage src={c.img} alt={`${c.brand}: ${c.title} campaign`} className="aspect-[16/10]" sizes="(min-width:1024px) 58vw, 100vw" />
            </div>
            <Reveal className={`lg:col-span-5 ${i % 2 ? "lg:order-1" : ""}`}>
              <p className="text-sm font-medium text-red">{c.brand} · {c.format}</p>
              <h3 className="mt-4 font-display text-[clamp(2.4rem,4.4vw,4.4rem)] leading-[1.02]">{c.title}</h3>
              <p className="mt-8 font-cond font-extrabold leading-none text-[clamp(4rem,8vw,7rem)]">{c.result}</p>
              <p className="mt-3 max-w-sm text-ink/65">{c.detail}</p>
            </Reveal>
          </article>
        ))}
      </div> */}
{/* 
      <Stagger className="mt-32 grid gap-x-10 gap-y-12 md:mt-44 md:grid-cols-2 lg:grid-cols-4" gap={0.1}>
        {brands.formats.map((f) => (
          <StaggerItem key={f.name} className="border-t-2 border-ink pt-6">
            <h3 className="font-display text-3xl leading-tight">{f.name}</h3>
            <p className="mt-3 text-ink/65">{f.text}</p>
          </StaggerItem>
        ))}
      </Stagger> */}

      {/* <Reveal className="mt-16 flex justify-start md:mt-24">
        <Button href="#contact" variant="primary">
          Request the media kit
        </Button>
      </Reveal> */}
    </Section>
  );
}
