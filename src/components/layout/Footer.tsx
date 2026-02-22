"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const currentYear = new Date().getFullYear();

const GITHUB_URL = "https://github.com/dhanus-anand";
const LINKEDIN_URL = "https://linkedin.com/in/dhanus-kanth-anand-6827251a1";
const EMAIL = "dhanuskanth.ac@gmail.com";

export function Footer() {
  return (
    <footer
      className="border-t border-border bg-surface py-12 px-4 sm:px-6 lg:px-8"
      role="contentinfo"
    >
      <div className="mx-auto w-full max-w-content">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue rounded p-1"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue rounded p-1"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Send email"
              className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue rounded p-1"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            Built with Next.js
          </p>
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          © {currentYear} Dhanus Kanth Anand. Available for full-time opportunities — open
          to visa sponsorship.
        </p>
      </div>
    </footer>
  );
}
