import Image from "next/image";

type CredentialCardProps = {
  degree: string;
  institution: string;
  location: string;
  cgpa: string;
  logo: string;
  logoAvailable: boolean;
};

export function CredentialCard({
  degree,
  institution,
  location,
  cgpa,
  logo,
  logoAvailable,
}: CredentialCardProps) {
  return (
    <div className="rounded-card border border-border bg-surface/60 p-6 transition-colors duration-300 hover:border-accent-violet/30">
      <div className="flex items-start gap-4">
        {logoAvailable ? (
          <Image
            src={logo}
            alt={`${institution} logo`}
            width={48}
            height={48}
            className="h-12 w-12 shrink-0 rounded-full object-contain"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent-violet/30 bg-bg-secondary font-mono text-xs font-semibold tracking-wide text-accent-violet"
          >
            NUML
          </div>
        )}

        <div>
          <p className="text-sm font-semibold text-text-primary">{degree}</p>
          <p className="mt-1 text-sm text-text-secondary">{institution}</p>
          <p className="mt-0.5 text-xs text-text-secondary">{location}</p>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-text-secondary">
            CGPA {cgpa}
          </p>
        </div>
      </div>
    </div>
  );
}
