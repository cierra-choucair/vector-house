import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Fourth Axis mark: a tesseract in plane projection — the outer cell,
 * the inner cell and the four edges that connect them through the
 * fourth dimension. Drawn with strokes only so it stays crisp at 20px
 * and reads as architecture, not ornament.
 */
export function TesseractMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn("h-6 w-6", className)}
    >
      {/* outer cell */}
      <rect
        x="4.5"
        y="4.5"
        width="23"
        height="23"
        stroke="currentColor"
        strokeOpacity="0.45"
        strokeWidth="1.5"
      />
      {/* connecting edges through the fourth axis */}
      <path
        d="M4.5 4.5 12 12M27.5 4.5 20 12M4.5 27.5 12 20M27.5 27.5 20 20"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1.2"
      />
      {/* inner cell */}
      <rect
        x="12"
        y="12"
        width="8"
        height="8"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

/**
 * Text wordmark. Rendered as styled text (not paths) so it stays
 * accessible, selectable and crisp at every size.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-sans text-[0.95rem] font-medium tracking-[0.22em] uppercase",
        className,
      )}
    >
      Fourth&nbsp;Axis
    </span>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Fourth Axis — home"
      className={cn(
        "group inline-flex items-center gap-3 text-paper transition-colors hover:text-white",
        className,
      )}
    >
      <TesseractMark className="text-signal transition-transform duration-500 group-hover:rotate-90" />
      <Wordmark />
    </Link>
  );
}
