"use client";

import { useState } from "react";
import { preloaderState } from "./Preloader";


/**
 * Entrance delay for hero animations.
 * 1.7s on a full page load (wait for the preloader curtain),
 * 0.3s when arriving by clicking a link (no curtain plays).
 */
export function useHeroDelay() {
  const [delay] = useState(() => (preloaderState.done ? 0.3 : 1.7));
  return delay;
}