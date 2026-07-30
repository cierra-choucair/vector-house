import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";

/** Custom 404: an off-course trajectory, redirected home. */
export default function NotFound() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden">
      <div aria-hidden="true" className="bg-glow absolute inset-0" />

      {/* A trajectory that misses its mark */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-50"
      >
        <path
          d="M-60 620 C 300 540, 560 560, 800 420 S 1000 260, 1040 180"
          fill="none"
          stroke="var(--color-signal)"
          strokeOpacity="0.35"
          strokeWidth="1.2"
          strokeDasharray="6 8"
        />
        <circle cx="1040" cy="180" r="4" fill="var(--color-signal)" fillOpacity="0.6" />
        <circle
          cx="1040"
          cy="180"
          r="14"
          fill="none"
          stroke="var(--color-signal)"
          strokeOpacity="0.25"
        />
      </svg>

      <div className="relative mx-auto w-full max-w-6xl px-6 py-32 md:px-8">
        <p className="flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-eyebrow text-fog">
          <span aria-hidden="true" className="h-px w-6 bg-signal" />
          Error 404
        </p>
        <h1 className="mt-7 max-w-3xl font-serif text-5xl leading-[1.05] text-balance text-paper md:text-7xl">
          This trajectory leads nowhere.
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-fog md:text-lg">
          The page you are looking for has moved, changed course or never
          existed. The rest of the site is exactly where it should be.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/">Return home</ButtonLink>
          <ButtonLink href="/services" variant="outline">
            Explore services
          </ButtonLink>
        </div>
        <p className="mt-10 text-sm text-fog">
          Looking for something specific?{" "}
          <Link
            href="/contact"
            className="text-paper underline decoration-edge underline-offset-4 transition-colors hover:text-signal"
          >
            Ask us directly
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
