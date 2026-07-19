import { getAllArticles, getArticleBySlug } from "@/content/articles";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Vector House Insights";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  return renderOgImage({
    eyebrow: article ? `Insights / ${article.category}` : "Insights",
    title: article?.title ?? "Signals from the frontier",
  });
}
