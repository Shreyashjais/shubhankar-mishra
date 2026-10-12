/**
 * Which page each section lives on.
 * Sections not listed here (blogs, projects, foundation, get-started)
 * are assumed to still be on the homepage.
 */
export const pageRoutes: Record<string, string> = {
    featured: "/latest-episodes",
    episodes: "/latest-episodes",
    shorts: "/latest-episodes",
  
    about: "/about-shubhankar",
    media: "/about-shubhankar",
    achievements: "/about-shubhankar",
    impact: "/about-shubhankar",
  
    journey: "/journey",
    social: "/journey",
  
    brands: "/brand-integrations",
    reviews: "/brand-integrations",
  
    contact: "/contact",
    team: "/contact",
    careers: "/contact",
  };
  
  /** The page a section belongs to (no hash). Used by the top navbar. */
  export function pageFor(id: string): string {
    if (id === "hero") return "/";
    return pageRoutes[id] ?? "/";
  }
  
  /** Page + hash, so the menu can jump straight to a section. */
  export function hrefFor(id: string): string {
    if (id === "hero") return "/";
    const route = pageRoutes[id];
    return route ? `${route}#${id}` : `/#${id}`;
  }