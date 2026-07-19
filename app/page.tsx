import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { CtaSection } from "@/components/sections/CtaSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ArticleCard } from "@/components/insights/ArticleCard";
import {
  capabilities,
  representativeEngagements,
  whyVectorHouse,
} from "@/data/services";
import { getRecentArticles } from "@/content/articles";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata = buildMetadata({
  title: `${siteConfig.name} — Strategic Intelligence for Frontier Technology`,
  description: siteConfig.description,
  path: "",
});

export default function HomePage() {
  const recentArticles = getRecentArticles(3);

  return (
    <>
      <Hero />

      {/* Positioning */}
      <section className="border-t border-edge">
        <Container className="grid gap-12 py-24 md:grid-cols-[1fr_1.2fr] md:gap-20 md:py-32">
          <Reveal>
            <Eyebrow>Positioning</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl leading-[1.08] text-paper md:text-5xl">
              Ideas need direction.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 self-end text-base leading-relaxed text-fog md:text-lg">
            <p>
              Breakthrough technologies do not move from the laboratory into
              the world through technical performance alone. They require a
              clear market position, trusted authority, strategic
              relationships and an understanding of the ecosystems in which
              they must operate.
            </p>
            <p>
              Vector House works with founders, investors and institutions
              navigating emerging markets where the rules, categories and
              competitive landscape are still being defined.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Core capabilities */}
      <section className="border-t border-edge bg-panel">
        <Container className="py-24 md:py-32">
          <Reveal>
            <SectionHeading
              eyebrow="Capabilities"
              title="Four disciplines, one direction."
              lede="Every engagement draws on the same core practice: rigorous intelligence, clear positioning and counsel grounded in how frontier markets actually behave."
            />
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden border border-edge bg-edge sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, index) => (
              <Reveal key={capability.title} delay={index * 0.08} className="h-full">
                <Link
                  href={capability.href}
                  className="group flex h-full flex-col bg-night p-8 transition-colors hover:bg-card"
                >
                  <span className="font-mono text-xs text-fog">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 font-serif text-2xl leading-snug text-paper transition-colors group-hover:text-signal">
                    {capability.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-fog">
                    {capability.description}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-xs font-medium text-fog transition-colors group-hover:text-signal">
                    Learn more
                    <ArrowRight
                      aria-hidden="true"
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Vector House */}
      <section className="bg-grid relative border-t border-edge">
        <Container className="py-24 md:py-32">
          <Reveal>
            <SectionHeading
              eyebrow="Why Vector House"
              title="Frontier markets play by different rules."
            />
          </Reveal>
          <div className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-2">
            {whyVectorHouse.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.05}
                className="group border-t border-edge pt-8"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-xs text-signal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl leading-snug text-paper md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-fog">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Representative engagements */}
      <section className="border-t border-edge bg-panel">
        <Container className="py-24 md:py-32">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Representative engagements"
              title="The shape of the work."
              lede="Illustrative of how Vector House is engaged. These are representative engagement types, not client case studies."
            />
          </Reveal>
          <ul className="mt-14 border-t border-edge">
            {representativeEngagements.map((engagement, index) => (
              <Reveal
                as="li"
                key={engagement}
                delay={index * 0.04}
                className="flex items-start gap-6 border-b border-edge py-6 md:items-center"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 h-px w-8 shrink-0 bg-signal md:mt-0"
                />
                <p className="text-base leading-relaxed text-paper/90 md:text-lg">
                  {engagement}
                </p>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-10">
            <ButtonLink href="/services" variant="ghost">
              See how engagements are scoped
            </ButtonLink>
          </Reveal>
        </Container>
      </section>

      {/* Founder */}
      <section className="relative overflow-hidden border-t border-edge">
        <Container className="grid gap-14 py-24 md:grid-cols-[1.2fr_1fr] md:gap-20 md:py-32">
          <Reveal>
            <Eyebrow>Founder</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl leading-[1.08] text-balance text-paper md:text-5xl">
              Cierra Choucair works across the systems shaping frontier
              technology.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-fog">
              <p>
                Cierra is a strategist, writer, analyst and ecosystem builder
                working across quantum technology, artificial intelligence,
                scientific innovation and international technology
                communities.
              </p>
              <p>
                Her work brings together technical research, market
                intelligence, media, government engagement and commercial
                strategy. She has interviewed and advised technology leaders,
                moderated conversations with global decision-makers and helped
                organizations articulate the significance of complex
                technologies to the people positioned to fund, adopt and scale
                them.
              </p>
              <p>
                Her perspective is informed by experience spanning data
                analysis, technology journalism, strategic communications,
                international ecosystem development and the creation of new
                scientific and media ventures.
              </p>
            </div>
            <div className="mt-10">
              <ButtonLink href="/about" variant="outline">
                About Cierra
              </ButtonLink>
            </div>
          </Reveal>

          {/* Abstract founder panel: trajectory diagram in place of a photo */}
          <Reveal delay={0.15} className="hidden md:block">
            <div className="bg-grid relative h-full min-h-105 border border-edge bg-card">
              <svg
                aria-hidden="true"
                viewBox="0 0 400 520"
                className="h-full w-full"
                preserveAspectRatio="xMidYMid slice"
              >
                <path
                  d="M-20 480 C 100 420, 140 320, 200 260 S 320 120, 420 60"
                  fill="none"
                  stroke="var(--color-signal)"
                  strokeOpacity="0.5"
                  strokeWidth="1.2"
                />
                <path
                  d="M-20 300 C 120 320, 260 280, 420 180"
                  fill="none"
                  stroke="#eae7e0"
                  strokeOpacity="0.14"
                  strokeWidth="1"
                />
                <path
                  d="M-20 140 C 140 160, 240 220, 420 380"
                  fill="none"
                  stroke="var(--color-iris)"
                  strokeOpacity="0.3"
                  strokeWidth="1"
                />
                <circle cx="200" cy="260" r="3.5" fill="var(--color-signal)" />
                <circle
                  cx="200"
                  cy="260"
                  r="11"
                  fill="none"
                  stroke="var(--color-signal)"
                  strokeOpacity="0.35"
                />
                <circle cx="285" cy="252" r="2" fill="#eae7e0" fillOpacity="0.5" />
                <circle cx="130" cy="345" r="2" fill="var(--color-iris)" fillOpacity="0.6" />
              </svg>
              <p className="absolute bottom-6 left-6 font-mono text-[0.65rem] uppercase tracking-eyebrow text-fog">
                Research · Media · Markets · Policy
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Insights preview */}
      <section className="border-t border-edge bg-panel">
        <Container className="py-24 md:py-32">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Insights"
              title="Signals from the frontier."
            />
            <Link
              href="/insights"
              className="group inline-flex items-center gap-2 text-sm text-fog transition-colors hover:text-signal"
            >
              All insights
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </Reveal>
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {recentArticles.map((article, index) => (
              <Reveal as="li" key={article.slug} delay={index * 0.08}>
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
