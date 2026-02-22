"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";

const aboutParagraphs = [
  `I'm Dhanus Kanth Anand, a software engineer with over three years of experience building and maintaining production systems in both enterprise and startup environments. I'm currently pursuing my Master's in Computer Science at the University of Massachusetts Amherst.`,
  `At Zoho, I worked on large-scale enterprise CRM solutions, designing and delivering customized systems for multiple clients across industries. I led development of a Configure-Price-Quote (CPQ) platform that digitized field workflows and significantly reduced manual operational effort. I also built performance-optimized dashboard components and mentored junior engineers.`,
  `At Parla Dynamics, I've built and maintained full-stack production applications, developing web platforms using Next.js and corresponding mobile applications with React Native. In addition to feature development and API integrations, I've been responsible for deploying and operating these systems on AWS, including containerized services on ECS Fargate. My work spans infrastructure setup, secure HTTPS configuration, Docker build pipelines, backend service design, and architectural decisions around encryption, reliability, and release management.`,
  `Beyond my professional work, I build deep technical projects focused on distributed systems, scalable SaaS architectures, and machine learning systems. I'm particularly interested in backend infrastructure, system design, and building reliable services that operate at scale.`,
];

const education = [
  {
    degree: "M.S. Computer Science",
    school: "University of Massachusetts Amherst",
    year: "2024 – 2026",
    coursework:
      "Software Engineering, Network Security, Statistics, Data Science, ML, RL, Information Retrieval, Optimization, DB Management/Analytics, Systems for DL",
  },
  {
    degree: "B.E. Electrical & Electronics Engineering",
    school: "Sri Krishna College of Technology (Anna University)",
    year: "2018 – 2022",
    coursework: "Problem Solving using C, Data Structures & Algorithms",
  },
];

export function About() {
  const [headshotError, setHeadshotError] = useState(false);

  return (
    <section
      id="about"
      className="pt-12 pb-20 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto w-full max-w-content">
        <FadeIn>
          <SectionHeading
            id="about-heading"
            title="About"
            subtitle="A bit about my background and what I care about."
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,280px)_1fr] gap-10 lg:gap-14 items-stretch">
          <FadeIn direction="left" delay={0.1} className="flex lg:h-full">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-full lg:h-full lg:min-h-[280px] mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-border bg-surface-elevated shadow-glow">
              {!headshotError ? (
                <Image
                  src="/images/headshot.jpg"
                  alt="Dhanus Kanth Anand"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 224px, 280px"
                  onError={() => setHeadshotError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-surface-elevated text-5xl font-bold bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
                  D
                </div>
              )}
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15} className="min-w-0 flex flex-col">
            <div className="space-y-4 flex-1">
              {aboutParagraphs.map((paragraph, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed text-foreground/90">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.25} className="mt-10 lg:mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-blue mb-4">
            Education
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {education.map((item) => (
              <div
                key={item.degree}
                className="rounded-xl border border-border bg-surface/80 p-5 sm:p-6"
              >
                <div className="font-semibold text-foreground">{item.degree}</div>
                <div className="text-muted-foreground mt-1">{item.school}</div>
                <div className="text-muted-foreground/80 text-sm mt-1">{item.year}</div>
                {item.coursework && (
                  <p className="text-muted-foreground/90 text-sm mt-3 pt-3 border-t border-border">
                    <span className="font-medium text-foreground/90">Coursework:</span> {item.coursework}
                  </p>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
