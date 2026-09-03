"use client";

import { Briefcase, Clock, Home, Mail, User, type LucideIcon } from "lucide-react";
import { useActiveSection } from "@/lib/useActiveSection";
import { mobileNavIds, mobileNavLinks, type NavIcon } from "./nav-links";

const icons: Record<NavIcon, LucideIcon> = {
  home: Home,
  user: User,
  briefcase: Briefcase,
  clock: Clock,
  mail: Mail,
};

export function MobileNav() {
  const active = useActiveSection(mobileNavIds);

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 md:hidden"
      style={{ paddingBottom: "max(env(safe-area-inset-bottom, 0px), 16px)" }}
    >
      <ul className="flex items-center gap-1 rounded-badge border border-border bg-surface/85 px-2 py-2 shadow-[0_0_30px_rgba(169,143,210,0.2)] backdrop-blur-md">
        {mobileNavLinks.map((link) => {
          const Icon = icons[link.icon];
          const isActive = active === link.id;

          return (
            <li key={link.id}>
              <a
                href={link.href}
                aria-label={link.label}
                aria-current={isActive ? "true" : undefined}
                className={`flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-accent-violet/25 text-text-primary shadow-[0_0_16px_rgba(169,143,210,0.5)]"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
