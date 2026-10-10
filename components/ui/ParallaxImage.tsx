"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Media from "./Media";
import { ease } from "./motion";

/** Image with a curtain-style reveal, scroll parallax and hover zoom. Give it an aspect ratio via className. */
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
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  return (
    <motion.div
      ref={ref}
      className={`group relative overflow-hidden bg-smoke ${className}`}
      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 1.4, ease }}
    >
     <motion.div style={{ y, scale: strength === 0 ? 1 : 1.22 }} className="absolute inset-0">
        <Media
          src={src}
          alt={alt}
          sizes={sizes}
          priority={priority}
          className="transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
        />
      </motion.div>
    </motion.div>
  );
}
