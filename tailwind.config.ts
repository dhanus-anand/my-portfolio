import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        accent: {
          blue: "#3b82f6",
          purple: "#8b5cf6",
          green: "#10b981",
          pink: "#ec4899",
        },
        surface: {
          DEFAULT: "var(--surface)",
          elevated: "var(--surface-elevated)",
        },
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      fontSize: {
        "hero": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.1" }],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
        "gradient-secondary": "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px var(--glow-color, rgba(59, 130, 246, 0.5))",
        "glow-lg": "0 0 60px -15px var(--glow-color, rgba(59, 130, 246, 0.5))",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "preloader-slide": "preloaderSlide 0.95s cubic-bezier(0.16, 1, 0.3, 1) infinite",
        "preloader-blink": "preloaderBlink 0.95s ease-in-out infinite",
        "reveal-sweep": "revealSweep 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "reveal-glow": "revealGlow 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        preloaderSlide: {
          from: { transform: "translateX(-130%)" },
          to: { transform: "translateX(330%)" },
        },
        preloaderBlink: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "1" },
        },
        revealSweep: {
          "0%": { transform: "translateX(-34%)", opacity: "0" },
          "18%": { opacity: "1" },
          "100%": { transform: "translateX(38%)", opacity: "0" },
        },
        revealGlow: {
          "0%": { opacity: "0" },
          "20%": { opacity: "0.9" },
          "100%": { opacity: "0" },
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      maxWidth: {
        "content": "1280px",
        "content-narrow": "896px",
      },
    },
  },
  plugins: [],
};
export default config;
