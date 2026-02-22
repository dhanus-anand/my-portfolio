"use client";

import { useEffect, useState } from "react";

const PRELOADER_EXIT_MS = 420;
const REVEAL_DURATION_MS = 900;

interface FirstLoadRevealProps {
  isReady: boolean;
  children: React.ReactNode;
}

export function FirstLoadReveal({ isReady, children }: FirstLoadRevealProps) {
  const [showReveal, setShowReveal] = useState(false);
  const [revealActive, setRevealActive] = useState(false);

  useEffect(() => {
    if (!isReady) return undefined;
    const start = window.setTimeout(() => {
      setShowReveal(true);
      setRevealActive(true);
    }, PRELOADER_EXIT_MS);
    const end = window.setTimeout(() => {
      setRevealActive(false);
      setShowReveal(false);
    }, PRELOADER_EXIT_MS + REVEAL_DURATION_MS);
    return () => {
      clearTimeout(start);
      clearTimeout(end);
    };
  }, [isReady]);

  return (
    <>
      {showReveal && (
        <div
          className={`app-reveal ${revealActive ? "app-reveal--active" : ""}`}
          aria-hidden
        />
      )}
      <div
        className={`transition-[opacity,transform,filter] duration-[950ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
          isReady
            ? "opacity-100 translate-y-0 scale-100 blur-0 saturate-100"
            : "opacity-0 translate-y-[18px] scale-[1.04] blur-[14px] saturate-[1.18]"
        }`}
      >
        {children}
      </div>
    </>
  );
}
