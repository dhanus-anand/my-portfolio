"use client";

import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

/** True when viewport is <= 768px (touch-first / mobile). Use for lighter animations. */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const m = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    setIsMobile(m.matches);
    const listener = () => setIsMobile(m.matches);
    m.addEventListener("change", listener);
    return () => m.removeEventListener("change", listener);
  }, []);

  return isMobile;
}
