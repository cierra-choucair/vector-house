import type { NavItem } from "@/types";

/**
 * Primary header navigation.
 * Structure follows the foundational document: Home · Services · Work ·
 * About · Ideas · Contact.
 */
export const mainNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Ideas", href: "/ideas" },
  { label: "Contact", href: "/contact" },
];

/** Header call to action. */
export const navCta: NavItem = { label: "Start a conversation", href: "/contact" };

/** Footer columns. */
export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Practice",
    items: [
      { label: "Communications & Marketing", href: "/services#communications" },
      { label: "Strategic Positioning", href: "/services#positioning" },
      { label: "Intelligence & Ecosystems", href: "/services#intelligence" },
      { label: "Advisory & Special Projects", href: "/services#advisory" },
      { label: "Ways to begin", href: "/services#begin" },
    ],
  },
  {
    heading: "Firm",
    items: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Ideas", href: "/ideas" },
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
