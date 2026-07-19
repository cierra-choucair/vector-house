import type { MetadataRoute } from "next";
import { getAllArticles } from "@/content/articles";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/strategic-intelligence", priority: 0.9 },
    { path: "/founder-advisory", priority: 0.9 },
    { path: "/ecosystem-market-entry", priority: 0.9 },
    { path: "/about", priority: 0.8 },
    { path: "/insights", priority: 0.8 },
    { path: "/speaking", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
    { path: "/privacy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
  ];

  const pages: MetadataRoute.Sitemap = staticRoutes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly",
    priority,
  }));

  const articles: MetadataRoute.Sitemap = getAllArticles().map((article) => ({
    url: `${siteConfig.url}/insights/${article.slug}`,
    lastModified: new Date(`${article.date}T00:00:00Z`),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...pages, ...articles];
}
