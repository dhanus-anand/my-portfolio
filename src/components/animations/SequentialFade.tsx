"use client";

import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

const staggerDelay = 0.12;
const staggerDelayMobile = 0.06;

interface SequentialFadeProps {
  children: React.ReactNode;
  className?: string;
}

export function SequentialFade({ children, className = "" }: SequentialFadeProps) {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useIsMobile();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: isMobile ? staggerDelayMobile : staggerDelay,
            delayChildren: isMobile ? 0.08 : 0.2,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const itemVariantsMobile = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export function SequentialFadeItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useIsMobile();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={isMobile ? itemVariantsMobile : itemVariants}
      transition={{ duration: isMobile ? 0.25 : 0.4, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
