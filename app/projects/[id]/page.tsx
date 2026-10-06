import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Play } from "lucide-react";
import { GithubMark } from "@/components/ui/icons";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/content/projects";

const detailProjects = projects.filter((project) => project.detailPath);

export function generateStaticParams() {
  return detailProjects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[id]">): Promise<Metadata> {
  const { id } = await params;
  const project = detailProjects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline ?? project.description,
    alternates: { canonical: project.detailPath },
  };
}

export default async function ProjectDetail({ params }: PageProps<"/projects/[id]">) {
  const { id } = await params;
  const project = detailProjects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <article id="home" className="px-6 pb-20 pt-28 md:pb-28 md:pt-32">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to work
        </Link>

        <div className="mt-8">
          <SectionLabel index="Featured" label={project.category} />
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            {project.title}
          </h1>
          {project.tagline && (
            <p className="mt-4 max-w-2xl text-lg text-text-secondary">{project.tagline}</p>
          )}
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-button bg-text-primary px-5 py-2.5 text-bg transition-transform duration-300 hover:scale-[1.03]"
              >
                <Play className="h-4 w-4" aria-hidden="true" />
                Demo Video
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-button border border-border px-5 py-2.5 text-text-primary transition-colors duration-300 hover:border-accent-violet/50"
              >
                <GithubMark className="h-4 w-4" aria-hidden="true" />
                Code
              </a>
            )}
          </div>
        </div>

        {project.coverImage && (
          <Image
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            width={project.coverImage.width}
            height={project.coverImage.height}
            sizes="(min-width: 1024px) 1024px, 100vw"
            priority
            className="mt-10 w-full rounded-card-lg border border-border"
          />
        )}

        <div className="mt-12 grid gap-10 md:grid-cols-[3fr_2fr]">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent-violet">
              About
            </h2>
            <p className="mt-3 text-text-secondary sm:text-lg">{project.description}</p>

            {project.statusNote && (
              <div className="mt-8 rounded-card border border-border bg-surface/50 p-5">
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent-violet">
                  Status
                </h2>
                <p className="mt-2 text-text-primary">{project.statusNote}</p>
              </div>
            )}
          </div>

          <div>
            {project.facts && (
              <>
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent-violet">
                  By the numbers
                </h2>
                <ul className="mt-3 space-y-3 text-sm text-text-secondary">
                  {project.facts.map((fact) => (
                    <li key={fact} className="border-l border-border pl-4">
                      {fact}
                    </li>
                  ))}
                </ul>
              </>
            )}
            <h2 className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-accent-violet">
              Tech stack
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-badge border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-text-secondary"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {project.gallery && (
          <section className="mt-16" aria-labelledby="gallery-heading">
            <h2
              id="gallery-heading"
              className="font-mono text-xs uppercase tracking-[0.2em] text-accent-violet"
            >
              Screenshots
            </h2>
            <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((img) => (
                <li key={img.src}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 100vw"
                    loading="lazy"
                    className="h-full w-full rounded-card border border-border object-cover object-top"
                  />
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  );
}
