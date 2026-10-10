"use client";

import { motion } from "framer-motion";

/** Infinite horizontal marquee driven by Framer Motion (GPU transform only). */
export default function Marquee({
  items,
  duration = 40,
  reverse = false,
  className = "",
  itemClassName = "",
  dotClassName = "text-red",
}: {
  items: string[];
  duration?: number;
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
  dotClassName?: string;
}) {
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {[...items, ...items].map((t, i) => (
        <span key={i} className="flex items-center whitespace-nowrap">
          <span className={itemClassName}>{t}</span>
          <span className={`mx-6 md:mx-10 ${dotClassName}`} aria-hidden>
            ●
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`flex overflow-hidden ${className}`}>
      <motion.div
        className="flex shrink-0 will-change-transform"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {row(false)}
        {row(true)}
      </motion.div>
    </div>
  );
}
