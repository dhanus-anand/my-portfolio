"use client";

import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

const PRELOADER_EXIT_MS = 420;
const REVEAL_DURATION_MS = 900;
const REVEAL_DURATION_MS_MOBILE = 480;
const CONTENT_DURATION_MS = 950;
const CONTENT_DURATION_MS_MOBILE = 520;

interface FirstLoadRevealProps {
  isReady: boolean;
  children: React.ReactNode;
}

export function FirstLoadReveal({ isReady, children }: FirstLoadRevealProps) {
  const [showReveal, setShowReveal] = useState(false);
  const [revealActive, setRevealActive] = useState(false);
  const isMobile = useIsMobile();

  const revealDuration = isMobile ? REVEAL_DURATION_MS_MOBILE : REVEAL_DURATION_MS;
  const contentDuration = isMobile ? CONTENT_DURATION_MS_MOBILE : CONTENT_DURATION_MS;

  useEffect(() => {
    if (!isReady) return undefined;
    const start = window.setTimeout(() => {
      setShowReveal(true);
      setRevealActive(true);
    }, PRELOADER_EXIT_MS);
    const end = window.setTimeout(() => {
      setRevealActive(false);
      setShowReveal(false);
    }, PRELOADER_EXIT_MS + revealDuration);
    return () => {
      clearTimeout(start);
      clearTimeout(end);
    };
  }, [isReady, revealDuration]);

  return (
    <>
      {showReveal && (
        <div
          className={`app-reveal ${revealActive ? "app-reveal--active" : ""}`}
          aria-hidden
        />
      )}
      <div
        className={`transition-[opacity,transform,filter] motion-reduce:transition-none ${
          isReady
            ? "opacity-100 translate-y-0 scale-100 blur-0 saturate-100"
            : "opacity-0 translate-y-[18px] scale-[1.04] blur-[14px] saturate-[1.18]"
        }`}
        style={{
          transitionDuration: `${contentDuration}ms`,
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {children}
      </div>
    </>
  );
}
