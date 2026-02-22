"use client";

import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechTag } from "@/components/ui/TechTag";
import { MetricBadge } from "@/components/ui/MetricBadge";
import { FadeIn } from "@/components/animations/FadeIn";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 scroll-section-optimize"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto w-full max-w-content">
        <FadeIn>
          <SectionHeading
            id="projects-heading"
            title="Projects"
            subtitle="Systems I've designed and built — with a focus on architecture and reliability."
          />
        </FadeIn>
        <div className="grid gap-4 md:gap-5 grid-cols-1 md:grid-cols-3">
          {projects.map((project, i) => {
            const href = project.githubUrl || `/projects/${project.slug}`;
            const isExternal = href.startsWith("http");
            const cardContent = (
              <Card className="h-full p-5 md:p-6 flex flex-col transition-opacity group-hover:opacity-95">
                <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <TechTag key={tag} label={tag} />
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.metrics.map((m) => (
                    <MetricBadge
                      key={m.value + (m.label || "")}
                      value={m.value}
                      label={m.label}
                      className="!px-2.5 !py-1.5 !text-sm"
                    />
                  ))}
                </div>
              </Card>
            );
            return (
              <FadeIn key={project.slug} delay={0.1 + i * 0.05} className="h-full">
                {isExternal ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full group"
                    aria-label={`${project.title} — view on GitHub`}
                  >
                    {cardContent}
                  </a>
                ) : (
                  <a href={href} className="block h-full group" aria-label={`View ${project.title}`}>
                    {cardContent}
                  </a>
                )}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
