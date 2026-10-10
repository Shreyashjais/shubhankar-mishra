"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { nav, topNav, site } from "@/lib/content";
import { ease, easeInOut } from "./ui/motion";

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 48));
  const active = useActiveSection(nav.map((n) => n.id));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease, delay: 1.7 }}
        className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${
          scrolled || open ? "border-b border-bone/10 bg-ink/70 py-3 backdrop-blur-xl" : "py-6"
        }`}
      >
        <nav aria-label="Primary" className="mx-auto flex max-w-[1600px] items-center justify-between px-5 md:px-10">
          <a href="#hero" className="group flex items-baseline gap-2" aria-label={`${site.name} – home`}>
            <span className="font-display text-3xl italic leading-none">Shubhankar Mishra</span>
            <span className="h-2 w-2 rounded-full bg-red transition-transform duration-500 group-hover:scale-150" />
          </a>

          <ul className="hidden items-center gap-10 lg:flex">
            {topNav.map((id) => {
              const item = nav.find((n) => n.id === id)!;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`relative py-1 text-[15px] transition-colors hover:text-bone ${active === id ? "text-bone" : "text-bone/65"}`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-red transition-transform duration-500 ${
                        active === id ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-red px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-bone hover:text-ink sm:inline-block"
            >
              Work with me
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-full border border-bone/25 transition-colors hover:border-red"
            >
              <motion.span animate={open ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }} className="block h-px w-5 bg-bone" />
              <motion.span animate={open ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }} className="block h-px w-5 bg-bone" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            data-lenis-prevent
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-0 z-[65] overflow-y-auto overscroll-contain bg-ink"
            initial={{ clipPath: "circle(0% at calc(100% - 3rem) 2.5rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 3rem) 2.5rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 3rem) 2.5rem)" }}
            transition={{ duration: 0.9, ease: easeInOut }}
          >
            <div className="mx-auto max-w-[1600px] px-5 pb-16 pt-28 md:px-10">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5 } }}
                className="mb-8 text-sm text-bone/50"
              >
                Jump to any chapter
              </motion.p>
              <motion.ul
                className="gap-x-16 md:columns-2"
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.035, delayChildren: 0.45 } } }}
              >
                {nav.map((n, i) => (
                  <motion.li
                    key={n.id}
                    className="break-inside-avoid overflow-hidden"
                    variants={{ hidden: { y: 40, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.7, ease } } }}
                  >
                    <a
                      href={`#${n.id}`}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-4 border-b border-bone/10 py-3 transition-colors hover:text-red"
                    >
                      <span className="w-8 font-cond text-xl font-bold text-bone/35 transition-colors group-hover:text-red">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-3xl transition-transform duration-500 group-hover:translate-x-3 md:text-4xl">
                        {n.label}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
