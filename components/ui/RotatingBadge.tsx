"use client";

import { motion } from "framer-motion";

/** Circular rotating text badge with a play glyph in the centre. */
export default function RotatingBadge({
  text = "Watch • Listen • Feel • Repeat • ",
  id = "badge-path",
  className = "",
  icon = true,
}: {
  text?: string;
  id?: string;
  className?: string;
  icon?: boolean;
}) {
  return (
    <div className={`relative ${className}`} aria-hidden>
      <motion.svg
        viewBox="0 0 200 200"
        className="h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        <defs>
          <path id={id} d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text fill="currentColor" fontSize="15" fontWeight="600" style={{ textTransform: "uppercase", letterSpacing: "2px" }}>
          <textPath href={`#${id}`} textLength="486" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </motion.svg>
      {icon && (
        <span className="absolute left-1/2 top-1/2 flex h-1/4 w-1/4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red text-bone">
          <svg viewBox="0 0 24 24" className="ml-0.5 h-1/2 w-1/2" fill="currentColor">
            <path d="M6 4l14 8-14 8z" />
          </svg>
        </span>
      )}
    </div>
  );
}
