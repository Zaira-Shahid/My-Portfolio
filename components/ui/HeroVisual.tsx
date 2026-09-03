export function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto flex h-[320px] w-full max-w-md items-center justify-center sm:h-[420px]"
    >
      <div className="absolute left-1/2 top-0 h-full w-24 -translate-x-1/2 bg-gradient-to-b from-accent-violet/40 via-accent-blue/10 to-transparent blur-2xl" />

      <div className="absolute h-56 w-56 rounded-full border border-accent-violet/20 sm:h-80 sm:w-80" />
      <div className="absolute h-40 w-40 rounded-full border border-accent-blue/20 sm:h-60 sm:w-60" />
      <div className="absolute h-24 w-24 rounded-full border border-border sm:h-40 sm:w-40" />

      <div className="h-14 w-14 rounded-full bg-accent-violet/70 blur-2xl" />

      <span className="absolute bottom-2 right-2 font-mono text-[10px] uppercase tracking-[0.25em] text-text-secondary">
        AI × Engineering
      </span>
    </div>
  );
}
