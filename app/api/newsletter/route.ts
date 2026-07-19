import { NextResponse } from "next/server";
import { subscribeToNewsletter } from "@/lib/newsletter";
import { isValidEmail } from "@/lib/validation";

/**
 * Newsletter signup endpoint.
 * Validates the address, then hands off to the provider abstraction in
 * lib/newsletter.ts (Buttondown, ConvertKit, Beehiiv, Mailchimp, or a
 * console fallback in development).
 */
export async function POST(request: Request) {
  let payload: { email?: unknown };
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const email = String(payload.email ?? "").trim();
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, message: "That email address doesn't look right." },
      { status: 422 },
    );
  }

  try {
    const result = await subscribeToNewsletter(email);
    if (!result.ok) {
      console.error(
        `[newsletter] ${result.provider} rejected subscription: ${result.reason}`,
      );
      return NextResponse.json(
        {
          ok: false,
          message: "We couldn't complete the signup just now. Please try again.",
        },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true, message: "Subscribed." });
  } catch (error) {
    console.error("[newsletter] Subscription failed:", error);
    return NextResponse.json(
      {
        ok: false,
        message: "We couldn't complete the signup just now. Please try again.",
      },
      { status: 502 },
    );
  }
}
