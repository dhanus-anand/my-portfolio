"use client";

import Image from "next/image";
import Link from "next/link";
import { ParticleBackground } from "@/components/animations/ParticleBackground";
import {
  SequentialFade,
  SequentialFadeItem,
} from "@/components/animations/SequentialFade";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";

const GITHUB_URL = "https://github.com/dhanus-anand";
const LINKEDIN_URL = "https://linkedin.com/in/dhanus-kanth-anand-6827251a1";

const tagline = "Software engineer building scalable backend systems and cloud-native applications.";
const intro =
  "I’m a software engineer pursuing an MS in Computer Science at UMass Amherst with 2+ years of industry experience. I design cloud-native backend systems, distributed services, and production ML pipelines with a focus on performance, reliability, and maintainability.";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-10 sm:pt-24 sm:pb-12 overflow-hidden"
      aria-label="Introduction"
    >
      <ParticleBackground />
      <div className="mx-auto w-full max-w-content min-h-[75vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 sm:gap-10 lg:gap-14 items-center min-w-0 relative z-10">
          {/* Image left */}
          <SequentialFadeItem className="flex justify-center lg:justify-start order-2 lg:order-1 lg:min-w-[320px]">
            <div
              className="relative w-full max-w-[400px] aspect-[4/3] lg:aspect-auto lg:h-[min(75vh,540px)] rounded-2xl overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
              }}
            >
              <Image
                src="/images/hero-coding.png?v=2"
                alt="Developer at work — building software"
                fill
                priority
                sizes="(max-width: 1024px) 400px, min(50vw, 540px)"
                className="object-cover object-left-center"
              />
              {/* Smudge overlay: blend all four sides into background */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to left, var(--background) 0%, transparent 26%), linear-gradient(to right, var(--background) 0%, transparent 24%), linear-gradient(to top, var(--background) 0%, transparent 30%), linear-gradient(to bottom, var(--background) 0%, transparent 28%)",
                }}
              />
            </div>
          </SequentialFadeItem>
          {/* Text right */}
          <SequentialFade className="flex flex-col gap-6 sm:gap-7 min-w-0 order-1 lg:order-2 justify-center">
          <SequentialFadeItem>
            <h1 className="text-hero font-bold tracking-tight">
              <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink bg-clip-text text-transparent">
                Hi, I&apos;m Dhanus Kanth
              </span>
            </h1>
          </SequentialFadeItem>
          <SequentialFadeItem>
            <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
              {tagline}
            </p>
          </SequentialFadeItem>
          <SequentialFadeItem>
            <p className="text-muted-foreground leading-relaxed">
              {intro}
            </p>
          </SequentialFadeItem>
          <SequentialFadeItem className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-surface border border-border text-foreground hover:border-accent-blue hover:text-accent-blue transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-background"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-surface border border-border text-foreground hover:border-accent-blue hover:text-accent-blue transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-background"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-blue px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-background"
            >
              Get in Touch
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </SequentialFadeItem>
        </SequentialFade>
        </div>
      </div>
    </section>
  );
}
