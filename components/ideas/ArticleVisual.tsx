import type { ArticleCategory } from "@/types";
import { cn } from "@/lib/utils";

/**
 * Abstract article visual: a deterministic vector composition generated
 * from the article slug, tinted by category. No raster images anywhere,
 * so cards and article heroes stay sharp and weightless.
 */

const categoryAccent: Record<ArticleCategory, string> = {
  "Strategic Intelligence": "#6d8df6",
  "Frontier Markets": "#c8cdd4",
  "Founder Strategy": "#9a8cf8",
  Quantum: "#6d8df6",
  "Artificial Intelligence": "#9a8cf8",
  "Science and Society": "#c8cdd4",
  "Global Ecosystems": "#6d8df6",
};

/** Small deterministic PRNG seeded from a string. */
function seededRandom(seed: string) {
  let h = 1779033703;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  };
}

export function ArticleVisual({
  slug,
  category,
  className,
}: {
  slug: string;
  category: ArticleCategory;
  className?: string;
}) {
  const rand = seededRandom(slug);
  const accent = categoryAccent[category];
  const W = 400;
  const H = 225;

  // Two trajectories crossing the frame at seeded heights and curvature.
  const paths = Array.from({ length: 2 }, (_, i) => {
    const y0 = 40 + rand() * 150;
    const y1 = 30 + rand() * 160;
    const cx1 = 80 + rand() * 120;
    const cy1 = 20 + rand() * 180;
    const cx2 = 220 + rand() * 120;
    const cy2 = 20 + rand() * 180;
    return {
      d: `M -10 ${y0.toFixed(1)} C ${cx1.toFixed(1)} ${cy1.toFixed(1)}, ${cx2.toFixed(1)} ${cy2.toFixed(1)}, 410 ${y1.toFixed(1)}`,
      opacity: i === 0 ? 0.55 : 0.18,
      stroke: i === 0 ? accent : "#eae7e0",
    };
  });

  const nodes = Array.from({ length: 4 }, () => ({
    x: 30 + rand() * (W - 60),
    y: 30 + rand() * (H - 60),
    r: 1.5 + rand() * 2,
  }));

  const ticks = Array.from({ length: 5 }, () => ({
    x: 20 + rand() * (W - 40),
    y: 20 + rand() * (H - 40),
  }));

  const focal = nodes[0];

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative overflow-hidden border border-edge bg-card",
        className,
      )}
    >
      <svg viewBox={`0 0 ${W} ${H}`} className="h-full w-full">
        {ticks.map((t, i) => (
          <g key={`t-${i}`} stroke="#eae7e0" strokeOpacity="0.16" strokeWidth="1">
            <line x1={t.x - 4} y1={t.y} x2={t.x + 4} y2={t.y} />
            <line x1={t.x} y1={t.y - 4} x2={t.x} y2={t.y + 4} />
          </g>
        ))}
        {paths.map((p, i) => (
          <path
            key={`p-${i}`}
            d={p.d}
            fill="none"
            stroke={p.stroke}
            strokeOpacity={p.opacity}
            strokeWidth="1.1"
          />
        ))}
        {nodes.map((n, i) => (
          <circle
            key={`n-${i}`}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={i === 0 ? accent : "#eae7e0"}
            fillOpacity={i === 0 ? 0.9 : 0.35}
          />
        ))}
        <circle
          cx={focal.x}
          cy={focal.y}
          r={focal.r + 7}
          fill="none"
          stroke={accent}
          strokeOpacity="0.35"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
