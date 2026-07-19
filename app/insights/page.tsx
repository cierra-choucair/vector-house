import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { NewsletterCta } from "@/components/sections/NewsletterCta";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { InsightsExplorer } from "@/components/insights/InsightsExplorer";
import { ArticleVisual } from "@/components/insights/ArticleVisual";
import { getAllArticles, getFeaturedArticle } from "@/content/articles";
import { formatDate } from "@/lib/utils";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Insights",
  description:
    "Analysis on frontier markets, strategic intelligence, founder strategy and the systems shaping quantum, AI and deep tech. Written by Vector House.",
  path: "/insights",
  keywords: ["frontier technology analysis", "deep tech insights"],
});

export default function InsightsPage() {
  const featured = getFeaturedArticle();
  const articles = getAllArticles();

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Signals from the frontier."
        lede="Analysis on emerging markets, technical authority and the systems shaping frontier technology. Written to be useful, not merely current."
      />

      {/* Featured article */}
      <section>
        <Container className="py-16 md:py-20">
          <Reveal>
            <p className="font-mono text-[0.7rem] uppercase tracking-eyebrow text-fog">
              Featured
            </p>
            <article className="group relative mt-6 grid gap-0 overflow-hidden border border-edge bg-panel transition-colors hover:border-fog/50 lg:grid-cols-2">
              <ArticleVisual
                slug={featured.slug}
                category={featured.category}
                className="aspect-video border-0 lg:aspect-auto lg:border-r lg:border-edge"
              />
              <div className="flex flex-col p-8 md:p-12">
                <p className="flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-eyebrow text-fog">
                  <span className="text-signal">{featured.category}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                </p>
                <h2 className="mt-5 font-serif text-3xl leading-tight text-paper transition-colors group-hover:text-signal md:text-4xl">
                  <Link
                    href={`/insights/${featured.slug}`}
                    className="focus-visible:outline-none"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    {featured.title}
                  </Link>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-fog">
                  {featured.subtitle}
                </p>
                <div className="mt-auto flex items-center justify-between pt-8 text-xs text-fog">
                  <span className="font-mono">{featured.readingTime}</span>
                  <span className="inline-flex items-center gap-2 text-sm transition-colors group-hover:text-signal">
                    Read the analysis
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        </Container>
      </section>

      {/* Search, filters, grid */}
      <section className="border-t border-edge">
        <Container className="py-16 md:py-20">
          <InsightsExplorer articles={articles} />
        </Container>
      </section>

      <NewsletterCta />
    </>
  );
}
