import { profile } from "@/content/profile";

// Stub sections give the nav real anchors to scroll to. Each one is
// replaced with its real section component in a later build phase.
const stubSections = [
  { id: "about", label: "01 — ABOUT" },
  { id: "expertise", label: "02 — EXPERTISE" },
  { id: "work", label: "03 — SELECTED WORK" },
  { id: "experience", label: "04 — EXPERIENCE" },
  { id: "contact", label: "07 — CONTACT" },
];

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-secondary">
          {profile.roles.join(" · ")}
        </p>
        <h1 className="text-5xl font-bold tracking-tight text-text-primary sm:text-7xl">
          Zaira Shahid<span className="text-accent-violet">.</span>
        </h1>
        <p className="max-w-xl text-balance text-base text-text-secondary sm:text-lg">
          {profile.tagline}
        </p>
      </section>

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
