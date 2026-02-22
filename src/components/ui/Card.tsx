"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";

interface CardProps {
  className?: string;
  hover?: boolean;
  children?: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", hover = true, children }, ref) => {
    const base =
      "rounded-2xl border border-border bg-surface/80 backdrop-blur-sm overflow-hidden";
    const hoverClass = hover
      ? "transition-all duration-300 hover:translate-y-[-4px] hover:shadow-glow hover:border-accent-blue/30"
      : "";

    const combined = `${base} ${hoverClass} ${className}`;

    return (
      <motion.div
        ref={ref}
        className={combined}
        whileHover={hover ? { y: -4 } : undefined}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export { Card };
