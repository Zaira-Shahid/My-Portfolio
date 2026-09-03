# Zaira Shahid — Portfolio

Personal portfolio for **Zaira Shahid** — AI Automation Engineer, Full-Stack Developer, and GTM Engineer.

Dark, violet/blue-accented, premium-tech design. Built with Next.js (App Router), TypeScript, and Tailwind CSS v4 — no CMS, no backend database, content lives in typed files.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Sections

Loading screen → Hero → About → Expertise → Selected Work (Projects) → Experience → Toolkit → What I Build (Services) → Process → Why Work With Me → Contact → Footer.

## Editing content

All real content lives in `content/` as typed TypeScript objects — edit these, not the components, to update what's on the site:

| File | Controls |
|---|---|
| `content/profile.ts` | Name, roles, tagline, availability, email, LinkedIn, GitHub, resume path, About copy, education |
| `content/projects.ts` | All project cards — title, description, tech, links, GitHub repo, private/public status, visual pattern |
| `content/experience.ts` | Work history timeline |
| `content/skills.ts` | Toolkit groups, Expertise cards, Services grid |
| `content/process.ts` | "How I Work" steps and "Why Work With Me" cards |

### Adding real assets

A few pieces of UI only appear once their file actually exists in `public/` — drop the file in with the exact name below and it activates automatically, no code changes needed:

| Asset | Path | Appears in |
|---|---|---|
| Headshot | `public/images/zaira-headshot.jpg` | About section |
| NUML logo | `public/images/numl-logo.png` | About → credential card |
| Resume PDF | `public/resume/Zaira-Shahid-Resume.pdf` | Hero, Contact |

This is handled by `lib/publicFileExists.ts`, checked server-side in the relevant section components.

### Project visuals

Until real product screenshots are available, project cards render an abstract, on-brand SVG pattern (`components/ui/ProjectVisual.tsx`) keyed to each project's domain instead of a literal mockup. Swap in a real screenshot by adding an `image` field to a project in `content/projects.ts` and rendering it in `ProjectCard.tsx` — search for the `TODO: replace with real product screenshot` comment.

## Project structure

```text
app/                    routes, layout, global styles, metadata, sitemap/robots
components/layout/      navbar, mobile nav, footer, loading screen, app shell
components/sections/    page sections (hero, about, projects, contact, etc.)
components/ui/          reusable UI primitives (button, cards, icons)
components/motion/      scroll-reveal animation wrapper
content/                typed content — see table above
lib/                    small server/client helpers
public/                 images, project media, resume, favicon
docs/PORTFOLIO_SPEC.md  full build specification (source of truth)
```

## Contact form

The contact form validates required fields and email format client-side, then hands the message to the visitor's own email client via a `mailto:` link — no email-sending backend or API key is configured. To wire up real delivery, add a Next.js route handler (e.g. `app/api/contact/route.ts`) backed by an email provider (Resend, Postmark, etc.) and swap the submit handler in `components/ui/ContactForm.tsx`.

## Scripts

```bash
npm run dev     # start dev server
npm run build   # production build
npm run lint    # lint
```

## Deployment

Built for zero-config deployment on [Vercel](https://vercel.com). Before deploying, update `siteUrl` in `content/profile.ts` to the real production domain — it feeds the SEO metadata, sitemap, robots.txt, and structured data.
