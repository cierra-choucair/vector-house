import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { CtaSection } from "@/components/sections/CtaSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ArticleCard } from "@/components/ideas/ArticleCard";
import {
  audiences,
  coreThesis,
  fourDimensions,
  fourPractices,
  fourthAxisThesis,
  waysToBegin,
} from "@/data/services";
import { getFeaturedProofStories } from "@/data/work";
import { getRecentArticles } from "@/content/articles";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata = buildMetadata({
  title: `${siteConfig.name} — Strategy, Communications & Intelligence for Consequential Technology`,
  description: siteConfig.description,
  path: "",
});

export default function HomePage() {
  const recentArticles = getRecentArticles(3);
  const featuredWork = getFeaturedProofStories();
  const primaryOffers = waysToBegin.filter((offer) => offer.primary);

  return (
    <>
      <Hero />

      {/* 02 · The problem */}
      <section className="border-t border-edge">
        <Container className="grid gap-12 py-24 md:grid-cols-[1fr_1.2fr] md:gap-20 md:py-32">
          <Reveal>
            <Eyebrow>The problem</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl leading-[1.08] text-paper md:text-5xl">
              Strong technology still stalls.
            </h2>
          </Reveal>
          <Reveal
            delay={0.1}
            className="space-y-6 self-end text-base leading-relaxed text-fog md:text-lg"
          >
            <p>
              A technically strong idea can fail to move. It may be difficult
              to explain, poorly placed in the market, disconnected from the
              priorities of buyers and institutions, or surrounded by
              activity that never adds up to a strategy. In frontier
              technology these are rarely just communications problems. They
              are problems of interpretation, positioning, evidence, sequence
              and decision-making.
            </p>
            <p>
              Communications is simply where the incoherence becomes visible.
              A company cannot write a credible message until it has decided
              what it believes, where it belongs, who must care and what
              proof will create trust.
            </p>
          </Reveal>
        </Container>
        <Container className="pb-24 md:pb-28">
          <Reveal className="border-l-2 border-signal bg-panel px-8 py-8 md:px-12 md:py-10">
            <p className="font-mono text-[0.65rem] uppercase tracking-eyebrow text-signal">
              Core thesis
            </p>
            <p className="mt-4 max-w-3xl font-serif text-2xl leading-snug text-paper italic md:text-3xl">
              {coreThesis}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 03 · The four practices */}
      <section className="border-t border-edge bg-panel">
        <Container className="py-24 md:py-32">
          <Reveal>
            <SectionHeading
              eyebrow="The practice"
              title="One firm, four depths of engagement."
              lede="Every layer is useful on its own. Together they form the Fourth Axis: communications that open the door, positioning that sets direction, intelligence that grounds it in evidence, and advisory that turns it into movement."
            />
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden border border-edge bg-edge sm:grid-cols-2 lg:grid-cols-4">
            {fourPractices.map((practice, index) => (
              <Reveal key={practice.id} delay={index * 0.08} className="h-full">
                <Link
                  href={`/services#${practice.id}`}
                  className="group flex h-full flex-col bg-night p-8 transition-colors hover:bg-card"
                >
                  <span className="flex items-baseline justify-between font-mono text-xs text-fog">
                    {practice.number}
                    <span className="text-signal">{practice.depthWord}</span>
                  </span>
                  <h3 className="mt-6 font-serif text-2xl leading-snug text-paper transition-colors group-hover:text-signal">
                    {practice.name}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-fog">
                    {practice.summary}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-xs font-medium text-fog transition-colors group-hover:text-signal">
                    Explore the practice
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

      {/* 04 · Ways to begin */}
      <section className="border-t border-edge">
        <Container className="py-24 md:py-32">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Ways to begin"
              title="Clear entry points, not a menu of deliverables."
            />
            <Link
              href="/services#begin"
              className="group inline-flex items-center gap-2 text-sm text-fog transition-colors hover:text-signal"
            >
              All engagements
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {primaryOffers.map((offer, index) => (
              <Reveal
                key={offer.name}
                delay={index * 0.06}
                className="flex h-full flex-col border border-edge bg-panel p-8"
              >
                <span className="font-mono text-xs text-signal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-serif text-2xl leading-snug text-paper">
                  {offer.name}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-fog">
                  {offer.summary}
                </p>
                <p className="mt-6 border-t border-edge pt-5 text-xs leading-relaxed text-fog">
                  <span className="font-mono uppercase tracking-eyebrow text-paper/70">
                    Best for ·{" "}
                  </span>
                  {offer.bestFor}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 05 · Selected work */}
      <section className="border-t border-edge bg-panel">
        <Container className="py-24 md:py-32">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected work"
              title="Capability, already in evidence."
              lede="Proof drawn from the founder's public body of work across journalism, intelligence, ventures and global programming. Shown as capability evidence, not client case studies."
            />
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm text-fog transition-colors hover:text-signal"
            >
              All work
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden border border-edge bg-edge lg:grid-cols-3">
            {featuredWork.map((story, index) => (
              <Reveal key={story.slug} delay={index * 0.08} className="h-full">
                <div className="flex h-full flex-col bg-night p-8">
                  <p className="font-mono text-[0.65rem] uppercase tracking-eyebrow text-signal">
                    {story.capability}
                  </p>
                  <h3 className="mt-5 font-serif text-2xl leading-snug text-paper">
                    {story.title}
                  </h3>
                  <p className="mt-2 text-xs text-fog">{story.role}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-fog">
                    {story.angle}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 06 · The Four Dimensions */}
      <section className="relative border-t border-edge">
        <div aria-hidden="true" className="bg-glow absolute inset-0" />
        <Container className="relative py-24 md:py-32">
          <Reveal>
            <SectionHeading
              eyebrow="Signature methodology"
              title="The Four Dimensions."
              lede="One framework guides everything from a single article to an entire market-entry strategy: hold the technology, the market, the meaning and the movement in the same frame."
            />
          </Reveal>
          <div className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-2">
            {fourDimensions.map((dimension, index) => (
              <Reveal
                key={dimension.name}
                delay={index * 0.06}
                className="border-t border-edge pt-8"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-xs text-signal">
                    {dimension.number}
                  </span>
                  <div>
                    <h3 className="flex flex-wrap items-baseline gap-x-4 font-serif text-2xl text-paper">
                      {dimension.name}
                      <span className="text-base text-fog italic">
                        {dimension.question}
                      </span>
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-fog">
                      {dimension.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 border-l-2 border-iris bg-panel px-8 py-8 md:px-12">
            <p className="font-mono text-[0.65rem] uppercase tracking-eyebrow text-iris">
              The fourth axis
            </p>
            <p className="mt-4 max-w-3xl font-serif text-xl leading-snug text-paper italic md:text-2xl">
              {fourthAxisThesis}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 07 · About Cierra */}
      <section className="border-t border-edge bg-panel">
        <Container className="grid gap-14 py-24 md:grid-cols-[1.2fr_1fr] md:gap-20 md:py-32">
          <Reveal>
            <Eyebrow>Founder</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl leading-[1.08] text-balance text-paper md:text-5xl">
              Cierra Choucair is not a generalist. She is an integrator.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-fog">
              <p>
                Cierra is a strategist, science communicator, journalist,
                founder and global speaker working across quantum technology,
                AI, scientific discovery and emerging systems. Her work spans
                technical storytelling, strategic content, data analysis,
                market and ecosystem intelligence, executive positioning and
                international convening.
              </p>
              <p>
                Across each of these domains she does the same thing: she
                enters complex environments, identifies the relationships
                that matter, translates technical depth without sacrificing
                accuracy, and gives people a clearer way to understand and
                move.
              </p>
            </div>
            <div className="mt-10">
              <ButtonLink href="/about" variant="outline">
                About Cierra
              </ButtonLink>
            </div>
          </Reveal>

          {/* Tesseract panel in place of a photograph.
              [VERIFIED CONTENT REQUIRED] — replace with a founder
              photograph when available (see data/site.ts flags). */}
          <Reveal delay={0.15} className="hidden md:block">
            <div className="relative h-full min-h-105 border border-edge bg-card">
              <svg
                aria-hidden="true"
                viewBox="0 0 400 520"
                className="h-full w-full"
                preserveAspectRatio="xMidYMid slice"
              >
                <rect
                  x="80"
                  y="140"
                  width="240"
                  height="240"
                  fill="none"
                  stroke="#eae7e0"
                  strokeOpacity="0.2"
                  strokeWidth="1.2"
                />
                <path
                  d="M80 140 158 218M320 140 242 218M80 380 158 302M320 380 242 302"
                  fill="none"
                  stroke="var(--color-iris)"
                  strokeOpacity="0.45"
                  strokeWidth="1"
                />
                <rect
                  x="158"
                  y="218"
                  width="84"
                  height="84"
                  fill="none"
                  stroke="var(--color-signal)"
                  strokeOpacity="0.9"
                  strokeWidth="1.4"
                />
                <path
                  d="M-20 480 C 120 430, 220 400, 420 300"
                  fill="none"
                  stroke="var(--color-signal)"
                  strokeOpacity="0.3"
                  strokeWidth="1"
                />
              </svg>
              <p className="absolute bottom-6 left-6 font-mono text-[0.65rem] uppercase tracking-eyebrow text-fog">
                Research · Media · Markets · Movement
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 08 · Who it is for */}
      <section className="border-t border-edge">
        <Container className="py-24 md:py-32">
          <Reveal>
            <SectionHeading
              eyebrow="Who it is for"
              title="Built for the people moving consequential technology."
            />
          </Reveal>
          <div className="mt-14 grid gap-x-16 gap-y-10 md:grid-cols-2">
            {audiences.map((audience, index) => (
              <Reveal
                key={audience.title}
                delay={index * 0.05}
                className="border-t border-edge pt-6"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-xs text-signal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl leading-snug text-paper md:text-2xl">
                      {audience.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-fog">
                      {audience.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Ideas preview */}
      <section className="border-t border-edge bg-panel">
        <Container className="py-24 md:py-32">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Ideas" title="Signals from the frontier." />
            <Link
              href="/ideas"
              className="group inline-flex items-center gap-2 text-sm text-fog transition-colors hover:text-signal"
            >
              All ideas
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

      {/* 09 · Final conversion */}
      <CtaSection />
    </>
  );
}
