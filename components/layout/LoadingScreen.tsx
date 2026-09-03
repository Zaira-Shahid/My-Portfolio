"use client";

import { useEffect, useState } from "react";

const DURATION_MS = 1300;

export function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduced ? 250 : DURATION_MS;
    const exitDelay = reduced ? 0 : duration - 400;

    const exitTimer = setTimeout(() => setExiting(true), exitDelay);
    const finishTimer = setTimeout(onFinish, duration);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-bg transition-opacity duration-400 ${
        exiting ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <p className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
        Zaira<span className="text-accent-violet">.</span>
      </p>
      <div className="h-px w-40 overflow-hidden bg-border">
        <div className="h-full w-full origin-left animate-loading-bar bg-gradient-to-r from-accent-violet via-accent-blue to-accent-violet" />
      </div>
    </div>
  );
}
