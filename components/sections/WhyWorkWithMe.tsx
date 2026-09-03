import { Code2, Compass, Eye, Sparkles, Zap } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { whyWorkWithMe } from "@/content/process";

const icons = [Code2, Compass, Sparkles, Zap, Eye];

export function WhyWorkWithMe() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-secondary">
          Why Work With Me
        </p>
        <h2 className="mt-6 max-w-xl text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          How I approach the work.
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {whyWorkWithMe.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.id} delay={i * 70}>
                <div className="rounded-card border border-border bg-surface/50 p-6 transition-colors duration-300 hover:border-accent-violet/30">
                  <Icon className="h-5 w-5 text-accent-violet" aria-hidden="true" />
                  <h3 className="mt-4 text-sm font-semibold text-text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
