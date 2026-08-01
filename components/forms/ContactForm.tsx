"use client";

import { useRef, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { budgetOptions, interestOptions, timelineOptions } from "@/data/contact";
import { validateContactForm } from "@/lib/validation";
import type { ContactFormData, FieldErrors } from "@/types";
import { Button } from "@/components/ui/Button";
import { SelectField, TextAreaField, TextField } from "@/components/ui/Field";

type Status = "idle" | "loading" | "success" | "error";

function readForm(form: HTMLFormElement): ContactFormData {
  const fd = new FormData(form);
  const value = (key: string) => String(fd.get(key) ?? "").trim();
  return {
    name: value("name"),
    organization: value("organization"),
    email: value("email"),
    role: value("role"),
    interest: value("interest"),
    description: value("description"),
    timeline: value("timeline"),
    budget: value("budget"),
    referral: value("referral"),
    company: value("company"), // honeypot
  };
}

/**
 * Inquiry form. Validates locally with the same rules the API route uses,
 * posts to /api/contact, and shows loading, success and error states.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverMessage, setServerMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = readForm(event.currentTarget);

    const fieldErrors = validateContactForm(data);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) {
      setStatus("idle");
      // Move focus to the first invalid control for keyboard users.
      formRef.current
        ?.querySelector<HTMLElement>('[aria-invalid="true"]')
        ?.focus();
      return;
    }

    setStatus("loading");
    setServerMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json();
      if (res.ok && body.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrors(body.errors ?? {});
        setServerMessage(
          body.message ??
            "Something went wrong sending your inquiry. Please try again.",
        );
      }
    } catch {
      setStatus("error");
      setServerMessage(
        "Something went wrong sending your inquiry. Please email us directly instead.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-signal/30 bg-signal/5 p-10 text-center backdrop-blur-sm md:p-14"
      >
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-signal/50 text-signal">
          <Check aria-hidden="true" className="h-5 w-5" />
        </span>
        <h2 className="mt-6 font-serif text-3xl text-paper">
          Your inquiry is on its way.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-fog">
          Thank you for getting in touch. We read every inquiry carefully and
          typically respond within two business days.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <TextField
          label="Name"
          name="name"
          autoComplete="name"
          required
          error={errors.name}
        />
        <TextField
          label="Organization"
          name="organization"
          autoComplete="organization"
          error={errors.organization}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          required
          error={errors.email}
        />
        <TextField
          label="Role"
          name="role"
          autoComplete="organization-title"
          placeholder="e.g. Founder, Partner, Program Director"
          error={errors.role}
        />
        <SelectField
          label="Area of interest"
          name="interest"
          required
          options={interestOptions}
          error={errors.interest}
          className="sm:col-span-2"
        />
        <TextAreaField
          label="Project description"
          name="description"
          required
          placeholder="What are you working on, and what decision or outcome is in front of you?"
          error={errors.description}
          className="sm:col-span-2"
        />
        <SelectField
          label="Desired timeline"
          name="timeline"
          options={timelineOptions}
          error={errors.timeline}
        />
        <SelectField
          label="Approximate budget range"
          name="budget"
          options={budgetOptions}
          error={errors.budget}
        />
        <TextField
          label="How did you hear about Fourth Axis?"
          name="referral"
          error={errors.referral}
          className="sm:col-span-2"
        />

        {/* Honeypot: hidden from people, tempting to bots. */}
        <div aria-hidden="true" className="hidden">
          <label htmlFor="contact-company">Company</label>
          <input
            id="contact-company"
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
      </div>

      {status === "error" && serverMessage && (
        <p role="alert" className="mt-6 rounded-lg border border-red-400/40 bg-red-400/5 px-4 py-3 text-sm text-red-200">
          {serverMessage}
        </p>
      )}

      <div className="mt-8 flex flex-wrap items-center gap-6">
        <Button type="submit" disabled={status === "loading"} withArrow>
          {status === "loading" ? (
            <>
              <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
              Sending
            </>
          ) : (
            "Send inquiry"
          )}
        </Button>
        <p className="text-xs text-fog">
          Your details are used only to respond to this inquiry.
        </p>
      </div>
    </form>
  );
}
