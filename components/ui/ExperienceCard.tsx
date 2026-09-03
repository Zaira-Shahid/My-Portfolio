"use client";

import { useState } from "react";
import type { ExperienceEntry } from "@/content/experience";

export function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-card border border-border bg-surface/50 p-6 sm:p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-semibold text-text-primary sm:text-xl">{entry.role}</h3>
        <span className="font-mono text-xs uppercase tracking-[0.15em] text-text-secondary">
          {entry.start} — {entry.end}
        </span>
      </div>
      <p className="mt-1 text-sm text-text-secondary">
        {entry.company}
        {entry.location && ` · ${entry.location}`}
      </p>

      <ul
        className={`mt-4 space-y-2 text-sm text-text-secondary sm:block ${
          expanded ? "block" : "hidden"
        }`}
      >
        {entry.summary.map((point) => (
          <li key={point} className="flex gap-2">
            <span
              className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-violet"
              aria-hidden="true"
            />
            {point}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded}
        className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-accent-violet sm:hidden"
      >
        {expanded ? "Show less" : "Show details"}
      </button>

      <ul className="mt-5 flex flex-wrap gap-2">
        {entry.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-badge border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-text-secondary"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
