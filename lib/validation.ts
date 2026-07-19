import { budgetOptions, interestOptions, timelineOptions } from "@/data/contact";
import type { ContactFormData, FieldErrors } from "@/types";

/**
 * Contact and newsletter validation, shared verbatim by the client forms
 * and the API routes so the two can never drift apart.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_RE.test(value.trim());
}

export function validateContactForm(data: Partial<ContactFormData>): FieldErrors {
  const errors: FieldErrors = {};

  if (!data.name?.trim()) {
    errors.name = "Please add your name.";
  } else if (data.name.trim().length > 200) {
    errors.name = "Please keep your name under 200 characters.";
  }

  if (!data.email?.trim()) {
    errors.email = "Please add your email address.";
  } else if (!isValidEmail(data.email)) {
    errors.email = "That email address doesn't look right.";
  }

  if (!data.interest?.trim()) {
    errors.interest = "Please choose an area of interest.";
  } else if (!(interestOptions as readonly string[]).includes(data.interest)) {
    errors.interest = "Please choose one of the listed options.";
  }

  if (!data.description?.trim()) {
    errors.description = "Please describe your project or situation.";
  } else if (data.description.trim().length < 30) {
    errors.description =
      "A little more detail helps. Two or three sentences is plenty.";
  } else if (data.description.trim().length > 5000) {
    errors.description = "Please keep the description under 5,000 characters.";
  }

  if (data.budget && !(budgetOptions as readonly string[]).includes(data.budget)) {
    errors.budget = "Please choose one of the listed ranges.";
  }

  if (
    data.timeline &&
    !(timelineOptions as readonly string[]).includes(data.timeline)
  ) {
    errors.timeline = "Please choose one of the listed options.";
  }

  for (const field of ["organization", "role", "referral"] as const) {
    const value = data[field];
    if (value && value.length > 500) {
      errors[field] = "Please keep this under 500 characters.";
    }
  }

  return errors;
}
