"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { useResumeModal } from "@/components/providers/ResumeModalProvider";

const navLinks = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#experience", label: "Experience", id: "experience" },
  // { href: "#blog", label: "Blog", id: "blog" },
  { href: "#contact", label: "Contact", id: "contact" },
];

const ACTIVE_THRESHOLD = 120; // px from top of viewport

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");
  const { openResumeModal } = useResumeModal();
  const updateActiveSection = useCallback(() => {
    const sectionIds = navLinks.map((l) => l.id);
    let best: { id: string; top: number } | null = null;
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const { top } = el.getBoundingClientRect();
      if (top <= ACTIVE_THRESHOLD) {
        if (!best || top >= best.top) best = { id, top };
      }
    }
    if (best) {
      setActiveId(best.id);
    } else {
      const first = sectionIds.map((id) => ({ id, el: document.getElementById(id) })).filter((x) => x.el);
      if (first.length) {
        const tops = first.map(({ id: i, el }) => ({ id: i, top: el!.getBoundingClientRect().top }));
        tops.sort((a, b) => a.top - b.top);
        if (tops[0].top < window.innerHeight) setActiveId(tops[0].id);
      }
    }
  }, []);

  useEffect(() => {
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [updateActiveSection]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-30 w-full border-b border-border bg-background/90 backdrop-blur-md"
        role="banner"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex h-16 w-full max-w-content items-stretch justify-between gap-6">
          <Link
            href="#home"
            aria-label="Home"
            className="flex h-full min-h-0 w-auto shrink-0 items-center rounded focus:outline-none focus:ring-0 focus:ring-offset-0 active:outline-none"
          >
            <span className="flex h-10 items-center">
              <Image
                src="/images/logo-dk.png"
                alt=""
                width={96}
                height={40}
                className="block h-10 w-auto min-w-[72px] object-contain object-center"
                priority
              />
            </span>
          </Link>
          <nav
            className="hidden md:flex absolute left-1/2 top-0 h-full w-[max-content] -translate-x-1/2 items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setActiveId(link.id)}
                className={`text-sm font-medium transition-colors focus:outline-none focus:text-accent-blue relative py-2 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:rounded-full after:transition-all ${
                  activeId === link.id
                    ? "text-foreground after:w-full after:bg-accent-blue"
                    : "text-muted-foreground hover:text-foreground after:w-0 after:bg-accent-blue"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex h-full items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={openResumeModal}
              className="hidden sm:inline-flex h-10 items-center justify-center rounded-lg bg-gradient-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-background"
            >
              View Resume
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-lg md:hidden text-foreground hover:bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-accent-blue"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        </div>
      </header>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
