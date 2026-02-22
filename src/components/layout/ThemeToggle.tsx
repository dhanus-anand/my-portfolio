"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="p-2 rounded-lg bg-surface border border-border text-foreground opacity-80"
      >
        <Sun className="h-5 w-5" aria-hidden />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="p-2 rounded-lg bg-surface border border-border text-foreground hover:border-accent-blue/50 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-background transition-colors"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isDark ? (
        <Sun className="h-5 w-5" aria-hidden />
      ) : (
        <Moon className="h-5 w-5" aria-hidden />
      )}
    </motion.button>
  );
}
