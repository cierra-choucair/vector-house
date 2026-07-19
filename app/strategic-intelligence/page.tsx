import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Strategic Intelligence",
  description:
    "Market landscapes, competitive intelligence, company assessments and executive briefings built for decisions in frontier technology, where traditional market research breaks down.",
  path: "/strategic-intelligence",
  keywords: [
    "emerging technology market research",
    "quantum market intelligence",
    "deep tech competitive analysis",
  ],
});

const whyTraditionalFails = [
  {
    title: "Categories remain unstable",
    text: "Market definitions shift underneath the analysis. A report built on today's category boundaries can be obsolete before it circulates.",
  },
  {
    title: "Comparable companies are scarce",
    text: "Standard benchmarking assumes a population of comparable firms. Frontier fields often offer a handful, each pursuing a different technical route.",
  },
  {
    title: "Technical claims need interpretation",
    text: "Press releases and papers overstate, understate and talk past each other. Reading them correctly requires technical literacy, not aggregation.",
  },
  {
    title: "Governments shape the market",
    text: "Research funding, procurement and export policy move frontier markets as much as private capital does. Analysis that ignores the state misses the structure.",
  },
  {
    title: "Narrative moves outcomes",
    text: "Visibility and positioning influence funding, partnerships and adoption. Intelligence that treats perception as noise misreads the mechanism.",
  },
  {
    title: "Signals are fragmented",
    text: "The truth is distributed across papers, patents, conference talks, hiring pages and policy documents, in several languages. Assembly is the work.",
  },
];

const services = [
  "Market landscapes",
  "Competitive intelligence",
  "Company assessments",
  "Investor diligence support",
  "Technology and ecosystem mapping",
  "Partnership intelligence",
  "Executive research briefings",
  "Emerging-signal tracking",
];

const decisions = [
  "Entering a region or market segment",
  "Selecting partners or acquisition targets",
  "Evaluating a company before investment",
  "Defining or claiming a category",
  "Preparing for a raise or strategic review",
];

export default function StrategicIntelligencePage() {
  return (
    <>
      <PageHero
        eyebrow="Strategic Intelligence"
        title="Frontier markets punish conventional research."
        lede="Traditional market research assumes stable categories, abundant comparables and clean data. Frontier technology offers none of these. Vector House builds intelligence for the conditions that actually exist."
      />

      {/* Why traditional research fails */}
      <section>
        <Container className="py-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="The problem"
              title="Where standard analysis breaks down."
            />
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden border border-edge bg-edge sm:grid-cols-2 lg:grid-cols-3">
            {whyTraditionalFails.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05} className="h-full">
                <div className="h-full bg-night p-8">
                  <span className="font-mono text-xs text-signal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-serif text-xl leading-snug text-paper">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-fog">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* What we do */}
      <section className="border-t border-edge bg-panel">
        <Container className="grid gap-12 py-20 md:grid-cols-2 md:gap-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="The practice"
              title="Intelligence built for the frontier."
              lede="Vector House combines technical literacy, primary research and cross-border context to produce analysis a leadership team can act on."
            />
          </Reveal>
          <Reveal delay={0.1} className="self-end">
            <ul className="grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-3 border border-edge bg-night px-4 py-3.5 text-sm text-paper/90"
                >
                  <span aria-hidden="true" className="h-px w-4 shrink-0 bg-signal" />
                  {service}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Research for decisions */}
      <section className="relative border-t border-edge">
        <Container className="py-20 md:py-28">
          <Reveal className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-20">
            <div>
              <SectionHeading
                eyebrow="The standard"
                title="Research designed for decisions, not decoration."
              />
              <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-fog">
                <p>
                  Plenty of research exists to fill a slide or justify a
                  conclusion already reached. That is not what Vector House
                  produces. Every engagement starts by naming the decision the
                  analysis must serve, and ends when the people making that
                  decision have what they need.
                </p>
                <p>
                  Scope, sources and format all follow from that decision. A
                  briefing for an investment committee looks different from a
                  map for a market-entry team, and both look different from a
                  category strategy for a founder. The constant is that the
                  work is built to be used.
                </p>
              </div>
            </div>
            <div className="self-end border border-edge bg-card p-8">
              <h3 className="font-mono text-[0.7rem] uppercase tracking-eyebrow text-fog">
                Decisions we build for
              </h3>
              <ul className="mt-5 space-y-4">
                {decisions.map((decision) => (
                  <li
                    key={decision}
                    className="flex gap-3 text-sm leading-relaxed text-paper/90"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-px w-3.5 shrink-0 bg-signal"
                    />
                    {decision}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaSection
        title="Put real intelligence behind the next decision."
        copy="Describe the decision in front of you and we will scope the analysis it deserves."
        ctaLabel="Start a conversation"
      />
    </>
  );
}
