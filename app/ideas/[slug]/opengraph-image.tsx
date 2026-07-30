import { getAllArticles, getArticleBySlug } from "@/content/articles";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Fourth Axis Ideas";
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
    eyebrow: article ? `Ideas / ${article.category}` : "Ideas",
    title: article?.title ?? "Signals from the frontier",
  });
}
