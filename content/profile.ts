export const profile = {
  name: "Zaira Shahid",
  firstName: "Zaira",
  lastName: "Shahid",

  // Combined role line used in hero / SEO. Individual roles kept separate
  // so components can stack them on mobile if needed.
  roles: ["Full-Stack Engineer", "AI Automation Engineer"],
  title: "Full-Stack Engineer & AI Automation Engineer",

  tagline:
    "I build modern interfaces, AI-powered automation systems, and full-stack products that turn complex ideas into practical digital experiences.",

  // Keep this accurate and update as availability changes.
  availability: {
    open: true,
    label: "OPEN TO OPPORTUNITIES",
  },

  location: "Faisalabad, Punjab, Pakistan",

  email: "zairashahid370@gmail.com",
  linkedin: "https://www.linkedin.com/in/zaira-shahid-",
  github: "https://github.com/Zaira-Shahid",

  // The resume/download button appears automatically once this file exists
  // at public/resume/Zaira-Shahid-Resume.pdf (checked via publicFileExists).
  resume: {
    href: "/resume/Zaira-Shahid-Resume.pdf",
  },

  // The headshot renders automatically once this file exists at
  // public/images/zaira-headshot.jpg (checked via publicFileExists).
  photo: {
    href: "/images/zaira-headshot.jpg",
    alt: "Portrait of Zaira Shahid",
  },

  siteUrl: "https://zairashahid.dev", // TODO: replace with the deployed production URL
} as const;

export const about = {
  heading: "Engineering with purpose.",
  body: "I work at the intersection of frontend engineering, AI automation, and product development. I enjoy taking an idea from an early concept to a polished, usable digital product — combining thoughtful interfaces with practical automation and intelligent systems.",
  highlights: [
    "Frontend Engineering",
    "AI Automation",
    "API Integrations",
    "Full-Stack Product Development",
    "Workflow Automation",
    "Product Thinking",
  ],
  currentFocus: [
    "AI-powered applications",
    "Intelligent automation",
    "Modern frontend architecture",
    "Agentic workflows",
    "Production-ready digital products",
  ],
} as const;

export const education = [
  {
    id: "numl",
    degree: "BS Software Engineering",
    institution: "National University of Modern Languages (NUML)",
    location: "Faisalabad, Pakistan",
    cgpa: "3.7",
    // The logo renders automatically once this file exists at
    // public/images/numl-logo.png (checked via publicFileExists); otherwise
    // a text-based credential mark is shown.
    logo: "/images/numl-logo.png",
  },
] as const;
