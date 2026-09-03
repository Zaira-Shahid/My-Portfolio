import { Reveal } from "@/components/motion/Reveal";
import { processSteps } from "@/content/process";

export function Process() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-secondary">
          Process
        </p>
        <h2 className="mt-6 max-w-xl text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          How I work.
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 80}>
              <div className="h-full rounded-card border border-border bg-surface/50 p-5">
                <p className="font-mono text-xs text-accent-violet">{step.number}</p>
                <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.08em] text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs text-text-secondary">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
