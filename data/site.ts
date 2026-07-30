/**
 * Central site configuration.
 *
 * Everything an editor might need to change lives here: identity, URLs,
 * contact details, social links and feature flags. Components read from
 * this file rather than hard-coding values.
 *
 * Brand source of truth: "Fourth Axis — Foundational Positioning"
 * (July 2026). The message system on this site follows that document.
 */

export const siteConfig = {
  name: "Fourth Axis",
  /** Master line. */
  tagline: "The missing dimension between vision and execution.",
  /** Category descriptor used in eyebrows and the footer. */
  descriptor:
    "Communications, marketing, strategy and intelligence for consequential technology",
  /** Primary positioning statement. */
  description:
    "Fourth Axis is a strategy, communications and intelligence practice for consequential technologies. We help founders and institutions turn technical complexity into clear market positions, credible narratives and coordinated action.",

  /**
   * Canonical production URL.
   * Override with NEXT_PUBLIC_SITE_URL once the real domain is connected.
   * [VERIFIED CONTENT REQUIRED] — complete formal domain and trademark
   * clearance before public launch (see foundational document, "Immediate
   * build priorities").
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fourthaxis.com",

  /**
   * Public contact address.
   * [VERIFIED CONTENT REQUIRED] — replace if the live domain or inbox differs.
   */
  email: "hello@fourthaxis.com",

  founder: {
    name: "Cierra Choucair",
    role: "Founder & Principal",
    shortBio:
      "Strategist, science communicator, journalist, founder and global speaker working across quantum technology, AI, scientific discovery and emerging systems.",
  },

  keywords: [
    "consequential technology",
    "quantum technology communications",
    "deep tech marketing strategy",
    "strategic positioning for technical founders",
    "emerging technology market intelligence",
    "technology ecosystem strategy",
    "thought leadership for deep tech",
    "founder positioning",
    "quantum strategy consulting",
    "international market entry",
  ],
} as const;

export const socialLinks = [
  {
    label: "LinkedIn",
    /** [VERIFIED CONTENT REQUIRED] — replace with the real LinkedIn profile URL. */
    href: "https://www.linkedin.com/company/fourth-axis",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: "mail",
  },
] as const;

/**
 * Feature flags for sections that depend on content still awaiting
 * verification or permissions. Each hidden section renders nothing until
 * its flag is enabled, so the live site never shows placeholder text.
 *
 * Flip a flag to true only after the underlying data has been filled in
 * with verified content (search the codebase for
 * "[VERIFIED CONTENT REQUIRED]").
 */
export const featureFlags = {
  /**
   * External links/artifacts on Work proof stories. The stories themselves
   * are drawn from the foundational positioning document; public links,
   * outcomes and any partner-owned material still need gathering and
   * permission checks before display.
   */
  showProofLinks: false,
  /** Selected speaking engagements list (Speaking page). */
  showSelectedEvents: false,
  /** Embedded speaking video reel. */
  showSpeakingVideo: false,
  /** Testimonials on the Speaking page. */
  showTestimonials: false,
  /** Founder / speaker photographs. */
  showSpeakerPhotos: false,
  /** Downloadable speaker sheet PDF. */
  showSpeakerSheet: false,
} as const;

export type FeatureFlag = keyof typeof featureFlags;
