import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/Eyebrow";

/** Standard section opener: eyebrow, serif headline, optional lede. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  className,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow className={cn("mb-5", align === "center" && "justify-center")}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2 className="font-serif text-4xl leading-[1.08] text-balance text-paper md:text-5xl">
        {title}
      </h2>
      {lede && (
        <p className="mt-6 text-base leading-relaxed text-fog md:text-lg">
          {lede}
        </p>
      )}
    </div>
  );
}
