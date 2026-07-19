import type { NavItem } from "@/types";

/** Primary header navigation. */
export const mainNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Intelligence", href: "/strategic-intelligence" },
  { label: "Founder Advisory", href: "/founder-advisory" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Header call to action. */
export const navCta: NavItem = { label: "Start a conversation", href: "/contact" };

/** Footer columns. */
export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Services",
    items: [
      { label: "All services", href: "/services" },
      { label: "Strategic Intelligence", href: "/strategic-intelligence" },
      { label: "Founder Advisory", href: "/founder-advisory" },
      { label: "Ecosystem & Market Entry", href: "/ecosystem-market-entry" },
    ],
  },
  {
    heading: "Firm",
    items: [
      { label: "About", href: "/about" },
      { label: "Insights", href: "/insights" },
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
