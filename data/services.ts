import type { Capability, ServiceOffer } from "@/types";

/** Homepage capability grid. Each links to its service page. */
export const capabilities: Capability[] = [
  {
    title: "Strategic Intelligence",
    description:
      "Market landscapes, company analysis, competitive positioning and executive briefings for organizations making decisions in fast-moving technology sectors.",
    href: "/strategic-intelligence",
  },
  {
    title: "Founder Advisory",
    description:
      "Strategic counsel for technical founders who need to communicate their advantage, establish authority and make stronger commercial decisions.",
    href: "/founder-advisory",
  },
  {
    title: "Ecosystem & Market Entry",
    description:
      "Stakeholder mapping, partnership strategy and market-entry intelligence for organizations navigating international innovation ecosystems.",
    href: "/ecosystem-market-entry",
  },
  {
    title: "Narrative & Position",
    description:
      "Clear, defensible positioning that connects technical differentiation with commercial relevance.",
    href: "/services",
  },
];

/** Productized offers featured on the Services page. */
export const serviceOffers: ServiceOffer[] = [
  {
    slug: "frontier-tech-strategic-diagnostic",
    name: "Frontier-Tech Strategic Diagnostic",
    eyebrow: "01 / Diagnostic",
    summary:
      "A focused engagement for leadership teams that need a clear external perspective on their market position, narrative, visibility and commercial priorities.",
    deliverablesLabel: "Possible deliverables",
    deliverables: [
      "Leadership interview",
      "Review of company positioning and public presence",
      "Competitive and category assessment",
      "Identification of strategic gaps",
      "Prioritized recommendations",
      "Executive working session",
    ],
    useCasesLabel: "Use when",
    useCases: [
      "Early-stage strategic reset",
      "Fundraising preparation",
      "Market repositioning",
      "Founder visibility planning",
      "Commercial narrative development",
    ],
  },
  {
    slug: "market-intelligence-ecosystem-sprint",
    name: "Market Intelligence & Ecosystem Entry Sprint",
    eyebrow: "02 / Intelligence",
    summary:
      "For companies, investors and institutions evaluating an emerging market, geography, technology segment or partnership landscape.",
    deliverablesLabel: "Possible deliverables",
    deliverables: [
      "Market landscape",
      "Competitor analysis",
      "Stakeholder map",
      "Partner or target shortlist",
      "Ecosystem-entry strategy",
      "Expert interviews",
      "Executive briefing",
    ],
  },
  {
    slug: "founder-authority-sprint",
    name: "Founder Authority Sprint",
    eyebrow: "03 / Authority",
    summary:
      "For technical founders who need a coherent point of view and a repeatable way to communicate their company's significance.",
    deliverablesLabel: "Possible deliverables",
    deliverables: [
      "Founder positioning",
      "Core narrative",
      "Strategic messaging",
      "Signature themes",
      "Speaking and publication opportunities",
      "Editorial roadmap",
      "Executive communication guidance",
    ],
  },
  {
    slug: "custom-advisory",
    name: "Custom Advisory",
    eyebrow: "04 / Advisory",
    summary:
      "Scoped engagements for situations that fall outside a standard format, from diligence to category creation.",
    deliverablesLabel: "Typical projects",
    deliverables: [
      "Investor or commercial diligence",
      "Technology landscape analysis",
      "International ecosystem development",
      "Strategic research",
      "Category creation",
      "Executive briefings",
      "Workshops",
      "Moderation",
      "Special editorial or intelligence projects",
    ],
  },
];

/** Representative engagements shown on the homepage. Not client case studies. */
export const representativeEngagements: string[] = [
  "Assessing the strategic position of a quantum startup preparing for international expansion",
  "Mapping an emerging technology ecosystem for an investor or government organization",
  "Developing the founder narrative for a deeply technical company",
  "Evaluating competitors, partners and acquisition targets",
  "Turning a complex technology platform into a coherent market category",
  "Preparing leadership teams for investor, media and stakeholder conversations",
];

/** "Why Vector House" editorial theses on the homepage. */
export const whyVectorHouse: { title: string; text: string }[] = [
  {
    title: "Category creation, not conventional marketing",
    text: "Frontier technology rarely fits an existing market definition. The work is to define the category, not to compete louder inside the wrong one.",
  },
  {
    title: "Many audiences, evaluated at once",
    text: "The people judging an emerging technology often include scientists, investors, governments, customers and the public simultaneously. A position has to hold up in every room.",
  },
  {
    title: "Translation without reduction",
    text: "Technical complexity must be made legible without being flattened into empty simplification. Precision is what makes a claim credible.",
  },
  {
    title: "Visibility is not vanity",
    text: "In emerging industries, visibility influences funding, partnerships, recruitment, adoption and trust. It is commercial infrastructure, and it compounds.",
  },
  {
    title: "Intelligence with full context",
    text: "Useful market intelligence accounts for science, geopolitics, culture, policy and commercial realities in the same analysis, because markets do not separate them.",
  },
];
