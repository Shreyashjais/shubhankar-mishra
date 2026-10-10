
"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Media from "./Media";
import { ease } from "./motion";

export default function ParallaxImage({
  src,
  alt,
  className = "",
  strength = 10,
  sizes = "(min-width:1024px) 50vw, 100vw",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  strength?: number;
  sizes?: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${strength}%`, `${strength}%`]
  );

  return (
    <motion.div
      ref={ref}
      className={`group relative overflow-hidden bg-smoke ${className}`}
      initial={
        prefersReducedMotion
          ? false
          : { clipPath: "inset(100% 0% 0% 0%)" }
      }
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: prefersReducedMotion ? 0 : 1.1, ease }}
    >
      <motion.div
        style={{
          y: prefersReducedMotion ? 0 : y,
          scale: strength === 0 ? 1 : 1.22,
        }}
        className="absolute inset-0"
      >
        <Media
          src={src}
          alt={alt}
          sizes={sizes}
          priority={priority}
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
        />
      </motion.div>
    </motion.div>
  );
}
