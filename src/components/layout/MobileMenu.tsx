"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { useResumeModal } from "@/components/providers/ResumeModalProvider";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  // { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { openResumeModal } = useResumeModal();

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
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-surface border-l border-border shadow-glow flex flex-col p-6"
            aria-label="Mobile navigation"
          >
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 rounded-lg text-foreground hover:bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-accent-blue"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <ul className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block py-2 text-lg font-medium text-foreground hover:text-accent-blue transition-colors focus:outline-none focus:text-accent-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <button
                type="button"
                onClick={handleResumeClick}
                className="block w-full py-3 text-center rounded-lg bg-gradient-primary text-white font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-background"
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
