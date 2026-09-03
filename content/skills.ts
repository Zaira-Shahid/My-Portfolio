export type SkillGroup = {
  id: string;
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    id: "backend",
    label: "Backend / Data",
    skills: ["Node.js", "Python", "Supabase", "PostgreSQL", "REST APIs"],
  },
  {
    id: "ai-automation",
    label: "AI / Automation",
    skills: [
      "LLM APIs",
      "AI Agents",
      "n8n",
      "MCP",
      "Prompt Engineering",
      "Computer Vision",
      "NLP",
    ],
  },
  {
    id: "gtm",
    label: "GTM Engineering",
    skills: ["CRM APIs", "Lead Enrichment", "Automation Workflows", "Outreach Systems"],
  },
  {
    id: "tools",
    label: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Slack", "Figma"],
  },
];

export const expertise = [
  {
    id: "ai-automation",
    number: "01",
    title: "AI Automation",
    description:
      "Designing practical AI workflows, agents and business automations that reduce repetitive work.",
    chips: ["Python", "n8n", "LLM APIs", "MCP", "APIs"],
  },
  {
    id: "full-stack-development",
    number: "02",
    title: "Full-Stack Engineering",
    description:
      "Connecting frontend products with secure databases, authentication, APIs and backend services.",
    chips: ["Next.js", "Supabase", "PostgreSQL", "REST APIs"],
  },
] as const;

export const services = [
  {
    id: "ai-automation",
    title: "AI Automation",
    description: "Business workflows, AI agents, API integrations and automation.",
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    description: "Modern responsive interfaces and React / Next.js applications.",
  },
  {
    id: "full-stack-products",
    title: "Full-Stack Products",
    description: "End-to-end web products with database, authentication and API integrations.",
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description: "Embedding useful AI capabilities into existing digital products.",
  },
  {
    id: "gtm-automation",
    title: "GTM Automation",
    description:
      "Automated prospecting, outreach and CRM/revenue-ops workflows for go-to-market teams.",
  },
  {
    id: "automation-consulting",
    title: "Automation Consulting",
    description: "Finding repetitive workflows and designing practical automation systems.",
  },
] as const;
