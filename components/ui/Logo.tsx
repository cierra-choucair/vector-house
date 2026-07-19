import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Vector House mark: a coordinate frame crossed by a rising vector.
 * Two corner ticks suggest an axis system; the arrow gives it direction.
 * Drawn with strokes only so it stays crisp at 20px.
 */
export function VectorMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn("h-6 w-6", className)}
    >
      {/* axis ticks: bottom-left and top-right corners */}
      <path
        d="M4 20v8h8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.45"
      />
      <path
        d="M28 12V4h-8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.45"
      />
      {/* rising vector with arrowhead */}
      <path d="M7 25 23 9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M15.5 8.5H23.5V16.5" stroke="currentColor" strokeWidth="1.8" />
      {/* origin node */}
      <circle cx="7" cy="25" r="2" fill="currentColor" />
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
      Vector&nbsp;House
    </span>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Vector House — home"
      className={cn(
        "group inline-flex items-center gap-3 text-paper transition-colors hover:text-white",
        className,
      )}
    >
      <VectorMark className="text-signal transition-transform duration-300 group-hover:-translate-y-px group-hover:translate-x-px" />
      <Wordmark />
    </Link>
  );
}
