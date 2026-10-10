import type { ReactNode } from "react";

export type Tone = "ink" | "charcoal" | "bone" | "wine" | "red";

const tones: Record<Tone, string> = {
  ink: "bg-ink text-bone",
  charcoal: "bg-charcoal text-bone",
  bone: "bg-bone text-ink",
  wine: "bg-wine text-bone",
  red: "bg-red text-bone",
};

/** Consistent section wrapper: id for anchor nav, tone for the editorial light/dark rhythm. */
export default function Section({
  id,
  tone = "ink",
  className = "",
  children,
}: {
  id: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`relative ${tones[tone]} py-24 md:py-40 ${className}`}>
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">{children}</div>
    </section>
  );
}
