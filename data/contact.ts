/**
 * Contact form configuration: select options and field copy.
 * Kept as data so the form can evolve without touching component logic.
 * Interest options mirror the four practices plus common standalone asks.
 */

export const interestOptions = [
  "Communications and marketing",
  "Strategic positioning",
  "Market and ecosystem intelligence",
  "Advisory or embedded partnership",
  "Event, program or track strategy",
  "Speaking or moderation",
  "Other",
] as const;

export const budgetOptions = [
  "Under $2,500",
  "$2,500–$5,000",
  "$5,000–$10,000",
  "$10,000–$25,000",
  "$25,000+",
  "Not yet determined",
] as const;

export const timelineOptions = [
  "As soon as possible",
  "Within a month",
  "One to three months",
  "Later this year",
  "Exploratory for now",
] as const;
