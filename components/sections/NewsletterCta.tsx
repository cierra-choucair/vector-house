import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

/** Newsletter band used on the Ideas index and article pages. */
export function NewsletterCta() {
  return (
    <section className="border-t border-edge bg-panel">
      <Container className="py-16 md:py-20">
        <Reveal className="grid gap-8 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-eyebrow text-signal">
              Signals from the frontier
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-paper">
              Analysis worth the inbox space.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-fog">
              Occasional analysis on emerging markets, technical authority and
              the systems shaping frontier technology.
            </p>
          </div>
          <NewsletterForm />
        </Reveal>
      </Container>
    </section>
  );
}
