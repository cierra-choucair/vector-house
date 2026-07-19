import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";
import { featureFlags } from "@/data/site";
import {
  selectedEvents,
  speakingFormats,
  speakingTestimonials,
  speakingThemes,
} from "@/data/speaking";

export const metadata = buildMetadata({
  title: "Speaking",
  description:
    "Keynotes, panel moderation, executive conversations and workshops on frontier technology, emerging markets and the systems that decide which technologies matter.",
  path: "/speaking",
  keywords: ["quantum technology speaker", "deep tech keynote", "panel moderator"],
});

export default function SpeakingPage() {
  return (
    <>
      <PageHero
        eyebrow="Speaking"
        title="Conversations that make hard technology legible."
        lede="Cierra Choucair speaks with and interviews the people building frontier technology: founders, scientists, investors and policymakers. The through-line is translation. Complex work, made meaningful, without losing its substance."
      />

      {/* Formats */}
      <section>
        <Container className="py-20 md:py-28">
          <Reveal>
            <SectionHeading eyebrow="Formats" title="Ways to work together on stage." />
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden border border-edge bg-edge sm:grid-cols-2 lg:grid-cols-3">
            {speakingFormats.map((format, index) => (
              <Reveal key={format.title} delay={index * 0.05} className="h-full">
                <div className="h-full bg-night p-8">
                  <span className="font-mono text-xs text-signal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-serif text-xl leading-snug text-paper">
                    {format.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-fog">
                    {format.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Themes */}
      <section className="border-t border-edge bg-panel">
        <Container className="py-20 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="Themes"
              title="Talks built on real analysis."
              lede="Each theme draws on Vector House's intelligence work rather than a recycled deck. Talks are tailored to the room, the moment and the audience's actual stakes."
            />
          </Reveal>
          <div className="mt-14 grid gap-x-16 gap-y-10 md:grid-cols-2">
            {speakingThemes.map((theme, index) => (
              <Reveal
                key={theme.title}
                delay={index * 0.04}
                className="border-t border-edge pt-6"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-xs text-signal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl leading-snug text-paper">
                      {theme.title}
                    </h3>
                    <p className="mt-2.5 max-w-md text-sm leading-relaxed text-fog">
                      {theme.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Selected events — hidden until verified content is added */}
      {featureFlags.showSelectedEvents && selectedEvents.length > 0 && (
        <section className="border-t border-edge">
          <Container className="py-20 md:py-28">
            <Reveal>
              <SectionHeading eyebrow="Selected events" title="Recent rooms." />
            </Reveal>
            <ul className="mt-12 divide-y divide-edge border-y border-edge">
              {selectedEvents.map((item) => (
                <li
                  key={`${item.event}-${item.year}`}
                  className="flex flex-wrap justify-between gap-3 py-5"
                >
                  <span className="text-paper">{item.event}</span>
                  <span className="text-sm text-fog">
                    {item.role} · {item.year}
                  </span>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* Testimonials — hidden until verified content is added */}
      {featureFlags.showTestimonials && speakingTestimonials.length > 0 && (
        <section className="border-t border-edge">
          <Container className="py-20 md:py-28">
            <Reveal>
              <SectionHeading eyebrow="Testimonials" title="From the room." />
            </Reveal>
            <ul className="mt-12 grid gap-6 md:grid-cols-2">
              {speakingTestimonials.map((t) => (
                <li key={t.attribution} className="border border-edge bg-panel p-8">
                  <blockquote className="font-serif text-xl leading-snug text-paper italic">
                    {t.quote}
                  </blockquote>
                  <p className="mt-4 text-sm text-fog">{t.attribution}</p>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/*
        Speaker video reel, photographs and downloadable speaker sheet.
        [VERIFIED CONTENT REQUIRED] — add assets to /public and enable
        showSpeakingVideo / showSpeakerPhotos / showSpeakerSheet in
        data/site.ts. Until then nothing renders here by design.
      */}

      <CtaSection
        title="Put the right conversation on your stage."
        copy="Share the event, the audience and the outcome you want from the session. You will get a direct answer about fit and availability."
        ctaLabel="Discuss a speaking engagement"
      />
    </>
  );
}
