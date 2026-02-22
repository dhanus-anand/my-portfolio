import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TechTag } from "@/components/ui/TechTag";
import { MetricBadge } from "@/components/ui/MetricBadge";
import { getProjectBySlug, projects } from "@/content/projects";
import { ArrowLeft, ExternalLink } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Dhanus Kanth Anand`,
    description: project.description,
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue rounded"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
          <article>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              {project.description}
            </p>
            {project.longDescription && (
              <p className="text-muted-foreground leading-relaxed mb-8">
                {project.longDescription}
              </p>
            )}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <TechTag key={tag} label={tag} />
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mb-8">
              {project.metrics.map((m) => (
                <MetricBadge key={m.label} value={m.value} label={m.label} />
              ))}
            </div>
            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-2">
                Key highlight
              </h2>
              <p className="text-muted-foreground">{project.highlight}</p>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-2">
                Tech stack
              </h2>
              <p className="text-muted-foreground">
                {project.tech.join(", ")}
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Links</h2>
              <div className="flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center gap-2 text-accent-blue hover:underline"
                  >
                    {link.label}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
