import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/ui/HeroVisual";
import { StatCard } from "@/components/ui/StatCard";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

// Derived from real content data so these numbers can never drift or be invented.
const earliestYear = Math.min(...experience.map((entry) => Number.parseInt(entry.start, 10)));

const stats = [
  { value: `Since ${earliestYear}`, label: "Professional Experience" },
  { value: `${projects.length}`, label: "Projects & Systems" },
  { value: "AI + Full-Stack", label: "Engineering Focus" },
  { value: profile.availability.open ? "Open" : "Closed", label: profile.availability.label },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-20 pt-36 sm:pt-40 md:pb-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 md:grid-cols-2 md:items-center md:gap-16">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <span className="inline-flex items-center gap-2 rounded-badge border border-border bg-surface/70 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-text-secondary">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  profile.availability.open ? "bg-status-open" : "bg-text-secondary"
                }`}
                aria-hidden="true"
              />
              {profile.availability.label}
            </span>

            <p className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-text-secondary">
              Zaira Shahid
            </p>

            <h1 className="mt-3 text-4xl font-bold leading-[1.1] tracking-tight text-text-primary sm:text-5xl md:text-6xl">
              Building intelligent digital experiences.
            </h1>

            <p className="mt-5 max-w-md text-balance font-mono text-xs uppercase tracking-[0.15em] text-text-secondary sm:text-sm">
              {profile.roles.join(" · ")}
            </p>

            <p className="mt-6 max-w-lg text-balance text-base text-text-secondary sm:text-lg">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <Button href="#work" variant="primary">
                View My Work
              </Button>
              <Button href="#contact" variant="secondary" arrow={false}>
                Get In Touch
              </Button>
              {profile.resume.available && (
                <Button href={profile.resume.href} variant="secondary">
                  Download Resume
                </Button>
              )}
            </div>
          </div>

          <HeroVisual />
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 md:mt-24">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
