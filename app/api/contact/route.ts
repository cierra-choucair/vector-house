import { NextResponse } from "next/server";
import { deliverContactInquiry } from "@/lib/email";
import { validateContactForm } from "@/lib/validation";
import type { ContactFormData } from "@/types";

/**
 * Contact form endpoint.
 * Validates with the same rules as the client, filters obvious bots via a
 * honeypot field, then hands delivery to the provider abstraction in
 * lib/email.ts (Resend, Formspree, or console fallback in development).
 */
export async function POST(request: Request) {
  let payload: Partial<ContactFormData>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  // Honeypot: real visitors never see or fill this field. Report success
  // so automated submitters learn nothing.
  if (payload.company) {
    return NextResponse.json({ ok: true, message: "Received." });
  }

  const data: ContactFormData = {
    name: String(payload.name ?? ""),
    organization: String(payload.organization ?? ""),
    email: String(payload.email ?? ""),
    role: String(payload.role ?? ""),
    interest: String(payload.interest ?? ""),
    description: String(payload.description ?? ""),
    timeline: String(payload.timeline ?? ""),
    budget: String(payload.budget ?? ""),
    referral: String(payload.referral ?? ""),
  };

  const errors = validateContactForm(data);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, message: "Please review the highlighted fields.", errors },
      { status: 422 },
    );
  }

  try {
    await deliverContactInquiry(data);
    return NextResponse.json({
      ok: true,
      message: "Your inquiry has been received.",
    });
  } catch (error) {
    console.error("[contact] Delivery failed:", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "We couldn't send your inquiry just now. Please try again or email us directly.",
      },
      { status: 502 },
    );
  }
}
