"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { socials } from "@/lib/content";
import Section from "../ui/Section";
import SectionHead from "../ui/SectionHead";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";

export default function Social() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, type: "newsletter" }) });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("done");
      setMsg("You're in. Watch your inbox for the next dispatch.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <Section id="social" tone="charcoal">
      <SectionHead id="social" no="10" kicker="Social media" title="Find the conversation wherever you scroll." />

      <Stagger gap={0.08}>
        <ul>
          {socials.map((s) => (
            <StaggerItem key={s.name}>
              <li>
                <motion.a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.name}, ${s.count} ${s.unit}`}
                  whileHover={{ x: 18 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="group flex flex-col gap-2 border-t border-bone/15 py-6 transition-colors hover:text-red sm:flex-row sm:items-center sm:justify-between md:py-8"
                >
                  <span className="font-cond font-extrabold uppercase leading-none text-[clamp(3.6rem,10vw,9rem)]">{s.name}</span>
                  <span className="flex items-baseline gap-4 sm:flex-col sm:items-end sm:gap-0">
                    <span className="font-cond text-4xl font-extrabold md:text-5xl">{s.count}</span>
                    <span className="text-sm text-bone/55 group-hover:text-red/80">
                      {s.unit} · {s.handle}
                    </span>
                  </span>
                </motion.a>
              </li>
            </StaggerItem>
          ))}
          <li className="border-t border-bone/15" aria-hidden />
        </ul>
      </Stagger>

      <Reveal className="mt-24 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h3 className="font-display text-4xl leading-tight md:text-5xl">Join the inner circle.</h3>
          <p className="mt-4 max-w-md text-lg text-bone/65">One email a week: the best moment from each episode, what I&apos;m reading, and early access to guests.</p>
        </div>
        <form onSubmit={onSubmit} className="lg:col-span-6" noValidate>
          <label htmlFor="nl-email" className="text-sm text-bone/60">
            Email address
          </label>
          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-end">
            <input
              id="nl-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className="w-full flex-1 border-0 border-b border-bone/30 bg-transparent py-4 text-xl text-bone placeholder:text-bone/35 transition-colors focus:border-red focus:outline-none"
            />
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-0 w-0 opacity-0" />
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full bg-red px-8 py-4 font-semibold transition-colors hover:bg-bone hover:text-ink disabled:opacity-60"
            >
              {status === "sending" ? "Joining…" : "Join the list"}
            </button>
          </div>
          <p role="status" aria-live="polite" className={`mt-4 min-h-6 text-sm ${status === "error" ? "text-red" : "text-bone/70"}`}>
            {msg}
          </p>
        </form>
      </Reveal>
    </Section>
  );
}
