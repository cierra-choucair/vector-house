import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import {
  buyingMoments,
  corePromise,
  deliveryPrinciples,
  engagementLadder,
  fourPractices,
  method,
  notThePractice,
  waysToBegin,
} from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Positioning and commercialization strategy, strategic communications and authority, ecosystem activation and market entry, and executive advisory for quantum and emerging technology.",
  path: "/services",
  keywords: [
    "quantum communications advisory",
    "commercialization narrative",
    "technology positioning consultancy",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Four practices, one through-line."
        lede="Fourth Axis is a founder-led strategy and communications advisory practice for consequential technology. We help leaders clarify where they stand, articulate why their work matters, align the stakeholders required for progress and turn ambition into movement."
      />

      {/* The four practices */}
      <section>
        <Container className="py-16 md:py-24">
          <div className="space-y-16 md:space-y-20">
            {fourPractices.map((practice) => (
              <Reveal
                key={practice.id}
                className="grid scroll-mt-28 gap-10 md:grid-cols-[1.1fr_1fr] md:gap-20"
              >
                <div id={practice.id}>
                  <p className="flex items-center gap-4 font-mono text-xs uppercase tracking-eyebrow text-signal">
                    {practice.number}
                    <span className="normal-case tracking-normal text-fog italic">
                      {practice.cue}
                    </span>
                  </p>
                  <h2 className="mt-5 font-serif text-3xl leading-tight text-paper md:text-4xl">
                    {practice.name}
                  </h2>
                  <p className="mt-4 text-base font-medium text-paper/90">
                    {practice.outcome}
                  </p>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-fog">
                    {practice.summary}
                  </p>
                </div>
                <ul className="grid gap-3 self-center">
                  {practice.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 rounded-xl border border-paper/8 bg-card/45 px-4 py-3 text-sm leading-relaxed text-paper/85 backdrop-blur-sm"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-px w-3.5 shrink-0 bg-signal"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Engagement ladder */}
      <section>
        <Container className="py-16 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="How engagements deepen"
              title="Enter. Build. Embed."
              lede="The entry offer solves a real immediate problem. Deeper work follows because the first engagement exposes the next decision, never because a funnel demands it."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {engagementLadder.map((rung, index) => (
              <Reveal
                key={rung.stage}
                delay={index * 0.06}
                className="card flex h-full flex-col p-8"
              >
                <span className="font-mono text-xs uppercase tracking-eyebrow text-signal">
                  {String(index + 1).padStart(2, "0")} · {rung.stage}
                </span>
                <h3 className="mt-5 font-serif text-xl leading-snug text-paper">
                  {rung.need}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-fog">
                  {rung.offers}
                </p>
                <p className="mt-5 border-t border-paper/8 pt-4 text-xs leading-relaxed text-fog">
                  {rung.logic}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* The seven offers */}
      <section id="begin" className="scroll-mt-20">
        <Container className="py-16 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Ways to begin"
              title="Seven offers, each built around a recognizable problem."
              lede="Every offer has a bounded shape and a natural path into deeper work. Scope adapts to the decision at hand; pricing follows scope."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {waysToBegin.map((offer, index) => (
              <Reveal
                key={offer.name}
                delay={index * 0.04}
                className="card flex h-full flex-col p-7"
              >
                <span className="flex items-baseline justify-between font-mono text-xs">
                  <span className="text-signal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.62rem] uppercase tracking-eyebrow text-fog">
                    {offer.stage}
                  </span>
                </span>
                <h3 className="mt-4 font-serif text-xl leading-snug text-paper">
                  {offer.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-fog">
                  {offer.promise}
                </p>
                <p className="mt-4 text-xs leading-relaxed text-paper/75 italic">
                  {offer.format}
                </p>
                <p className="mt-4 border-t border-paper/8 pt-4 text-xs leading-relaxed text-fog">
                  <span className="font-mono uppercase tracking-eyebrow text-paper/70">
                    Best for ·{" "}
                  </span>
                  {offer.bestFor}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="card mt-14 border-l-2 border-l-signal px-8 py-8 md:px-12">
            <p className="font-mono text-[0.65rem] uppercase tracking-eyebrow text-signal">
              The promise
            </p>
            <p className="mt-4 max-w-3xl font-serif text-xl leading-snug text-paper italic md:text-2xl">
              {corePromise}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fog">
              Fourth Axis does not publish fixed prices because no two
              situations carry the same stakes. Describe what you are
              navigating and you will receive a proposal scoped to the
              decision in front of you.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Method + principles */}
      <section className="relative">
        <div aria-hidden="true" className="bg-glow absolute inset-0" />
        <Container className="relative py-16 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="How the work happens"
              title="One method behind every engagement."
            />
          </Reveal>
          <div className="mt-14 grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <div>
              <ol className="space-y-7">
                {method.map((step) => (
                  <Reveal as="li" key={step.number} className="flex gap-5">
                    <span className="font-mono text-xs text-signal">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl leading-snug text-paper">
                        {step.name}
                      </h3>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-fog">
                        {step.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
            <Reveal delay={0.1} className="card self-start p-8">
              <h3 className="font-mono text-[0.7rem] uppercase tracking-eyebrow text-fog">
                Delivery principles
              </h3>
              <ul className="mt-6 space-y-5">
                {deliveryPrinciples.map((principle) => (
                  <li key={principle.title}>
                    <p className="text-sm font-medium text-paper">
                      {principle.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-fog">
                      {principle.text}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Fit */}
      <section>
        <Container className="py-16 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Fit"
              title="When Fourth Axis is the right call."
              lede="The best clients do not simply need more content. They need greater strategic coherence and a clearer path to movement."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Reveal className="card p-8">
              <h3 className="font-mono text-[0.7rem] uppercase tracking-eyebrow text-signal">
                The moments that call for it
              </h3>
              <ul className="mt-6 space-y-4">
                {buyingMoments.map((moment) => (
                  <li
                    key={moment}
                    className="flex gap-3 text-sm leading-relaxed text-paper/85"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-px w-3.5 shrink-0 bg-signal"
                    />
                    {moment}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.08} className="card p-8">
              <h3 className="font-mono text-[0.7rem] uppercase tracking-eyebrow text-fog">
                What Fourth Axis is not
              </h3>
              <ul className="mt-6 space-y-4">
                {notThePractice.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-fog"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-px w-3.5 shrink-0 bg-edge"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Start with the decision in front of you."
        copy="Describe what you are navigating. You will get a straight answer about whether, and how, Fourth Axis can help."
        ctaLabel="Start a conversation"
      />
    </>
  );
}
