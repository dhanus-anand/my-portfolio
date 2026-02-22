"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 overflow-visible"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto w-full max-w-content">
        <FadeIn>
          <SectionHeading
            id="experience-heading"
            title="Experience"
            subtitle="Where I've worked and what I've shipped."
          />
        </FadeIn>
        <div className="w-full max-w-content relative pb-2">
          {/* Vertical line - spans full content height */}
          <div
            className="absolute left-[15px] top-6 bottom-6 w-px bg-border min-h-[200px]"
            aria-hidden
          />
          <ul className="space-y-4">
            {experience.map((entry, i) => (
              <li key={entry.company + entry.role} className="relative pl-10">
                <FadeIn delay={i * 0.06}>
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 top-6 w-4 h-4 rounded-full bg-accent-blue border-4 border-background z-10"
                    aria-hidden
                  />
                  <Card hover={false} className="p-5 sm:p-6">
                    <p className="text-sm font-medium text-accent-blue uppercase tracking-wider mb-1">
                      {entry.dates}
                    </p>
                    <h3 className="text-lg font-bold text-foreground">{entry.role}</h3>
                    <p className="text-base text-muted-foreground mb-4">{entry.company}</p>
                    <ul className="space-y-2.5 text-base text-muted-foreground leading-relaxed">
                      {entry.achievements.map((a, j) => (
                        <li key={j} className="list-disc list-inside pl-0">
                          {a}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </FadeIn>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
