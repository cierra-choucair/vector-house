import type { MetadataRoute } from "next";
import { getAllArticles } from "@/content/articles";
import { featureFlags, siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/about", priority: 0.8 },
    { path: "/about/portfolio", priority: 0.7 },
    { path: "/speaking", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
    { path: "/privacy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
    // The Ideas section joins the sitemap when it is published.
    ...(featureFlags.showIdeas ? [{ path: "/ideas", priority: 0.8 }] : []),
  ];

  const pages: MetadataRoute.Sitemap = staticRoutes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly",
    priority,
  }));

  const articles: MetadataRoute.Sitemap = featureFlags.showIdeas
    ? getAllArticles().map((article) => ({
        url: `${siteConfig.url}/ideas/${article.slug}`,
        lastModified: new Date(`${article.date}T00:00:00Z`),
        changeFrequency: "yearly",
        priority: 0.6,
      }))
    : [];

  return [...pages, ...articles];
}
