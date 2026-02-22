/**
 * Skill icon slugs from cdn.simpleicons.org (lowercase, hyphens).
 * Leave empty for generic icon (use genericIcon for Security etc.).
 */
export interface SkillItem {
  name: string;
  iconSlug?: string;
  /** Direct URL for icons not on Simple Icons (e.g. AWS from devicons) */
  iconUrl?: string;
  /** When no iconSlug/iconUrl, use this Lucide-style icon */
  genericIcon?: "shield" | "settings" | "lock" | "key" | "chart" | "flask" | "box" | "cloud";
  /** When icon fails to load, show this instead */
  fallbackGenericIcon?: "shield" | "settings" | "lock" | "key" | "chart" | "flask" | "box" | "cloud";
}

export interface SkillCategory {
  id: string;
  title: string;
  categoryIcon: "code" | "server" | "layout" | "database" | "cloud" | "shield" | "brain";
  items: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    categoryIcon: "brain",
    items: [
      { name: "TypeScript", iconSlug: "typescript" },
      { name: "JavaScript", iconSlug: "javascript" },
      { name: "Python", iconSlug: "python" },
      { name: "Java", iconSlug: "openjdk" },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    categoryIcon: "server",
    items: [
      { name: "Node.js", iconSlug: "nodedotjs" },
      { name: "NestJS", iconSlug: "nestjs" },
      { name: "Express", iconSlug: "express" },
      { name: "REST API design", genericIcon: "box" },
      { name: "Authentication (JWT, session-based)", genericIcon: "key" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    categoryIcon: "layout",
    items: [
      { name: "React", iconSlug: "react" },
      { name: "Next.js", iconSlug: "nextdotjs" },
      { name: "React Native", iconSlug: "react" },
      { name: "Tailwind CSS", iconSlug: "tailwindcss" },
    ],
  },
  {
    id: "databases",
    title: "Databases & Storage",
    categoryIcon: "database",
    items: [
      { name: "PostgreSQL", iconSlug: "postgresql" },
      { name: "MySQL", iconSlug: "mysql" },
      { name: "MongoDB", iconSlug: "mongodb" },
      { name: "Redis", iconSlug: "redis" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    categoryIcon: "cloud",
    items: [
      { name: "AWS (ECS Fargate, ALB, ECR, Route 53, ACM)", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", fallbackGenericIcon: "cloud" },
      { name: "Docker (multi-stage builds)", iconSlug: "docker" },
      { name: "CI/CD (GitHub Actions)", iconSlug: "githubactions" },
      { name: "HTTPS/TLS configuration", genericIcon: "lock" },
    ],
  },
  {
    id: "security",
    title: "Security",
    categoryIcon: "shield",
    items: [
      { name: "Server-side encryption (AES-256-GCM)", genericIcon: "shield" },
      { name: "Environment configuration", genericIcon: "settings" },
      { name: "Secure API design", genericIcon: "lock" },
    ],
  },
  {
    id: "ml",
    title: "Machine Learning",
    categoryIcon: "brain",
    items: [
      { name: "Scikit-learn", iconSlug: "scikitlearn" },
      { name: "XGBoost", genericIcon: "flask" },
      { name: "Pandas", iconSlug: "pandas" },
      { name: "NumPy", iconSlug: "numpy" },
      { name: "Model evaluation & experimentation", genericIcon: "chart" },
    ],
  },
];
