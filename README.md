# Fourth Axis

**The missing dimension between vision and execution.**

The website for Fourth Axis, a strategy, communications and intelligence
practice for consequential technologies. Built with Next.js (App Router),
TypeScript, Tailwind CSS and Framer Motion. Content is stored in typed data
files (no CMS), structured for a clean migration to a headless CMS later.

> Note: the repository is named `vector-house` from before the rebrand;
> the product is Fourth Axis throughout.

---

## Contents

- [Local installation](#local-installation)
- [Environment variables](#environment-variables)
- [Running the development server](#running-the-development-server)
- [Building for production](#building-for-production)
- [Deployment to Vercel](#deployment-to-vercel)
- [Connecting a custom domain](#connecting-a-custom-domain)
- [Project structure](#project-structure)
- [Updating text and images](#updating-text-and-images)
- [Adding an article](#adding-an-article)
- [Editing services, offers and proof stories](#editing-services-offers-and-proof-stories)
- [Configuring the contact form](#configuring-the-contact-form)
- [Configuring the newsletter](#configuring-the-newsletter)
- [Configuring analytics](#configuring-analytics)
- [Replacing placeholder information](#replacing-placeholder-information)
- [Basic SEO maintenance](#basic-seo-maintenance)

---

## Local installation

Requirements: **Node.js 20+** (22 recommended) and npm.

```bash
git clone <repository-url> fourth-axis
cd fourth-axis
npm install
cp .env.example .env.local   # optional for local dev; everything works without it
```

## Environment variables

All configuration is documented inline in [`.env.example`](.env.example).
Nothing is required for local development: with no variables set, the contact
form and newsletter log to the server console and report success, and no
analytics script loads.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical production URL used in metadata, sitemap and structured data |
| `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `CONTACT_SEND_CONFIRMATION` | Contact form via Resend |
| `FORMSPREE_ENDPOINT` | Contact form via Formspree (alternative to Resend) |
| `BUTTONDOWN_API_KEY` | Newsletter via Buttondown |
| `CONVERTKIT_API_KEY`, `CONVERTKIT_FORM_ID` | Newsletter via ConvertKit (Kit) |
| `BEEHIIV_API_KEY`, `BEEHIIV_PUBLICATION_ID` | Newsletter via Beehiiv |
| `MAILCHIMP_API_KEY`, `MAILCHIMP_LIST_ID` | Newsletter via Mailchimp |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Cookie-free analytics via Plausible |
| `NEXT_PUBLIC_FATHOM_SITE_ID` | Cookie-free analytics via Fathom |

Secrets (everything without the `NEXT_PUBLIC_` prefix) are read only on the
server and are never shipped to the browser.

## Running the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Building for production

```bash
npm run build   # type-checks, prerenders all routes
npm start       # serve the production build locally
```

Also useful:

```bash
npx tsc --noEmit   # standalone typecheck
npm run lint       # ESLint
```

## Deployment to Vercel

1. Push the repository to GitHub (or GitLab/Bitbucket).
2. In [Vercel](https://vercel.com), choose **Add New → Project** and import
   the repository. Vercel detects Next.js automatically; no build settings
   need to change.
3. Under **Settings → Environment Variables**, add the variables you use
   (at minimum `NEXT_PUBLIC_SITE_URL`, plus your contact/newsletter/analytics
   providers).
4. Deploy. Every push to the default branch redeploys production; pull
   requests get preview URLs.

The site also runs on any Node host: `npm run build && npm start`.

## Connecting a custom domain

1. Complete formal business-name, trademark and domain clearance first
   (see the foundational positioning document).
2. In Vercel, open **Settings → Domains** and add the production domain
   (e.g. `fourthaxis.com`, plus `www` redirected to the apex).
3. At your DNS provider, add the records Vercel shows you (an `A` record for
   the apex, `CNAME` for `www`).
4. Set `NEXT_PUBLIC_SITE_URL` to the final URL and redeploy so metadata,
   sitemap and structured data pick it up.
5. If the public email address differs from the placeholder, update it in
   `data/site.ts`.

## Project structure

```
app/                    Routes (App Router)
  api/contact/          Contact form endpoint
  api/newsletter/       Newsletter endpoint
  about/                Founder page
  about/portfolio/      Founder's Expanded Portfolio
  ideas/                Editorial section (unpublished; gated by flag)
  services/             The four practices + offer portfolio
  speaking/             Speaking and moderation
  sitemap.ts            XML sitemap
  robots.ts             robots.txt
  opengraph-image.tsx   Site-wide OG image
components/
  forms/                ContactForm, NewsletterForm
  ideas/                Article cards, explorer, body, share, progress
  layout/               Header, MobileNav, Footer
  sections/             Hero, TesseractField, FounderPortrait, PageHero, ...
  seo/                  JsonLd
  ui/                   Button, Container, Eyebrow, Field, Logo, Reveal, ...
content/articles.ts     All articles (block-based bodies)
data/                   Site config, navigation, services, portfolio, speaking
lib/                    SEO, schema.org, validation, email, newsletter, analytics
types/                  Shared TypeScript types
public/                 Static assets (founder/ holds the portrait)
```

Central configuration lives in:

- `data/site.ts` — identity, master line, URL, email, social links,
  **feature flags** (including `showIdeas`)
- `data/navigation.ts` — header and footer navigation
- `data/services.ts` — the four practices, engagement depths, offers,
  Four Dimensions methodology, audiences
- `data/portfolio.ts` — the Founder's Expanded Portfolio and the homepage
  credibility highlights
- `content/articles.ts` — articles and categories
- `app/globals.css` — design tokens (colors, fonts, tracking)

Old routes redirect (`next.config.ts`): the retired service pages and
`/work` permanently, and `/insights*` temporarily to the homepage while the
Ideas section is unpublished.

**Founder portrait:** add the photograph at
`public/founder/cierra-choucair.jpg` (portrait orientation, roughly 6:7).
It renders automatically on the next build — no flag to flip (see
`lib/founder.ts`) — appearing in the homepage hero and on the About page.
Until then those slots render the abstract tesseract panel.

**Publishing Ideas:** set `showIdeas: true` in `data/site.ts`. That single
flag restores the navigation links, the routes and the sitemap entries.
Also point the `/insights*` redirects in `next.config.ts` back to
`/ideas*`.

## Updating text and images

- **Page copy** for repeated structures (practices, offers, dimensions,
  audiences, proof stories) lives in `data/`. One-off editorial copy lives
  in the page files under `app/`, kept in plain JSX for easy editing.
- **Colors and fonts** are design tokens in `app/globals.css` under `@theme`.
  All type is DM Sans; the `serif`/`mono` token names alias to it so a
  second family can be reintroduced by editing one line.
- **Imagery** is deliberately vector-based. The tesseract is the brand
  symbol: `TesseractMark` (logo), `TesseractField` (rotating hero visual),
  plus generative article visuals. If you add photographs (e.g. the founder
  portrait), put them in `public/` and render them with `next/image`.

## Adding an article

1. Open `content/articles.ts`.
2. Copy an existing entry in the `articles` array and edit:
   - `slug` — URL path segment, kebab-case, unique
   - `title`, `subtitle`, `excerpt`
   - `category` — one of the categories in `articleCategories`
   - `date` (ISO `YYYY-MM-DD`) and `readingTime`
   - `featured: true` on at most one article (the Ideas hero)
   - `body` — an array of typed blocks: `paragraph`, `heading`,
     `pullquote`, `list`
3. Done. The article page, Ideas grid, search index, related articles,
   sitemap entry, structured data and Open Graph image are all generated
   from that one object.

## Editing services, offers and the portfolio

- **The four practices** (names, summaries, deliverable lists) and the
  **offer portfolio** ("Ways to begin") live in `data/services.ts`. Offers
  marked `primary: true` appear on the homepage.
- **The Founder's Expanded Portfolio** lives in `data/portfolio.ts`,
  grouped by domain, with the homepage credibility band drawn from
  `publicRecordHighlights` in the same file. Keep entries within what the
  foundational document supports: precise roles, no invented outcomes.
  HKA client work and partner-owned programs require explicit permission
  before being expanded. When public links are gathered, add `href`
  values and enable `featureFlags.showProofLinks` in `data/site.ts`.

## Configuring the contact form

The form posts to `/api/contact`, which validates server-side (same rules as
the client) and delivers through `lib/email.ts`:

- **Resend (recommended):** set `RESEND_API_KEY`, verify your domain in
  Resend, set `CONTACT_FROM_EMAIL` to a verified sender and
  `CONTACT_TO_EMAIL` to the inbox that should receive inquiries. Set
  `CONTACT_SEND_CONFIRMATION=true` to send visitors an automatic
  confirmation email.
- **Formspree:** set `FORMSPREE_ENDPOINT` to your form's URL instead.
- **Neither:** submissions are logged to the server console and reported as
  successful (development mode).

A hidden honeypot field silently drops naive bot submissions.

## Configuring the newsletter

Signup forms (footer and Ideas page) post to `/api/newsletter`, which
routes through `lib/newsletter.ts`. Set the variables for exactly one
provider — Buttondown, ConvertKit, Beehiiv or Mailchimp (see
[Environment variables](#environment-variables)); the first configured
provider in that order wins. With none configured, signups are logged to the
server console and reported as successful.

## Configuring analytics

Analytics are optional and cookie-free. Set **one** of:

- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` — e.g. `fourthaxis.com`
- `NEXT_PUBLIC_FATHOM_SITE_ID` — your Fathom site ID

With neither set, no analytics script loads at all (`lib/analytics.tsx`).

## Replacing placeholder information

Search the codebase for **`[VERIFIED CONTENT REQUIRED]`**. Each marker sits
next to a value awaiting verified, real-world content:

- `data/site.ts` — production domain (pending clearance), public email
  address, LinkedIn URL
- `data/portfolio.ts` — public links and permissions for portfolio entries
- `public/founder/` — the founder portrait (renders automatically once
  the file exists)
- `app/about/page.tsx` — source links for the public-record items
- `data/speaking.ts` — selected events, testimonials, video credits
- `app/privacy/page.tsx`, `app/terms/page.tsx` — legal review + effective dates

Sections that depend on unverified content are hidden by the
`featureFlags` object in `data/site.ts` and render nothing until you fill in
the data **and** flip the matching flag to `true`. The live site never shows
raw placeholder text.

Truthfulness rules: never invent client names, logos, revenue figures,
testimonials, awards, publication credits, speaking appearances, academic
credentials, partnerships or press coverage. Present partner-owned programs
and client work under other organizations (including HKA) only with explicit
permission and precise attribution.

## Basic SEO maintenance

- Per-route titles and descriptions are set in each page's
  `metadata`/`generateMetadata` via `lib/seo.ts`; the shared keyword set
  lives in `data/site.ts`.
- The sitemap (`app/sitemap.ts`) and robots rules (`app/robots.ts`) update
  automatically as articles are added.
- Structured data (Organization, WebSite, ProfessionalService, Person,
  Article) is generated in `lib/schema.ts` — update it if the firm's
  identity or offerings change.
- Open Graph images are generated from `lib/og.tsx`; article cards pick up
  each article's title automatically.
- After changing the domain, update `NEXT_PUBLIC_SITE_URL` and redeploy;
  canonical URLs, OG URLs, the sitemap and robots.txt all derive from it.
