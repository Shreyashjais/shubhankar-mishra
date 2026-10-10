import { site, socials } from "@/lib/content";

/** Structured data: Person + WebSite + PodcastSeries. Update `sameAs` with your real profile URLs. */
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        url: site.url,
        image: `${site.url}/opengraph-image`,
        jobTitle: "Podcast host & interviewer",
        description: site.description,
        sameAs: socials.map((s) => s.href),
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        inLanguage: "en-IN",
        publisher: { "@id": `${site.url}/#person` },
      },
      {
        "@type": "PodcastSeries",
        "@id": `${site.url}/#podcast`,
        name: `${site.name} Podcast`,
        url: site.url,
        description: "Long-form conversations with founders, athletes, artists and thinkers.",
        author: { "@id": `${site.url}/#person` },
        webFeed: `${site.url}/#episodes`,
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
