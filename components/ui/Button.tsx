import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 text-sm font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-paper text-night px-6 py-3 hover:bg-white",
  outline:
    "border border-edge px-6 py-3 text-paper hover:border-fog hover:text-white",
  ghost: "text-paper hover:text-signal px-0 py-1",
};

function Arrow() {
  return (
    <ArrowRight
      aria-hidden="true"
      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
    />
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  withArrow = true,
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
      {withArrow && <Arrow />}
    </Link>
  );
}

export function Button({
  variant = "primary",
  withArrow = false,
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  withArrow?: boolean;
}) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
      {withArrow && <Arrow />}
    </button>
  );
}
