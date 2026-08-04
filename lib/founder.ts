import fs from "node:fs";
import path from "node:path";

/**
 * Server-only helper: does the founder portrait exist in /public?
 *
 * Checked at build time by the pages that render the portrait, so the
 * photograph goes live automatically on the first deploy after
 * public/founder/cierra-choucair.jpg is committed — no flag to flip.
 * Until then the portrait slots render the abstract tesseract panel.
 *
 * Do not import this module from client components; pass the boolean
 * down as a prop (see app/page.tsx and app/about/page.tsx).
 */
export function hasFounderPortrait(): boolean {
  return fs.existsSync(
    path.join(process.cwd(), "public", "founder", "cierra-choucair.jpg"),
  );
}
