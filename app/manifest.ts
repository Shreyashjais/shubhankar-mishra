import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Shubhankar",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0C0B0B",
    theme_color: "#0C0B0B",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
