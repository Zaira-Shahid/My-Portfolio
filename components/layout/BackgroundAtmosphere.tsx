export function BackgroundAtmosphere() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
      <div className="absolute -top-32 right-[-8%] h-[560px] w-[560px] rounded-full bg-accent-violet/25 blur-[160px]" />
      <div className="absolute top-[35%] left-[-12%] h-[420px] w-[420px] rounded-full bg-[#f3c9a8]/30 blur-[150px]" />
      <div className="absolute bottom-[-18%] right-[8%] h-[460px] w-[460px] rounded-full bg-accent-blue/20 blur-[150px]" />
    </div>
  );
}
