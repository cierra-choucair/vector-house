import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Article } from "@/types";
import { formatDate } from "@/lib/utils";
import { ArticleVisual } from "@/components/ideas/ArticleVisual";

/** Editorial article card used across the homepage and Ideas grid. */
export function ArticleCard({
  article,
  showVisual = true,
}: {
  article: Article;
  showVisual?: boolean;
}) {
  return (
    <article className="card card-hover group relative flex h-full flex-col overflow-hidden">
      {showVisual && (
        <ArticleVisual
          slug={article.slug}
          category={article.category}
          className="aspect-video rounded-none border-0 border-b border-paper/8"
        />
      )}
      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-eyebrow text-fog">
          <span className="text-signal">{article.category}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
        </p>
        <h3 className="mt-4 font-serif text-xl leading-snug text-paper transition-colors group-hover:text-signal">
          <Link
            href={`/ideas/${article.slug}`}
            className="focus-visible:outline-none"
          >
            {/* Stretched link covers the whole card */}
            <span className="absolute inset-0" aria-hidden="true" />
            {article.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-fog">
          {article.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between pt-5 text-xs text-fog">
          <span className="font-mono">{article.readingTime}</span>
          <ArrowUpRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal"
          />
        </div>
      </div>
    </article>
  );
}
