import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  /** Extra route-specific keywords appended to the site-wide set. */
  keywords?: string[];
  ogType?: "website" | "article";
};

/**
 * Build consistent per-route metadata. Every page calls this so titles,
 * canonical URLs and Open Graph data follow one convention.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  ogType = "website",
}: PageSeo): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: ogType,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
