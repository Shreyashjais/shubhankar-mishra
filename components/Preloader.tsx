"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { easeInOut } from "./ui/motion";

/** Lets other components know whether the intro curtain has already played. */
export const preloaderState = { done: false };

/** One orchestrated page-load moment: name reveal, red line draw, curtain lift. */
export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      preloaderState.done = true;
      setDone(true);
    }, 1900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          className="preloader fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          exit={{ y: "-100%", transition: { duration: 1, ease: easeInOut } }}
        >
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.1 }}
              className="font-display text-5xl italic text-bone md:text-7xl"
            >
              Shubhankar Mishra
            </motion.p>
          </div>
          <motion.span
            className="mt-6 block h-px w-48 origin-left bg-red md:w-72"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, ease: easeInOut, delay: 0.2 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}