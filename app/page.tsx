import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { Hero } from "@/components/sections/Hero";

// Stub sections give the nav real anchors to scroll to. Each one is
// replaced with its real section component in a later build phase.
const stubSections = [
  { id: "work", label: "03 — SELECTED WORK" },
  { id: "experience", label: "04 — EXPERIENCE" },
  { id: "contact", label: "07 — CONTACT" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Expertise />

      {stubSections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="flex min-h-[60vh] items-center justify-center border-t border-border px-6"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-secondary">
            {section.label}
          </p>
        </section>
      ))}
    </>
  );
}
