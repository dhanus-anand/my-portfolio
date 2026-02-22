export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  tags: string[];
  metrics: { value: string; label: string }[];
  highlight: string;
  links: ProjectLink[];
  image?: string;
  bentoSize: "large" | "medium";
  /** URL for the whole card to link to (e.g. GitHub repo). */
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "multi-tenant-internal-tool",
    title: "Multi-Tenant Internal Tool Platform",
    description:
      "Multi-tenant schema-to-API platform with strict RBAC, dynamic schema generation, and background job orchestration. Designed with horizontal scaling and isolation strategies in mind.",
    longDescription:
      "Built a production internal tooling platform that allows teams to define data schemas and get instant REST APIs with authentication, authorization, and audit logging. Implements dynamic schema-to-API generation, role-based access control, and full multi-tenancy with tenant isolation.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Redis"],
    tags: ["Full-Stack", "Backend", "Cloud"],
    metrics: [
      { value: "Multi-tenant", label: "architecture" },
      { value: "RBAC", label: "enforcement" },
      { value: "Dynamic schema", label: "engine" },
    ],
    highlight: "Dynamic schema-to-API generation, RBAC, multi-tenancy",
    links: [{ label: "GitHub", href: "https://github.com/dhanus-anand/internal-tool-platform" }],
    bentoSize: "medium",
    githubUrl: "https://github.com/dhanus-anand/internal-tool-platform",
  },
  {
    slug: "distributed-job-queue",
    title: "Distributed Job Queue System",
    description:
      "Fault-tolerant distributed job queue with idempotent processing, retry backoff, and offset tracking. Designed to support exactly-once semantics and horizontal worker scaling.",
    longDescription:
      "Designed and implemented a distributed job queue in Go with Redis and PostgreSQL. Features idempotent processing, fault tolerance, dead-letter handling, and Prometheus metrics.",
    tech: ["Go", "Redis", "PostgreSQL", "Prometheus"],
    tags: ["Backend", "Distributed Systems", "Infrastructure"],
    metrics: [
      { value: "Idempotent", label: "workers" },
      { value: "Retry + DLQ", label: "" },
      { value: "Worker horizontal", label: "scaling" },
    ],
    highlight: "Idempotent processing, fault tolerance, horizontal scaling",
    links: [{ label: "GitHub", href: "https://github.com/dhanus-anand/distributed-job-queue" }],
    bentoSize: "medium",
    githubUrl: "https://github.com/dhanus-anand/distributed-job-queue",
  },
  {
    slug: "fraud-detection-ml",
    title: "Fraud Detection ML System",
    description:
      "Cost-sensitive fraud detection system with model evaluation pipeline, A/B testing framework, and drift monitoring.",
    longDescription:
      "Production ML system for fraud detection using XGBoost, FastAPI, and MLflow. Implements cost-sensitive learning, A/B testing framework, and drift detection. SHAP-based explainability.",
    tech: ["Python", "XGBoost", "FastAPI", "MLflow", "SHAP"],
    tags: ["ML Engineering", "Data", "Production AI"],
    metrics: [
      { value: "Experiment", label: "tracking" },
      { value: "Drift", label: "detection" },
      { value: "Cost-aware", label: "optimization" },
    ],
    highlight: "Cost-sensitive learning, A/B testing, drift detection",
    links: [{ label: "GitHub", href: "https://github.com/dhanus-anand/fraud-detection-ml" }],
    bentoSize: "medium",
    githubUrl: "https://github.com/dhanus-anand/fraud-detection-ml",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
