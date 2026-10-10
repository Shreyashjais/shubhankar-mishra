
"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

interface CounterProps {
  to: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  suffixClassName?: string;
}

/** Animated number that counts up when scrolled into view. */
export default function Counter({
  to,
  decimals = 0,
  duration = 2.4,
  prefix = "",
  suffix = "",
  className = "",
  suffixClassName = "",
}: CounterProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

  const inView = useInView(containerRef, {
    once: true,
    amount: 0.1,
  });

  useEffect(() => {
    if (!inView || !numberRef.current) return;

    const element = numberRef.current;

    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        element.textContent = value.toLocaleString("en-IN", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        });
      },
    });

    return () => controls.stop();
  }, [inView, to, decimals, duration]);

  const initialValue = (0).toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={containerRef} className={className}>
      {prefix}
      <span ref={numberRef} aria-label={`${to}${suffix}`}>
        {initialValue}
      </span>
      {suffix && (
        <span className={suffixClassName}>{suffix}</span>
      )}
    </span>
  );
}
