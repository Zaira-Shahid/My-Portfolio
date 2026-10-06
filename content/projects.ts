export type ProjectStatus = "live" | "prototype" | "in-development";
export type CodeAccess = "public" | "private";

export type Project = {
  id: string;
  title: string;
  year?: string;
  category: string;
  description: string;
  capabilities?: string[];
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  status: ProjectStatus;
  codeAccess: CodeAccess;
  featured: boolean;
  // Optional richer fields, used by projects that have a detail page.
  tagline?: string;
  coverImage?: ProjectImage;
  gallery?: ProjectImage[];
  facts?: string[];
  statusNote?: string;
  demoUrl?: string;
  detailPath?: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

// Projects with real, working GitHub links are featured first. Client work
// and prototypes without a public repository are shown with less emphasis
// and clearly marked "Code: Private". No links or metrics are invented.
export const projects: Project[] = [
  {
    id: "ridemesh",
    title: "RideMesh",
    category: "FULL-STACK · AI OPTIMIZATION",
    tagline:
      "AI-assisted carpooling that matches passengers into journeys drivers are already making",
    description:
      "RideMesh asks \"which combination of journeys moves the most people with the fewest vehicle trips?\" instead of \"which car is nearest?\". Drivers declare a journey they are making anyway, passengers set how flexible they are, and a deterministic OR-Tools optimizer builds the plan within everyone's limits. Optimization decides, AI only predicts.",
    facts: [
      "103 of 104 spec modules complete",
      "700+ unit tests and 900+ emulator-backed integration tests, plus Playwright end-to-end tests",
      "Load test: 50 simultaneous route estimates all served after redesigning the rate limiter",
      "Three apps: passenger app, driver app, admin operations dashboard",
    ],
    statusNote:
      "Built and tested locally, not deployed. Payments in Stripe test mode, AI predictions are a prototype on synthetic data.",
    technologies: [
      "React Native (Expo)",
      "Next.js",
      "TypeScript",
      "Firebase (Auth, Firestore, Cloud Functions)",
      "Python",
      "FastAPI",
      "OR-Tools",
      "scikit-learn",
      "Stripe (test mode)",
      "Vitest",
      "Playwright",
    ],
    coverImage: {
      src: "/images/ridemesh/admin-live-network.png",
      alt: "RideMesh admin operations dashboard showing the live network map with vehicles, pickups and drop-offs across London",
      width: 2400,
      height: 1350,
    },
    gallery: [
      {
        src: "/images/ridemesh/passenger-request.png",
        alt: "RideMesh passenger app, ride request screen",
        width: 780,
        height: 1688,
      },
      {
        src: "/images/ridemesh/passenger-matched.png",
        alt: "RideMesh passenger app showing a matched driver, pickup point and estimated trip",
        width: 780,
        height: 1688,
      },
      {
        src: "/images/ridemesh/driver-home.png",
        alt: "RideMesh driver app home screen",
        width: 780,
        height: 1688,
      },
      {
        src: "/images/ridemesh/admin-analytics.png",
        alt: "RideMesh admin analytics dashboard",
        width: 2400,
        height: 1350,
      },
      {
        src: "/images/ridemesh/admin-ai-predictions.png",
        alt: "RideMesh admin AI predictions dashboard",
        width: 2400,
        height: 1350,
      },
    ],
    demoUrl:
      "https://drive.google.com/file/d/1_POR2tvfeJmfzYp9Sj5V-JyJvZoe10JJ/view?usp=sharing",
    githubUrl: "https://github.com/Zaira-Shahid/AI-Ride-Sharing-Transportation-Optimization-Platform",
    detailPath: "/projects/ridemesh",
    status: "prototype",
    codeAccess: "public",
    featured: true,
  },
  {
    id: "gold-trading-bot",
    title: "Gold Trading Bot",
    year: "2026",
    category: "AI · FINTECH · AUTOMATION",
    description:
      "A gold paper-trading simulation with a real-time dashboard, using n8n and the Telegram API to deliver automated trade alerts.",
    capabilities: [
      "Gold paper-trading simulation",
      "Real-time dashboard",
      "n8n-driven trade alerts",
      "Telegram bot integration",
    ],
    technologies: ["Next.js", "Firebase", "n8n", "Vercel", "Telegram API"],
    githubUrl: "https://github.com/Zaira-Shahid/gold-bot",
    status: "prototype",
    codeAccess: "public",
    featured: true,
  },
  {
    id: "ai-social-media-automation",
    title: "AI Social Media Automation",
    category: "AI AUTOMATION · AGENTS",
    description:
      "An AI-powered social media workflow that researches relevant AI news, generates platform-specific content, and manages a human approval step before scheduling.",
    capabilities: [
      "AI news research",
      "Story shortlisting",
      "Human-in-the-loop approval",
      "Platform-specific content generation",
    ],
    technologies: ["LLM APIs", "n8n", "Automation Workflows"],
    githubUrl: "https://github.com/Zaira-Shahid/AI-Social-Media-Automation-System",
    status: "in-development",
    codeAccess: "public",
    featured: true,
  },
  {
    id: "luxury-couture",
    title: "Luxury Couture",
    category: "AI E-COMMERCE · FULL-STACK",
    description:
      "A premium custom lehenga platform built around a luxury customer journey — from design selection and measurements to consultation, order management, and delivery tracking.",
    capabilities: [
      "Custom lehenga builder",
      "Fabric, embroidery and colour selection",
      "Measurement & consultation workflow",
      "Order management",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    githubUrl: "https://github.com/Zaira-Shahid/luxury-couture",
    status: "in-development",
    codeAccess: "public",
    featured: true,
  },
  {
    id: "heraid",
    title: "HerAid",
    category: "MOBILE · NLP · AI",
    description:
      "A multilingual menstrual health and support application concept, focused on accessible digital assistance through a localized, safety-aware experience.",
    technologies: ["Flutter", "Dart", "NLP", "Localization"],
    githubUrl: "https://github.com/Zaira-Shahid/Menstrual-support-system",
    status: "in-development",
    codeAccess: "public",
    featured: false,
  },
  {
    id: "drowsiness-detection",
    title: "Driver Drowsiness Detection System",
    year: "2026",
    category: "COMPUTER VISION · DESKTOP",
    description:
      "A webcam-based eye-tracking system that estimates blink rate to detect driver drowsiness in real time, achieving 95%+ detection accuracy and packaged as a standalone .exe.",
    capabilities: [
      "Real-time webcam eye-tracking",
      "Blink-rate alarm algorithm",
      "95%+ detection accuracy",
      "Standalone .exe packaging",
    ],
    technologies: ["Python", "OpenCV", "Tkinter", "PyInstaller"],
    githubUrl: "https://github.com/Zaira-Shahid/drowsiness-detector-",
    status: "prototype",
    codeAccess: "public",
    featured: false,
  },
  {
    id: "sentinel-llm",
    title: "Sentinel-LLM",
    category: "AI · LLM",
    description: "See the repository for full project details.",
    technologies: ["LLM APIs"],
    githubUrl: "https://github.com/Zaira-Shahid/Sentinel-LLM",
    status: "in-development",
    codeAccess: "public",
    featured: false,
  },
  {
    id: "novabot",
    title: "NovaBot",
    category: "AI · AUTOMATION",
    description: "See the repository for full project details.",
    technologies: ["LLM APIs"],
    githubUrl: "https://github.com/Zaira-Shahid/NovaBot",
    status: "in-development",
    codeAccess: "public",
    featured: false,
  },
  {
    id: "fraud-detection",
    title: "Credit Card Fraud Detection System",
    year: "2026",
    category: "AI · FINTECH · SECURITY",
    description:
      "A fraud detection system using a Random Forest model trained on 50,800 transactions with SMOTE class balancing, reaching 100% accuracy on the evaluated dataset, with OTP-based MFA via Twilio Verify and a real-time dashboard.",
    capabilities: [
      "Random Forest classification with SMOTE",
      "100% accuracy on 50,800 transactions",
      "OTP-based MFA via Twilio Verify",
      "Real-time dashboard",
    ],
    technologies: ["Python", "Scikit-learn", "FastAPI", "Docker", "Railway", "Vercel", "Twilio"],
    status: "prototype",
    codeAccess: "private",
    featured: false,
  },
  {
    id: "spam-classifier",
    title: "Spam Email Classifier",
    year: "2025",
    category: "AI · NLP",
    description:
      "A Multinomial Naive Bayes spam classifier trained on the Kaggle SMS Spam dataset (5,572 samples), reaching 97.85% accuracy.",
    capabilities: ["Multinomial Naive Bayes", "97.85% accuracy", "CountVectorizer feature extraction"],
    technologies: ["Python", "Scikit-learn", "NLP", "CountVectorizer"],
    status: "prototype",
    codeAccess: "private",
    featured: false,
  },
  {
    id: "public-safety-vision",
    title: "Public Safety Vision",
    category: "COMPUTER VISION · AI",
    description:
      "A computer-vision prototype designed to analyze sample video footage and detect predefined safety-related events in real time. Presented as a prototype/demo, not a certified real-world safety system.",
    capabilities: [
      "Object & weapon detection",
      "Person-falling detection",
      "Bounding boxes & alert banners",
    ],
    technologies: ["Python", "OpenCV", "YOLO", "MediaPipe"],
    status: "prototype",
    codeAccess: "private",
    featured: false,
  },
];
