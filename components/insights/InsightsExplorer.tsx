"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Article, ArticleCategory } from "@/types";
import { articleCategories } from "@/content/articles";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 6;

/**
 * Client-side article browser: full-text search, category filters and
 * load-more pagination over the locally provided article set.
 */
export function InsightsExplorer({ articles }: { articles: Article[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ArticleCategory | "All">("All");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((article) => {
      if (category !== "All" && article.category !== category) return false;
      if (!q) return true;
      const haystack = [
        article.title,
        article.subtitle,
        article.excerpt,
        article.category,
        ...article.body.map((block) =>
          block.type === "list" ? block.items.join(" ") : block.text,
        ),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [articles, query, category]);

  const shown = filtered.slice(0, visible);

  // Only surface categories that actually have articles, plus "All".
  const activeCategories = useMemo(() => {
    const present = new Set(articles.map((a) => a.category));
    return ["All" as const, ...articleCategories.filter((c) => present.has(c))];
  }, [articles]);

  function selectCategory(next: ArticleCategory | "All") {
    setCategory(next);
    setVisible(PAGE_SIZE);
  }

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div
          role="group"
          aria-label="Filter by category"
          className="flex flex-wrap gap-2"
        >
          {activeCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => selectCategory(c)}
              aria-pressed={category === c}
              className={cn(
                "border px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-eyebrow transition-colors",
                category === c
                  ? "border-signal/60 bg-signal/10 text-signal"
                  : "border-edge text-fog hover:border-fog/60 hover:text-paper",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:max-w-xs">
          <label htmlFor="insights-search" className="sr-only">
            Search articles
          </label>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-fog"
          />
          <input
            id="insights-search"
            type="search"
            placeholder="Search articles"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setVisible(PAGE_SIZE);
            }}
            className="w-full border border-edge bg-card py-2.5 pr-4 pl-9 text-sm text-paper placeholder:text-fog/60 transition-colors focus:border-signal focus:outline-none"
          />
        </div>
      </div>

      {/* Live region announcing result counts to screen readers */}
      <p aria-live="polite" className="sr-only">
        {filtered.length} article{filtered.length === 1 ? "" : "s"} found
      </p>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="mt-16 border border-edge bg-panel p-12 text-center">
          <p className="font-serif text-2xl text-paper">No signals on this heading.</p>
          <p className="mt-3 text-sm text-fog">
            Try a different term, or clear the filters to see everything.
          </p>
          <Button
            variant="outline"
            className="mt-6"
            onClick={() => {
              setQuery("");
              selectCategory("All");
            }}
          >
            Clear filters
          </Button>
        </div>
      ) : (
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((article) => (
            <li key={article.slug}>
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
      )}

      {/* Load more */}
      {filtered.length > visible && (
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
          >
            Load more articles
          </Button>
          <p className="mt-3 font-mono text-xs text-fog">
            Showing {shown.length} of {filtered.length}
          </p>
        </div>
      )}
    </div>
  );
}
