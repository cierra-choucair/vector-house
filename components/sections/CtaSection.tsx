import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

/** Closing call-to-action band, reused across pages. */
export function CtaSection({
  title = "From complexity to direction. From direction to movement.",
  copy = "Fourth Axis works with a select number of leaders building consequential technologies. The fastest way to evaluate the practice is to bring it one consequential problem.",
  ctaLabel = "Start a conversation",
  ctaHref = "/contact",
}: {
  title?: string;
  copy?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="bg-glow absolute inset-0" />
      {/* directional accent line */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 240"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-40"
      >
        <path
          d="M-40 220 C 300 190, 700 150, 1240 40"
          fill="none"
          stroke="var(--color-signal)"
          strokeOpacity="0.25"
          strokeWidth="1"
        />
      </svg>
      <Container className="relative py-24 text-center md:py-32">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-[1.08] text-balance text-paper md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-fog">
            {copy}
          </p>
          <div className="mt-10">
            <ButtonLink href={ctaHref}>{ctaLabel}</ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
