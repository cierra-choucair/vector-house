/**
 * Contact form configuration: select options and field copy.
 * Kept as data so the form can evolve without touching component logic.
 */

export const interestOptions = [
  "Strategic intelligence",
  "Founder advisory",
  "Market or ecosystem entry",
  "Speaking or moderation",
  "Workshop",
  "Writing or editorial project",
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
