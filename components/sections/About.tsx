import Image from "next/image";
import { CredentialCard } from "@/components/ui/CredentialCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { about, education, profile } from "@/content/profile";
import { publicFileExists } from "@/lib/publicFileExists";

export function About() {
  const photoAvailable = publicFileExists(profile.photo.href);
  const credential = education[0];
  const logoAvailable = publicFileExists(credential.logo);

  return (
    <section id="about" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="01" label="About" />

        <div className="mt-6 grid gap-12 md:grid-cols-[1.15fr_1fr] md:gap-16">
          <div>
            <div className="flex items-center gap-5">
              {photoAvailable && (
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-border sm:h-20 sm:w-20">
                  <Image
                    src={profile.photo.href}
                    alt={profile.photo.alt}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
              )}
              <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                {about.heading}
              </h2>
            </div>

            <p className="mt-6 max-w-xl text-balance text-text-secondary">{about.body}</p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {about.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-badge border border-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-text-secondary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-card border border-border bg-surface/60 p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-secondary">
                Current Focus
              </p>
              <ul className="mt-4 space-y-3">
                {about.currentFocus.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span
                      className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-violet"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <CredentialCard
              degree={credential.degree}
              institution={credential.institution}
              location={credential.location}
              cgpa={credential.cgpa}
              logo={credential.logo}
              logoAvailable={logoAvailable}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
