export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-card border border-border bg-surface/60 px-5 py-6 text-center transition-colors duration-300 hover:border-accent-violet/30 sm:text-left">
      <p className="text-lg font-semibold tracking-tight text-text-primary sm:text-xl">{value}</p>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">
        {label}
      </p>
    </div>
  );
}
