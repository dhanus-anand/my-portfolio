"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export function Blog() {
  return (
    <section
      id="blog"
      className="py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="blog-heading"
    >
      <div className="mx-auto w-full max-w-content">
      <FadeIn>
        <SectionHeading
          id="blog-heading"
          title="Blog"
          subtitle="Technical deep dives and learnings."
        />
        <div>
          <div className="max-w-4xl mx-auto rounded-2xl border border-border bg-surface/80 backdrop-blur-sm p-12 text-center">
            <BookOpen
              className="mx-auto h-14 w-14 text-accent-purple/80 mb-4"
              aria-hidden
            />
            <h3 className="text-xl font-bold text-foreground mb-2">
              Blog launching soon
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Check back for technical deep dives on distributed systems, ML in
              production, and full-stack architecture.
            </p>
            <Link
              href="/blog"
              className="inline-block mt-6 text-accent-blue hover:underline font-medium"
            >
              View blog →
            </Link>
          </div>
        </div>
      </FadeIn>
      </div>
    </section>
  );
}
