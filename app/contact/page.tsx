import { Mail } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Start a conversation with Fourth Axis about communications, positioning, intelligence, advisory, speaking or an editorial project.",
  path: "/contact",
});

const expectations = [
  {
    title: "A close read",
    text: "Every inquiry is read carefully by the person who would do the work, not routed through a pipeline.",
  },
  {
    title: "A prompt reply",
    text: "You will typically hear back within two business days, with substance rather than a scheduling link reflex.",
  },
  {
    title: "A straight answer",
    text: "If Fourth Axis is not the right fit, you will be told so directly, and pointed elsewhere when possible.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation."
        lede="Describe what you are navigating and what a good outcome looks like. The more concrete the situation, the more useful the first conversation will be."
      />

      <section>
        <Container className="grid gap-16 py-16 md:py-24 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="space-y-10">
              <div className="border border-edge bg-panel p-8">
                <h2 className="font-mono text-[0.7rem] uppercase tracking-eyebrow text-fog">
                  Prefer email?
                </h2>
                {/*
                  Direct address comes from data/site.ts.
                  [VERIFIED CONTENT REQUIRED] — update there if the live
                  domain or inbox differs.
                */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-4 inline-flex items-center gap-3 font-serif text-xl text-paper transition-colors hover:text-signal"
                >
                  <Mail aria-hidden="true" className="h-5 w-5 text-signal" />
                  {siteConfig.email}
                </a>
                <p className="mt-4 text-sm leading-relaxed text-fog">
                  Direct email works just as well as the form. Include the
                  same context and it will reach the same desk.
                </p>
              </div>

              <div>
                <h2 className="font-mono text-[0.7rem] uppercase tracking-eyebrow text-fog">
                  What to expect
                </h2>
                <ul className="mt-6 space-y-6">
                  {expectations.map((item, index) => (
                    <li key={item.title} className="flex gap-5">
                      <span className="font-mono text-xs text-signal">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-sm font-medium text-paper">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-fog">
                          {item.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
