import { SectionLabel } from "@/components/ui/SectionLabel";
import { skillGroups } from "@/content/skills";

export function Skills() {
  return (
    <section id="toolkit" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="05" label="Toolkit" />
        <h2 className="mt-6 max-w-xl text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Tools I reach for.
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.id} className="rounded-card border border-border bg-surface/50 p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-secondary">
                {group.label}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-badge border border-border px-2.5 py-1 text-xs text-text-secondary"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
