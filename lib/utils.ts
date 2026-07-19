import { clsx, type ClassValue } from "clsx";

/** Compose class names conditionally. */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** Format an ISO date string for display, e.g. "May 12, 2026". */
export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
