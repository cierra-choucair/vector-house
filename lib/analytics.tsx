import Script from "next/script";

/**
 * Cookie-free analytics.
 *
 * Renders nothing unless one of the following is set:
 *   NEXT_PUBLIC_PLAUSIBLE_DOMAIN — e.g. "fourthaxis.com"
 *   NEXT_PUBLIC_FATHOM_SITE_ID   — e.g. "ABCDEFGH"
 *
 * Both are privacy-first, cookie-free services, so no consent banner is
 * required in most jurisdictions. Configure in .env (see .env.example).
 */
export function Analytics() {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const fathomSiteId = process.env.NEXT_PUBLIC_FATHOM_SITE_ID;

  if (plausibleDomain) {
    return (
      <Script
        defer
        data-domain={plausibleDomain}
        src="https://plausible.io/js/script.js"
        strategy="afterInteractive"
      />
    );
  }

  if (fathomSiteId) {
    return (
      <Script
        defer
        data-site={fathomSiteId}
        src="https://cdn.usefathom.com/script.js"
        strategy="afterInteractive"
      />
    );
  }

  return null;
}
