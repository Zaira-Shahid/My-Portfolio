export type NavIcon = "home" | "user" | "briefcase" | "clock" | "mail";

export const desktopNavLinks = [
  { id: "about", label: "About", href: "#about" },
  { id: "expertise", label: "Expertise", href: "#expertise" },
  { id: "work", label: "Work", href: "#work" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "contact", label: "Contact", href: "#contact" },
] as const;

export const mobileNavLinks = [
  { id: "home", label: "Home", href: "#home", icon: "home" as NavIcon },
  { id: "about", label: "About", href: "#about", icon: "user" as NavIcon },
  { id: "work", label: "Work", href: "#work", icon: "briefcase" as NavIcon },
  { id: "experience", label: "Experience", href: "#experience", icon: "clock" as NavIcon },
  { id: "contact", label: "Contact", href: "#contact", icon: "mail" as NavIcon },
] as const;

// Precomputed, stable id arrays for the active-section observer hook.
export const desktopNavIds = desktopNavLinks.map((link) => link.id);
export const mobileNavIds = mobileNavLinks.map((link) => link.id);
