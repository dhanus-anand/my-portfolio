"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { skillCategories } from "@/content/skills";
import type { SkillItem } from "@/content/skills";
import {
  Box,
  Shield,
  Settings,
  Lock,
  Key,
  BarChart3,
  FlaskConical,
  Cloud,
} from "lucide-react";

const SIMPLE_ICONS_CDN = "https://cdn.simpleicons.org";

const GENERIC_ICONS = {
  shield: Shield,
  settings: Settings,
  lock: Lock,
  key: Key,
  chart: BarChart3,
  flask: FlaskConical,
  box: Box,
  cloud: Cloud,
} as const;

function SkillLogo({ item }: { item: SkillItem }) {
  const [imgFailed, setImgFailed] = useState(false);
  const logoSrc = item.iconUrl ?? (item.iconSlug ? `${SIMPLE_ICONS_CDN}/${item.iconSlug}` : null);

  if (item.genericIcon) {
    const Icon = GENERIC_ICONS[item.genericIcon];
    return (
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white text-zinc-600">
        <Icon className="h-4 w-4" />
      </span>
    );
  }
  if (imgFailed || !logoSrc) {
    const icon = item.fallbackGenericIcon ?? "box";
    const Icon = GENERIC_ICONS[icon];
    return (
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white text-zinc-600">
        <Icon className="h-4 w-4" />
      </span>
    );
  }
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white p-1">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoSrc}
        alt=""
        width={24}
        height={24}
        className="h-5 w-5 object-contain drop-shadow-[0_0_1px_rgba(0,0,0,0.12)]"
        onError={() => setImgFailed(true)}
      />
    </span>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto w-full max-w-content">
        <FadeIn>
          <SectionHeading
            id="skills-heading"
            title="Skills & Technologies"
            subtitle="My technical arsenal for building modern applications."
          />
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skillCategories.map((cat, i) => (
            <FadeIn key={cat.id} delay={0.05 + i * 0.03}>
              <Card
                hover={false}
                className="p-5 h-full flex flex-col border-white/15 bg-zinc-800/70 backdrop-blur-sm"
              >
                <h3 className="font-bold text-foreground text-sm sm:text-base mb-4">
                  {cat.title}
                </h3>
                <ul className="space-y-2.5 flex-1">
                  {cat.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center gap-2.5 text-sm text-muted-foreground"
                    >
                      <SkillLogo item={item} />
                      <span className="text-foreground/90">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
