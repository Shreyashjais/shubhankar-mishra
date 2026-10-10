import type { ReactNode } from "react";
import { Reveal, Words } from "./Reveal";

/**
 * Editorial section header: oversized outlined section number behind a serif headline.
 * `light` flips the outline stroke for the warm off-white sections.
 */
export default function SectionHead({
  id,
  no,
  kicker,
  title,
  light = false,
  children,
  className = "",
}: {
  id: string;
  no: string;
  kicker: string;
  title: string;
  light?: boolean;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <header className={`relative mb-14 md:mb-24 ${className}`}>
      <span
        aria-hidden
        className={`pointer-events-none absolute -top-8 right-0 select-none font-cond text-[clamp(8rem,22vw,22rem)] font-extrabold leading-none text-outline opacity-[0.14] md:-top-24 ${
          light ? "[--stroke:#0C0B0B]" : ""
        }`}
      >
        {no}
      </span>
      <Reveal>
        <p className="flex items-center gap-4 text-sm font-medium text-red">
          <span className="h-px w-12 bg-red" />
          {kicker}
        </p>
      </Reveal>
      <h2 id={`${id}-title`} className="mt-6 max-w-5xl font-display text-[clamp(2.8rem,7.4vw,7rem)] leading-[0.98] tracking-tight">
        <Words text={title} />
      </h2>
      {children}
    </header>
  );
}
