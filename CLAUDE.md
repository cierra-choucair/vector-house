# Fourth Axis

Marketing/advisory site for Fourth Axis (formerly Vector House — the repo
name predates the rebrand). Next.js 16 (App Router), TypeScript, Tailwind
CSS v4, Framer Motion, lucide-react. No CMS: content lives in `content/`
and `data/` as typed objects. Brand source of truth: the "Fourth Axis —
Foundational Positioning" document (July 2026); the message system in
`data/site.ts` and `data/services.ts` follows it.

## Commands

- `npm run dev` — dev server
- `npm run build` — production build (also the primary correctness check)
- `npm run lint` — ESLint (flat config, eslint-config-next)
- `npx tsc --noEmit` — typecheck

## Conventions

- Copy and structured content belong in `data/` or `content/`, never inline in
  components.
- Unverified claims (links, events, testimonials, photos) are gated behind
  `featureFlags` in `data/site.ts` and marked `[VERIFIED CONTENT REQUIRED]`.
  Never invent client names, statistics, testimonials or credentials.
  Proof stories in `data/work.ts` must stay within what the foundational
  document supports; HKA client work and partner-owned programs need
  explicit permission before appearing.
- Design tokens are defined in `app/globals.css` (`@theme`): surfaces
  `night/panel/card`, line `edge`, text `paper/fog`, accents `signal`
  (midnight indigo) / `iris` (deep plum). All type is DM Sans; the
  serif/mono tokens intentionally alias to it.
- The tesseract is the structural brand symbol (`TesseractMark`,
  `TesseractField`). Keep it wireframe and architectural, never
  decorative sci-fi.
- All motion must respect `prefers-reduced-motion` (see `Reveal`,
  `TesseractField`).
- Server-only integrations live in `lib/email.ts` / `lib/newsletter.ts`;
  never import them from client components.
- Old routes (`/insights*`, `/strategic-intelligence`, `/founder-advisory`,
  `/ecosystem-market-entry`) redirect via `next.config.ts`; don't recreate
  those paths.
