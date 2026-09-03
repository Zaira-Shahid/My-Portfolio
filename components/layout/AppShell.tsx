"use client";

import { useState, type ReactNode } from "react";
import { LoadingScreen } from "./LoadingScreen";
import { MobileNav } from "./MobileNav";
import { Navbar } from "./Navbar";

export function AppShell({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      <Navbar />
      <main
        className={`flex-1 pb-24 transition-opacity duration-500 md:pb-0 ${
          loading ? "opacity-0" : "animate-fade-in opacity-100"
        }`}
      >
        {children}
      </main>
      <MobileNav />
    </>
  );
}
