# Zaira Shahid — Premium Personal Portfolio
## Master Build Specification / Single Source of Truth

**Project type:** Personal developer portfolio  
**Owner:** Zaira Shahid  
**Primary name shown on first load:** Zaira Shahid  
**Goal:** Build a premium, memorable, recruiter-focused portfolio that presents Zaira as a modern AI Automation Engineer + Frontend / Full-Stack Developer.

---

# 1. IMPORTANT BUILD RULES

This document is the single source of truth for the portfolio.

The implementation assistant must:

- Build the website from scratch.
- Follow this specification before making design decisions.
- Do not replace the chosen visual direction with a generic portfolio template.
- Do not create a basic Bootstrap-style portfolio.
- Do not use a common light SaaS dashboard aesthetic.
- Do not copy the reference portfolio literally; use it only as visual inspiration.
- Keep the final website original and branded around **Zaira Shahid**.
- Make the website fully responsive.
- Make mobile experience a first-class experience, not a compressed desktop layout.
- Keep animations smooth and premium rather than excessive.
- Make every section feel intentional and production-ready.
- Use realistic portfolio content and clearly mark anything that still needs user input.
- Do not invent employers, clients, achievements, statistics, awards, certifications, or education details.
- Do not use fake testimonials.
- Do not add fake project metrics.
- Do not expose API keys or secrets in frontend code.
- Keep the code clean, modular, typed, accessible, and production-ready.
- After every major module, verify the build and commit the working module to Git.

---

# 2. VISUAL REFERENCE

Three screenshots have been provided as inspiration.

The reference direction contains:

- Deep black background
- Large bold typography
- White primary text
- Muted gray secondary text
- Electric purple / violet glow
- Subtle blue-violet gradients
- Thin borders
- Rounded cards
- Monospace / technical labels
- Minimal navigation
- Strong visual hierarchy
- Animated loading screen
- Large hero typography
- Floating mobile navigation
- Premium dark-tech atmosphere

Use these principles, but create a more sophisticated and original version for Zaira.

The target feeling should be:

> **Premium AI engineer portfolio + futuristic digital studio + high-end product website**

Not:

> ordinary developer resume website.

---

# 3. BRAND POSITIONING

## Primary name

**Zaira Shahid**

## Recommended professional title

**AI Automation Engineer & Frontend Developer**

Alternative supporting positioning:

**Building intelligent automation systems and high-performance digital experiences.**

The portfolio should communicate that Zaira is not only a UI developer.

The visual and content hierarchy should show:

1. Frontend engineering
2. AI automation
3. Full-stack development
4. AI-powered products
5. Real-world systems and integrations

---

# 4. CORE DESIGN SYSTEM

## Background

Primary:

- Near-black
- Example: `#070707`
- Secondary dark surface: `#0D0D0F`
- Card surface: `#111114`

Do not make the website pure flat black everywhere. Use extremely subtle tonal variation.

## Primary text

- Warm white / off-white
- Example: `#F5F5F5`

## Secondary text

- Cool gray
- Example: `#A1A1AA`

## Accent

Primary accent:

- Electric violet
- Example: `#8B5CF6`

Secondary accent:

- Blue-violet
- Example: `#3B82F6`

Use gradients carefully:

`violet → blue → violet`

The accent must feel like light, not painted UI.

## Borders

Use very subtle borders:

- `rgba(255,255,255,0.08)`
- `rgba(139,92,246,0.18)` for selected/hover states

## Typography

Use a modern premium sans-serif for headings.

Suggested:

- Geist
- Inter
- Satoshi
- Manrope

Use a monospace font for technical labels:

- Geist Mono
- JetBrains Mono

Typography must have strong contrast between:

- Huge display headings
- Compact uppercase labels
- readable body copy
- monospace metadata

---

# 5. OVERALL UX

The portfolio should feel like a premium interactive product.

Desired flow:

**Loading → Hero → Proof → About → Expertise → Projects → Experience → Tech Stack → Services → Contact**

Desktop:

- Minimal top navigation
- Optional sticky/floating navigation
- Section indicators
- Smooth scrolling

Mobile:

- Floating bottom navigation inspired by the provided reference
- 5 icons maximum
- Home
- About
- Work
- Experience
- Contact

The mobile bottom navigation must not cover content.

---

# 6. INITIAL LOADING EXPERIENCE

This is extremely important.

When the website opens for the first time, show:

### Center

Large:

**zaira shahid.**

or:

**ZAIRA SHAHID**

Preferred treatment:

- lowercase/uppercase can be tested
- bold white typography
- small violet accent dot

Example visual:

`zaira shahid.`

Under it:

A thin animated violet progress line.

Optional tiny text:

`INITIALIZING EXPERIENCE`

or

`LOADING PORTFOLIO`

The loading screen should last only long enough to create a polished entrance.

Do not make users wait unnecessarily.

Suggested duration:

`900ms – 1600ms`

The loader should:

1. Fade in logo/name
2. Animate progress line
3. Fade/slide out
4. Reveal hero

Respect:

`prefers-reduced-motion`

When reduced motion is enabled, minimize or remove the animation.

---

# 7. HERO SECTION

The hero is the most important section.

It must immediately answer:

- Who is Zaira?
- What does she build?
- Why should a recruiter/client continue scrolling?

## Top status badge

Example:

`● OPEN TO OPPORTUNITIES`

Use a subtle green status dot.

Do not make employment status claims that are not true. Keep this configurable from a single content file.

## Main heading

Use large editorial typography.

Recommended:

**Zaira  
Shahid**

or:

**I build  
intelligent  
digital systems.**

A stronger implementation can combine both:

Small eyebrow:

`ZAIRA SHAHID`

Large heading:

`Building intelligent digital experiences.`

Then professional role:

`AI AUTOMATION ENGINEER · FRONTEND DEVELOPER`

## Hero description

Use concise, high-value positioning.

Suggested copy:

> I build modern interfaces, AI-powered automation systems, and full-stack products that turn complex ideas into practical digital experiences.

This can be refined during implementation but must remain concise.

## CTA buttons

Primary:

**VIEW MY WORK**

Secondary:

**GET IN TOUCH**

Additional:

**DOWNLOAD RESUME**

Buttons should have:

- subtle hover movement
- arrow icon
- magnetic effect on desktop if performance remains good
- strong keyboard focus state

---

# 8. HERO VISUAL

Do not use a generic stock image.

Create a visual identity using:

- glowing vertical light
- animated grid
- abstract orbital lines
- subtle particles
- digital gradient mesh
- soft violet light beam

The visual should remain abstract and professional.

It should suggest:

**AI + engineering + technology**

without looking like a gaming website.

Avoid:

- robot stock images
- random AI brain graphics
- generic coding illustrations
- excessive particles
- distracting 3D objects

---

# 9. HERO PROOF / STATS

Immediately below or beside the hero, create premium metric cards.

Possible cards:

### Experience
`1+`
`YEARS BUILDING`

### Projects
`10+`
`PROJECTS / SYSTEMS`

### Focus
`AI + FRONTEND`
`ENGINEERING`

### Availability
`OPEN`
`FOR SELECTED ROLES`

IMPORTANT:

Only use numerical claims that Zaira confirms.

If exact project count or years are unknown, use non-numeric labels instead of inventing values.

---

# 10. ABOUT SECTION

Label:

`01 — ABOUT`

Heading:

**Engineering with purpose.**

Body should explain Zaira's professional direction.

Suggested content structure:

> I work at the intersection of frontend engineering, AI automation, and product development. I enjoy taking an idea from an early concept to a polished, usable digital product — combining thoughtful interfaces with practical automation and intelligent systems.

Then highlight:

- Frontend engineering
- AI automation
- API integrations
- Full-stack product development
- Workflow automation
- Product thinking

Include a compact "currently focused on" block.

Example:

`CURRENT FOCUS`

- AI-powered applications
- Intelligent automation
- Modern frontend architecture
- Agentic workflows
- Production-ready digital products

---

# 11. EXPERTISE SECTION

Label:

`02 — EXPERTISE`

Create 4 premium cards.

## 01 — Frontend Engineering

Description:

> Building responsive, accessible and polished interfaces with modern React-based architecture.

Technologies:

`React`
`Next.js`
`TypeScript`
`Tailwind CSS`

## 02 — AI Automation

Description:

> Designing practical AI workflows, agents and business automations that reduce repetitive work.

Technologies:

`Python`
`n8n`
`LLM APIs`
`MCP`
`APIs`

## 03 — Full-Stack Development

Description:

> Connecting frontend products with secure databases, authentication, APIs and backend services.

Technologies:

`Next.js`
`Supabase`
`PostgreSQL`
`REST APIs`

## 04 — AI-Powered Products

Description:

> Turning AI capabilities into useful product experiences rather than adding AI as a gimmick.

Examples:

`AI Assistants`
`AI Agents`
`Computer Vision`
`Automation Systems`

---

# 12. FEATURED PROJECTS

Label:

`03 — SELECTED WORK`

This section must be visually impressive.

Use large project cards rather than tiny project thumbnails.

Each project card contains:

- Project number
- Project name
- Short description
- Category
- Technology stack
- Key capability
- Live demo button if available
- GitHub button if available
- Case study button if available
- Large visual preview

Do not fabricate links.

---

# 13. PROJECT 01 — LUXURY LEHENGA E-COMMERCE

Title:

**Luxury Couture**

Category:

`AI E-COMMERCE · FULL-STACK`

Description:

> A premium custom lehenga platform designed around a luxury customer journey — from design selection and measurements to consultation, production coordination, payments and delivery tracking.

Core features:

- Custom lehenga builder
- Fabric selection
- Embroidery selection
- Colour selection
- Measurement workflow
- Appointment / consultation
- WhatsApp integration
- Order management
- Stripe / PayPal integration
- Production workflow
- AI-powered future features

AI roadmap:

- AI Lehenga Designer
- Inspiration Image Analysis
- Virtual Try-On
- 3D Viewer
- AI Measurement Assistant

Suggested stack:

`Next.js`
`TypeScript`
`Tailwind CSS`
`Supabase`
`Stripe`
`PayPal`
`n8n`
`WhatsApp Business API`

---

# 14. PROJECT 02 — AI SOCIAL MEDIA AUTOMATION

Title:

**AI Social Media Automation**

Category:

`AI AUTOMATION · AGENTS`

Description:

> An internal AI-powered social media workflow that researches relevant AI news, generates platform-specific content, manages human approval and prepares content for scheduling.

Workflow:

`Research → Shortlist → Human Selection → Generate → Review → Approve → Schedule`

Capabilities:

- AI news research
- Story analysis
- 5–10 story shortlist
- Human selection
- LinkedIn content generation
- Instagram captions
- WhatsApp broadcasts
- Weekly content calendar
- Approval workflow
- Slack notifications
- Social platform integrations

Technology:

`LLMs`
`n8n`
`APIs`
`Slack`
`MCP`
`Automation Workflows`

Important:

Do not claim fully autonomous publishing unless that feature is actually implemented.

---

# 15. PROJECT 03 — AI COMPUTER VISION / PUBLIC SAFETY PROTOTYPE

Title:

**Public Safety Vision**

Category:

`COMPUTER VISION · AI`

Description:

> A computer-vision prototype designed to analyze sample video footage and detect predefined safety-related events in real time.

Capabilities:

- Object detection
- Weapon presence detection
- Person running with a weapon
- Basic physical altercation detection
- Person falling / collapse detection
- Bounding boxes
- Labels
- Alert banners

Technology:

`Python`
`OpenCV`
`YOLO`
`MediaPipe`
`Computer Vision`

The portfolio must clearly present this as a:

**prototype / demo**

and not as a certified real-world safety system.

---

# 16. PROJECT 04 — HERAID

Title:

**HerAid**

Category:

`MOBILE · NLP · AI`

Description:

> A multilingual Flutter application concept focused on making useful digital assistance accessible through simple, localized experiences.

Possible modules:

- Authentication
- Profile
- Cycle tracker
- AI assistant
- Voice agent
- Education
- Quiz
- SOS
- Maps
- NGO panel
- Admin panel
- Urdu / English localization

Technology:

`Flutter`
`Dart`
`NLP`
`AI`
`Localization`

Only display features that are actually implemented or clearly label roadmap features.

---

# 17. PROJECT 05 — GOLD TRADING DASHBOARD

Title:

**Gold Trading Intelligence**

Category:

`AI · FINTECH · DASHBOARD`

Description:

> A dashboard concept for monitoring gold-market signals and presenting buy, sell and hold insights through a focused trading interface.

Possible capabilities:

- Buy / sell / hold signals
- Price monitoring
- Admin dashboard
- Alerts
- Slack integration
- Data visualization

Technology:

`Next.js`
`Supabase`
`APIs`
`Slack`

Any financial performance claim must be removed unless it is backed by verified data.

---

# 18. PROJECT CARD DESIGN

Desktop project card:

- Large visual area
- Project title
- Category label
- Short description
- Technology chips
- Arrow button
- Hover image movement
- Subtle violet glow
- Border illumination

On hover:

- Image scales slightly
- Card moves upward 4–8px
- Accent glow increases
- Arrow moves right
- No excessive animation

On mobile:

- No hover dependency
- Tap-friendly
- Large project image
- Content remains easy to scan

---

# 19. CASE STUDY MODAL / PROJECT DETAIL

When a project is clicked, show a project detail page or modal.

Structure:

1. Overview
2. Problem
3. Solution
4. Architecture
5. Key features
6. AI / automation layer
7. Technology
8. Challenges
9. Outcome
10. Links

Do not create fake outcomes.

If measurable outcomes are unavailable, say:

`Outcome: prototype / in active development`

---

# 20. EXPERIENCE SECTION

Label:

`04 — EXPERIENCE`

Use a timeline.

Each item:

- Role
- Company / organization
- Date range
- Description
- Key technologies
- Major responsibilities

The content must come from Zaira's actual CV/profile.

Do not invent employment history.

Make the timeline visually premium:

- vertical violet line
- numbered nodes
- compact metadata
- large role titles
- expandable details on mobile

---

# 21. SKILLS / TECHNOLOGY SECTION

Label:

`05 — TOOLKIT`

Do not make a giant wall of logos.

Organize skills into groups.

## Frontend

- HTML
- CSS
- JavaScript
- TypeScript
- React
- Next.js
- Tailwind CSS

## Backend / Data

- Node.js
- Python
- Supabase
- PostgreSQL
- REST APIs

## AI / Automation

- LLM APIs
- AI Agents
- n8n
- MCP
- Prompt Engineering
- Computer Vision
- NLP

## Tools

- Git
- GitHub
- VS Code
- Slack
- Figma

Only display tools that Zaira genuinely uses.

---

# 22. SERVICES SECTION

Label:

`06 — WHAT I BUILD`

Create a clean service grid.

## AI Automation

Business workflows, AI agents, API integrations and automation.

## Frontend Development

Modern responsive interfaces and React / Next.js applications.

## Full-Stack Products

End-to-end web products with database, authentication and API integrations.

## AI Integration

Embedding useful AI capabilities into existing digital products.

## Automation Consulting

Finding repetitive workflows and designing practical automation systems.

Avoid sounding like a generic agency.

This is a personal engineering portfolio.

---

# 23. WORK PROCESS

Create a horizontal/vertical process:

`01 DISCOVER`

Understand the problem.

`02 ARCHITECT`

Plan the product and technical approach.

`03 BUILD`

Develop the experience and underlying system.

`04 INTEGRATE`

Connect APIs, automation and AI.

`05 TEST`

Verify performance, accessibility and reliability.

`06 SHIP`

Deploy and document the final product.

Use scroll animation to reveal each step.

---

# 24. WHY WORK WITH ME

Do not use a generic "Why choose me?" sales section.

Instead:

### Engineering mindset

Build for maintainability, not only appearance.

### Product thinking

Think about the user journey, not just individual screens.

### AI-first perspective

Use AI where it creates genuine value.

### Automation mindset

Reduce repetitive work through intelligent workflows.

### Attention to detail

Care about interactions, responsiveness and polish.

---

# 25. CONTACT SECTION

This should be visually powerful.

Label:

`07 — CONTACT`

Large heading:

**Let's build something meaningful.**

Supporting copy:

> Open to exciting frontend, AI automation and product engineering opportunities.

Buttons:

**EMAIL ME**

**LINKEDIN**

**GITHUB**

**DOWNLOAD RESUME**

The email, LinkedIn and GitHub values must come from Zaira's actual profile.

Do not invent URLs.

---

# 26. CONTACT FORM

Optional but recommended.

Fields:

- Name
- Email
- Company
- Project / Opportunity
- Message

Button:

**SEND MESSAGE**

Validation:

- Required fields
- Valid email
- Clear errors
- Loading state
- Success state
- Failure state

Use a secure external form service or server-side implementation.

Never put private email/API credentials in client-side JavaScript.

---

# 27. FOOTER

Minimal footer.

Example:

`© 2026 Zaira Shahid`

Then:

`AI Automation · Frontend · Full-Stack`

Social links:

- GitHub
- LinkedIn
- Email

Optional:

`Built with intention.`

Do not include unnecessary footer clutter.

---

# 28. NAVIGATION

Desktop navigation:

Left:

`zaira shahid.`

Right:

- About
- Expertise
- Work
- Experience
- Contact

Primary CTA:

`LET'S TALK`

Navigation should become sticky after scrolling.

Use a subtle translucent background and blur.

Do not create a huge navbar.

---

# 29. MOBILE NAVIGATION

Use a floating bottom navigation inspired by the reference screenshots.

Design:

- rounded pill container
- dark glass surface
- subtle border
- violet ambient glow
- 5 icons maximum

Icons:

- Home
- About
- Work
- Experience
- Contact

The active icon should have:

- slightly brighter background
- violet glow
- clear visual indicator

The bar must respect safe-area insets on modern mobile devices.

---

# 30. MICRO-INTERACTIONS

Use animation intentionally.

Recommended:

- page entrance fade
- section reveal
- text reveal
- subtle card hover
- button arrow movement
- border glow
- image scale
- navigation active state
- loading screen
- background light movement

Do NOT use:

- constant spinning objects
- excessive particle effects
- flashy cursor trails
- long page transitions
- animations that block interaction

Animation duration generally:

`180ms – 700ms`

Large transitions may be slightly longer.

---

# 31. CUSTOM CURSOR

Optional desktop-only enhancement.

If implemented:

- tiny violet/white cursor
- subtle hover expansion over interactive elements
- disabled on touch devices
- disabled when reduced motion is preferred

This is optional, not required.

Do not sacrifice performance for it.

---

# 32. BACKGROUND EFFECT

Create a subtle global visual atmosphere.

Possible layers:

1. dark base
2. faint grid
3. radial violet glow
4. secondary blue glow
5. very subtle noise texture

The background must remain readable behind text.

Use CSS where possible.

Avoid heavy WebGL unless there is a clear performance benefit.

---

# 33. RESPONSIVE DESIGN

Breakpoints should support:

- Small phones
- Large phones
- Tablets
- Laptops
- Large desktops

Mobile must be designed intentionally.

Important mobile requirements:

- no horizontal scrolling
- hero heading fits naturally
- buttons stack when necessary
- cards become single-column
- images maintain aspect ratio
- bottom nav remains usable
- text is readable without zooming
- no content hidden behind fixed elements

---

# 34. ACCESSIBILITY

Must include:

- semantic HTML
- proper heading hierarchy
- alt text for meaningful images
- decorative images marked appropriately
- keyboard navigation
- visible focus states
- sufficient contrast
- reduced-motion support
- accessible buttons
- accessible form errors
- aria labels for icon-only controls

Do not make the portfolio visually beautiful but inaccessible.

---

# 35. SEO

Implement:

- page title
- meta description
- Open Graph metadata
- Twitter/X metadata
- canonical URL
- favicon
- robots.txt
- sitemap
- structured metadata where appropriate

Suggested title:

**Zaira Shahid — AI Automation Engineer & Frontend Developer**

Suggested description:

**Zaira Shahid is an AI Automation Engineer and Frontend Developer building intelligent automation systems, modern interfaces and AI-powered digital products.**

Do not keyword-stuff.

---

# 36. PERFORMANCE

Target:

- fast initial load
- optimized images
- lazy loading below-the-fold media
- minimal JavaScript
- no unnecessary dependencies
- no huge animation libraries unless needed
- use Next.js image optimization
- avoid blocking fonts
- preserve layout stability

Target Lighthouse:

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

These are targets, not fake claims.

---

# 37. TECH STACK

Preferred:

- Next.js
- React
- TypeScript
- Tailwind CSS
- CSS animations / Framer Motion only where useful
- Lucide icons
- Git / GitHub
- Vercel deployment

The portfolio does not require a database unless a real backend feature is added.

For a simple contact form, use a secure server-side or external form solution.

---

# 38. RECOMMENDED PROJECT STRUCTURE

Use a clean App Router structure similar to:

```text
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── sitemap.ts
│   └── robots.ts
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── MobileNav.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Expertise.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Services.tsx
│   │   ├── Process.tsx
│   │   └── Contact.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── SectionLabel.tsx
│   │   ├── Glow.tsx
│   │   ├── ProjectCard.tsx
│   │   └── StatCard.tsx
│   │
│   └── motion/
│       ├── Reveal.tsx
│       └── PageTransition.tsx
│
├── content/
│   ├── profile.ts
│   ├── projects.ts
│   ├── experience.ts
│   └── skills.ts
│
├── public/
│   ├── images/
│   ├── projects/
│   ├── resume/
│   └── favicon/
│
├── docs/
│   └── PORTFOLIO_SPEC.md
│
└── package.json
```

Keep portfolio content separate from UI components wherever practical.

This allows Zaira to update:

- projects
- skills
- experience
- links
- bio

without rewriting layout components.

---

# 39. CONTENT ARCHITECTURE

Create a central typed profile object.

Example concept:

```ts
export const profile = {
  name: "Zaira Shahid",
  title: "AI Automation Engineer & Frontend Developer",
  tagline: "...",
  email: "...",
  linkedin: "...",
  github: "...",
  resume: "/resume/zaira-shahid-resume.pdf",
}
```

Do not put placeholder values into production.

Clearly mark missing values with TODO comments during development.

---

# 40. PROJECT DATA MODEL

Projects should be stored as structured data.

Each project should contain:

```ts
{
  id: string,
  title: string,
  category: string,
  description: string,
  technologies: string[],
  image?: string,
  liveUrl?: string,
  githubUrl?: string,
  caseStudyUrl?: string,
  status: "live" | "prototype" | "in-development",
  featured: boolean
}
```

This makes the portfolio easy to maintain.

---

# 41. VISUAL HIERARCHY

Every section must have:

1. Small monospace section number
2. Strong heading
3. Short supporting copy
4. Main visual/content
5. Clear spacing

Example:

`03 — SELECTED WORK`

**Things I've built.**

Then projects.

Do not fill every available space.

Premium design requires breathing room.

---

# 42. SPACING

Use a consistent spacing system.

Large desktop sections:

`120px – 180px` vertical spacing

Tablet:

`90px – 130px`

Mobile:

`72px – 100px`

Cards:

`24px – 40px` internal padding depending on size.

The design should feel spacious.

---

# 43. BORDER RADIUS

Use modern but controlled rounding.

Suggested:

- Buttons: `999px`
- Small badges: `999px`
- Cards: `20px – 28px`
- Large containers: `28px – 36px`

Avoid overly rounded "toy-like" UI.

---

# 44. BUTTON STYLE

Primary button:

- off-white background
- black text
- rounded pill
- subtle hover scale
- arrow icon

Secondary:

- transparent
- white border
- white text
- violet hover glow

Example:

`VIEW MY WORK  ↗`

Do not use gradients on every button.

---

# 45. PROJECT VISUALS

Every featured project should have a strong visual.

If actual screenshots exist:

- use them
- crop intelligently
- use high resolution
- add subtle border

If screenshots do not exist:

Create tasteful abstract project mockups using CSS or prepared project graphics.

Do not use unrelated stock photography.

---

# 46. DESKTOP HERO LAYOUT

Preferred composition:

Left:

- status badge
- name / title
- professional positioning
- paragraph
- CTA buttons

Right:

- abstract AI/technology light visualization
- vertical violet beam
- subtle grid / glow
- optional floating metadata

The hero should feel balanced, not crowded.

---

# 47. MOBILE HERO LAYOUT

On mobile:

1. status badge
2. large heading
3. role
4. description
5. CTA
6. visual
7. proof cards

Do not force a two-column layout on narrow screens.

---

# 48. PREMIUM DETAIL LAYER

Add subtle details such as:

- tiny section numbers
- monospace metadata
- animated divider lines
- gradient borders on selected elements
- subtle glow around active states
- small directional arrows
- technical labels
- "scroll to explore" indicator

These details should make the portfolio feel engineered.

---

# 49. DO NOT OVERDESIGN

The design must not become:

- cyberpunk
- gamer UI
- hacker terminal
- neon nightclub
- cryptocurrency landing page
- generic AI startup website

The correct mood is:

**luxury technology + intelligent engineering + modern editorial design**

---

# 50. RESUME

Add a prominent resume button in:

- Hero
- Contact
- Footer

Resume should open/download:

`/resume/zaira-shahid-resume.pdf`

Only add the file when the actual resume is provided.

---

# 51. SOCIAL LINKS

Use actual links only.

Potential:

- LinkedIn
- GitHub
- Email

Do not add social icons just for decoration.

---

# 52. OPTIONAL ADVANCED FEATURES

Only implement after the core website is stable.

Possible enhancements:

- animated page transitions
- project case-study pages
- command palette
- keyboard navigation
- interactive skills visualization
- dynamic project filtering
- subtle custom cursor
- animated background grid
- project image lightbox

Do not add these before the core experience is complete.

---

# 53. DEVELOPMENT PHASES

## PHASE 1 — Foundation

Build:

- Next.js app
- TypeScript
- Tailwind
- fonts
- global theme
- layout
- metadata
- responsive base

Test:

- build
- lint
- mobile
- desktop

Commit:

`feat: initialize portfolio foundation`

---

## PHASE 2 — Loading + Navigation

Build:

- loading screen
- desktop navbar
- mobile floating navigation
- smooth scrolling

Test:

- mobile
- keyboard
- reduced motion

Commit:

`feat: add portfolio navigation and loading experience`

---

## PHASE 3 — Hero

Build:

- status badge
- Zaira Shahid name
- role
- tagline
- CTA buttons
- visual background
- stats

Commit:

`feat: build premium hero section`

---

## PHASE 4 — About + Expertise

Build:

- About
- Expertise cards
- visual hierarchy
- animations

Commit:

`feat: add about and expertise sections`

---

## PHASE 5 — Projects

Build:

- project data model
- project cards
- featured project layout
- responsive behavior
- project details

Commit:

`feat: add selected projects showcase`

---

## PHASE 6 — Experience + Skills

Build:

- timeline
- technology groups
- skill presentation

Commit:

`feat: add experience and technology sections`

---

## PHASE 7 — Services + Process

Build:

- services
- process
- engineering mindset

Commit:

`feat: add services and workflow sections`

---

## PHASE 8 — Contact + Footer

Build:

- contact section
- links
- resume
- footer
- form if required

Commit:

`feat: complete contact and footer`

---

## PHASE 9 — Polish

Improve:

- animations
- spacing
- typography
- mobile layout
- accessibility
- performance
- SEO
- metadata

Commit:

`refactor: polish portfolio experience`

---

## PHASE 10 — Final QA

Run:

```bash
npm run build
npm run lint
```

Check:

- desktop
- tablet
- mobile
- Chrome
- Safari if available
- keyboard navigation
- reduced motion
- Lighthouse
- links
- resume
- images
- form
- SEO metadata

Commit:

`chore: final portfolio QA`

---

# 54. GIT RULE

After every completed module:

1. Test the module.
2. Fix errors.
3. Verify build.
4. Commit the changes.
5. Continue to the next module.

Never wait until the entire portfolio is finished before making the first commit.

---

# 55. FINAL ACCEPTANCE CHECKLIST

The portfolio is complete only when:

## Branding

- [ ] First load shows **Zaira Shahid**
- [ ] Brand identity is consistent
- [ ] Professional title is clear

## Design

- [ ] Premium dark theme
- [ ] Violet / blue light accents
- [ ] Strong typography
- [ ] High-quality spacing
- [ ] Original design
- [ ] No generic template appearance

## UX

- [ ] Smooth navigation
- [ ] Excellent mobile experience
- [ ] Floating mobile navigation
- [ ] Working buttons
- [ ] Working links
- [ ] Accessible interactions

## Content

- [ ] About section
- [ ] Expertise
- [ ] Projects
- [ ] Experience
- [ ] Skills
- [ ] Services
- [ ] Process
- [ ] Contact

## Technical

- [ ] TypeScript
- [ ] Responsive
- [ ] SEO metadata
- [ ] Sitemap
- [ ] Robots
- [ ] Optimized images
- [ ] No console errors
- [ ] Production build succeeds

## Performance

- [ ] No unnecessary dependencies
- [ ] Animations are performant
- [ ] Images optimized
- [ ] Mobile loads quickly
- [ ] Reduced-motion supported

---

# 56. FINAL DESIGN TARGET

The finished website should make a visitor think:

> "This is not just a developer portfolio. This person knows how to build products."

The experience should communicate:

**Zaira Shahid**

**AI Automation Engineer & Frontend Developer**

**Design. Engineering. AI. Automation.**

The visual language should combine:

- luxury
- technology
- intelligence
- precision
- confidence
- simplicity

The portfolio should be impressive enough for:

- international recruiters
- software engineering roles
- AI automation opportunities
- frontend roles
- freelance clients
- startup founders
- technical collaborators

without becoming flashy or unprofessional.

---

# 57. IMPLEMENTATION INSTRUCTION TO THE CODING ASSISTANT

Start by reading this entire document.

Then:

1. Inspect the existing repository.
2. If a portfolio project already exists, preserve useful existing work.
3. Create a clear implementation plan.
4. Build Phase 1 first.
5. Do not skip directly to visual polish before architecture is stable.
6. Implement one phase at a time.
7. Run tests/build after every phase.
8. Commit after every completed phase.
9. Never invent missing personal information.
10. Use TODO placeholders for information that must later be supplied by Zaira.
11. Keep all content easy to edit.
12. Finish with a production-ready responsive portfolio.

The first screen must unmistakably show:

# ZAIRA SHAHID

and the overall experience must feel like a **premium personal technology brand**, not a basic CV website.
