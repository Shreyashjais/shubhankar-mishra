"use client";

import { episodes } from "@/lib/content";
import Section from "../ui/Section";
import SectionHead from "../ui/SectionHead";
import Media from "../ui/Media";
import { Reveal } from "../ui/Reveal";
import Button from "../ui/Button";

const layout = [
  "lg:col-span-7",
  "lg:col-span-5 lg:mt-44",
  "lg:col-span-4",
  "lg:col-span-4 lg:mt-20",
  "lg:col-span-4 lg:mt-40",
];

export default function Episodes() {
  return (
    <Section id="episodes" tone="ink">
      <SectionHead id="episodes" no="03" kicker="Latest episodes & interviews" title="Press play on the newest conversations." />

      <div className="grid gap-x-8 gap-y-16 lg:grid-cols-12">
        {episodes.map((ep, i) => (
          <Reveal key={ep.no} className={layout[i]} delay={(i % 3) * 0.08}>
            <a href={ep.href} target="_blank" rel="noopener noreferrer" aria-label={`Watch episode ${ep.no}: ${ep.title}`} className="group block">
              <div className={`relative overflow-hidden bg-smoke ${i === 0 ? "aspect-[16/10]" : "aspect-video"}`}>
                <Media
                  src={ep.img}
                  alt={`Thumbnail for episode ${ep.no}: ${ep.title}`}
                  sizes={i === 0 ? "(min-width:1024px) 58vw, 100vw" : "(min-width:1024px) 33vw, 100vw"}
                  className="transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                {/* <span aria-hidden className="absolute left-5 top-3 font-cond text-7xl font-extrabold leading-none text-outline md:text-8xl">
                  {ep.no}
                </span> */}
                <span
                  aria-hidden
                  className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 scale-50 items-center justify-center rounded-full bg-red opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100"
                >
                  <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor">
                    <path d="M6 4l14 8-14 8z" />
                  </svg>
                </span>
                <span className="absolute bottom-4 right-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold backdrop-blur">{ep.duration}</span>
              </div>
              <div className="mt-5">
                <p className="text-sm font-medium text-red">{ep.category}</p>
                <h3 className="mt-2 font-display text-3xl leading-tight md:text-4xl">
                  <span className="bg-gradient-to-r from-bone to-bone bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-700 group-hover:bg-[length:100%_1px]">
                    {ep.title}
                  </span>
                </h3>
                <p className="mt-2 text-sm text-bone/60">With {ep.guest}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-24 flex justify-center">
        <Button href="https://www.youtube.com/channel/UCYalWwW79BdxmMTKUyBFj5g" external variant="light">
          See every episode on YouTube
        </Button>
      </Reveal>
    </Section>
  );
}
