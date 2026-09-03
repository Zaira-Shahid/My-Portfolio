type ExpertiseCardProps = {
  number: string;
  title: string;
  description: string;
  chips: readonly string[];
};

export function ExpertiseCard({ number, title, description, chips }: ExpertiseCardProps) {
  return (
    <div className="group rounded-card border border-border bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-violet/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)] sm:p-7">
      <p className="font-mono text-xs text-accent-violet">{number}</p>
      <h3 className="mt-3 text-lg font-semibold text-text-primary">{title}</h3>
      <p className="mt-2 text-sm text-text-secondary">{description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {chips.map((chip) => (
          <li
            key={chip}
            className="rounded-badge border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-text-secondary"
          >
            {chip}
          </li>
        ))}
      </ul>
    </div>
  );
}
