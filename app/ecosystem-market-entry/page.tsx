import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Ecosystem & Market Entry",
  description:
    "Ecosystem mapping, stakeholder navigation and market-entry intelligence for organizations expanding into international frontier-technology ecosystems.",
  path: "/ecosystem-market-entry",
  keywords: [
    "technology ecosystem mapping",
    "international expansion deep tech",
    "innovation ecosystem strategy",
  ],
});

const services = [
  {
    title: "Ecosystem maps",
    text: "Who actually matters in a regional or technical ecosystem: labs, companies, investors, agencies, conveners and the connections between them.",
  },
  {
    title: "Government and institutional context",
    text: "How public funding, procurement and policy shape the market you are entering, and which doors they open or close.",
  },
  {
    title: "Research and industry networks",
    text: "The academic groups, consortia and industrial partnerships where technical credibility in the ecosystem is established.",
  },
  {
    title: "Partnership identification",
    text: "Shortlists of partners, channels and collaborators evaluated against your strategy, not a directory export.",
  },
  {
    title: "Event and conference strategy",
    text: "Which rooms are worth entering, in what order and with what message, so presence turns into position.",
  },
  {
    title: "Local market intelligence",
    text: "Ground-truth on demand, competition and expectations in the target region, gathered from sources close to it.",
  },
  {
    title: "Stakeholder introductions",
    text: "Where appropriate, warm paths to the people who move decisions, built on context rather than cold outreach.",
  },
  {
    title: "Regional opportunity assessment",
    text: "A candid reading of whether a market justifies the investment of entering it, and what entry would take.",
  },
  {
    title: "Entry narratives",
    text: "How the organization introduces itself to a new ecosystem so that first impressions create legitimacy.",
  },
];

export default function EcosystemMarketEntryPage() {
  return (
    <>
      <PageHero
        eyebrow="Ecosystem & Market Entry"
        title="A new market is a system, not a list of contacts."
        lede="Entering a frontier-technology ecosystem requires more than introductions. Organizations need to understand who holds influence, how decisions are made, where research and capital move, and which relationships create legitimacy."
      />

      {/* Framing */}
      <section>
        <Container className="grid gap-12 py-20 md:grid-cols-[1fr_1.2fr] md:gap-20 md:py-28">
          <Reveal>
            <SectionHeading eyebrow="The premise" title="Legitimacy is earned locally." />
          </Reveal>
          <Reveal
            delay={0.1}
            className="space-y-5 self-end text-base leading-relaxed text-fog md:text-lg"
          >
            <p>
              Frontier-technology ecosystems are small, interconnected and
              attentive. The same names recur across labs, funds, agencies
              and conference stages, and they talk to each other. An entrant
              who misreads the structure, approaches the wrong people first
              or arrives with the wrong story can spend years recovering
              from a poor introduction.
            </p>
            <p>
              Vector House works across international quantum, AI and
              deep-tech communities and builds entry strategies on how those
              ecosystems actually operate: where influence sits, what
              earns trust and which relationships compound.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Services */}
      <section className="border-t border-edge bg-panel">
        <Container className="py-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="The work"
              title="What an entry engagement can include."
            />
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden border border-edge bg-edge sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.04} className="h-full">
                <div className="h-full bg-night p-8">
                  <span className="font-mono text-xs text-signal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-serif text-xl leading-snug text-paper">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-fog">
                    {service.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* How it connects */}
      <section className="bg-grid relative border-t border-edge">
        <Container className="py-20 md:py-28">
          <Reveal className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="The approach"
              title="Map first. Move second."
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-fog md:text-lg">
              <p>
                Engagements usually begin with the map: a structured picture
                of the ecosystem’s institutions, people, capital and
                politics, weighted by influence rather than visibility. The
                map exposes the real entry points, which are rarely the
                obvious ones.
              </p>
              <p>
                From there the work becomes sequencing. Which relationships
                to build first, which events justify presence, which public
                moves establish credibility and which would spend it. Where
                appropriate, Vector House makes introductions directly and
                prepares the team for the conversations that follow.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaSection
        title="Enter the ecosystem with a map in hand."
        copy="Tell us the region or community you are moving toward and we will scope the intelligence and relationships the move requires."
        ctaLabel="Start a conversation"
      />
    </>
  );
}
