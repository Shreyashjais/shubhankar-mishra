import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0C0B0B",
        charcoal: "#171616",
        smoke: "#232121",
        bone: "#F1ECE3",
        sand: "#E4DCCD",
        wine: "#1A0B0E",
        red: { DEFAULT: "#C8102E", deep: "#8F0C21" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        cond: ["var(--font-cond)", "Impact", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
