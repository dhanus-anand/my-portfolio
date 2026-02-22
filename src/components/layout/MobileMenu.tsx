"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Home, User, Briefcase, FolderKanban, Mail } from "lucide-react";
import Link from "next/link";
import { useResumeModal } from "@/components/providers/ResumeModalProvider";

const navLinks = [
  { href: "#home", label: "Home", icon: Home, color: "text-accent-blue" },
  { href: "#about", label: "About", icon: User, color: "text-accent-purple" },
  { href: "#experience", label: "Experience", icon: Briefcase, color: "text-accent-green" },
  { href: "#projects", label: "Projects", icon: FolderKanban, color: "text-accent-pink" },
  { href: "#contact", label: "Contact", icon: Mail, color: "text-amber-500" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { openResumeModal } = useResumeModal();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onClose();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      window.history.pushState(null, "", href);
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  const handleResumeClick = () => {
    openResumeModal();
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-[min(320px,85vw)] bg-background border-l border-border shadow-2xl flex flex-col"
            aria-label="Mobile navigation"
          >
            <div className="flex justify-end p-4 pb-0">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-accent-blue"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <ul className="flex flex-col gap-1 px-6 py-8 flex-1">
              {navLinks.map((link, i) => {
                const Icon = link.icon;
                const num = String(i + 1).padStart(2, "0");
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="group flex items-center gap-4 py-4 border-b border-border last:border-0 focus:outline-none focus:ring-0"
                    >
                      <span className="flex items-center gap-3 min-w-0">
                        <span
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-elevated border border-border"
                          aria-hidden
                        >
                          <Icon className={`h-5 w-5 ${link.color}`} />
                        </span>
                        <span className="flex flex-col items-baseline gap-0.5">
                          <span className="text-xs font-medium tabular-nums text-muted-foreground">
                            {num}
                          </span>
                          <span className="text-lg font-bold text-foreground group-hover:text-accent-blue transition-colors">
                            {link.label}
                          </span>
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="p-6 pt-4">
              <button
                type="button"
                onClick={handleResumeClick}
                className="w-full py-3.5 px-4 rounded-xl text-center font-semibold text-white bg-gradient-primary hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-background shadow-md"
              >
                View Resume
              </button>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
