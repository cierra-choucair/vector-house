import type { NavItem } from "@/types";
import { featureFlags } from "@/data/site";

/**
 * Primary header navigation.
 * "Ideas" reappears automatically when featureFlags.showIdeas is enabled.
 */
export const mainNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  ...(featureFlags.showIdeas ? [{ label: "Ideas", href: "/ideas" }] : []),
  { label: "Speaking", href: "/speaking" },
  { label: "Contact", href: "/contact" },
];

/** Header call to action. */
export const navCta: NavItem = { label: "Start a conversation", href: "/contact" };

/** Footer columns. */
export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Practice",
    items: [
      { label: "Positioning & Commercialization", href: "/services#positioning" },
      { label: "Communications & Authority", href: "/services#communications" },
      { label: "Ecosystem Activation", href: "/services#ecosystem" },
      { label: "Executive Advisory", href: "/services#advisory" },
      { label: "Ways to begin", href: "/services#begin" },
    ],
  },
  {
    heading: "Firm",
    items: [
      { label: "About", href: "/about" },
      { label: "Founder's Portfolio", href: "/about/portfolio" },
      ...(featureFlags.showIdeas ? [{ label: "Ideas", href: "/ideas" }] : []),
      { label: "Speaking", href: "/speaking" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];
