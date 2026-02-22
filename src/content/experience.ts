export interface ExperienceEntry {
  company: string;
  role: string;
  dates: string;
  achievements: string[];
  logo?: string;
}

export const experience: ExperienceEntry[] = [
  {
    company: "Parla Dynamics Inc.",
    role: "Software Engineering Intern – Full Stack & DevOps",
    dates: "July 2025 – Present",
    achievements: [
      "Built and maintained full-stack production applications using Next.js for web and React Native for mobile platforms.",
      "Designed and integrated backend APIs supporting authentication, business workflows, and data persistence.",
      "Led deployment and infrastructure setup on AWS, including ECS Fargate, ALB, ECR, Route 53, and HTTPS configuration.",
      "Standardized Docker build pipelines using multi-stage and multi-architecture builds to resolve cross-platform deployment issues.",
      "Contributed to architectural discussions around encryption, deployment workflows, and production reliability.",
      "Owned release coordination and environment consistency across development and production systems.",
    ],
  },
  {
    company: "Zoho Corporation",
    role: "Member Technical Staff – Software Developer",
    dates: "May 2022 – Mar 2024",
    achievements: [
      "Implemented customized enterprise CRM solutions for 5+ clients across industries, improving operational efficiency by up to 30%.",
      "Spearheaded development of a Configure Price Quote (CPQ) solution that digitized field operations and reduced manual effort significantly.",
      "Built high-performance frontend components using React and Vue, optimizing dashboard rendering and reducing load times.",
      "Collaborated with cross-functional teams to deliver scalable, client-specific workflows and reporting solutions.",
      "Mentored junior engineers and improved onboarding ramp-up efficiency.",
    ],
  },
  {
    company: "Zoho Corporation",
    role: "Project Trainee",
    dates: "Jan 2022 – May 2022",
    achievements: [
      "Developed CRM-based business use cases using Zoho Deluge and front-end components in React and Vue.",
      "Gained hands-on experience in Java, Python, SQL, and enterprise application customization.",
    ],
  },
];
