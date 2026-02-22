"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const GITHUB_URL = "https://github.com/dhanus-anand";
const LINKEDIN_URL = "https://linkedin.com/in/dhanus-kanth-anand-6827251a1";
const EMAIL = "dhanuskanth.ac@gmail.com";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const subject = (data.get("subject") as string)?.trim();
    const message = (data.get("message") as string)?.trim();
    if (!name || !email || !message) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 scroll-section-optimize"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto w-full max-w-content">
        <FadeIn>
          <SectionHeading
            id="contact-heading"
            title="Contact"
            subtitle="Get in touch — I'm open to full-time opportunities."
          />
          <div className="max-w-2xl mx-auto space-y-10">
            <div className="rounded-2xl border border-border bg-surface/80 p-6 sm:p-8 shadow-glow">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="e.g. Job inquiry, collaboration, or just saying hi"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Anything, really."
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent resize-y min-h-[120px]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-blue px-5 py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-background disabled:opacity-60 disabled:pointer-events-none"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                {status === "success" && (
                  <p className="text-sm text-accent-green">Thanks — I&apos;ll get back to you soon.</p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-400">Something went wrong. Try emailing me directly.</p>
                )}
              </form>
            </div>
            <div className="flex flex-col items-center">
              <motion.div
                className="mb-6"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              >
                <Mail className="h-14 w-14 text-accent-blue" />
              </motion.div>
              <div className="flex flex-wrap items-center justify-center gap-8">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-foreground hover:text-accent-blue transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue rounded-lg px-3 py-2"
                >
                  <Mail className="h-5 w-5" />
                  <span>Email</span>
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground hover:text-accent-blue transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue rounded-lg px-3 py-2"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground hover:text-accent-blue transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue rounded-lg px-3 py-2"
                  aria-label="GitHub profile"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
