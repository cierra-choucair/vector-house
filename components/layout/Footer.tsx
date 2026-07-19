import Link from "next/link";
import { Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/BrandIcons";
import { footerNav } from "@/data/navigation";
import { siteConfig, socialLinks } from "@/data/site";
import { VectorMark, Wordmark } from "@/components/ui/Logo";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

const socialIcons = {
  linkedin: LinkedInIcon,
  mail: Mail,
} as const;

export function Footer() {
  return (
    <footer className="border-t border-edge bg-panel">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        {/* Newsletter band */}
        <div className="grid gap-8 border-b border-edge py-14 md:grid-cols-2 md:gap-16">
          <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-eyebrow text-signal">
              Signals from the frontier
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-fog">
              Occasional analysis on emerging markets, technical authority and
              the systems shaping frontier technology.
            </p>
          </div>
          <NewsletterForm className="self-center" />
        </div>

        {/* Main footer grid */}
        <div className="grid gap-12 py-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-3 text-paper">
              <VectorMark className="text-signal" />
              <Wordmark />
            </div>
            <p className="mt-4 font-serif text-lg text-paper italic">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fog">
              Strategic intelligence and advisory for founders, investors and
              institutions building in frontier technology.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.icon as keyof typeof socialIcons];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    {...(link.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex h-9 w-9 items-center justify-center border border-edge text-fog transition-colors hover:border-signal hover:text-signal"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {footerNav.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="font-mono text-[0.7rem] uppercase tracking-eyebrow text-fog">
                {column.heading}
              </h2>
              <ul className="mt-4 space-y-3">
                {column.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-paper/80 transition-colors hover:text-signal"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Legal line */}
        <div className="flex flex-col gap-3 border-t border-edge py-6 text-xs text-fog md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p className="font-mono uppercase tracking-eyebrow">
            Strategic intelligence for frontier technology
          </p>
        </div>
      </div>
    </footer>
  );
}
