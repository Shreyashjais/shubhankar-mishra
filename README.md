# Shubhankar Mishra: Personal Brand + Podcast Site

A one-page, 19-section editorial site built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lenis**.

## Run it

```bash
npm install
cp .env.example .env.local   # then edit values
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

Deploy to Vercel by importing the repo. Set `NEXT_PUBLIC_SITE_URL` to your real domain first.

## IMPORTANT: replace the placeholder content

**All text, numbers, press outlets, awards, brands, guest names, team members, quotes and social handles are placeholders.**
Replace them with real, verifiable information before launch (especially press, awards, brand partners and foundation claims).

Everything lives in **`lib/content.ts`**. Change copy there and the whole site updates.

### Images
The `public/images/*.svg` files are generated cinematic placeholders. To use real photography:

1. Drop your own licensed photos (JPG/WebP) in `public/images/`, e.g. `portrait.jpg`.
2. In `lib/content.ts`, change `img("portrait")` / the `images` object to point at them (the `img()` helper appends `.svg`, so change it to `.jpg` or pass full paths).
3. Recommended sizes: portrait 900×1125 (4:5), episodes 1280×720, shorts 720×1280, features 1400×1000.

Use only photos you own or have permission to use (press-kit images, your own shoots).
Real JPG/WebP go through `next/image` automatically (AVIF/WebP, responsive, lazy).

## SEO checklist (already implemented)
- Metadata API: title template, description, keywords, canonical, robots, Open Graph, Twitter cards
- Generated share image: `app/opengraph-image.tsx` (1200×630)
- JSON-LD: Person, WebSite, PodcastSeries (`components/JsonLd.tsx`)
- `sitemap.xml`, `robots.txt`, web manifest, SVG favicon
- Semantic landmarks, one `<h1>`, ordered `<h2>`/`<h3>`, descriptive alt text, skip link
- `next/font` (no layout shift), image optimization, security headers, long-cache for images
- No-JS fallback (content stays visible), `prefers-reduced-motion` respected

### Before you launch
1. Set `NEXT_PUBLIC_SITE_URL` to your production domain.
2. Update `socials[].href` in `lib/content.ts` (they feed JSON-LD `sameAs`) and `site.twitterHandle`.
3. Add `NEXT_PUBLIC_GSC_VERIFICATION` (Google Search Console) and optionally `NEXT_PUBLIC_GA_ID`.
4. Submit `https://your-domain/sitemap.xml` in Search Console.
5. Add real YouTube links to episodes/shorts/featured (`href` fields).

## Contact & newsletter forms
Both post to `app/api/contact/route.ts` (validation + honeypot). With no env vars they log to the server console.
To receive real emails, set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (see `.env.example`).

## Structure
```
app/            layout (SEO, fonts), page, template (page transition), sitemap, robots, manifest, OG image, API
components/
  sections/     the 19 sections, in page order
  ui/           Reveal, Words, Counter, Marquee, Magnetic, ParallaxImage, Section, SectionHead…
lib/content.ts  ALL editable content
public/images/  placeholder art, replace with real photos
```

## Animation notes
Preloader curtain · Lenis smooth scroll · masked word reveals · curtain image reveals + parallax · scroll-pinned horizontal Shorts gallery · scroll-drawn timeline · animated counters & bars · marquees · magnetic CTAs · full-screen clip-path menu · hover zoom on thumbnails.
All motion is transform/opacity based and honours `prefers-reduced-motion`.

## Notes
- Built on Next 14 / React 18. Upgrading to a newer Next major is straightforward (no deprecated APIs used).
- Smile Foundation section copy is generic placeholder. Confirm the name and claims match your actual programme.
