import { siteConfig } from "@/data/site";
import type { ContactFormData } from "@/types";

/**
 * Contact form delivery abstraction.
 *
 * The API route calls `deliverContactInquiry` and never talks to a provider
 * directly, so swapping providers is a one-file change. Providers are
 * selected by environment variable, checked in this order:
 *
 *   1. RESEND_API_KEY       — sends via the Resend API (recommended).
 *   2. FORMSPREE_ENDPOINT   — forwards the payload to a Formspree form.
 *   3. Neither set          — logs the inquiry server-side and reports
 *                             success, so local development works with no
 *                             credentials.
 *
 * See README.md ("Configuring the contact form") for setup instructions.
 * Secrets stay server-side only: this module must never be imported from
 * a client component.
 */

type DeliveryResult = { delivered: boolean; provider: string };

const CONTACT_TO = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
const CONTACT_FROM =
  process.env.CONTACT_FROM_EMAIL ?? "Vector House <onboarding@resend.dev>";

function formatInquiryText(data: ContactFormData): string {
  const line = (label: string, value?: string) =>
    `${label}: ${value?.trim() || "—"}`;
  return [
    "New inquiry via vectorhouse.com",
    "",
    line("Name", data.name),
    line("Organization", data.organization),
    line("Email", data.email),
    line("Role", data.role),
    line("Area of interest", data.interest),
    line("Desired timeline", data.timeline),
    line("Budget range", data.budget),
    line("Heard about Vector House via", data.referral),
    "",
    "Project description:",
    data.description.trim(),
  ].join("\n");
}

async function sendWithResend(data: ContactFormData): Promise<DeliveryResult> {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      reply_to: data.email,
      subject: `Inquiry: ${data.interest} — ${data.name}`,
      text: formatInquiryText(data),
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Resend responded ${res.status}: ${detail.slice(0, 300)}`);
  }

  // Optional confirmation email back to the sender.
  if (process.env.CONTACT_SEND_CONFIRMATION === "true") {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: [data.email],
        subject: "Vector House — we received your inquiry",
        text: [
          `Hi ${data.name.trim().split(/\s+/)[0]},`,
          "",
          "Thank you for getting in touch with Vector House. Your inquiry has been received and we typically respond within two business days.",
          "",
          "If anything is time-sensitive in the meantime, reply directly to this email.",
          "",
          "Vector House",
          "Ideas with direction.",
        ].join("\n"),
      }),
      // A failed confirmation should never fail the inquiry itself.
    }).catch(() => undefined);
  }

  return { delivered: true, provider: "resend" };
}

async function sendWithFormspree(data: ContactFormData): Promise<DeliveryResult> {
  const res = await fetch(process.env.FORMSPREE_ENDPOINT as string, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name: data.name,
      organization: data.organization,
      email: data.email,
      role: data.role,
      interest: data.interest,
      timeline: data.timeline,
      budget: data.budget,
      referral: data.referral,
      message: data.description,
    }),
  });

  if (!res.ok) {
    throw new Error(`Formspree responded ${res.status}`);
  }
  return { delivered: true, provider: "formspree" };
}

export async function deliverContactInquiry(
  data: ContactFormData,
): Promise<DeliveryResult> {
  if (process.env.RESEND_API_KEY) {
    return sendWithResend(data);
  }
  if (process.env.FORMSPREE_ENDPOINT) {
    return sendWithFormspree(data);
  }

  // Development fallback: no provider configured. The inquiry is logged on
  // the server so nothing is silently lost while building locally.
  console.info("[contact] No email provider configured. Inquiry received:\n");
  console.info(formatInquiryText(data));
  return { delivered: true, provider: "console" };
}
