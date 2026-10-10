import { nav, site, socials } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-bone">
      <div className="mx-auto max-w-[1600px] px-5 pt-24 md:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-display text-4xl italic">{site.name}</p>
            <p className="mt-4 max-w-xs text-bone/60">{site.tagline}</p>
            <a href={`mailto:${site.email}`} className="mt-6 inline-block underline decoration-red underline-offset-4 hover:text-red">
              {site.email}
            </a>
          </div>
          <nav aria-label="Footer" className="lg:col-span-5">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-bone/65 sm:grid-cols-3">
              {nav.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="inline-block py-1 transition-colors hover:text-red">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="lg:col-span-3">
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.name}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-block py-1 font-display text-2xl transition-colors hover:text-red">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p aria-hidden className="mt-20 select-none whitespace-nowrap text-center font-cond text-[17.5vw] font-extrabold uppercase leading-[0.8] text-outline opacity-40">
          Mishra
        </p>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-bone/15 py-8 text-sm text-bone/50 md:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <a href="#hero" className="transition-colors hover:text-red">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
