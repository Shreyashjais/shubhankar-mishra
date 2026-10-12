"use client";

/** Scrolls to the top of whichever page you're on. */
export default function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="transition-colors hover:text-red"
    >
      Back to top ↑
    </button>
  );
}