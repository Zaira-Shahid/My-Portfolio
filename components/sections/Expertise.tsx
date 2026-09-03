import { ExpertiseCard } from "@/components/ui/ExpertiseCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { expertise } from "@/content/skills";

export function Expertise() {
  return (
    <section id="expertise" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="02" label="Expertise" />
        <h2 className="mt-6 max-w-xl text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Four ways I build.
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {expertise.map((item) => (
            <ExpertiseCard
              key={item.id}
              number={item.number}
              title={item.title}
              description={item.description}
              chips={item.chips}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
