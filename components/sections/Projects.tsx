import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/content/projects";

const featuredProjects = projects.filter((project) => project.featured);
const otherProjects = projects.filter((project) => !project.featured);

export function Projects() {
  return (
    <section id="work" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="03" label="Selected Work" />
        <h2 className="mt-6 max-w-xl text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Things I&apos;ve built.
        </h2>
        <p className="mt-4 max-w-xl text-balance text-text-secondary">
          Real projects with real repositories are featured first. Client and private prototype
          work is shown below with less emphasis and clearly marked.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.id} delay={i * 90}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>

        {otherProjects.length > 0 && (
          <Reveal className="mt-16">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
              More Projects
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={featuredProjects.length + i}
                  compact
                />
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
