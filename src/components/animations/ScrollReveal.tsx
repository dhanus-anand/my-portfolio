"use client";

import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useIsMobile();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const duration = isMobile ? 0.28 : 0.5;
  const yOffset = isMobile ? 12 : 24;

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: isMobile ? "-30px" : "-50px" }}
      transition={{ duration, delay: isMobile ? delay * 0.5 : delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
