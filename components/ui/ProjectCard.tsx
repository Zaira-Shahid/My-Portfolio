import { ArrowUpRight, Lock } from "lucide-react";
import type { Project } from "@/content/projects";
import { GithubMark } from "./icons";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({
  project,
  index,
  compact = false,
}: {
  project: Project;
  index: number;
  compact?: boolean;
}) {
  const number = String(index + 1).padStart(2, "0");
  const isLinkable = Boolean(project.githubUrl);

  const card = (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-card-lg border border-border bg-surface/50 transition-all duration-300 ${
        isLinkable
          ? "hover:-translate-y-1 hover:border-accent-violet/30 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]"
          : "opacity-90"
      }`}
    >
      <div
        className={`relative overflow-hidden border-b border-border transition-transform duration-500 ${
          isLinkable ? "group-hover:scale-[1.03]" : ""
        } ${compact ? "h-40" : "h-56 sm:h-64"}`}
      >
        <ProjectVisual pattern={project.visualPattern} />
        <span className="absolute left-4 top-4 font-mono text-xs text-text-secondary">
          {number}
        </span>
        {project.codeAccess === "private" && (
          <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-badge border border-border bg-bg/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-text-secondary backdrop-blur-sm">
            <Lock className="h-3 w-3" aria-hidden="true" />
            Code Private
          </span>
        )}
      </div>

      <div className={`flex flex-1 flex-col ${compact ? "p-5" : "p-6 sm:p-7"}`}>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-violet">
          {project.category}
        </p>
        <h3
          className={`mt-2 font-semibold text-text-primary ${compact ? "text-lg" : "text-xl sm:text-2xl"}`}
        >
          {project.title}
          {project.year && (
            <span className="ml-2 text-sm font-normal text-text-secondary">{project.year}</span>
          )}
        </h3>
        <p className={`mt-3 text-text-secondary ${compact ? "text-sm" : "text-sm sm:text-base"}`}>
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-badge border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-text-secondary"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-2 text-sm font-medium">
          {isLinkable ? (
            <span className="inline-flex items-center gap-1.5 text-text-primary">
              <GithubMark className="h-4 w-4" aria-hidden="true" />
              View Code
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          ) : (
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-text-secondary">
              Details on request
            </span>
          )}
        </div>
      </div>
    </article>
  );

  if (!isLinkable) {
    return card;
  }

  return (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${project.title} on GitHub`}
      className="block h-full rounded-card-lg focus-visible:outline-2 focus-visible:outline-accent-violet focus-visible:outline-offset-2"
    >
      {card}
    </a>
  );
}
