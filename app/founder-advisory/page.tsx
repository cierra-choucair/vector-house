import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Founder Advisory",
  description:
    "Strategic counsel for technical founders: narrative, positioning, public authority, investor communication and decision support in frontier technology.",
  path: "/founder-advisory",
  keywords: [
    "technical founder coaching",
    "founder positioning",
    "deep tech founder advisory",
  ],
});

const advisoryAreas = [
  {
    title: "Founder narrative",
    text: "A coherent account of why you, why this and why now, grounded in the technical story and usable everywhere the company speaks.",
  },
  {
    title: "Strategic positioning",
    text: "Where the company sits in a still-forming category, what it should be compared against and what claim it can defend.",
  },
  {
    title: "Public authority",
    text: "A deliberate presence in the venues where your field is interpreted: editorial, stages, panels and the rooms in between.",
  },
  {
    title: "Investor communication",
    text: "Translating deep technical work into a thesis an investment committee can underwrite, without inflating it.",
  },
  {
    title: "Speaking preparation",
    text: "Preparation for keynotes, panels and high-stakes rooms, from argument structure to delivery.",
  },
  {
    title: "Editorial strategy",
    text: "What to write, where to publish and which themes to own so that visibility accumulates instead of evaporating.",
  },
  {
    title: "Category leadership",
    text: "Moving from participant to reference point: the company others must mention when they explain the field.",
  },
  {
    title: "Decision support",
    text: "A confidential outside perspective on consequential calls, from partnerships to positioning to timing.",
  },
];

export default function FounderAdvisoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Founder Advisory"
        title="The founder becomes part of the market signal."
        lede="In frontier technology, people evaluate the credibility of the leader alongside the credibility of the technology. Investors read the founder as evidence. So do journalists, governments, recruits and early customers."
      />

      {/* Framing */}
      <section>
        <Container className="grid gap-12 py-20 md:grid-cols-[1fr_1.2fr] md:gap-20 md:py-28">
          <Reveal>
            <SectionHeading eyebrow="The premise" title="Counsel, not personal branding." />
          </Reveal>
          <Reveal
            delay={0.1}
            className="space-y-5 self-end text-base leading-relaxed text-fog md:text-lg"
          >
            <p>
              This is not a personal-branding service. Personal branding
              optimizes for attention. Founder advisory optimizes for
              judgment: what you say, where you say it and how it converts
              into funding, partnerships and commercial momentum.
            </p>
            <p>
              The work assumes you would rather be trusted than famous. It
              treats your public presence as a strategic asset of the
              company, governed with the same seriousness as the technical
              roadmap or the cap table.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Areas */}
      <section className="border-t border-edge bg-panel">
        <Container className="py-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="The work"
              title="Where advisory engagements focus."
            />
          </Reveal>
          <div className="mt-14 grid gap-x-16 gap-y-10 sm:grid-cols-2">
            {advisoryAreas.map((area, index) => (
              <Reveal
                key={area.title}
                delay={index * 0.04}
                className="border-t border-edge pt-6"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-xs text-signal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl leading-snug text-paper">
                      {area.title}
                    </h3>
                    <p className="mt-2.5 max-w-md text-sm leading-relaxed text-fog">
                      {area.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Translation section */}
      <section className="relative border-t border-edge">
        <Container className="py-20 md:py-28">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionHeading
              align="center"
              eyebrow="The discipline"
              title="Translating complexity without flattening it."
            />
            <div className="mt-8 space-y-5 text-left text-base leading-relaxed text-fog md:text-lg">
              <p>
                The common advice given to technical founders is to simplify.
                It is half right. Audiences do need a way in. But
                simplification that discards the substance produces a message
                any competitor can copy, and technical evaluators can see
                through it immediately.
              </p>
              <p>
                Translation is different. Translation preserves the meaning
                while changing the language: the claim stays rigorous, the
                framing becomes usable. Done well, it gives a physicist and a
                pension fund the same accurate understanding at different
                resolutions.
              </p>
              <p>
                That is the standard this practice holds. Your significance,
                stated precisely, in language the people who matter can carry
                into their own rooms.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaSection
        title="Make the leader as legible as the technology."
        copy="Advisory engagements are limited and begin with a direct conversation about where you are and what is at stake."
        ctaLabel="Start a conversation"
      />
    </>
  );
}
