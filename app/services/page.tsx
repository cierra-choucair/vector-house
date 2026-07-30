import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import {
  engagementDepths,
  fourPractices,
  marketingScope,
  waysToBegin,
} from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Communications and marketing, strategic positioning, intelligence and ecosystems, and embedded advisory for consequential technologies. One practice, four depths of engagement.",
  path: "/services",
  keywords: [
    "deep tech communications agency",
    "quantum marketing strategy",
    "technology positioning consultancy",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="One practice, four depths of engagement."
        lede="Clients usually arrive with work they need now: messaging, content, a launch, a report. Every engagement is built so that the immediate work also reveals the strategic layer underneath it. Each depth is useful on its own. Together, they form the Fourth Axis."
      />

      {/* Engagement ladder */}
      <section>
        <Container className="py-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="How engagements deepen"
              title="Begin anywhere. Build toward direction."
            />
          </Reveal>
          <div className="mt-14 overflow-x-auto">
            <div className="min-w-175 border-t border-edge">
              {/* Header row */}
              <div className="grid grid-cols-[8rem_1fr_1.4fr_1.4fr] gap-6 border-b border-edge py-4 font-mono text-[0.65rem] uppercase tracking-eyebrow text-fog">
                <span aria-hidden="true" />
                <span>Client entry</span>
                <span>Fourth Axis value</span>
                <span>Natural next step</span>
              </div>
              {engagementDepths.map((depth) => (
                <Reveal
                  key={depth.number}
                  className="grid grid-cols-[8rem_1fr_1.4fr_1.4fr] gap-6 border-b border-edge py-6"
                >
                  <div>
                    <span className="font-mono text-xs text-signal">
                      {depth.number}
                    </span>
                    <p className="mt-1 font-serif text-lg text-paper">
                      {depth.name}
                    </p>
                  </div>
                  <p className="self-center text-sm leading-relaxed text-fog">
                    {depth.entry}
                  </p>
                  <p className="self-center text-sm leading-relaxed text-paper/85">
                    {depth.value}
                  </p>
                  <p className="self-center text-sm leading-relaxed text-fog">
                    {depth.next}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* The four practices */}
      <section className="border-t border-edge bg-panel">
        <Container className="py-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="The practices"
              title="What each practice covers."
            />
          </Reveal>
          <div className="mt-4 space-y-20 md:space-y-24">
            {fourPractices.map((practice) => (
              <Reveal
                key={practice.id}
                className="grid scroll-mt-28 gap-10 border-t border-edge pt-12 md:grid-cols-[1.1fr_1fr] md:gap-20"
              >
                <div id={practice.id}>
                  <p className="flex items-center gap-4 font-mono text-xs uppercase tracking-eyebrow text-signal">
                    {practice.number} · {practice.depthWord}
                    <span className="text-fog normal-case tracking-normal">
                      {practice.role}
                    </span>
                  </p>
                  <h3 className="mt-5 font-serif text-3xl leading-tight text-paper md:text-4xl">
                    {practice.name}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-fog">
                    {practice.summary}
                  </p>
                </div>
                <ul className="grid gap-3 self-center sm:grid-cols-2">
                  {practice.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 border border-edge bg-night px-4 py-3 text-sm leading-relaxed text-paper/85"
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

      {/* Ways to begin */}
      <section id="begin" className="scroll-mt-20 border-t border-edge">
        <Container className="py-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="Ways to begin"
              title="The launch portfolio."
              lede="Short-cycle work that closes quickly, mid-depth engagements that show strategic range, and a small number of embedded partnerships."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {waysToBegin.map((offer, index) => (
              <Reveal
                key={offer.name}
                delay={index * 0.04}
                className="flex h-full flex-col border border-edge bg-panel p-7"
              >
                <span className="font-mono text-xs text-signal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-serif text-xl leading-snug text-paper">
                  {offer.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-fog">
                  {offer.summary}
                </p>
                <p className="mt-5 border-t border-edge pt-4 text-xs leading-relaxed text-fog">
                  <span className="font-mono uppercase tracking-eyebrow text-paper/70">
                    Best for ·{" "}
                  </span>
                  {offer.bestFor}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 border-l-2 border-signal bg-panel px-8 py-8 md:px-12">
            <p className="font-mono text-[0.65rem] uppercase tracking-eyebrow text-signal">
              Commercial principle
            </p>
            <p className="mt-4 max-w-3xl font-serif text-xl leading-snug text-paper italic md:text-2xl">
              Sell the first problem. Build toward the full relationship.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fog">
              A client may enter through one article, one messaging problem
              or one event. The engagement still includes enough strategic
              diagnosis to identify the larger need and propose the right
              next layer, without forcing an oversized engagement before
              trust exists. Pricing follows scope: describe the situation
              and you will receive a proposal sized to it.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* What marketing means here */}
      <section className="border-t border-edge bg-panel">
        <Container className="py-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="An honest boundary"
              title="What marketing means here."
              lede="Fourth Axis claims strategic marketing plainly: understanding audiences, shaping value, creating market-facing narratives and connecting communications to commercial objectives. It does not pretend to be a full-stack performance shop."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Reveal className="border border-edge bg-night p-8">
              <h3 className="font-mono text-[0.7rem] uppercase tracking-eyebrow text-signal">
                Core and owned
              </h3>
              <ul className="mt-6 space-y-3">
                {marketingScope.owned.map((item) => (
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
            </Reveal>
            <Reveal delay={0.08} className="border border-edge bg-night p-8">
              <h3 className="font-mono text-[0.7rem] uppercase tracking-eyebrow text-fog">
                Selective or partner-led
              </h3>
              <ul className="mt-6 space-y-3">
                {marketingScope.partnerLed.map((item) => (
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
        title="Start with the problem in front of you."
        copy="Describe what you are navigating. You will get a straight answer about whether, and how, Fourth Axis can help."
        ctaLabel="Start a conversation"
      />
    </>
  );
}
