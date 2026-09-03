// Until real product screenshots are available, project cards render a
// bespoke, on-brand SVG illustration keyed to the project id — no fabricated
// labels, UI mockups, or metrics are drawn into these, just a themed mark.
export function ProjectVisual({ id }: { id: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-bg-secondary">
      <div className="absolute -top-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-accent-violet/25 blur-[100px]" />
      <div className="absolute -bottom-16 right-0 h-48 w-48 rounded-full bg-accent-blue/20 blur-[100px]" />

      <svg
        viewBox="0 0 400 260"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id={`grad-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C3A6F0" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#8FD4D0" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id={`grad-warm-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F0C9A6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C3A6F0" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <Illustration id={id} />
      </svg>
    </div>
  );
}

function Illustration({ id }: { id: string }) {
  const stroke = `url(#grad-${id})`;
  const warm = `url(#grad-warm-${id})`;

  switch (id) {
    // Gold coin rising through a candlestick chart, alert paper-plane in the corner.
    case "gold-trading-bot":
      return (
        <g fill="none" strokeLinecap="round">
          <g stroke={stroke} strokeWidth={2} opacity={0.55}>
            {[
              [40, 210, 14],
              [80, 190, 26],
              [120, 205, 16],
              [160, 170, 34],
              [200, 195, 20],
            ].map(([x, y, h], i) => (
              <line key={i} x1={x} y1={y as number} x2={x as number} y2={(y as number) - (h as number)} strokeWidth={6} />
            ))}
          </g>
          <circle cx="290" cy="95" r="52" stroke={warm} strokeWidth={3} />
          <circle cx="290" cy="95" r="52" fill={warm} fillOpacity={0.12} />
          <text x="290" y="106" textAnchor="middle" fontSize="34" fontWeight={700} fill={warm} fontFamily="serif">
            $
          </text>
          <path d="M250 60 L340 40 L322 70 L340 40 L312 88" stroke={stroke} strokeWidth={2.5} opacity={0.7} />
        </g>
      );

    // News feed cards feeding into an AI node that fans out to platform icons.
    case "ai-social-media-automation":
      return (
        <g fill="none">
          {[[60, 60], [60, 110], [60, 160]].map(([x, y], i) => (
            <rect key={i} x={x} y={y} width="90" height="34" rx="8" stroke={stroke} strokeWidth={1.6} opacity={0.6} />
          ))}
          <circle cx="230" cy="120" r="26" fill={warm} fillOpacity={0.18} stroke={warm} strokeWidth={2.5} />
          <path d="M220 120 l6 6 12 -14" stroke={warm} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
          {[[150, 77], [150, 127], [150, 177]].map(([x, y], i) => (
            <line key={i} x1={x} y1={y} x2="204" y2="120" stroke={stroke} strokeWidth={1.4} opacity={0.5} />
          ))}
          {[[300, 70], [340, 120], [300, 170]].map(([x, y], i) => (
            <g key={i}>
              <line x1="256" y1="120" x2={x} y2={y} stroke={stroke} strokeWidth={1.4} opacity={0.5} />
              <circle cx={x} cy={y} r="10" fill={stroke} fillOpacity={0.7} />
            </g>
          ))}
        </g>
      );

    // Lehenga silhouette built from a flared skirt curve and embroidery dots.
    case "luxury-couture":
      return (
        <g fill="none">
          <path
            d="M200 40 C 185 40 175 55 175 70 L 130 220 C 200 245 200 245 270 220 L 225 70 C 225 55 215 40 200 40 Z"
            stroke={warm}
            strokeWidth={2}
            opacity={0.85}
          />
          <path d="M175 70 C 175 90 225 90 225 70" stroke={warm} strokeWidth={1.6} opacity={0.6} />
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 7 }).map((_, col) => {
              const t = row / 4;
              const spread = 20 + t * 55;
              const cy = 120 + row * 22;
              const cx = 200 - spread + (col * (2 * spread)) / 6;
              return (
                <circle
                  key={`${row}-${col}`}
                  cx={cx}
                  cy={cy}
                  r={1.6}
                  fill={stroke}
                  fillOpacity={0.7}
                />
              );
            })
          )}
        </g>
      );

    // Heart with a steady pulse line and a soft protective ring.
    case "heraid":
      return (
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="200" cy="130" r="78" stroke={stroke} strokeWidth={1.4} opacity={0.35} />
          <path
            d="M200 165 C 150 130 150 90 180 80 C 195 75 200 90 200 90 C 200 90 205 75 220 80 C 250 90 250 130 200 165 Z"
            fill={warm}
            fillOpacity={0.2}
            stroke={warm}
            strokeWidth={2.5}
          />
          <polyline
            points="90,130 150,130 165,105 180,155 195,120 210,130 310,130"
            stroke={stroke}
            strokeWidth={2}
            opacity={0.8}
          />
        </g>
      );

    // Eye with lashes plus a blink-rate waveform underneath.
    case "drowsiness-detection":
      return (
        <g fill="none" strokeWidth={2}>
          <path d="M60 130 C 120 70, 280 70, 340 130 C 280 190, 120 190, 60 130 Z" stroke={stroke} />
          <circle cx="200" cy="130" r="32" stroke={warm} strokeWidth={2.5} />
          <circle cx="200" cy="130" r="8" fill={warm} stroke="none" />
          <g stroke={stroke} strokeWidth={1.6} opacity={0.6}>
            <path d="M120 95 L108 82" />
            <path d="M145 78 L138 63" />
            <path d="M175 70 L172 54" />
          </g>
          <polyline
            points="60,225 110,225 122,205 138,245 152,215 166,225 340,225"
            stroke={stroke}
            strokeWidth={1.8}
            opacity={0.55}
          />
        </g>
      );

    // Shield with a chat/LLM bubble sentinel-scanning inside it.
    case "sentinel-llm":
      return (
        <g fill="none" strokeWidth={2}>
          <path
            d="M200 35 L300 68 V132 C300 185 258 215 200 233 C142 215 100 185 100 132 V68 Z"
            stroke={stroke}
          />
          <rect x="155" y="105" width="90" height="55" rx="14" stroke={warm} strokeWidth={2} />
          <path d="M175 160 L165 178 L195 160" stroke={warm} strokeWidth={2} strokeLinejoin="round" />
          <g fill={warm} stroke="none">
            <circle cx="180" cy="132" r="4" />
            <circle cx="200" cy="132" r="4" />
            <circle cx="220" cy="132" r="4" />
          </g>
        </g>
      );

    // Compact bot head with antenna-node network fanning outward.
    case "novabot":
      return (
        <g fill="none">
          <rect x="160" y="90" width="80" height="70" rx="18" stroke={warm} strokeWidth={2.5} />
          <line x1="200" y1="90" x2="200" y2="65" stroke={warm} strokeWidth={2} />
          <circle cx="200" cy="58" r="8" fill={warm} fillOpacity={0.25} stroke={warm} strokeWidth={2} />
          <circle cx="182" cy="120" r="6" fill={warm} stroke="none" />
          <circle cx="218" cy="120" r="6" fill={warm} stroke="none" />
          {[[90, 60], [310, 60], [90, 200], [310, 200], [200, 220]].map(([x, y], i) => (
            <g key={i}>
              <line x1="200" y1="125" x2={x} y2={y} stroke={stroke} strokeWidth={1.4} opacity={0.45} />
              <circle cx={x} cy={y} r="9" fill={stroke} fillOpacity={0.7} />
            </g>
          ))}
        </g>
      );

    // Credit card guarded by a checkmark shield, OTP dots along the base.
    case "fraud-detection":
      return (
        <g fill="none" strokeWidth={2}>
          <rect x="70" y="80" width="180" height="115" rx="14" stroke={stroke} />
          <line x1="70" y1="115" x2="250" y2="115" stroke={stroke} strokeWidth={10} opacity={0.5} />
          <line x1="95" y1="165" x2="150" y2="165" stroke={stroke} strokeWidth={4} opacity={0.6} />
          <path
            d="M295 55 L340 72 V110 C340 140 320 158 295 168 C270 158 250 140 250 110 V72 Z"
            fill={warm}
            fillOpacity={0.15}
            stroke={warm}
            strokeWidth={2.5}
          />
          <path d="M275 112 L290 128 L318 96" stroke={warm} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
        </g>
      );

    // Envelope with a funnel filtering spam into a crossed-out pile.
    case "spam-classifier":
      return (
        <g fill="none" strokeWidth={2}>
          <rect x="60" y="70" width="150" height="105" rx="10" stroke={stroke} />
          <path d="M60 78 L135 135 L210 78" stroke={stroke} strokeWidth={1.8} />
          <path d="M230 70 L330 70 L290 140 L270 140 Z" stroke={warm} strokeWidth={2} />
          <line x1="280" y1="140" x2="280" y2="175" stroke={warm} strokeWidth={2} />
          <circle cx="280" cy="195" r="14" stroke={warm} strokeWidth={2} />
          <path d="M273 188 L287 202 M287 188 L273 202" stroke={warm} strokeWidth={2} strokeLinecap="round" />
        </g>
      );

    // Camera viewfinder corners locking onto a person silhouette.
    case "public-safety-vision":
      return (
        <g fill="none" strokeWidth={2.5} strokeLinecap="round">
          <path d="M50 60 V35 H75" stroke={stroke} />
          <path d="M350 60 V35 H325" stroke={stroke} />
          <path d="M50 200 V225 H75" stroke={stroke} />
          <path d="M350 200 V225 H325" stroke={stroke} />
          <circle cx="200" cy="105" r="24" stroke={warm} strokeWidth={2.5} />
          <path
            d="M160 195 C 160 155 175 135 200 135 C 225 135 240 155 240 195"
            stroke={warm}
            strokeWidth={2.5}
          />
          <rect x="140" y="90" width="120" height="80" rx="10" opacity={0.4} strokeWidth={1.5} stroke={stroke} />
        </g>
      );

    default:
      return (
        <g fill="none" stroke={stroke} strokeWidth={2}>
          <circle cx="200" cy="130" r="60" opacity={0.6} />
          <circle cx="200" cy="130" r="6" fill={stroke} stroke="none" />
        </g>
      );
  }
}
