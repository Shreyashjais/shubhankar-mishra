import type { ReactNode } from "react";

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
    <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const styles = {
  primary: { base: "bg-red text-bone", fill: "bg-bone", hover: "group-hover:text-ink" },
  light: { base: "bg-bone text-ink", fill: "bg-red", hover: "group-hover:text-bone" },
  outline: { base: "border border-current", fill: "bg-red", hover: "group-hover:text-bone" },
} as const;

/** Pill button with a fill-sweep hover. Works as an anchor so in-page #links get smooth scrolling. */
export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  arrow = true,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof styles;
  external?: boolean;
  className?: string;
  arrow?: boolean;
}) {
  const s = styles[variant];
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-4 text-[15px] font-semibold tracking-wide ${s.base} ${className}`}
    >
      <span aria-hidden className={`absolute inset-0 translate-y-[101%] rounded-[50%_50%_0_0] transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:rounded-none ${s.fill}`} />
      <span className={`relative z-10 flex items-center gap-3 transition-colors duration-500 ${s.hover}`}>
        {children}
        {arrow && <Arrow />}
      </span>
    </a>
  );
}
