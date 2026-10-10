"use client";

import { press, awards, outlets } from "@/lib/content";
import Section from "../ui/Section";
import SectionHead from "../ui/SectionHead";
import Marquee from "../ui/Marquee";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";

export default function MediaRecognition() {
  return (
    <Section id="media" tone="ink">
      <SectionHead id="media" no="06" kicker="Media & recognition" title="What the press says when the recording stops." />

      <div className="grid gap-20 lg:grid-cols-12">
        <Stagger className="lg:col-span-8" gap={0.09}>
          <ul>
            {press.map((p) => (
              <StaggerItem key={p.headline}>
                <li>
                  <a href="#media" className="group relative flex flex-col gap-2 overflow-hidden border-t border-bone/15 py-8 md:flex-row md:items-center md:gap-10">
                    <span aria-hidden className="absolute inset-0 origin-left scale-x-0 bg-red transition-transform duration-500 ease-out group-hover:scale-x-100" />
                    <span className="relative z-10 font-cond text-4xl font-extrabold text-bone/40 transition-colors group-hover:text-bone md:w-24">{p.year}</span>
                    <span className="relative z-10 md:w-56">
                      <span className="block font-display text-2xl italic">{p.outlet}</span>
                      <span className="text-sm text-bone/55 transition-colors group-hover:text-bone/90">{p.type}</span>
                    </span>
                    <span className="relative z-10 flex-1 font-display text-2xl leading-snug md:text-3xl">{p.headline}</span>
                    <span aria-hidden className="relative z-10 hidden translate-x-0 text-3xl transition-transform duration-500 group-hover:translate-x-2 md:block">
                      ↗
                    </span>
                  </a>
                </li>
              </StaggerItem>
            ))}
            <li className="border-t border-bone/15" aria-hidden />
          </ul>
        </Stagger>

        <aside className="lg:col-span-4">
          <Reveal>
            <h3 className="font-display text-3xl italic">Awards</h3>
            <ol className="mt-8 space-y-8">
              {awards.map((a) => (
                <li key={a.name} className="flex gap-5">
                  <span className="font-cond text-3xl font-extrabold text-red">{a.year}</span>
                  <div>
                    <p className="font-display text-2xl leading-tight">{a.name}</p>
                    <p className="mt-1 text-sm text-bone/55">{a.by}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </aside>
      </div>

      <div className="-mx-5 mt-28 border-y border-bone/15 py-6 md:-mx-10">
        <Marquee items={outlets} duration={45} reverse itemClassName="font-display text-4xl italic text-bone/80 md:text-6xl" />
      </div>
    </Section>
  );
}
