/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE TO REPLACE ALL PLACEHOLDER CONTENT.
 *  Every name, number, quote, outlet, brand and link below is
 *  PLACEHOLDER copy. Replace with real, verifiable information
 *  before launch. Swap images by changing the `img()` file names
 *  (drop real .jpg/.webp files into /public/images).
 * ─────────────────────────────────────────────────────────────
 */

const img = (name: string) => `/images/${name}.svg`; // change to .jpg / .webp when you add real photos
const YT = "https://www.youtube.com/channel/UCYalWwW79BdxmMTKUyBFj5g";

export const site = {
  name: "Shubhankar Mishra",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com",
  title: "Shubhankar Mishra | Podcast, Interviews & Stories",
  description:
    "Official home of Shubhankar Mishra: long-form podcast conversations, interviews, shorts, brand collaborations and the Smile Foundation initiative. Watch the latest episodes.",
  tagline: "Conversations that outlast the scroll.",
  email: "hello@example.com",
  careersEmail: "careers@example.com",
  locale: "en_IN",
  twitterHandle: "@yourhandle",
  keywords: [
    "Shubhankar Mishra",
    "Shubhankar Mishra podcast",
    "Indian podcast host",
    "long-form interviews",
    "podcast interviews India",
    "YouTube creator",
    "brand collaborations",
    "Smile Foundation",
  ],
};

export const images = {
  portrait: "/shubhankar-hero.png",
  old:"/old.png",
  about: "/about.png",
  foundation: img("foundation"),
};

export const nav = [
  { id: "hero", label: "Home" },
  { id: "featured", label: "Featured Conversations" },
  { id: "episodes", label: "Latest Episodes" },
  { id: "shorts", label: "Shorts & Highlights" },
  { id: "about", label: "About Shubhankar" },
  { id: "media", label: "Media & Recognition" },
  { id: "achievements", label: "Views & Achievements" },
  { id: "impact", label: "Global Impact" },
  { id: "journey", label: "The Journey" },
  { id: "social", label: "Social Media" },
  { id: "brands", label: "Brand Integrations" },
  { id: "contact", label: "Collaborate & Contact" },
  { id: "blogs", label: "Blogs" },
  { id: "reviews", label: "Reviews & Episodes" },
  { id: "projects", label: "Projects & Initiatives" },
  { id: "foundation", label: "Smile Foundation" },
  { id: "team", label: "Behind the Brand" },
  { id: "careers", label: "Join Our Team" },
  { id: "get-started", label: "Get Started" },
];

export const topNav = ["episodes", "about", "journey", "brands", "contact"];

export const heroMarquee = ["Podcast", "Interviews", "Stories", "Ideas", "Culture", "Craft"];

export const featured = [

  {
    no: "01",
    guest: "Kim Jong Un",
    role: "North Korean Supreme Leader",
    title: "North Korea Exposed: How Kim Jong Un Turned an Entire Country Into a Prison",
    quote: "How an entire country was turned into a prison under a dictatorship.",
    duration: "31:42",
    views: "2M views",
    img: "/videos/video1.png",
    href: "https://www.youtube.com/watch?v=uHIeJ-u4ib4",
  },
  
 
{
  no: "02",
  guest: "Rashmika Mandanna & Vijay Deverakonda",
  role: "Actors",
  title: "Rashmika & Vijay | शादी के बाद FIRST Hindi Podcast | Love, Life & Ranabaali",
  quote: "Vijay and Rashmika hid their love for eight years.",
  duration: "1h 29m 21s",
  views: "162K views",
  img: "/videos/video2.png",
  href: "https://www.youtube.com/watch?v=JqwfZdW4WvI",
},

 
{
  no: "03",
  guest: "Manmohan Singh",
  role: "Former Prime Minister of India",
  title: "Manmohan Singh: सबसे कमजोर PM या Underrated Hero? | Explained | Rahul Gandhi | Narendra Modi",
  quote: "The weakest Prime Minister or an underrated hero?",
  duration: "28m 10s",
  views: "10K views",
  img: "/videos/video3.png",
  href: "https://www.youtube.com/watch?v=qt6hr2je9Yc&t=3s",
},

];

export const episodes = [
  
{
  no: "312",
  title: "Cockpit में आतंकियों? 9/11 वाला दरवाज़ा बना जाल | Indian Pilot Smit Machchhar ने कैसे बचाईं 174 जानें?",
  guest: "Smit Machchhar",
  category: "Aviation / Documentary",
  duration: "—",
  img: "/latest/latest1.png",
  href: "https://www.youtube.com/watch?v=x6PEkjybf44",
},
 
{
  no: "311",
  title: "Unplugged with Sonal Chauhan | From Jannat to Mirzapur | Love & Life | Emraan Hashmi | Ravi Kishan",
  guest: "Emraan Hashmi",
  category: "Entertainment / Podcast",
  duration: "2h 22m 06s",
  img: "/latest/latest2.png",
  href: "https://www.youtube.com/watch?v=0XRnqALKN5g",
},
 
{
  no: "310",
  title: "क्या Gyanesh Kumar देंगे इस्तीफा? Rahul Gandhi का हमला और CJP Protest का ऐलान...! | Shubhankar Mishra",
  guest: "Gyanesh Kumar",
  category: "Politics / News",
  duration: "—",
  img: "/latest/latest3.png",
  href: "https://www.youtube.com/watch?v=s1sIj8SRBN0",
},
 
{
  no: "309",
  title: "Unplugged ft. Khan Saab | Nusrat Fateh Ali Khan | Dhurandhar | Qawwali | Sufi Songs",
  guest: "Khan Saab",
  category: "Music / Podcast",
  duration: "2h 01m 39s",
  img: "/latest/latest4.png",
  href: "https://www.youtube.com/watch?v=_TqBWcm0ux8",
},
  
{
  no: "308",
  title: "Feroze Gandhi: The Forgotten Gandhi | Indira Gandhi, Rajiv, Sanjay, Nehru, Rahul Gandhi",
  guest: "Feroze Gandhi & Indira Gandhi",
  category: "History / Politics",
  duration: "25m 18s",
  img: "/latest/latest5.png",
  href: "https://www.youtube.com/watch?v=uWWt7YKQRT0",
},
];

export const shorts = [
 
{
  title: "Can Communication Make Love Stronger? | Rashmika & Vijay ",
  views: "1.1K likes",
  img: "/shorts/shorts1.avif",
  href: "https://www.youtube.com/shorts/FbY5-24cN5U",
},

  {
    title: "गांधी जी ने भगत सिंह को नहीं बचाया? | Bhagat Singh",
    views: "1.8K likes",
    img: "/shorts/shorts2.avif",
    href: "https://www.youtube.com/shorts/FYRBj6qHyXE",
  },
  

  {
    title: "Mohit Suri ने दिलाई ‘Jannat’? | Sonal Chauhan | Unplugged with Sonal Chauhan",
    views: "702 likes",
    img: "/shorts/shorts3.avif",
    href: "https://www.youtube.com/shorts/r08UdY8I4AM",
  },
  
 
{
  title: "चीन का बांध, भारत के लिए खतरा? | Ashok Sajjanhar",
  views: "501 likes",
  img: "/shorts/shorts4.avif",
  href: "https://www.youtube.com/shorts/ECQ_w4j55DM",
},


{
  title: "Adani Case Decoded",
  views: "689 likes",
  img: "/shorts/shorts5.avif",
  href: "https://www.youtube.com/shorts/aDhlKaHO7KQ",
},

  
{
  title: "Nusrat Saab की क्यों दीवानी है दुनिया? | Khan Saab",
  views: "549 likes",
  img: "/shorts/shorts6.avif",
  href: "https://www.youtube.com/shorts/pPPx6Onavqk",
},

 
{
  title: "How to Overcome Depression?",
  views: "249 likes",
  img: "/shorts/shorts7.avif",
  href: "https://www.youtube.com/shorts/-JJ4hS6gqWg",
},

];

export const about = {
  statement:
    "I don't interview for answers. I interview for the moment a guest stops performing and starts telling the truth.",
  paragraphs: [
    "Shubhankar Mishra is a podcast host, interviewer and storyteller known for long-form conversations that go past the press-release version of a life. His studio is built on patience: long silences, honest follow-ups and a refusal to rush a good answer.",
    "Beyond the microphone, he builds media products, mentors young creators and backs causes that put education within reach.",
  ],
  traits: ["Curious", "Unhurried", "Unfiltered", "Relentless"],
  facts: [
    { k: "Known for", v: "Long-form conversations" },
    { k: "Languages", v: "English, Hindi" },
    { k: "Format", v: "Video podcast, shorts, essays" },
    { k: "Based in", v: "India, recording worldwide" },
  ],
};

export const press = [
  { year: "2026", outlet: "The Metro Review", headline: "The interviewer who lets the silence do the work", type: "Feature" },
  { year: "2025", outlet: "Indie Quarterly", headline: "How one studio rewired long-form media", type: "Cover story" },
  { year: "2025", outlet: "Business Ledger", headline: "Creator economy: 30 voices to watch", type: "List" },
  { year: "2024", outlet: "Culture Wire", headline: "Why audiences are choosing three-hour conversations", type: "Profile" },
  { year: "2024", outlet: "The Weekend Desk", headline: "Inside the most-watched living-room studio", type: "Feature" },
];
export const awards = [
  { year: "2026", name: "Best Interview Show", by: "Digital Creators Awards" },
  { year: "2025", name: "Creator of the Year, Long-form", by: "Media Excellence Forum" },
  { year: "2025", name: "Top 30 Under 30, Media", by: "Business Ledger" },
  { year: "2024", name: "Podcast of the Year", by: "Audio & Video Honours" },
];
export const outlets = ["The Metro Review", "Indie Quarterly", "Business Ledger", "Culture Wire", "The Weekend Desk", "Studio Journal", "Frame Magazine"];

export const achievements = [
  { value: 250, suffix: "M+", label: "Total views", note: "Across long-form episodes and shorts, all platforms." },
  { value: 2.4, decimals: 1, suffix: "M", label: "Subscribers", note: "A community that shows up for the full episode." },
  { value: 310, suffix: "+", label: "Episodes released", note: "Every conversation recorded, edited and published in-house." },
  { value: 18, suffix: "M", label: "Hours watched", note: "Roughly two thousand years of attention, freely given." },
];

export const impact = {
  stats: [
    { value: 120, suffix: "+", label: "Countries watching" },
    { value: 14, suffix: "", label: "Languages in captions" },
    { value: 47, suffix: " min", label: "Average watch time" },
    { value: 9, suffix: "M", label: "Monthly reach" },
  ],
  regions: [
    { name: "India", pct: 64 },
    { name: "United States", pct: 11 },
    { name: "United Arab Emirates", pct: 7 },
    { name: "United Kingdom", pct: 5 },
    { name: "Canada & Australia", pct: 6 },
  ],
  cities: ["Delhi", "Mumbai", "Bengaluru", "Dubai", "London", "Toronto", "Singapore"],
};

export const journey = [
  { year: "2017", title: "The first microphone", text: "A borrowed mic, a spare room and twelve listeners, eleven of them family." },
  { year: "2019", title: "Going long-form", text: "The first two-hour conversation. The audience stayed for all of it." },
  { year: "2021", title: "The studio opens", text: "A dedicated space, a small crew and a promise to never rush an answer." },
  { year: "2023", title: "One million", text: "The subscriber count crossed seven digits and the questions got braver." },
  { year: "2024", title: "Going global", text: "Guests from five continents and subtitles in over a dozen languages." },
  { year: "2025", title: "Smile Foundation", text: "A philanthropic arm that turns screen time into school fees." },
  { year: "2026", title: "The next chapter", text: "Live tours, documentary work and a bigger table for new voices." },
];

export const socials = [
  { name: "YouTube", handle: "@yourhandle", count: "2.4M", unit: "subscribers", href: "https://www.youtube.com/" },
  { name: "Instagram", handle: "@yourhandle", count: "1.9M", unit: "followers", href: "https://www.instagram.com/" },
  { name: "X", handle: "@yourhandle", count: "640K", unit: "followers", href: "https://x.com/" },
  { name: "LinkedIn", handle: "in/yourhandle", count: "520K", unit: "followers", href: "https://www.linkedin.com/" },
  { name: "Spotify", handle: "Podcast", count: "380K", unit: "monthly listeners", href: "https://open.spotify.com/" },
];

export const brands = {
  partners: ["Northwind", "Aurelia", "Kitebox", "Lumen & Co", "Orbit Labs", "Saffron Audio", "Veda Fit", "Parallel"],
  cases: [
    { brand: "Aurelia", title: "The Craft Series", format: "Three-episode sponsorship", result: "4.2M views", detail: "9.8% click-through on the integrated segments.", img: img("brand-1") },
    { brand: "Orbit Labs", title: "Ask Me Anything, Live", format: "Dedicated episode + shorts", result: "11M reach", detail: "Brand recall up 38% in post-campaign survey.", img: img("brand-2") },
    { brand: "Veda Fit", title: "Thirty Days of Discipline", format: "Integrated challenge", result: "280K sign-ups", detail: "Highest-converting creator campaign of the quarter.", img: img("brand-3") },
  ],
  formats: [
    { name: "Host-read integrations", text: "Natural, mid-roll placements written in the show's voice." },
    { name: "Dedicated episodes", text: "A full conversation built around your story and your guest." },
    { name: "Shorts & highlights", text: "Cut-downs engineered for reach on Reels and Shorts." },
    { name: "Series sponsorship", text: "A multi-episode partnership with co-branded identity." },
  ],
};

export const topics = ["Brand partnership", "Podcast guest", "Speaking & events", "Press", "Something else"];

export const blogs = [
  { category: "Craft", title: "What 300 interviews taught me about listening", excerpt: "Most of the work happens before you ask the question, and most of the good stuff after the guest thinks you've stopped.", date: "12 Sep 2026", read: "8 min", img: "/blogs/blog1.png" },
  { category: "Creators", title: "Why I stopped chasing the algorithm", excerpt: "Reach is a metric. Trust is an asset. A case for building the second.", date: "28 Aug 2026", read: "6 min", img: "/blogs/blog2.png" },
  { category: "Mindset", title: "The case for the three-hour conversation", excerpt: "Attention spans aren't shrinking. Patience for boring content is.", date: "03 Aug 2026", read: "5 min", img: "/blogs/blog3.png" },
 
];

export const reviews = [
  { quote: "The only interviewer who makes a three-hour episode feel like a short walk. I've never felt so unhurried by a screen.", name: "Priya S.", role: "Listener since 2020" },
  { quote: "He asked me a question I hadn't been asked in fifteen years of interviews. That's rare, and it's why I said yes to the second recording.", name: "Kabir Sethi", role: "Guest, Episode 287" },
  { quote: "Working with the team was effortless. The integration felt like part of the conversation, not an interruption of it.", name: "Marketing Director", role: "Brand partner" },
  { quote: "I use his episodes as my commute, my gym playlist and sometimes my therapy. In that order.", name: "Arjun M.", role: "Listener" },
];
export const topEpisodes = [
  { title: "The Quiet Discipline Behind Loud Success", plays: "4.8M" },
  { title: "What Losing Taught Me About Winning", plays: "3.1M" },
  { title: "Why Your Mind Won't Sit Still", plays: "2.6M" },
  { title: "Building a Brand That Outlives Its Founder", plays: "2.2M" },
  { title: "The Sound of a Second Chance", plays: "1.9M" },
];

export const projects = [
  { name: "The Studio Sessions", kind: "Live format", year: "2026", text: "Intimate, ticketed conversations recorded in front of a small audience, then released as limited episodes.", img: img("project-1") },
  { name: "Frame by Frame", kind: "Documentary", year: "2025", text: "A mini-documentary series following young creators through their first year of building in public.", img: img("project-2") },
  { name: "The Open Mic Fund", kind: "Initiative", year: "2025", text: "Micro-grants and mentorship for first-time podcasters who can't yet afford a good microphone.", img: img("project-3") },
  { name: "Long Table", kind: "Community", year: "2024", text: "A private monthly dinner that brings listeners, guests and collaborators to one table.", img: img("project-4") },
];

export const foundation = {
  intro:
    "Every episode watched can put a child closer to a classroom. The Smile Foundation initiative channels a share of the show's revenue into education, nutrition and mentorship.",
  stats: [
    { value: 12000, suffix: "+", label: "Children supported" },
    { value: 85, suffix: "", label: "Schools reached" },
    { value: 4, suffix: "M", label: "Rupees raised through live events" },
  ],
  pillars: [
    { name: "Education", text: "School fees, books and learning kits for children who'd otherwise drop out." },
    { name: "Nutrition", text: "Daily meals that keep classrooms full and attention sharp." },
    { name: "Mentorship", text: "Creators and guests volunteering time with first-generation learners." },
  ],
  href: "mailto:hello@example.com?subject=Smile%20Foundation",
};

export const team = [
  { name: "Ananya Rao", role: "Head of Production", img: img("team-1") },
  { name: "Dev Kulkarni", role: "Lead Editor", img: img("team-2") },
  { name: "Sara Fernandes", role: "Brand Partnerships", img: img("team-3") },
  { name: "Imran Qureshi", role: "Director of Photography", img: img("team-4") },
  { name: "Neha Bhatt", role: "Community & Growth", img: img("team-5") },
];

export const jobs = [
  { title: "Video Editor, Long-form", dept: "Post-production", where: "Delhi NCR · On-site", type: "Full-time" },
  { title: "Producer, Guest Relations", dept: "Production", where: "Mumbai · Hybrid", type: "Full-time" },
  { title: "Short-form Content Strategist", dept: "Growth", where: "Remote (India)", type: "Full-time" },
  { title: "Design Intern, Motion & Thumbnails", dept: "Design", where: "Remote", type: "3-month internship" },
];

export const getStarted = [
  { who: "For viewers", action: "Watch the latest episode", href: "#episodes" },
  { who: "For brands", action: "Plan a partnership", href: "#contact" },
  { who: "For collaborators", action: "Pitch a conversation", href: "#contact" },
];
