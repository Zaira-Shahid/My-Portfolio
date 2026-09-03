import { Mail } from "lucide-react";
import { GithubMark, LinkedinMark } from "@/components/ui/icons";
import { profile } from "@/content/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div>
          <p className="text-sm text-text-secondary">© {year} Zaira Shahid</p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-text-secondary">
            AI Automation · Full-Stack · GTM Engineering
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-secondary transition-colors duration-200 hover:text-text-primary"
          >
            <GithubMark className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-secondary transition-colors duration-200 hover:text-text-primary"
          >
            <LinkedinMark className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-text-secondary transition-colors duration-200 hover:text-text-primary"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-text-secondary">
        Built with intention.
      </p>
    </footer>
  );
}
