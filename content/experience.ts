export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  summary: string[];
  technologies: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "sovanza",
    role: "AI Automation Developer",
    company: "Sovanza",
    location: "Faisalabad, Pakistan",
    start: "2024",
    end: "2026",
    summary: [
      "Developed RAG-based LLM chatbots for 5+ client businesses, cutting manual customer query handling time by an estimated 30%.",
      "Engineered Voice AI automation agents using Vapi for lead qualification and support across multiple production deployments.",
      "Managed Supabase backend (schema design, REST API integration, real-time data) across 3+ client projects.",
      "Applied prompt engineering and LLM integration to cut manual workflow steps by an estimated 40% for clients.",
    ],
    technologies: ["LLM APIs", "RAG", "Vapi", "Supabase", "Prompt Engineering"],
  },
  {
    id: "excellium",
    role: "MERN Stack Engineer",
    company: "Excellium",
    location: "",
    start: "2023",
    end: "2024",
    summary: [
      "Delivered 4+ full-stack web apps (MongoDB, Express.js, React, Node.js) in a 3-5 person team.",
      "Designed and integrated 10+ RESTful API endpoints.",
      "Collaborated on responsive UI, improving page load speed by an estimated 20%.",
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
  },
];
