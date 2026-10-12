import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";
import Team from "@/components/sections/Team";
import Careers from "@/components/sections/Careers";
import ContactHero from "@/components/contact/contactHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Shubhankar Mishra for brand partnerships, podcast guest pitches, speaking invitations and press. Meet the team and see open roles.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <Contact />
      <Team />
      <Careers />
    </>
  );
}