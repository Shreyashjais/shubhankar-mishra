import { NextResponse } from "next/server";

export const runtime = "nodejs";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
const clean = (v: unknown, max = 2000) => String(v ?? "").trim().slice(0, max);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field.
  if (clean(body.website)) return NextResponse.json({ ok: true });

  const type = body.type === "newsletter" ? "newsletter" : "enquiry";
  const email = clean(body.email, 200);
  if (!emailRe.test(email)) return NextResponse.json({ ok: false, error: "Enter a valid email address." }, { status: 400 });

  const name = clean(body.name, 120);
  const message = clean(body.message, 4000);
  if (type === "enquiry" && (!name || message.length < 10)) {
    return NextResponse.json({ ok: false, error: "Add your name and a short message (10+ characters)." }, { status: 400 });
  }

  const fields: [string, string][] =
    type === "newsletter"
      ? [["Type", "Newsletter signup"], ["Email", email]]
      : [
          ["Type", "Enquiry"],
          ["Name", name],
          ["Email", email],
          ["Company", clean(body.company, 160)],
          ["Topic", clean(body.topic, 80)],
          ["Budget", clean(body.budget, 80)],
          ["Message", message],
        ];

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (apiKey && to && from) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: email,
          subject: type === "newsletter" ? "New newsletter signup" : `New enquiry from ${name}`,
          html: fields.map(([k, v]) => `<p><strong>${esc(k)}:</strong><br>${esc(v).replace(/\n/g, "<br>")}</p>`).join(""),
        }),
      });
      if (!res.ok) throw new Error(`Resend responded ${res.status}`);
    } catch (err) {
      console.error("[contact] email delivery failed", err);
      return NextResponse.json({ ok: false, error: "We couldn't send that just now. Please try again or email us directly." }, { status: 502 });
    }
  } else {
    // No email provider configured: log so the form still works in development.
    console.log("[contact] submission (set RESEND_API_KEY to deliver by email):", fields);
  }

  return NextResponse.json({ ok: true });
}
