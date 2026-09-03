import { Reveal } from "@/components/motion/Reveal";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionLabel index="04" label="Experience" />
        <h2 className="mt-6 max-w-xl text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          A track record of shipping.
        </h2>

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent-violet via-accent-violet/30 to-transparent sm:left-[18px]"
          />
          <ol className="space-y-10 pl-12 sm:space-y-12 sm:pl-14">
            {experience.map((entry, i) => (
              <li key={entry.id} className="relative">
                <span className="absolute -left-12 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-accent-violet/50 bg-bg font-mono text-[10px] text-accent-violet sm:-left-14 sm:h-9 sm:w-9">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Reveal delay={i * 100}>
                  <ExperienceCard entry={entry} />
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
