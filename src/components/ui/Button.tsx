"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  primary:
    "bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-glow hover:opacity-90 focus:ring-accent-blue",
  secondary:
    "border-2 border-border bg-transparent text-foreground hover:border-accent-blue hover:bg-accent-blue/5 focus:ring-accent-blue",
  ghost:
    "bg-transparent text-foreground hover:bg-surface-elevated focus:ring-accent-blue",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

interface ButtonProps {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  asChild?: boolean;
  href?: string;
  children?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  download?: boolean;
  onClick?: () => void;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      asChild,
      href,
      children,
      type = "button",
      download,
      onClick,
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";
    const combined = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

    const motionProps = {
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.98 },
    };

    if (asChild && href) {
      return (
        <Link href={href} className={combined} ref={ref as React.Ref<HTMLAnchorElement>}>
          {children}
        </Link>
      );
    }

    if (href) {
      return (
        <motion.a
          href={href}
          className={combined}
          {...motionProps}
          ref={ref as React.Ref<HTMLAnchorElement>}
          download={download}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        type={type}
        className={combined}
        {...motionProps}
        ref={ref as React.Ref<HTMLButtonElement>}
        onClick={onClick}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
