import { siteConfig, socialLinks } from "@/data/site";
import type { Article } from "@/types";

/**
 * JSON-LD structured data builders.
 * Rendered through the <JsonLd /> component (components/seo/JsonLd.tsx).
 */

const orgId = `${siteConfig.url}/#organization`;
const personId = `${siteConfig.url}/#founder`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: siteConfig.name,
    slogan: siteConfig.tagline,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    logo: `${siteConfig.url}/icon.svg`,
    sameAs: socialLinks
      .filter((l) => !l.href.startsWith("mailto:"))
      .map((l) => l.href),
    founder: { "@id": personId },
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#service`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    parentOrganization: { "@id": orgId },
    knowsAbout: [
      "Frontier technology strategy",
      "Quantum technology",
      "Artificial intelligence",
      "Market intelligence",
      "Strategic positioning",
      "Founder advisory",
      "International market entry",
    ],
    makesOffer: [
      "Strategic intelligence",
      "Founder advisory",
      "Ecosystem and market entry",
      "Speaking and moderation",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: siteConfig.founder.name,
    jobTitle: siteConfig.founder.role,
    description: siteConfig.founder.shortBio,
    url: `${siteConfig.url}/about`,
    worksFor: { "@id": orgId },
    knowsAbout: [
      "Quantum technology",
      "Artificial intelligence",
      "Deep tech",
      "Market intelligence",
      "Strategic communications",
      "Technology ecosystems",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: { "@id": orgId },
  };
}

export function articleSchema(article: Article) {
  const url = `${siteConfig.url}/insights/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}/#article`,
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: {
      "@type": "Person",
      "@id": personId,
      name: article.author,
    },
    publisher: { "@id": orgId },
    mainEntityOfPage: url,
    articleSection: article.category,
    image: `${siteConfig.url}/insights/${article.slug}/opengraph-image`,
  };
}
