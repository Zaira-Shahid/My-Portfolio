"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { useActiveSection } from "@/lib/useActiveSection";
import { desktopNavIds, desktopNavLinks } from "./nav-links";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(desktopNavIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 hidden transition-colors duration-300 md:block ${
        scrolled
          ? "border-b border-border bg-bg/70 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-8 py-4"
      >
        <a href="#home" className="font-mono text-sm tracking-tight text-text-primary">
          zaira shahid<span className="text-accent-violet">.</span>
        </a>

        <ul className="flex items-center gap-8">
          {desktopNavLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                aria-current={active === link.id ? "true" : undefined}
                className={`text-sm transition-colors duration-200 ${
                  active === link.id
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button
          href="#contact"
          variant="primary"
          arrow={false}
          className="px-5 py-2.5 text-xs uppercase tracking-wide"
        >
          Let&apos;s Talk
        </Button>
      </nav>
    </header>
  );
}
