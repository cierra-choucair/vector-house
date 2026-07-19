# Vector House

**Ideas with direction.**

The website for Vector House, a strategic intelligence and advisory firm for
frontier technology. Built with Next.js (App Router), TypeScript, Tailwind CSS
and Framer Motion. Content is stored in typed data files (no CMS), structured
for a clean migration to a headless CMS later.

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
- [Configuring the contact form](#configuring-the-contact-form)
- [Configuring the newsletter](#configuring-the-newsletter)
- [Configuring analytics](#configuring-analytics)
- [Replacing placeholder information](#replacing-placeholder-information)
- [Basic SEO maintenance](#basic-seo-maintenance)

---

## Local installation

Requirements: **Node.js 20+** (22 recommended) and npm.

```bash
git clone <repository-url> vector-house
cd vector-house
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
npm run build   # type-checks, lints-adjacent compile, prerenders all routes
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

1. In Vercel, open **Settings → Domains** and add `vectorhouse.com` (and
   `www.vectorhouse.com`, redirected to the apex or vice versa).
2. At your DNS provider, add the records Vercel shows you (an `A` record for
   the apex, `CNAME` for `www`).
3. Set `NEXT_PUBLIC_SITE_URL` to the final URL and redeploy so metadata,
   sitemap and structured data pick it up.
4. If the public email address differs from the placeholder, update it in
   `data/site.ts`.

## Project structure

```
app/                    Routes (App Router)
  api/contact/          Contact form endpoint
  api/newsletter/       Newsletter endpoint
  insights/[slug]/      Article template + per-article OG image
  sitemap.ts            XML sitemap
  robots.ts             robots.txt
  opengraph-image.tsx   Site-wide OG image
components/
  forms/                ContactForm, NewsletterForm
  insights/             Article cards, explorer, body, share, progress
  layout/               Header, MobileNav, Footer
  sections/             Hero, PageHero, CtaSection, VectorField, ...
  seo/                  JsonLd
  ui/                   Button, Container, Eyebrow, Field, Logo, Reveal, ...
content/articles.ts     All Insights articles (block-based bodies)
data/                   Site config, navigation, services, speaking, contact
lib/                    SEO, schema.org, validation, email, newsletter, analytics
types/                  Shared TypeScript types
public/                 Static assets
```

Central configuration lives in:

- `data/site.ts` — identity, URL, email, social links, **feature flags**
- `data/navigation.ts` — header and footer navigation
- `data/services.ts` — capabilities, offers, engagements
- `content/articles.ts` — articles and categories
- `app/globals.css` — design tokens (colors, fonts, tracking)

## Updating text and images

- **Page copy** for repeated structures (capabilities, offers, themes,
  engagement lists) lives in `data/`. One-off editorial copy lives in the
  page files under `app/`, kept in plain JSX for easy editing.
- **Colors and fonts** are design tokens in `app/globals.css` under `@theme`.
- **Imagery** is deliberately vector-based (inline SVG components such as
  `VectorField` and `ArticleVisual`), so there are no raster assets to
  manage. If you add photographs (e.g. speaker photos), put them in
  `public/` and render them with `next/image` for automatic optimization
  and lazy loading.

## Adding an article

1. Open `content/articles.ts`.
2. Copy an existing entry in the `articles` array and edit:
   - `slug` — URL path segment, kebab-case, unique
   - `title`, `subtitle`, `excerpt`
   - `category` — one of the categories in `articleCategories`
   - `date` (ISO `YYYY-MM-DD`) and `readingTime`
   - `featured: true` on at most one article (the Insights hero)
   - `body` — an array of typed blocks: `paragraph`, `heading`,
     `pullquote`, `list`
3. Done. The article page, Insights grid, search index, related articles,
   sitemap entry, structured data and Open Graph image are all generated
   from that one object.

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

Signup forms (footer and Insights page) post to `/api/newsletter`, which
routes through `lib/newsletter.ts`. Set the variables for exactly one
provider — Buttondown, ConvertKit, Beehiiv or Mailchimp (see
[Environment variables](#environment-variables)); the first configured
provider in that order wins. With none configured, signups are logged to the
server console and reported as successful.

## Configuring analytics

Analytics are optional and cookie-free. Set **one** of:

- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` — e.g. `vectorhouse.com`
- `NEXT_PUBLIC_FATHOM_SITE_ID` — your Fathom site ID

With neither set, no analytics script loads at all (`lib/analytics.tsx`).

## Replacing placeholder information

Search the codebase for **`[VERIFIED CONTENT REQUIRED]`**. Each marker sits
next to a value or empty data array awaiting verified, real-world content:

- `data/site.ts` — production domain, public email address, LinkedIn URL
- `data/speaking.ts` — selected events, testimonials, video credits
- `app/about/page.tsx` — selected speaking, selected writing, current ventures
- `app/privacy/page.tsx`, `app/terms/page.tsx` — legal review + effective dates

Sections that depend on unverified content are hidden by the
`featureFlags` object in `data/site.ts` and render nothing until you fill in
the data **and** flip the matching flag to `true`. The live site never shows
raw placeholder text.

Truthfulness rule carried over from the brief: never invent client names,
logos, revenue figures, testimonials, awards, publication credits, speaking
appearances, academic credentials, partnerships or press coverage.

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
