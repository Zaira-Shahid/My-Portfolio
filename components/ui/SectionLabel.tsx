export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-secondary">
      {index} — {label}
    </p>
  );
}
