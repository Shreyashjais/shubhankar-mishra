"use client";

import { blogs } from "@/lib/content";
import Section from "../ui/Section";
import SectionHead from "../ui/SectionHead";
import ParallaxImage from "../ui/ParallaxImage";
import Media from "../ui/Media";
import { Reveal } from "../ui/Reveal";

export default function Blogs() {
  const [lead, ...rest] = blogs;
  return (
    <Section id="blogs" tone="bone">
      <SectionHead id="blogs" no="13" kicker="Blogs" title="Long reads for people who finish the episode." light />

      <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
        <article className="lg:col-span-7">
          <a href="#blogs" className="group block" aria-label={`Read: ${lead.title}`}>
            <ParallaxImage src={lead.img} alt={lead.title} className="aspect-[4/3]" sizes="(min-width:1024px) 58vw, 100vw" />
            <Reveal className="mt-8">
              <p className="text-sm font-medium text-red">{lead.category} · {lead.date} · {lead.read} read</p>
              <h3 className="mt-3 font-display text-[clamp(2.4rem,4.4vw,4.4rem)] leading-[1.02] transition-colors group-hover:text-red">{lead.title}</h3>
              <p className="mt-5 max-w-xl text-lg text-ink/65">{lead.excerpt}</p>
            </Reveal>
          </a>
        </article>

        <div className="lg:col-span-5 lg:pt-24">
          {rest.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <article className="border-t border-ink/20 py-8 first:border-t-0 first:pt-0">
                <a href="#blogs" className="group grid grid-cols-[1fr_7.5rem] items-start gap-6" aria-label={`Read: ${b.title}`}>
                  <div>
                    <p className="text-sm font-medium text-red">{b.category} · {b.read} read</p>
                    <h3 className="mt-2 font-display text-3xl leading-tight transition-colors group-hover:text-red">{b.title}</h3>
                    <p className="mt-3 text-ink/60">{b.excerpt}</p>
                  </div>
                  <div className="relative aspect-square overflow-hidden bg-smoke">
                    <Media src={b.img} alt="" sizes="120px" className="transition-transform duration-[1200ms] group-hover:scale-110" />
                  </div>
                </a>
              </article>
            </Reveal>
          ))}
          <Reveal>
            <a href="#blogs" className="mt-4 inline-block border-b-2 border-ink pb-1 font-semibold transition-colors hover:border-red hover:text-red">
              Read all essays
            </a>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
