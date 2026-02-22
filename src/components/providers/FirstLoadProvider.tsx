"use client";

import { useEffect, useState } from "react";
import { Preloader } from "@/components/animations/Preloader";
import { FirstLoadReveal } from "@/components/animations/FirstLoadReveal";
import { useIsMobile } from "@/hooks/useIsMobile";

const MIN_INTRO_MS = 650;
const MIN_INTRO_MS_MOBILE = 380;

export function FirstLoadProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const isMobile = useIsMobile();
  const minIntroMs = isMobile ? MIN_INTRO_MS_MOBILE : MIN_INTRO_MS;

  // Always start at the top on load/refresh (e.g. land on Hero)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const startedAt = Date.now();
    let readyTimer: ReturnType<typeof setTimeout>;

    const markReady = () => {
      const elapsed = Date.now() - startedAt;
      const delay = Math.max(0, minIntroMs - elapsed);
      readyTimer = setTimeout(() => setIsReady(true), delay);
    };

    if (typeof window !== "undefined") {
      if (document.readyState === "complete") {
        markReady();
      } else {
        window.addEventListener("load", markReady, { once: true });
      }
    }

    return () => {
      window.removeEventListener("load", markReady);
      if (readyTimer) clearTimeout(readyTimer);
    };
  }, [minIntroMs]);

  useEffect(() => {
    if (typeof document === "undefined") return undefined;
    if (!isReady) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
    document.body.style.overflow = "";
    return undefined;
  }, [isReady]);

  return (
    <>
      <Preloader isVisible={!isReady} />
      <FirstLoadReveal isReady={isReady}>{children}</FirstLoadReveal>
    </>
  );
}
