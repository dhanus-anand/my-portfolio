"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { Award } from "lucide-react";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="certifications-heading"
    >
      <div className="mx-auto w-full max-w-content">
      <FadeIn>
        <SectionHeading
          id="certifications-heading"
          title="Certifications & Learning"
          subtitle="Formal credentials and ongoing learning."
        />
        <div>
          <div className="max-w-2xl mx-auto rounded-2xl border border-dashed border-border bg-surface/50 p-12 text-center">
          <Award className="mx-auto h-12 w-12 text-muted-foreground/60 mb-4" aria-hidden />
          <p className="text-muted-foreground text-lg">
            Certifications in progress — coming soon!
          </p>
          <p className="text-sm text-muted-foreground/80 mt-2">
            Coursera and other credentials will be added here.
          </p>
          </div>
        </div>
      </FadeIn>
      </div>
    </section>
  );
}
