import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArticleBody } from "@/components/insights/ArticleBody";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { ArticleVisual } from "@/components/insights/ArticleVisual";
import { ReadingProgress } from "@/components/insights/ReadingProgress";
import { ShareLinks } from "@/components/insights/ShareLinks";
import { NewsletterCta } from "@/components/sections/NewsletterCta";
import {
  getAllArticles,
  getArticleBySlug,
  getRelatedArticles,
} from "@/content/articles";
import { articleSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    ...buildMetadata({
      title: article.title,
      description: article.excerpt,
      path: `/insights/${article.slug}`,
      ogType: "article",
    }),
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
      authors: [article.author],
      section: article.category,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug);

  return (
    <>
      <ReadingProgress />
      <JsonLd data={articleSchema(article)} />

      <article>
        {/* Article header */}
        <header className="relative overflow-hidden border-b border-edge">
          <div aria-hidden="true" className="bg-glow absolute inset-0" />
          <Container className="relative pt-36 pb-14 md:pt-44">
            <Reveal>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-sm text-fog transition-colors hover:text-signal"
              >
                <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                All insights
              </Link>
              <p className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[0.7rem] uppercase tracking-eyebrow text-fog">
                <span className="text-signal">{article.category}</span>
                <span aria-hidden="true">·</span>
                <time dateTime={article.date}>{formatDate(article.date)}</time>
                <span aria-hidden="true">·</span>
                <span>{article.readingTime}</span>
              </p>
              <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.06] text-balance text-paper sm:text-5xl md:text-6xl">
                {article.title}
              </h1>
              <p className="mt-6 max-w-2xl font-serif text-xl leading-snug text-fog italic md:text-2xl">
                {article.subtitle}
              </p>
              <p className="mt-8 text-sm text-fog">
                By{" "}
                <Link
                  href="/about"
                  className="text-paper underline decoration-edge underline-offset-4 transition-colors hover:text-signal"
                >
                  {article.author}
                </Link>
              </p>
            </Reveal>
          </Container>
        </header>

        {/* Abstract hero visual */}
        <Container className="pt-12">
          <Reveal>
            <ArticleVisual
              slug={article.slug}
              category={article.category}
              className="aspect-[21/9] w-full"
            />
          </Reveal>
        </Container>

        {/* Body */}
        <Container className="py-14 md:py-20">
          <div className="mx-auto max-w-2xl text-[1.05rem] leading-[1.85] text-paper/85">
            <ArticleBody blocks={article.body} />

            <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-edge pt-8">
              <ShareLinks slug={article.slug} title={article.title} />
              <Link
                href="/contact"
                className="text-sm text-fog transition-colors hover:text-signal"
              >
                Discuss this analysis with us
              </Link>
            </div>
          </div>
        </Container>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="border-t border-edge bg-panel">
          <Container className="py-16 md:py-24">
            <Reveal>
              <h2 className="font-serif text-3xl text-paper">Related analysis</h2>
            </Reveal>
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {related.map((rel, index) => (
                <Reveal as="li" key={rel.slug} delay={index * 0.08}>
                  <ArticleCard article={rel} showVisual={false} />
                </Reveal>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <NewsletterCta />
    </>
  );
}
