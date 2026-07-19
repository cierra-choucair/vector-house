"use client";

import { useState } from "react";
import { Check, Link2 } from "lucide-react";
import { LinkedInIcon, XIcon } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/data/site";

const iconButton =
  "flex h-9 w-9 items-center justify-center border border-edge text-fog transition-colors hover:border-signal hover:text-signal";

/** Share the current article to X, LinkedIn, or copy its URL. */
export function ShareLinks({ slug, title }: { slug: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const url = `${siteConfig.url}/insights/${slug}`;

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. insecure context); fail quietly.
    }
  }

  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[0.65rem] uppercase tracking-eyebrow text-fog">
        Share
      </span>
      <a
        href={`https://x.com/intent/post?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className={iconButton}
      >
        <XIcon className="h-3.5 w-3.5" />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className={iconButton}
      >
        <LinkedInIcon className="h-4 w-4" />
      </a>
      <button
        type="button"
        onClick={copyLink}
        aria-label={copied ? "Link copied" : "Copy link"}
        className={iconButton}
      >
        {copied ? (
          <Check aria-hidden="true" className="h-4 w-4 text-signal" />
        ) : (
          <Link2 aria-hidden="true" className="h-4 w-4" />
        )}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? "Link copied to clipboard" : ""}
      </span>
    </div>
  );
}
