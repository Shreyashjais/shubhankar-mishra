"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site, topics } from "@/lib/content";
import Section from "../ui/Section";
import SectionHead from "../ui/SectionHead";
import { Reveal } from "../ui/Reveal";
import { ease } from "../ui/motion";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "w-full border-0 border-b border-bone/25 bg-transparent py-3 text-lg text-bone placeholder:text-bone/35 transition-colors focus:border-red focus:outline-none";
const label = "text-sm text-bone/60";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, type: "enquiry" }) });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong. Please try again.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <Section id="contact" tone="ink">
      <SectionHead id="contact" no="12" kicker="Collaborations & contact" title="Let's make something worth watching." />

      <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
        <Reveal className="lg:col-span-5">
          <p className="max-w-md text-xl leading-relaxed text-bone/75">
            Brand partnerships, guest pitches, speaking invitations and press requests all land in one inbox, and every message is read by a person.
          </p>
          <a href={`mailto:${site.email}`} className="mt-10 inline-block break-all font-display text-3xl italic underline decoration-red decoration-2 underline-offset-8 transition-colors hover:text-red md:text-4xl">
            {site.email}
          </a>
          <dl className="mt-12 space-y-6">
            <div>
              <dt className="text-sm text-bone/50">Typical reply time</dt>
              <dd className="font-display text-2xl">Within two working days</dd>
            </div>
            <div>
              <dt className="text-sm text-bone/50">Best for</dt>
              <dd className="font-display text-2xl">Sponsorships, series, live events</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div key="ok" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.8, ease }} role="status" className="border border-bone/15 p-10 md:p-16">
                <p className="font-cond text-7xl font-extrabold text-red">Sent.</p>
                <p className="mt-4 font-display text-3xl">Thank you. Your message is in. A reply is on its way within two working days.</p>
                <button type="button" onClick={() => setStatus("idle")} className="mt-8 border-b border-bone pb-1 font-semibold transition-colors hover:border-red hover:text-red">
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={onSubmit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-10">
                <fieldset>
                  <legend className={label}>I&apos;m getting in touch about</legend>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {topics.map((t, i) => (
                      <label key={t} className="cursor-pointer">
                        <input type="radio" name="topic" value={t} defaultChecked={i === 0} className="peer sr-only" />
                        <span className="inline-block rounded-full border border-bone/30 px-5 py-2.5 text-[15px] transition-colors peer-checked:border-red peer-checked:bg-red peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-red hover:border-bone">
                          {t}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="grid gap-10 md:grid-cols-2">
                  <div>
                    <label htmlFor="c-name" className={label}>Your name</label>
                    <input id="c-name" name="name" required autoComplete="name" className={field} placeholder="Full name" />
                  </div>
                  <div>
                    <label htmlFor="c-email" className={label}>Email</label>
                    <input id="c-email" name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
                  </div>
                  <div>
                    <label htmlFor="c-company" className={label}>Company or brand</label>
                    <input id="c-company" name="company" autoComplete="organization" className={field} placeholder="Optional" />
                  </div>
                  <div>
                    <label htmlFor="c-budget" className={label}>Budget range</label>
                    <select id="c-budget" name="budget" defaultValue="" className={`${field} appearance-none`}>
                      <option value="" className="bg-ink">Prefer not to say</option>
                      <option className="bg-ink">Under ₹5 lakh</option>
                      <option className="bg-ink">₹5 – 20 lakh</option>
                      <option className="bg-ink">₹20 lakh +</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="c-message" className={label}>Tell me about the idea</label>
                  <textarea id="c-message" name="message" required rows={4} className={`${field} resize-none`} placeholder="What are we making, who is it for, and when?" />
                </div>

                <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-0 w-0 opacity-0" />

                <div className="flex flex-wrap items-center gap-6">
                  <button type="submit" disabled={status === "sending"} className="rounded-full bg-red px-10 py-5 text-[15px] font-semibold transition-colors hover:bg-bone hover:text-ink disabled:opacity-60">
                    {status === "sending" ? "Sending…" : "Send message"}
                  </button>
                  <p role="alert" className="text-red">
                    {status === "error" ? error : ""}
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </Section>
  );
}
