# Fourth Axis — Launch Runbook

The path from this repository to a live, indexed site. Steps are in order;
everything here except step 0 takes roughly an hour of account work.

---

## 0. Before anything: clear the name

Per the foundational document, complete business-name, trademark, domain
and social-handle clearance for "Fourth Axis" **before** public launch.
Once cleared, buy the domain — good registrars: Cloudflare Registrar
(at-cost pricing), Namecheap, or directly inside Vercel (fastest setup).
Buy the `.com` plus any defensive variants you care about.

## 1. Put the site on Vercel

1. Merge the working branch into `main` (open a PR from
   `claude/vector-house-website-b91k1b`, review, merge).
2. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import
   this GitHub repository. Vercel auto-detects Next.js; change nothing.
3. Deploy. You now have a live `*.vercel.app` URL. Every push to `main`
   redeploys production automatically; every PR gets a preview URL.

## 2. Connect the domain

1. In the Vercel project: **Settings → Domains** → add `fourthaxis.com`
   (or the cleared domain) and `www.fourthaxis.com`. Choose the apex as
   primary with `www` redirecting to it.
2. At your registrar, add the records Vercel displays:
   - Apex `A` record → `76.76.21.21`
   - `www` `CNAME` → `cname.vercel-dns.com`
   (If the domain was bought through Vercel, this is automatic.)
3. Wait for DNS to propagate (minutes to a few hours). Vercel provisions
   HTTPS automatically.

## 3. Point the site at its real URL

1. In Vercel: **Settings → Environment Variables** → add
   `NEXT_PUBLIC_SITE_URL = https://fourthaxis.com` (no trailing slash)
   for Production.
2. Redeploy (Deployments → ⋯ → Redeploy).

That single variable drives the canonical URLs, sitemap, robots.txt,
Open Graph URLs and structured data. If the final domain is anything
other than `fourthaxis.com`, also update the fallback and email address
in `data/site.ts`.

## 4. Make the contact form actually deliver

Until a provider is configured the form logs to the server console.
For production:

1. Create a [Resend](https://resend.com) account, verify the domain
   (Resend gives you DNS records: SPF, DKIM), create an API key.
2. In Vercel env vars set:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` — the inbox that receives inquiries
   - `CONTACT_FROM_EMAIL` — e.g. `Fourth Axis <inquiries@fourthaxis.com>`
   - `CONTACT_SEND_CONFIRMATION=true` (optional)
3. While you are in DNS: set up the `hello@` mailbox itself (Google
   Workspace, Fastmail, or your registrar's email) and update
   `data/site.ts` if the address differs.
4. Optional: configure a newsletter provider (Buttondown/ConvertKit/
   Beehiiv/Mailchimp — see `.env.example`) so footer signups are stored.

## 5. Get it searchable

The site already ships everything crawlers need: per-page titles and
descriptions, canonical URLs, `sitemap.xml`, `robots.txt`, Open Graph
images and Organization/Person/ProfessionalService/WebSite JSON-LD.
What remains is telling the search engines it exists:

1. **Google Search Console** — [search.google.com/search-console](https://search.google.com/search-console)
   - Add a **Domain** property for `fourthaxis.com`; verify via the DNS
     TXT record Google gives you (add it at the registrar).
   - **Sitemaps** → submit `https://fourthaxis.com/sitemap.xml`.
   - **URL Inspection** → inspect the homepage → **Request Indexing**.
     Do the same for `/services` and `/about`.
2. **Bing Webmaster Tools** — [bing.com/webmasters](https://www.bing.com/webmasters);
   use "Import from Google Search Console" (covers Bing, DuckDuckGo,
   and most AI-assistant search).
3. **Analytics** (optional, cookie-free): create a Plausible or Fathom
   site and set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` or
   `NEXT_PUBLIC_FATHOM_SITE_ID` in Vercel.

### What to expect

- Brand-name searches ("Fourth Axis Cierra Choucair", "Fourth Axis
  quantum") should surface within days of indexing.
- Competitive non-brand terms ("quantum communications advisory") take
  months and depend mostly on links and content, not configuration.

### The highest-leverage accelerators

Links from established pages are what move both discovery and ranking.
You are unusually well positioned here — update these to point at the
new domain as soon as it is live:

- LinkedIn profiles (personal + company page) — website field and a
  launch post.
- Existing public profiles: The Quantum Insider author page, ITU
  AI for Good speaker profile, Quantum 100 listing, QPLI/QUALIA and
  Quantum World Tour pages, Universum Labs and Android Dreams sites.
- Conference speaker bios going forward.
- When ready, publish the Ideas section (`featureFlags.showIdeas`) —
  the seven articles are indexable content targeting exactly the
  searches prospective clients make. Restore the `/insights* → /ideas*`
  redirects in `next.config.ts` at the same time.

## 6. Post-launch checks (15 minutes)

- Visit the live domain: pages load over HTTPS, `www` redirects.
- `https://fourthaxis.com/sitemap.xml` and `/robots.txt` show the real
  domain.
- Submit the contact form for real and confirm it lands in the inbox.
- Paste the homepage URL into LinkedIn's post composer and
  [opengraph.xyz](https://www.opengraph.xyz) — the tesseract share card
  should render.
- Run [PageSpeed Insights](https://pagespeed.web.dev) on the live URL.
- In Search Console a few days later: confirm pages are "Indexed".
