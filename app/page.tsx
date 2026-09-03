import { profile } from "@/content/profile";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-secondary">
        {profile.roles.join(" · ")}
      </p>
      <h1 className="text-5xl font-bold tracking-tight text-text-primary sm:text-7xl">
        Zaira Shahid<span className="text-accent-violet">.</span>
      </h1>
      <p className="max-w-xl text-balance text-base text-text-secondary sm:text-lg">
        {profile.tagline}
      </p>
    </main>
  );
}
