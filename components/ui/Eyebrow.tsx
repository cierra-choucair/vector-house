import { cn } from "@/lib/utils";

/**
 * Small technical label above headlines: monospace, tracked out,
 * with a short signal-blue rule as a directional tick.
 */
export function Eyebrow({
  children,
  className,
  as: Tag = "p",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "div";
}) {
  return (
    <Tag
      className={cn(
        "flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-eyebrow text-fog",
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-6 bg-signal" />
      {children}
    </Tag>
  );
}
