import type { SpeakingFormat, SpeakingTheme } from "@/types";

export const speakingFormats: SpeakingFormat[] = [
  {
    title: "Keynotes",
    description:
      "Original talks on frontier technology, emerging markets and the systems that decide which technologies matter.",
  },
  {
    title: "Panel moderation",
    description:
      "Structured, well-researched moderation that draws real positions out of technical and executive panelists.",
  },
  {
    title: "Executive conversations",
    description:
      "On-stage interviews and fireside chats with founders, investors, scientists and policymakers.",
  },
  {
    title: "Workshops",
    description:
      "Working sessions on positioning, narrative and market intelligence for leadership teams and programs.",
  },
  {
    title: "Documentary & interview hosting",
    description:
      "Hosting and interview work for film, video and audio projects covering science and frontier technology.",
  },
  {
    title: "International technology events",
    description:
      "Conference programming across quantum, AI and deep-tech communities in multiple regions.",
  },
];

export const speakingThemes: SpeakingTheme[] = [
  {
    title: "Making frontier technology visible",
    description:
      "Why the most consequential technologies are often the least legible, and what it takes to change that.",
  },
  {
    title: "Why emerging markets are built through narrative",
    description:
      "How categories, expectations and capital flows form around the stories a field tells about itself.",
  },
  {
    title: "The geopolitical development of quantum technology",
    description:
      "National programs, sovereign capability and what state involvement means for companies and investors.",
  },
  {
    title: "Communicating complexity without losing meaning",
    description:
      "Translation as a strategic discipline: making hard science legible without flattening it.",
  },
  {
    title: "Frontier technology and public trust",
    description:
      "What emerging fields owe the public, and why trust is a market condition rather than a PR outcome.",
  },
  {
    title: "Building global innovation ecosystems",
    description:
      "How research, capital, policy and community actually connect across borders, and where they fail to.",
  },
  {
    title: "The future of scientific discovery",
    description:
      "How AI, new instruments and new institutions are changing who does science and how it reaches the world.",
  },
  {
    title: "Technology, culture and the stories shaping adoption",
    description:
      "Why adoption is cultural before it is technical, and what history says about how new tools are received.",
  },
];

/**
 * Selected events, testimonials and video credits.
 * [VERIFIED CONTENT REQUIRED] — populate with confirmed engagements, then
 * enable the matching flags in data/site.ts. These render nothing until then.
 */
export const selectedEvents: { event: string; role: string; year: string }[] = [];

export const speakingTestimonials: { quote: string; attribution: string }[] = [];

export const speakingVideos: { title: string; url: string }[] = [];
