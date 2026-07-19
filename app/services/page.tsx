import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { serviceOffers } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Strategic diagnostics, market intelligence sprints, founder authority work and custom advisory for frontier-technology companies, investors and institutions.",
  path: "/services",
  keywords: ["deep tech advisory services", "frontier technology consulting"],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Scoped around decisions, not deliverables."
        lede="Every Vector House engagement is built around a strategic decision or commercial outcome: a market to enter, a round to raise, a category to define, a position to defend. The deliverables follow from the decision, never the other way around."
      />

      <section>
        <Container className="py-20 md:py-28">
          <div className="space-y-20 md:space-y-28">
            {serviceOffers.map((offer, index) => (
              <Reveal
                key={offer.slug}
                className="grid gap-10 border-t border-edge pt-12 md:grid-cols-[1.1fr_1fr] md:gap-20"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-eyebrow text-signal">
                    {offer.eyebrow}
                  </p>
                  <h2 className="mt-5 font-serif text-3xl leading-tight text-paper md:text-4xl">
                    {offer.name}
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-fog">
                    {offer.summary}
                  </p>
                  {index === serviceOffers.length - 1 && (
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-fog">
                      If the situation is consequential and sits inside
                      frontier technology, it is probably in scope. The right
                      first step is a conversation about what you are trying
                      to decide.
                    </p>
                  )}
                </div>

                <div className="grid gap-10 sm:grid-cols-2">
                  <div>
                    <h3 className="font-mono text-[0.7rem] uppercase tracking-eyebrow text-fog">
                      {offer.deliverablesLabel}
                    </h3>
                    <ul className="mt-5 space-y-3">
                      {offer.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-relaxed text-paper/85"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2.5 h-px w-3.5 shrink-0 bg-signal"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {offer.useCases && (
                    <div>
                      <h3 className="font-mono text-[0.7rem] uppercase tracking-eyebrow text-fog">
                        {offer.useCasesLabel}
                      </h3>
                      <ul className="mt-5 space-y-3">
                        {offer.useCases.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-sm leading-relaxed text-paper/85"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2.5 h-px w-3.5 shrink-0 bg-iris"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-24 border border-edge bg-panel p-10 md:p-14">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl leading-tight text-paper">
                Pricing follows scope.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-fog">
                Vector House does not publish fixed prices because no two
                situations carry the same stakes. Describe what you are
                navigating and we will propose a scope, a timeline and a fee
                that fits it.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaSection
        title="Start with the decision in front of you."
        copy="Tell us what you are weighing. We will tell you honestly whether, and how, Vector House can help."
        ctaLabel="Discuss your situation"
      />
    </>
  );
}
