import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { portfolioGroups } from "@/data/portfolio";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Founder's Expanded Portfolio",
  description:
    "The full body of work behind Fourth Axis: The Daily Qubit and The Quantum Insider, Universum Labs, Quantum World Tour, ITU AI for Good, QPLI and QUALIA, HKA's Strategic Content Division, and more.",
  path: "/about/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Founder's expanded portfolio"
        title="The full body of work."
        lede="Fourth Axis is built on a decade of working inside frontier technology's communications, data, editorial, founder, ecosystem and institutional layers at once. This is the record: what Cierra Choucair has built, written, convened and led, and what each part of it proves about how the practice works."
      >
        <Link
          href="/about"
          className="mt-8 inline-flex items-center gap-2 text-sm text-fog transition-colors hover:text-signal"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Back to About
        </Link>
      </PageHero>

      <section>
        <Container className="py-16 md:py-24">
          <div className="space-y-20 md:space-y-24">
            {portfolioGroups.map((group, groupIndex) => (
              <Reveal
                key={group.id}
                className="grid gap-8 border-t border-edge pt-10 md:grid-cols-[1fr_2fr] md:gap-16"
              >
                <div>
                  <span className="font-mono text-xs text-fog">
                    {String(groupIndex + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 font-serif text-3xl leading-tight text-paper">
                    {group.title}
                  </h2>
                  {group.intro && (
                    <p className="mt-5 max-w-sm text-sm leading-relaxed text-fog">
                      {group.intro}
                    </p>
                  )}
                </div>

                <div className="space-y-10">
                  {group.entries.map((entry) => (
                    <article
                      key={entry.name}
                      className="border border-edge bg-panel p-7 md:p-8"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-3">
                        <h3 className="font-serif text-xl leading-snug text-paper md:text-2xl">
                          {entry.name}
                        </h3>
                        <p className="font-mono text-[0.65rem] uppercase tracking-eyebrow text-signal">
                          {entry.role}
                        </p>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-fog md:text-base">
                        {entry.summary}
                      </p>
                      <p className="mt-5 border-t border-edge pt-4 text-xs leading-relaxed text-fog">
                        <span className="font-mono uppercase tracking-eyebrow text-paper/70">
                          Demonstrates ·{" "}
                        </span>
                        {entry.demonstrates}
                      </p>
                      {entry.boundary && (
                        <p className="mt-2 text-xs leading-relaxed text-fog/80">
                          <span className="font-mono uppercase tracking-eyebrow text-paper/60">
                            Boundary ·{" "}
                          </span>
                          {entry.boundary}
                        </p>
                      )}
                    </article>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          {/*
            Public links and artifacts per entry.
            [VERIFIED CONTENT REQUIRED] — gather links and permissions, add
            `href` values in data/portfolio.ts, then enable
            featureFlags.showProofLinks in data/site.ts.
          */}

          <Reveal className="mt-20 border border-edge bg-panel p-8 md:p-10">
            <p className="max-w-3xl text-sm leading-relaxed text-fog">
              A note on boundaries: independent editorial work, partner-led
              initiatives and client engagements conducted under other
              organizations are described here only in terms of Cierra&rsquo;s
              own role. Detailed casework is shared in conversation where
              permissions allow.
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaSection
        title="Put this range to work on your problem."
        copy="The fastest way to evaluate Fourth Axis is to bring one consequential question and watch how it gets taken apart."
        ctaLabel="Start a conversation"
      />
    </>
  );
}
