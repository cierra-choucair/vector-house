/**
 * Shared types for Vector House.
 *
 * Content types are deliberately CMS-shaped: flat fields, string slugs and
 * a block-based article body so the data layer can be migrated to a headless
 * CMS (Sanity, Contentful, Payload) without reworking components.
 */

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  /** lucide icon name, resolved in the footer component */
  icon: "linkedin" | "mail" | "x";
};

export type Capability = {
  title: string;
  description: string;
  href: string;
};

export type ServiceOffer = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  deliverablesLabel: string;
  deliverables: string[];
  useCasesLabel?: string;
  useCases?: string[];
};

export type ArticleCategory =
  | "Strategic Intelligence"
  | "Frontier Markets"
  | "Founder Strategy"
  | "Quantum"
  | "Artificial Intelligence"
  | "Science and Society"
  | "Global Ecosystems";

/**
 * Rich article bodies are stored as typed blocks rather than raw HTML or MDX
 * so they render through components and port cleanly to a CMS later.
 */
export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "pullquote"; text: string }
  | { type: "list"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: ArticleCategory;
  author: string;
  /** ISO date string, e.g. "2026-05-12" */
  date: string;
  readingTime: string;
  featured?: boolean;
  body: ArticleBlock[];
};

export type SpeakingFormat = {
  title: string;
  description: string;
};

export type SpeakingTheme = {
  title: string;
  description: string;
};

export type ContactFormData = {
  name: string;
  organization: string;
  email: string;
  role: string;
  interest: string;
  description: string;
  timeline: string;
  budget: string;
  referral: string;
  /** Honeypot field. Humans never fill this in. */
  company?: string;
};

export type FieldErrors = Partial<Record<keyof ContactFormData, string>>;

export type ApiResult =
  | { ok: true; message: string }
  | { ok: false; message: string; errors?: Record<string, string> };
