import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { FounderPortrait } from "@/components/sections/FounderPortrait";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { personSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { hasFounderPortrait } from "@/lib/founder";
import { coreThesis } from "@/data/services";

export const metadata = buildMetadata({
  title: "About Cierra Choucair",
  description:
    "Cierra Choucair is a strategist, science communicator, journalist, founder and global speaker working across quantum technology, AI, scientific discovery and emerging systems. Founder and principal of Fourth Axis.",
  path: "/about",
});

/**
 * The recurring pattern: what each body of work proves.
 * Source: foundational positioning document (July 2026).
 */
const bodyOfWork: { work: string; proves: string }[] = [
  {
    work: "Journalism and The Daily Qubit",
    proves:
      "Research discipline, technical translation, editorial judgment and the ability to identify signal across a fast-moving field.",
  },
  {
    work: "Strategic content leadership",
    proves:
      "The ability to turn company expertise into credible narratives, thought leadership, reports, campaigns and durable market trust.",
  },
  {
    work: "Data analysis and Universum Labs",
    proves:
      "A systems-level approach to evidence, relationships, readiness, opportunity analysis and scientific intelligence.",
  },
  {
    work: "Quantum World Tour and ITU programming",
    proves:
      "Global ecosystem fluency, executive interviewing, institutional trust, program curation and cross-cultural convening.",
  },
  {
    work: "Android Dreams and QFrontline",
    proves:
      "Independent editorial vision, audience building and the ability to create new containers for difficult ideas.",
  },
  {
    work: "QPLI, QUALIA and advisory work",
    proves:
      "Coalition-building, mentorship, education strategy and the design of initiatives that connect institutions, experts and emerging talent.",
  },
  {
    work: "Global speaking and moderation",
    proves:
      "Executive presence, live synthesis and the ability to guide conversations among technical, government, academic and commercial stakeholders.",
  },
];

/**
 * External signals of credibility, per the foundational document's
 * evidence section (public sources reviewed 30 July 2026).
 * [VERIFIED CONTENT REQUIRED] — add public source links before launch.
 */
const publicRecord: string[] = [
  "Appointed in July 2026 to lead HKA's new Strategic Content Division, cited for the combination of journalism, data analysis, strategic communications and knowledge of the global quantum ecosystem.",
  "Profiled by ITU's AI for Good as a founder, science communicator and global speaker, with documented work across Universum Labs, Android Dreams, QED-C, QUALIA, QPLI and the Quantum World Tour.",
  "Selected for the International Year of Quantum's Quantum 100.",
  "Author of The Daily Qubit at The Quantum Insider, covering the quantum industry through journalism and data analysis.",
];

/** How the wider world of ventures fits together. */
const ventures: { name: string; role: string; boundary: string }[] = [
  {
    name: "Fourth Axis",
    role: "The founder-led strategy and communications advisory practice for consequential technology.",
    boundary:
      "Client-directed work with defined scope, deliverables and commercial terms.",
  },
  {
    name: "Universum Labs",
    role: "A product and research company developing scientific-intelligence infrastructure and decision tools.",
    boundary:
      "Independent of the consultancy; collaborates where a client needs custom research or intelligence technology.",
  },
  {
    name: "Android Dreams",
    role: "An independent public-interest media and community platform exploring frontier technology and culture.",
    boundary:
      "Editorial independence is protected; its coverage is never part of paid consulting.",
  },
  {
    name: "Collaborative initiatives",
    role: "QPLI, QUALIA, the Quantum World Tour and other coalition or partner-led programs.",
    boundary:
      "Shared ownership and governance are respected; Cierra's role is described precisely.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema()} />

      <PageHero
        eyebrow="About"
        title="Cierra Choucair is not a generalist. She is an integrator."
        lede="Strategist, science communicator, journalist, founder and global speaker. Founder and principal of Fourth Axis."
      />

      {/* Biography */}
      <section>
        <Container className="grid gap-14 py-20 md:grid-cols-[1.2fr_1fr] md:gap-20 md:py-28">
          <Reveal className="space-y-5 text-base leading-relaxed text-fog md:text-lg">
            <p>
              Cierra works across quantum technology, artificial
              intelligence, scientific discovery and emerging systems. The
              titles vary: journalist, analyst, strategist, founder,
              moderator. The operating function is consistent. She enters
              complex environments, identifies the relationships that
              matter, translates technical depth without sacrificing
              accuracy, and gives people a clearer way to understand and
              move.
            </p>
            <p>
              Her authority does not come from observing deep tech at a
              distance. It comes from working inside its communications,
              data, editorial, founder, ecosystem and institutional layers
              at the same time. That multidimensional vantage is the reason
              Fourth Axis exists, and the reason it can credibly connect a
              precise line of copy to the market and ecosystem conditions
              that decide whether it matters.
            </p>
            <p>
              Fourth Axis is the commercial form of that practice: a
              founder-led firm for organizations whose technical ambition
              has outgrown the way it is currently understood, positioned
              or carried into the market.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <ButtonLink href="/about/portfolio" variant="outline">
                Founder&rsquo;s Expanded Portfolio
              </ButtonLink>
            </div>
          </Reveal>

          {/* Portrait + working philosophy */}
          <Reveal delay={0.15} className="space-y-6">
            <FounderPortrait
              showPhoto={hasFounderPortrait()}
              className="aspect-6/7 w-full"
            />
            <div className="card relative p-8 md:p-10">
              <Eyebrow>Core thesis</Eyebrow>
              <p className="mt-8 font-serif text-2xl leading-snug text-paper italic md:text-[1.65rem]">
                {coreThesis}
              </p>
              <p className="mt-6 text-sm leading-relaxed text-fog">
                Fourth Axis works in the dimension between an ambitious
                idea and the coordinated belief, decisions, relationships
                and actions required to make it real.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* The recurring pattern */}
      <section>
        <Container className="py-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="The pattern"
              title="One function, many rooms."
              lede="Each body of work proves a capability the practice now offers commercially. The Founder's Expanded Portfolio details every venture, publication and program behind this table."
            />
          </Reveal>
          <div className="mt-12">
            {bodyOfWork.map((row, index) => (
              <Reveal
                key={row.work}
                delay={index * 0.03}
                className="grid gap-3 border-b border-edge/50 py-6 md:grid-cols-[1fr_1.6fr] md:gap-12"
              >
                <h3 className="font-serif text-lg leading-snug text-paper">
                  {row.work}
                </h3>
                <p className="text-sm leading-relaxed text-fog md:self-center">
                  {row.proves}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Public record */}
      <section className="relative">
        <div aria-hidden="true" className="bg-glow absolute inset-0" />
        <Container className="relative py-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="On the public record"
              title="Credibility that predates the firm."
            />
          </Reveal>
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {publicRecord.map((item, index) => (
              <Reveal
                as="li"
                key={item}
                delay={index * 0.05}
                className="card flex gap-5 p-7"
              >
                <span className="font-mono text-xs text-signal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-paper/85">{item}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Ventures and boundaries */}
      <section>
        <Container className="py-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="The wider world"
              title="Fourth Axis organizes Cierra's world. It does not absorb it."
              lede="The ventures around the practice are an asset because their roles are legible, and their boundaries are kept."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {ventures.map((venture, index) => (
              <Reveal
                key={venture.name}
                delay={index * 0.05}
                className="card flex h-full flex-col p-8"
              >
                <h3 className="font-serif text-2xl text-paper">{venture.name}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-fog">
                  {venture.role}
                </p>
                <p className="mt-5 border-t border-edge pt-4 text-xs leading-relaxed text-fog">
                  <span className="font-mono uppercase tracking-eyebrow text-paper/70">
                    Boundary ·{" "}
                  </span>
                  {venture.boundary}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Work with someone who has seen the whole board."
        copy="Fourth Axis takes on a limited number of engagements so each gets founder-level attention."
        ctaLabel="Start a conversation"
      />
    </>
  );
}
