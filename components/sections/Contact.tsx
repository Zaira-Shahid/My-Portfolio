import { Mail } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/ui/ContactForm";
import { GithubMark, LinkedinMark } from "@/components/ui/icons";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { profile } from "@/content/profile";
import { publicFileExists } from "@/lib/publicFileExists";

export function Contact() {
  const resumeAvailable = publicFileExists(profile.resume.href);

  return (
    <section id="contact" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionLabel index="07" label="Contact" />
        <h2 className="mt-6 max-w-xl text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
          Let&apos;s build something meaningful.
        </h2>
        <p className="mt-4 max-w-xl text-balance text-text-secondary sm:text-lg">
          Open to exciting frontend, AI automation and product engineering opportunities.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={`mailto:${profile.email}`} variant="primary" arrow={false}>
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email Me
          </Button>
          <Button
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            arrow={false}
          >
            <LinkedinMark className="h-4 w-4" />
            LinkedIn
          </Button>
          <Button
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            arrow={false}
          >
            <GithubMark className="h-4 w-4" />
            GitHub
          </Button>
          {resumeAvailable && (
            <Button href={profile.resume.href} variant="secondary">
              Download Resume
            </Button>
          )}
        </div>

        <Reveal className="mt-14 rounded-card-lg border border-border bg-surface/50 p-6 sm:p-8">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
