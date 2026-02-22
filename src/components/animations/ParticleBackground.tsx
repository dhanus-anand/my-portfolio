"use client";

import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

const options: ISourceOptions = {
  fullScreen: { enable: true },
  background: { color: { value: "transparent" } },
  particles: {
    number: {
      value: 60,
      density: { enable: true, width: 800, height: 800 },
    },
    color: { value: ["#3b82f6", "#8b5cf6", "#10b981"] },
    shape: { type: "circle" },
    opacity: {
      value: { min: 0.2, max: 0.5 },
    },
    size: {
      value: { min: 1, max: 2 },
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      outModes: { default: "bounce" },
    },
    links: {
      enable: true,
      distance: 150,
      color: "#3b82f6",
      opacity: 0.2,
      width: 1,
    },
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: { enable: true, mode: "grab" },
    },
    modes: {
      grab: {
        distance: 140,
        links: { opacity: 0.4 },
      },
    },
  },
};

export function ParticleBackground() {
  const [init, setInit] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, [reduceMotion]);

  const particlesLoaded = useCallback(async () => {}, []);

  if (reduceMotion || !init) return null;

  return (
    <div className="absolute inset-0 -z-10" aria-hidden>
      <Particles
        id="hero-particles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute inset-0"
      />
    </div>
  );
}
