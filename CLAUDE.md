# Vector House

Marketing/advisory site for Vector House. Next.js 16 (App Router), TypeScript,
Tailwind CSS v4, Framer Motion, lucide-react. No CMS: content lives in
`content/` and `data/` as typed objects.

## Commands

- `npm run dev` — dev server
- `npm run build` — production build (also the primary correctness check)
- `npm run lint` — ESLint (flat config, eslint-config-next)
- `npx tsc --noEmit` — typecheck

## Conventions

- Copy and structured content belong in `data/` or `content/`, never inline in
  components.
- Unverified claims (clients, events, credits) are gated behind
  `featureFlags` in `data/site.ts` and marked `[VERIFIED CONTENT REQUIRED]`.
  Never invent client names, statistics, testimonials or credentials.
- Design tokens are defined in `app/globals.css` (`@theme`): surfaces
  `night/panel/card`, line `edge`, text `paper/fog`, accents `signal/iris`.
- All motion must respect `prefers-reduced-motion` (see `Reveal`,
  `VectorField`).
- Server-only integrations live in `lib/email.ts` / `lib/newsletter.ts`;
  never import them from client components.
