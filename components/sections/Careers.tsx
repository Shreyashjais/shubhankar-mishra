"use client";

import { jobs, site } from "@/lib/content";
import Section from "../ui/Section";
import SectionHead from "../ui/SectionHead";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";

export default function Careers() {
  return (
    <Section id="careers" tone="ink">
      <SectionHead id="careers" no="18" kicker="Join our team" title="Come make the next thousand hours." />

      <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
        <Reveal className="lg:col-span-4">
          <p className="text-xl leading-relaxed text-bone/75">
            A small, obsessive crew that edits late, argues about lighting and ships every week. If you care about craft more than clout, you&apos;ll fit right in.
          </p>
          <p className="mt-8 text-bone/55">
            Don&apos;t see your role? Send a pitch to{" "}
            <a href={`mailto:${site.careersEmail}`} className="text-bone underline decoration-red underline-offset-4">
              {site.careersEmail}
            </a>
            .
          </p>
        </Reveal>

        <Stagger className="lg:col-span-8" gap={0.1}>
          <ul>
            {jobs.map((j) => (
              <StaggerItem key={j.title}>
                <li>
                  <a
                    href={`mailto:${site.careersEmail}?subject=${encodeURIComponent(`Application: ${j.title}`)}`}
                    className="group flex flex-col gap-3 border-t border-bone/15 py-8 transition-colors hover:text-red md:flex-row md:items-center md:justify-between"
                  >
                    <span>
                      <span className="block font-display text-3xl transition-transform duration-500 group-hover:translate-x-3 md:text-4xl">{j.title}</span>
                      <span className="mt-1 block text-bone/55">{j.dept} · {j.where} · {j.type}</span>
                    </span>
                    <span className="inline-flex items-center gap-2 font-semibold">
                      Apply by email
                      <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">↗</span>
                    </span>
                  </a>
                </li>
              </StaggerItem>
            ))}
            <li className="border-t border-bone/15" aria-hidden />
          </ul>
        </Stagger>
      </div>
    </Section>
  );
}
