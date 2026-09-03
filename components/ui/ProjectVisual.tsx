import type { VisualPattern } from "@/content/projects";

// TODO: replace with real product screenshots once available. Until then
// each project card gets an abstract, on-brand CSS/SVG pattern instead of a
// literal UI mockup — no fabricated labels or metrics are drawn into these.
export function ProjectVisual({ pattern }: { pattern: VisualPattern }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-bg-secondary">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute -top-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-accent-violet/20 blur-[100px]" />
      <div className="absolute -bottom-16 right-0 h-48 w-48 rounded-full bg-accent-blue/15 blur-[100px]" />

      <svg
        viewBox="0 0 400 260"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id={`grad-${pattern}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <PatternShape pattern={pattern} />
      </svg>
    </div>
  );
}

function PatternShape({ pattern }: { pattern: VisualPattern }) {
  const stroke = `url(#grad-${pattern})`;

  switch (pattern) {
    case "chart":
      return (
        <g fill="none" stroke={stroke} strokeWidth={2} strokeLinecap="round">
          <polyline points="30,190 90,150 140,175 190,110 240,130 290,70 360,45" />
          {[30, 90, 140, 190, 240, 290, 360].map((x, i) => (
            <circle key={x} cx={x} cy={[190, 150, 175, 110, 130, 70, 45][i]} r={3.5} fill="#8B5CF6" />
          ))}
        </g>
      );

    case "node-graph":
      return (
        <g stroke={stroke} strokeWidth={1.5}>
          <line x1="80" y1="60" x2="200" y2="120" />
          <line x1="200" y1="120" x2="320" y2="70" />
          <line x1="200" y1="120" x2="150" y2="200" />
          <line x1="200" y1="120" x2="290" y2="190" />
          <line x1="80" y1="60" x2="60" y2="150" />
          {[
            [80, 60],
            [200, 120],
            [320, 70],
            [150, 200],
            [290, 190],
            [60, 150],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={i === 1 ? 7 : 5} fill="#8B5CF6" fillOpacity={0.85} />
          ))}
        </g>
      );

    case "weave":
      return (
        <g fill="none" stroke={stroke} strokeWidth={1.5} opacity={0.9}>
          {Array.from({ length: 7 }).map((_, i) => (
            <path
              key={`h-${i}`}
              d={`M20 ${30 + i * 32} C 120 ${10 + i * 32}, 280 ${50 + i * 32}, 380 ${30 + i * 32}`}
            />
          ))}
        </g>
      );

    case "pulse-wave":
      return (
        <g fill="none" stroke={stroke} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20,130 100,130 120,80 145,180 165,60 190,130 380,130" />
        </g>
      );

    case "eye-scan":
      return (
        <g fill="none" stroke={stroke} strokeWidth={2}>
          <path d="M40 130 C 120 60, 280 60, 360 130 C 280 200, 120 200, 40 130 Z" />
          <circle cx="200" cy="130" r="30" />
          <circle cx="200" cy="130" r="4" fill="#8B5CF6" stroke="none" />
          <polyline
            points="40,220 90,220 105,190 125,240 140,210 160,220 360,220"
            opacity={0.6}
            strokeWidth={1.5}
          />
        </g>
      );

    case "shield-scan":
      return (
        <g fill="none" stroke={stroke} strokeWidth={2}>
          <path d="M200 30 L300 65 V135 C300 190 255 220 200 235 C145 220 100 190 100 135 V65 Z" />
          <line x1="100" y1="110" x2="300" y2="110" opacity={0.6} strokeWidth={1.5} />
          <line x1="100" y1="150" x2="300" y2="150" opacity={0.4} strokeWidth={1.5} />
          <path d="M165 130 L190 155 L240 100" strokeWidth={2.5} />
        </g>
      );

    case "matrix":
      return (
        <g>
          {Array.from({ length: 6 }).map((_, row) =>
            Array.from({ length: 9 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={35 + col * 40}
                cy={35 + row * 38}
                r={(row + col) % 3 === 0 ? 4 : 2.2}
                fill="#8B5CF6"
                fillOpacity={(row + col) % 3 === 0 ? 0.85 : 0.35}
              />
            ))
          )}
        </g>
      );

    case "viewfinder":
      return (
        <g fill="none" stroke={stroke} strokeWidth={2.5} strokeLinecap="round">
          <path d="M40 60 V35 H65" />
          <path d="M335 60 V35 H310" />
          <path d="M40 200 V225 H65" />
          <path d="M335 200 V225 H310" />
          <rect x="140" y="90" width="120" height="80" rx="8" opacity={0.5} strokeWidth={1.5} />
          <circle cx="200" cy="130" r="8" fill="#8B5CF6" stroke="none" />
        </g>
      );

    default:
      return null;
  }
}
