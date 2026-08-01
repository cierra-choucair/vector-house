import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Interior page opener: eyebrow, large serif headline, optional lede.
 * Sits under the fixed header, over a faint grid.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="bg-glow absolute inset-0" />
      <Container className="relative pt-36 pb-16 md:pt-44 md:pb-20">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.06] text-balance text-paper sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {lede && (
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-fog md:text-lg">
              {lede}
            </p>
          )}
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
