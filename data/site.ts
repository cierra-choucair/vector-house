/**
 * Central site configuration.
 *
 * Everything an editor might need to change lives here: identity, URLs,
 * contact details, social links and feature flags. Components read from
 * this file rather than hard-coding values.
 */

export const siteConfig = {
  name: "Vector House",
  tagline: "Ideas with direction.",
  description:
    "Vector House is a strategic intelligence and advisory firm helping frontier-technology companies translate technical advantage into market position, authority and commercial opportunity.",

  /**
   * Canonical production URL.
   * Override with NEXT_PUBLIC_SITE_URL once the real domain is connected.
   * [VERIFIED CONTENT REQUIRED] — confirm the final domain.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vectorhouse.com",

  /**
   * Public contact address.
   * [VERIFIED CONTENT REQUIRED] — replace if the live domain or inbox differs.
   */
  email: "hello@vectorhouse.com",

  founder: {
    name: "Cierra Choucair",
    role: "Founder & Principal",
    shortBio:
      "Strategist, writer, analyst and ecosystem builder working across quantum technology, artificial intelligence, scientific innovation and international technology communities.",
  },

  keywords: [
    "frontier technology strategy",
    "deep-tech strategy",
    "quantum technology consulting",
    "emerging technology market intelligence",
    "founder advisory",
    "technology ecosystem strategy",
    "international market entry",
    "competitive intelligence for deep tech",
    "strategic positioning for technical founders",
  ],
} as const;

export const socialLinks = [
  {
    label: "LinkedIn",
    /** [VERIFIED CONTENT REQUIRED] — replace with the real LinkedIn profile URL. */
    href: "https://www.linkedin.com/company/vector-house",
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
 * verification. Each hidden section renders nothing until its flag is
 * enabled, so the live site never shows placeholder text.
 *
 * Flip a flag to true only after the underlying data file has been filled
 * in with verified content (search the codebase for
 * "[VERIFIED CONTENT REQUIRED]").
 */
export const featureFlags = {
  /** Selected speaking engagements list (About + Speaking pages). */
  showSelectedEvents: false,
  /** Embedded speaking video reel. */
  showSpeakingVideo: false,
  /** Testimonials on the Speaking page. */
  showTestimonials: false,
  /** Speaker photographs. */
  showSpeakerPhotos: false,
  /** Downloadable speaker sheet PDF. */
  showSpeakerSheet: false,
  /** Selected writing and analysis credits (About page). */
  showSelectedWriting: false,
  /** Current ventures list (About page). */
  showCurrentVentures: false,
} as const;

export type FeatureFlag = keyof typeof featureFlags;
