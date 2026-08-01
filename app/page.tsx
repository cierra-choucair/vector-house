import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { CtaSection } from "@/components/sections/CtaSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import {
  audiences,
  coreThesis,
  fourDimensions,
  fourPractices,
  fourthAxisThesis,
  waysToBegin,
} from "@/data/services";
import { publicRecordHighlights } from "@/data/portfolio";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata = buildMetadata({
  title: `${siteConfig.name} — Strategy & Communications for Consequential Technology`,
  description: siteConfig.description,
  path: "",
});

export default function HomePage() {
  const primaryOffers = waysToBegin.filter((offer) => offer.primary);

  return (
    <>
      <Hero />

      {/* Credibility: the public record, up front */}
      <section>
        <Container className="py-12 md:py-16">
          <Reveal className="flex flex-wrap items-center justify-between gap-4">
            <Eyebrow>On the public record</Eyebrow>
            <Link
              href="/about/portfolio"
              className="group inline-flex items-center gap-2 text-sm text-fog transition-colors hover:text-signal"
            >
              Founder&rsquo;s expanded portfolio
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {publicRecordHighlights.map((item, index) => (
              <Reveal
                key={item.label}
                delay={index * 0.05}
                className="h-full"
              >
                <div className="card flex h-full flex-col justify-between gap-3 p-5">
                  <p className="text-sm leading-snug font-medium text-paper">
                    {item.label}
                  </p>
                  <p className="font-mono text-[0.62rem] uppercase tracking-eyebrow text-signal">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Founder */}
      <section>
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
                move. Fourth Axis is that practice, made commercial.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/about" variant="outline">
                About Cierra
              </ButtonLink>
              <ButtonLink href="/about/portfolio" variant="ghost">
                Explore the full portfolio
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="hidden md:block">
            <div className="card relative h-full min-h-105 overflow-hidden">
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

      {/* The problem */}
      <section>
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
              Important technologies stall between technical possibility and
              practical adoption for predictable reasons: their value is
              unclear, their stakeholders are misaligned or their path to
              action is undefined. In consequential technology these are
              rarely just communications problems. They are problems of
              position, meaning, sequence and decision.
            </p>
            <p>
              Communications is simply where the incoherence becomes visible.
              A company cannot write a credible message until it has decided
              where it stands, why its work matters and who must move next.
            </p>
          </Reveal>
        </Container>
        <Container className="pb-24 md:pb-28">
          <Reveal className="card border-l-2 border-l-signal px-8 py-8 md:px-12 md:py-10">
            <p className="font-mono text-[0.65rem] uppercase tracking-eyebrow text-signal">
              Core thesis
            </p>
            <p className="mt-4 max-w-3xl font-serif text-2xl leading-snug text-paper italic md:text-3xl">
              {coreThesis}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* The four practices */}
      <section>
        <Container className="py-24 md:py-32">
          <Reveal>
            <SectionHeading
              eyebrow="The practice"
              title="Four practices, one through-line."
              lede="Clarify the position, build authority, activate the ecosystem and keep judgment in the room as the work moves. Each practice is useful on its own; together they carry an idea from possibility to adoption."
            />
          </Reveal>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {fourPractices.map((practice, index) => (
              <Reveal key={practice.id} delay={index * 0.08} className="h-full">
                <Link
                  href={`/services#${practice.id}`}
                  className="card card-hover group flex h-full flex-col p-8"
                >
                  <span className="font-mono text-xs text-fog">
                    {practice.number}
                  </span>
                  <h3 className="mt-5 font-serif text-2xl leading-snug text-paper transition-colors group-hover:text-signal">
                    {practice.name}
                  </h3>
                  <p className="mt-2 text-sm text-signal/90 italic">
                    {practice.cue}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-fog">
                    {practice.outcome}
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

      {/* Ways to begin */}
      <section>
        <Container className="py-24 md:py-32">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Ways to begin"
              title="Enter through one real decision."
              lede="Three fixed-scope entry points. Deeper programs and embedded counsel follow when the first engagement exposes the next layer, never because a funnel demands it."
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
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {primaryOffers.map((offer, index) => (
              <Reveal
                key={offer.name}
                delay={index * 0.06}
                className="card flex h-full flex-col p-8"
              >
                <span className="flex items-baseline justify-between font-mono text-xs">
                  <span className="text-signal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.62rem] uppercase tracking-eyebrow text-fog">
                    {offer.stage}
                  </span>
                </span>
                <h3 className="mt-5 font-serif text-2xl leading-snug text-paper">
                  {offer.name}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-fog">
                  {offer.promise}
                </p>
                <p className="mt-6 border-t border-paper/8 pt-5 text-xs leading-relaxed text-fog">
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

      {/* The Four Dimensions */}
      <section className="relative">
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
                className="pt-2"
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
          <Reveal className="card mt-16 border-l-2 border-l-iris px-8 py-8 md:px-12">
            <p className="font-mono text-[0.65rem] uppercase tracking-eyebrow text-iris">
              The fourth axis
            </p>
            <p className="mt-4 max-w-3xl font-serif text-xl leading-snug text-paper italic md:text-2xl">
              {fourthAxisThesis}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Who it is for */}
      <section>
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
                className="pt-2"
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

      {/* Final conversion */}
      <CtaSection />
    </>
  );
}
