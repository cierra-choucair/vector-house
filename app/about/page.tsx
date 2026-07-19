import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { personSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { featureFlags, siteConfig } from "@/data/site";

export const metadata = buildMetadata({
  title: "About Cierra Choucair",
  description:
    "Cierra Choucair is a strategist, writer, analyst and ecosystem builder working across quantum technology, artificial intelligence, scientific innovation and international technology communities.",
  path: "/about",
});

const expertiseAreas = [
  "Quantum technology and its commercial ecosystem",
  "Artificial intelligence and frontier compute",
  "Deep tech and scientific innovation",
  "Market and competitive intelligence",
  "Strategic positioning and category design",
  "Technology media and editorial strategy",
  "Government and institutional engagement",
  "International ecosystem development",
];

/**
 * Selected speaking, writing and ventures.
 * [VERIFIED CONTENT REQUIRED] — populate these arrays with confirmed items,
 * then enable the matching flags in data/site.ts. Sections render nothing
 * until both are done, so the live site never shows placeholders.
 */
const selectedSpeaking: { title: string; context: string }[] = [];
const selectedWriting: { title: string; outlet: string }[] = [];
const currentVentures: { name: string; description: string }[] = [];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema()} />

      <PageHero
        eyebrow="About"
        title="Cierra Choucair works across the systems shaping frontier technology."
        lede="Strategist, writer, analyst and ecosystem builder. Founder and principal of Vector House."
      />

      {/* Biography */}
      <section>
        <Container className="grid gap-14 py-20 md:grid-cols-[1.2fr_1fr] md:gap-20 md:py-28">
          <Reveal className="space-y-5 text-base leading-relaxed text-fog md:text-lg">
            <p>
              Cierra Choucair works across quantum technology, artificial
              intelligence, scientific innovation and the international
              communities building them. Her practice sits where technical
              research meets market intelligence, media, government
              engagement and commercial strategy.
            </p>
            <p>
              She has interviewed and advised technology leaders, moderated
              conversations with global decision-makers and helped
              organizations articulate the significance of complex
              technologies to the people positioned to fund, adopt and scale
              them.
            </p>
            <p>
              Her perspective is informed by experience spanning data
              analysis, technology journalism, strategic communications,
              international ecosystem development and the creation of new
              scientific and media ventures. That range is the point: frontier
              technology is decided in many rooms at once, and she has worked
              in most of them.
            </p>
            <p>
              Vector House is the formalization of that practice: a firm for
              organizations that need their technical advantage understood,
              positioned and acted on.
            </p>
          </Reveal>

          {/* Working philosophy panel */}
          <Reveal delay={0.15}>
            <div className="bg-grid relative flex h-full flex-col justify-between gap-10 border border-edge bg-card p-8 md:p-10">
              <Eyebrow>Working philosophy</Eyebrow>
              <div>
                <p className="font-serif text-2xl leading-snug text-paper italic md:text-[1.65rem]">
                  Technology does not enter the world in isolation.
                </p>
                <p className="mt-6 text-sm leading-relaxed text-fog">
                  Scientific progress is shaped by stories, institutions,
                  capital, politics, culture and the people able to make its
                  significance visible. Vector House exists to help serious
                  technologies move through those systems with greater
                  clarity and direction.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Expertise */}
      <section className="border-t border-edge bg-panel">
        <Container className="py-20 md:py-28">
          <Reveal>
            <SectionHeading eyebrow="Range" title="Areas of expertise." />
          </Reveal>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {expertiseAreas.map((area, index) => (
              <Reveal
                as="li"
                key={area}
                delay={index * 0.04}
                className="flex items-start gap-3 border border-edge bg-night px-5 py-4 text-sm leading-relaxed text-paper/90"
              >
                <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-signal" />
                {area}
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* International perspective */}
      <section className="bg-grid relative border-t border-edge">
        <Container className="grid gap-12 py-20 md:grid-cols-[1fr_1.2fr] md:gap-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="Perspective"
              title="Globally oriented by design."
            />
          </Reveal>
          <Reveal
            delay={0.1}
            className="space-y-5 self-end text-base leading-relaxed text-fog md:text-lg"
          >
            <p>
              Frontier technology is not built in one country. Research
              breakthroughs, sovereign funding programs, manufacturing
              capability and commercial demand are distributed across
              continents, and the organizations that win read them together.
            </p>
            <p>
              Cierra’s work spans international technology communities and
              the institutions around them. That vantage shapes everything
              Vector House produces: analysis that accounts for how markets,
              governments and research cultures differ, and strategy that
              travels across them.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Selected speaking — hidden until verified content is added */}
      {featureFlags.showSelectedEvents && selectedSpeaking.length > 0 && (
        <section className="border-t border-edge">
          <Container className="py-20 md:py-28">
            <Reveal>
              <SectionHeading
                eyebrow="Selected speaking"
                title="Rooms and stages."
              />
            </Reveal>
            <ul className="mt-12 divide-y divide-edge border-y border-edge">
              {selectedSpeaking.map((item) => (
                <li key={item.title} className="flex flex-wrap justify-between gap-3 py-5">
                  <span className="text-paper">{item.title}</span>
                  <span className="text-sm text-fog">{item.context}</span>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* Selected writing — hidden until verified content is added */}
      {featureFlags.showSelectedWriting && selectedWriting.length > 0 && (
        <section className="border-t border-edge">
          <Container className="py-20 md:py-28">
            <Reveal>
              <SectionHeading
                eyebrow="Selected writing"
                title="Analysis in print."
              />
            </Reveal>
            <ul className="mt-12 divide-y divide-edge border-y border-edge">
              {selectedWriting.map((item) => (
                <li key={item.title} className="flex flex-wrap justify-between gap-3 py-5">
                  <span className="text-paper">{item.title}</span>
                  <span className="text-sm text-fog">{item.outlet}</span>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* Current ventures — hidden until verified content is added */}
      {featureFlags.showCurrentVentures && currentVentures.length > 0 && (
        <section className="border-t border-edge">
          <Container className="py-20 md:py-28">
            <Reveal>
              <SectionHeading eyebrow="Ventures" title="Current ventures." />
            </Reveal>
            <ul className="mt-12 grid gap-6 md:grid-cols-2">
              {currentVentures.map((venture) => (
                <li key={venture.name} className="border border-edge bg-panel p-8">
                  <h3 className="font-serif text-xl text-paper">{venture.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fog">
                    {venture.description}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <CtaSection
        title="Work with someone who has seen the whole board."
        copy={`${siteConfig.name} takes on a limited number of engagements so each gets founder-level attention.`}
        ctaLabel="Start a conversation"
      />
    </>
  );
}
