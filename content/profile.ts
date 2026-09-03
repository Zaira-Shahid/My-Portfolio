export const profile = {
  name: "Zaira Shahid",
  firstName: "Zaira",
  lastName: "Shahid",

  // Combined role line used in hero / SEO. Individual roles kept separate
  // so components can stack them on mobile if needed.
  roles: ["AI Automation Engineer", "Full-Stack Developer", "GTM Engineer"],
  title: "AI Automation Engineer & Full-Stack Developer",

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

  // Add the actual PDF to public/resume/ before enabling download links.
  resume: {
    href: "/resume/Zaira-Shahid-Resume.pdf",
    // Set to true once the PDF file has been added to public/resume/.
    available: false,
  },

  siteUrl: "https://zairashahid.dev", // TODO: replace with the deployed production URL
} as const;

export const education = [
  {
    id: "numl",
    degree: "BS Software Engineering",
    institution: "National University of Modern Languages (NUML)",
    location: "Faisalabad, Pakistan",
    cgpa: "3.7",
    // Add the provided NUML logo file to public/images/numl-logo.png to enable.
    logo: "/images/numl-logo.png",
  },
] as const;
