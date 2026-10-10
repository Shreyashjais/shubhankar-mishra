"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

/** Animated number that counts up when scrolled into view. */
export default function Counter({
  to,
  decimals = 0,
  duration = 2.4,
  prefix = "",
  suffix = "",
  className = "",
  suffixClassName = "",
}: {
  to: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  suffixClassName?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        if (ref.current) {
          ref.current.textContent = v.toLocaleString("en-IN", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          });
        }
      },
    });
    return () => controls.stop();
  }, [inView, to, decimals, duration]);

  return (
    <span className={className}>
      {prefix}
      <span ref={ref} aria-label={`${to}${suffix}`}>
        {(0).toLocaleString("en-IN", { minimumFractionDigits: decimals })}
      </span>
      <span className={suffixClassName}>{suffix}</span>
    </span>
  );
}
