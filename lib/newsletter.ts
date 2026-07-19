/**
 * Newsletter subscription abstraction.
 *
 * The API route calls `subscribeToNewsletter` and never talks to a provider
 * directly. Providers are selected by environment variable, checked in this
 * order:
 *
 *   1. BUTTONDOWN_API_KEY                       — Buttondown (implemented).
 *   2. CONVERTKIT_API_KEY + CONVERTKIT_FORM_ID  — ConvertKit (implemented).
 *   3. BEEHIIV_API_KEY + BEEHIIV_PUBLICATION_ID — Beehiiv (implemented).
 *   4. MAILCHIMP_API_KEY + MAILCHIMP_LIST_ID    — Mailchimp (implemented;
 *      the datacenter is parsed from the key suffix, e.g. "...-us21").
 *   5. Nothing set — logs the address server-side and reports success so
 *      local development works with no credentials.
 *
 * See README.md ("Configuring the newsletter") for setup instructions.
 */

type SubscribeResult =
  | { ok: true; provider: string }
  | { ok: false; provider: string; reason: string };

async function subscribeButtondown(email: string): Promise<SubscribeResult> {
  const res = await fetch("https://api.buttondown.com/v1/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email_address: email }),
  });

  // Buttondown returns 400 for addresses that already exist; treat that as
  // success from the subscriber's point of view.
  if (res.ok || res.status === 400) {
    return { ok: true, provider: "buttondown" };
  }
  return {
    ok: false,
    provider: "buttondown",
    reason: `status ${res.status}`,
  };
}

async function subscribeConvertKit(email: string): Promise<SubscribeResult> {
  const formId = process.env.CONVERTKIT_FORM_ID;
  const res = await fetch(
    `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: process.env.CONVERTKIT_API_KEY,
        email,
      }),
    },
  );
  return res.ok
    ? { ok: true, provider: "convertkit" }
    : { ok: false, provider: "convertkit", reason: `status ${res.status}` };
}

async function subscribeBeehiiv(email: string): Promise<SubscribeResult> {
  const pubId = process.env.BEEHIIV_PUBLICATION_ID;
  const res = await fetch(
    `https://api.beehiiv.com/v2/publications/${pubId}/subscriptions`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, reactivate_existing: true }),
    },
  );
  return res.ok
    ? { ok: true, provider: "beehiiv" }
    : { ok: false, provider: "beehiiv", reason: `status ${res.status}` };
}

async function subscribeMailchimp(email: string): Promise<SubscribeResult> {
  const apiKey = process.env.MAILCHIMP_API_KEY as string;
  const listId = process.env.MAILCHIMP_LIST_ID;
  const dc = apiKey.split("-").pop(); // e.g. "us21"
  const res = await fetch(
    `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email_address: email, status: "subscribed" }),
    },
  );
  // "Member Exists" also arrives as 400; count it as success.
  if (res.ok) return { ok: true, provider: "mailchimp" };
  if (res.status === 400) {
    const body = await res.json().catch(() => null);
    if (body?.title === "Member Exists") {
      return { ok: true, provider: "mailchimp" };
    }
  }
  return { ok: false, provider: "mailchimp", reason: `status ${res.status}` };
}

export async function subscribeToNewsletter(
  email: string,
): Promise<SubscribeResult> {
  if (process.env.BUTTONDOWN_API_KEY) return subscribeButtondown(email);
  if (process.env.CONVERTKIT_API_KEY && process.env.CONVERTKIT_FORM_ID)
    return subscribeConvertKit(email);
  if (process.env.BEEHIIV_API_KEY && process.env.BEEHIIV_PUBLICATION_ID)
    return subscribeBeehiiv(email);
  if (process.env.MAILCHIMP_API_KEY && process.env.MAILCHIMP_LIST_ID)
    return subscribeMailchimp(email);

  // Development fallback: no provider configured.
  console.info(`[newsletter] No provider configured. Signup received: ${email}`);
  return { ok: true, provider: "console" };
}
