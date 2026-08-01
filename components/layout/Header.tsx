"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav, navCta } from "@/data/navigation";
import { Logo } from "@/components/ui/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { cn } from "@/lib/utils";

/**
 * Fixed site header. Transparent over the hero, gaining a solid backdrop
 * and hairline border once the page scrolls.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-edge/80 bg-night/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:h-18 md:px-8">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {mainNav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-sm transition-colors",
                  active ? "text-paper" : "text-fog hover:text-paper",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={navCta.href}
            className="rounded-lg border border-paper/15 bg-card/40 px-4 py-2 text-sm text-paper backdrop-blur-sm transition-colors hover:border-signal hover:text-signal"
          >
            {navCta.label}
          </Link>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
