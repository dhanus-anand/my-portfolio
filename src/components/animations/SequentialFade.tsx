"use client";

import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";

const staggerDelay = 0.12;

interface SequentialFadeProps {
  children: React.ReactNode;
  className?: string;
}

export function SequentialFade({ children, className = "" }: SequentialFadeProps) {
  const shouldReduceMotion = useReducedMotion();

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
            staggerChildren: staggerDelay,
            delayChildren: 0.2,
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

export function SequentialFadeItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={itemVariants}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
