"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Custom hero visual: a coordinate field crossed by drawn trajectories,
 * with signal points traveling along them. Pure SVG, no canvas, no
 * particle library. Under prefers-reduced-motion everything renders as a
 * static diagram.
 */

const trajectories = [
  {
    d: "M-60 640 C 240 560, 470 580, 760 400 S 1140 190, 1280 130",
    stroke: "var(--color-signal)",
    opacity: 0.5,
    width: 1.2,
    duration: 2.6,
    delay: 0.2,
    travel: 16,
  },
  {
    d: "M-60 730 C 320 690, 700 630, 1280 430",
    stroke: "#eae7e0",
    opacity: 0.14,
    width: 1,
    duration: 3,
    delay: 0.5,
    travel: 24,
  },
  {
    d: "M-60 310 C 300 350, 620 250, 900 190 S 1180 120, 1280 100",
    stroke: "var(--color-iris)",
    opacity: 0.3,
    width: 1,
    duration: 3,
    delay: 0.8,
    travel: 20,
  },
] as const;

/** Static coordinate ticks scattered across the field. */
const ticks = [
  [150, 180],
  [340, 120],
  [560, 470],
  [880, 300],
  [1050, 520],
  [220, 560],
  [980, 120],
  [720, 620],
] as const;

/** Fixed nodes marking intersections. */
const nodes = [
  { x: 760, y: 400, r: 3, color: "var(--color-signal)", opacity: 0.9 },
  { x: 470, y: 566, r: 2, color: "#eae7e0", opacity: 0.4 },
  { x: 900, y: 190, r: 2.5, color: "var(--color-iris)", opacity: 0.6 },
] as const;

export function VectorField() {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <svg
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        {/* Coordinate ticks */}
        {ticks.map(([x, y], i) => (
          <g key={i} stroke="#eae7e0" strokeOpacity="0.14" strokeWidth="1">
            <line x1={x - 5} y1={y} x2={x + 5} y2={y} />
            <line x1={x} y1={y - 5} x2={x} y2={y + 5} />
          </g>
        ))}

        {/* Coordinate labels */}
        <text
          x="152"
          y="200"
          fill="#9298a4"
          fillOpacity="0.4"
          fontSize="9"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          x 41.20
        </text>
        <text
          x="1032"
          y="540"
          fill="#9298a4"
          fillOpacity="0.4"
          fontSize="9"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          y 118.06
        </text>

        {/* Trajectories, drawn in on load */}
        {trajectories.map((t, i) => (
          <motion.path
            key={i}
            d={t.d}
            fill="none"
            stroke={t.stroke}
            strokeOpacity={t.opacity}
            strokeWidth={t.width}
            initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: t.duration, delay: t.delay, ease: "easeInOut" }}
          />
        ))}

        {/* Points traveling along the trajectories (SMIL motion paths). */}
        {!reduceMotion &&
          trajectories.map((t, i) => (
            <circle
              key={`p-${i}`}
              r={i === 0 ? 3.5 : 2}
              fill={t.stroke}
              fillOpacity={i === 0 ? 1 : 0.7}
            >
              <animateMotion
                dur={`${t.travel}s`}
                repeatCount="indefinite"
                path={t.d}
                begin={`${t.delay}s`}
              />
            </circle>
          ))}

        {/* Intersection nodes */}
        {nodes.map((n, i) => (
          <g key={`n-${i}`}>
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill={n.color}
              fillOpacity={n.opacity}
            />
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r + 6}
              fill="none"
              stroke={n.color}
              strokeOpacity={n.opacity * 0.3}
              strokeWidth="1"
            />
          </g>
        ))}

        {/* Arrowhead closing the primary trajectory */}
        <motion.path
          d="M1244 152 L1280 130 L1262 168"
          fill="none"
          stroke="var(--color-signal)"
          strokeOpacity="0.6"
          strokeWidth="1.2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduceMotion ? 0 : 2.4, duration: 0.8 }}
        />
      </svg>

      {/* Soft vignette so text stays readable over the field */}
      <div className="absolute inset-0 bg-gradient-to-b from-night/40 via-transparent to-night" />
    </div>
  );
}
