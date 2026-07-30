import Image from "next/image";
import { featureFlags } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Founder portrait card with a tesseract-cornered frame and name plate.
 *
 * Renders the photograph from /public/founder/cierra-choucair.jpg once
 * featureFlags.showFounderPortrait is enabled; until then it shows the
 * abstract tesseract composition so the layout never displays a broken
 * or placeholder image.
 */
export function FounderPortrait({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden border border-edge bg-card",
        className,
      )}
    >
      {featureFlags.showFounderPortrait ? (
        <Image
          src="/founder/cierra-choucair.jpg"
          alt="Cierra Choucair, founder and principal of Fourth Axis"
          fill
          priority={priority}
          sizes="(min-width: 1024px) 26rem, (min-width: 640px) 50vw, 85vw"
          className="object-cover object-top"
        />
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 400 480"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
        >
          <rect
            x="80"
            y="110"
            width="240"
            height="240"
            fill="none"
            stroke="#eae7e0"
            strokeOpacity="0.2"
            strokeWidth="1.2"
          />
          <path
            d="M80 110 158 188M320 110 242 188M80 350 158 272M320 350 242 272"
            fill="none"
            stroke="var(--color-iris)"
            strokeOpacity="0.45"
            strokeWidth="1"
          />
          <rect
            x="158"
            y="188"
            width="84"
            height="84"
            fill="none"
            stroke="var(--color-signal)"
            strokeOpacity="0.9"
            strokeWidth="1.4"
          />
          <path
            d="M-20 440 C 120 400, 240 370, 420 280"
            fill="none"
            stroke="var(--color-signal)"
            strokeOpacity="0.3"
            strokeWidth="1"
          />
        </svg>
      )}

      {/* Corner ticks */}
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 h-5 w-5 border-t-2 border-l-2 border-signal/70"
      />
      <span
        aria-hidden="true"
        className="absolute right-0 bottom-0 h-5 w-5 border-r-2 border-b-2 border-signal/70"
      />

      {/* Name plate */}
      <figcaption className="absolute inset-x-0 bottom-0 border-t border-edge bg-night/80 px-5 py-4 backdrop-blur-sm">
        <p className="text-sm font-medium text-paper">Cierra Choucair</p>
        <p className="mt-0.5 font-mono text-[0.62rem] uppercase tracking-eyebrow text-fog">
          Founder & Principal · Fourth Axis
        </p>
      </figcaption>
    </figure>
  );
}
