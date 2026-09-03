import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/content/skills";

export function Services() {
  return (
    <section id="services" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="06" label="What I Build" />
        <h2 className="mt-6 max-w-xl text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Where I add value.
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-card border border-border bg-surface/50 p-6 transition-colors duration-300 hover:border-accent-violet/30"
            >
              <h3 className="text-base font-semibold text-text-primary">{service.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
