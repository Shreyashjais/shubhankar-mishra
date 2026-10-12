import type { Metadata } from "next";

import Brands from "@/components/sections/Brands";
import Contact from "@/components/sections/Contact";
import Reviews from "@/components/sections/Reviews";
import BrandsHero from "@/components/brands/brandHero";

export const metadata: Metadata = {
  title: "Brand Integrations",
  description:
    "Partner with Shubhankar Mishra: host-read integrations, dedicated episodes, shorts and series sponsorships on a long-form interview podcast. See past campaign results and request the media kit.",
  alternates: { canonical: "/brand-integrations" },
};

export default function BrandIntegrationsPage() {
  return (
    <>
      <BrandsHero />
      <Brands />
      <Contact />
      <Reviews />
    </>
  );
}