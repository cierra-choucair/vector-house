import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { proofStories } from "@/data/work";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Work",
  description:
    "Selected proof of capability: quantum journalism, global ecosystem programming, scientific-intelligence ventures and initiative design across the frontier-technology world.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Capability, already in evidence."
        lede="Fourth Axis does not need to invent authority. The stories below are drawn from the founder's public body of work across journalism, ventures, initiatives and global programming. Each one makes a specific capability visible. They are shown as evidence of how the practice thinks and works, not as client case studies."
      />

      <section>
        <Container className="py-16 md:py-24">
          <div className="space-y-16 md:space-y-20">
            {proofStories.map((story, index) => (
              <Reveal
                key={story.slug}
                className="grid gap-8 border-t border-edge pt-10 md:grid-cols-[1fr_1.6fr] md:gap-16"
              >
                <div>
                  <span className="font-mono text-xs text-fog">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 font-serif text-3xl leading-tight text-paper">
                    {story.title}
                  </h2>
                  <p className="mt-2 text-sm text-fog">{story.role}</p>
                  <p className="mt-5 font-mono text-[0.65rem] uppercase tracking-eyebrow text-signal">
                    {story.capability}
                  </p>
                  <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-eyebrow text-fog">
                    Practice · {story.practice}
                  </p>
                </div>
                <div className="self-center">
                  <p className="font-serif text-xl leading-snug text-paper/90 italic md:text-2xl">
                    {story.angle}
                  </p>
                  <p className="mt-5 max-w-2xl text-sm leading-relaxed text-fog md:text-base">
                    {story.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/*
            Public links, artifacts and outcomes per story.
            [VERIFIED CONTENT REQUIRED] — gather links and permissions, add
            `href` values in data/work.ts, then enable
            featureFlags.showProofLinks in data/site.ts. Partner-owned
            programs and client work (including HKA engagements) must not
            be added without explicit permission and clear attribution.
          */}

          <Reveal className="mt-20 border border-edge bg-panel p-8 md:p-10">
            <p className="max-w-3xl text-sm leading-relaxed text-fog">
              A note on boundaries: independent editorial work, partner-led
              initiatives and client engagements conducted under other
              organizations are described here only in terms of the
              founder&rsquo;s own role. Detailed case studies are shared in
              conversation where permissions allow.
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaSection
        title="See what this looks like on your problem."
        copy="The fastest way to evaluate Fourth Axis is to bring one consequential question and watch how it gets taken apart."
        ctaLabel="Start a conversation"
      />
    </>
  );
}
