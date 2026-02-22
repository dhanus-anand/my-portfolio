"use client";

import { useEffect, useState } from "react";

interface PreloaderProps {
  isVisible: boolean;
}

export function Preloader({ isVisible }: PreloaderProps) {
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      return undefined;
    }
    const t = window.setTimeout(() => setShouldRender(false), 420);
    return () => clearTimeout(t);
  }, [isVisible]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-background transition-opacity duration-[420ms] ease-out motion-reduce:transition-none ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}
      aria-hidden
    >
      <div className="w-[min(44vw,180px)] flex flex-col items-center gap-2.5">
        <div className="w-full h-0.5 rounded-full overflow-hidden bg-accent-blue/20">
          <span className="block w-1/3 h-full rounded-full bg-gradient-to-r from-accent-blue/20 via-accent-purple to-accent-blue/20 animate-preloader-slide motion-reduce:animate-none" />
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-accent-blue/70 animate-preloader-blink motion-reduce:animate-none" />
      </div>
    </div>
  );
}
