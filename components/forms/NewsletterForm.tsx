"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { isValidEmail } from "@/lib/validation";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

/**
 * Newsletter signup. Posts to /api/newsletter, which routes through the
 * provider abstraction in lib/newsletter.ts.
 */
export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isValidEmail(email)) {
      setStatus("error");
      setMessage("That email address doesn't look right.");
      return;
    }
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const body = await res.json();
      if (res.ok && body.ok) {
        setStatus("success");
        setMessage("You're on the list. Watch for the next signal.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(body.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn("flex items-center gap-3 py-3", className)}
        role="status"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-signal/40 text-signal">
          <Check aria-hidden="true" className="h-4 w-4" />
        </span>
        <p className="text-sm text-paper">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={className}>
      <div className="flex border border-edge bg-card transition-colors focus-within:border-signal">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@organization.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          className="w-full bg-transparent px-4 py-3 text-sm text-paper placeholder:text-fog/60 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          aria-label="Subscribe to the newsletter"
          className="flex items-center px-4 text-fog transition-colors hover:text-signal disabled:opacity-50"
        >
          {status === "loading" ? (
            <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
          ) : (
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          )}
        </button>
      </div>
      <p
        role={status === "error" ? "alert" : undefined}
        className={cn(
          "mt-2 min-h-4 text-xs",
          status === "error" ? "text-red-300" : "text-fog/70",
        )}
      >
        {status === "error" ? message : "No spam. Unsubscribe anytime."}
      </p>
    </form>
  );
}
