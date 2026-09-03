export function BackgroundAtmosphere() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent-violet/20 blur-[140px]" />
      <div className="absolute bottom-[-15%] left-[-10%] h-[480px] w-[480px] rounded-full bg-accent-blue/15 blur-[140px]" />
    </div>
  );
}
