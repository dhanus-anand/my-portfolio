"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

type Direction = "up" | "down" | "left" | "right";

interface FadeInProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
}

const directions: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
};

const ease = [0.16, 1, 0.3, 1] as const;

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 40,
  className = "",
  once = true,
}: FadeInProps) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { once, margin: isMobile ? "-40px" : "-80px" });

  const dur = isMobile ? Math.min(duration, 0.35) : duration;
  const dist = isMobile ? Math.min(distance, 18) : distance;
  const initialOffset = directions[direction];
  const initial = {
    opacity: 0,
    x: initialOffset.x !== undefined ? initialOffset.x * (dist / 40) : 0,
    y: initialOffset.y !== undefined ? initialOffset.y * (dist / 40) : 0,
  };

  if (reduceMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{
        duration: dur,
        delay: isMobile ? delay * 0.5 : delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}

// Stagger container for groups of FadeIn children
interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}

export function StaggerGroup({ children, className = "", stagger = 0.1 }: StaggerGroupProps) {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { once: true, margin: isMobile ? "-40px" : "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: { staggerChildren: isMobile ? stagger * 0.5 : stagger },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};
