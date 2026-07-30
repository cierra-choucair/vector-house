"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Custom hero visual: a wireframe tesseract rotating slowly through the
 * fourth dimension, set in a field of coordinate ticks and directional
 * trajectories. Pure SVG driven by a light requestAnimationFrame loop
 * that mutates line endpoints directly (no per-frame React renders).
 * Under prefers-reduced-motion the tesseract renders as a static
 * projection and the trajectories draw without animation.
 */

/* --- tesseract geometry ------------------------------------------- */

/** 16 vertices of the unit tesseract: every combination of ±1 in 4D. */
const VERTICES: [number, number, number, number][] = Array.from(
  { length: 16 },
  (_, i) => [
    i & 1 ? 1 : -1,
    i & 2 ? 1 : -1,
    i & 4 ? 1 : -1,
    i & 8 ? 1 : -1,
  ],
);

/** 32 edges: pairs of vertices differing in exactly one coordinate. */
const EDGES: [number, number][] = [];
for (let i = 0; i < 16; i++) {
  for (let bit = 0; bit < 4; bit++) {
    const j = i ^ (1 << bit);
    if (j > i) EDGES.push([i, j]);
  }
}

/** Edge class: the w=-1 cell, the w=+1 cell, or a connecting edge. */
function edgeClass([a, b]: [number, number]): "inner" | "outer" | "link" {
  const wa = VERTICES[a][3];
  const wb = VERTICES[b][3];
  if (wa !== wb) return "link";
  return wa === -1 ? "inner" : "outer";
}

const EDGE_STYLE = {
  outer: { stroke: "var(--color-signal)", opacity: 0.5, width: 1.1 },
  inner: { stroke: "var(--color-iris)", opacity: 0.55, width: 1.1 },
  link: { stroke: "#eae7e0", opacity: 0.16, width: 1 },
} as const;

const CX = 810;
const CY = 385;
const SCALE = 165;
const D4 = 3; // distance for 4D → 3D perspective
const D3 = 5.5; // distance for 3D → 2D perspective
const TILT_X = -0.42;
const TILT_Y = 0.5;

/** Project a 4D vertex to hero-SVG coordinates at rotation angles a, b. */
function project(
  v: [number, number, number, number],
  a: number,
  b: number,
): [number, number] {
  let [x, y, z, w] = v;

  // rotate in the x–w plane
  const xa = x * Math.cos(a) - w * Math.sin(a);
  const wa = x * Math.sin(a) + w * Math.cos(a);
  x = xa;
  w = wa;

  // rotate in the y–w plane
  const yb = y * Math.cos(b) - w * Math.sin(b);
  const wb = y * Math.sin(b) + w * Math.cos(b);
  y = yb;
  w = wb;

  // 4D → 3D perspective
  const s4 = D4 / (D4 - w * 0.85);
  x *= s4;
  y *= s4;
  z *= s4;

  // fixed 3D tilt for depth
  const y1 = y * Math.cos(TILT_X) - z * Math.sin(TILT_X);
  const z1 = y * Math.sin(TILT_X) + z * Math.cos(TILT_X);
  const x2 = x * Math.cos(TILT_Y) + z1 * Math.sin(TILT_Y);
  const z2 = -x * Math.sin(TILT_Y) + z1 * Math.cos(TILT_Y);

  // 3D → 2D perspective
  const s3 = D3 / (D3 - z2);
  return [CX + x2 * s3 * SCALE, CY + y1 * s3 * SCALE];
}

/* --- background field --------------------------------------------- */

const trajectories = [
  {
    d: "M-60 640 C 240 560, 470 580, 760 400 S 1140 190, 1280 130",
    stroke: "var(--color-signal)",
    opacity: 0.4,
    duration: 2.6,
    delay: 0.2,
  },
  {
    d: "M-60 300 C 300 350, 620 250, 900 190 S 1180 120, 1280 100",
    stroke: "var(--color-iris)",
    opacity: 0.25,
    duration: 3,
    delay: 0.6,
  },
] as const;

const ticks = [
  [150, 180],
  [340, 120],
  [520, 500],
  [220, 560],
  [1080, 620],
  [980, 120],
] as const;

/* --- component ----------------------------------------------------- */

export function TesseractField() {
  const reduceMotion = useReducedMotion();
  const lineRefs = useRef<(SVGLineElement | null)[]>([]);

  useEffect(() => {
    if (reduceMotion) return;
    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const t = (now - start) / 1000;
      const a = 0.55 + t * 0.11; // slow x–w rotation
      const b = 0.2 + t * 0.05; // slower y–w rotation
      const points = VERTICES.map((v) => project(v, a, b));
      EDGES.forEach(([i, j], k) => {
        const line = lineRefs.current[k];
        if (!line) return;
        const [x1, y1] = points[i];
        const [x2, y2] = points[j];
        line.setAttribute("x1", x1.toFixed(1));
        line.setAttribute("y1", y1.toFixed(1));
        line.setAttribute("x2", x2.toFixed(1));
        line.setAttribute("y2", y2.toFixed(1));
      });
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduceMotion]);

  // Static projection for the first paint and for reduced motion.
  const staticPoints = VERTICES.map((v) => project(v, 0.55, 0.2));

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

        {/* Axis labels */}
        <text
          x="152"
          y="200"
          fill="#9498a6"
          fillOpacity="0.4"
          fontSize="9"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          w 0.25
        </text>
        <text
          x="1008"
          y="640"
          fill="#9498a6"
          fillOpacity="0.4"
          fontSize="9"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          axis iv
        </text>

        {/* Trajectories, drawn in on load */}
        {trajectories.map((t, i) => (
          <motion.path
            key={i}
            d={t.d}
            fill="none"
            stroke={t.stroke}
            strokeOpacity={t.opacity}
            strokeWidth="1.1"
            initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: t.duration, delay: t.delay, ease: "easeInOut" }}
          />
        ))}

        {/* The tesseract */}
        <motion.g
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.5, ease: "easeOut" }}
        >
          {EDGES.map((edge, k) => {
            const style = EDGE_STYLE[edgeClass(edge)];
            const [x1, y1] = staticPoints[edge[0]];
            const [x2, y2] = staticPoints[edge[1]];
            return (
              <line
                key={k}
                ref={(el) => {
                  lineRefs.current[k] = el;
                }}
                x1={x1.toFixed(1)}
                y1={y1.toFixed(1)}
                x2={x2.toFixed(1)}
                y2={y2.toFixed(1)}
                stroke={style.stroke}
                strokeOpacity={style.opacity}
                strokeWidth={style.width}
              />
            );
          })}
        </motion.g>
      </svg>

      {/* Soft vignette so text stays readable over the field */}
      <div className="absolute inset-0 bg-gradient-to-b from-night/40 via-transparent to-night" />
      <div className="absolute inset-0 bg-gradient-to-r from-night via-night/30 to-transparent md:via-transparent" />
    </div>
  );
}
