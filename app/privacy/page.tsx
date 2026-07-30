import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Fourth Axis collects, uses and protects your information.",
  path: "/privacy",
});

/**
 * Plain-language privacy policy matching what the site actually does.
 * [VERIFIED CONTENT REQUIRED] — have counsel review before launch, and
 * update the effective date below when the policy changes.
 */
const EFFECTIVE_DATE = "July 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lede={`Effective ${EFFECTIVE_DATE}. This policy describes how ${siteConfig.name} handles information collected through this website.`}
      />

      <section>
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl space-y-10 text-[0.95rem] leading-relaxed text-paper/85">
            <div>
              <h2 className="font-serif text-2xl text-paper">What we collect</h2>
              <p className="mt-4">
                When you submit the contact form, we collect the information
                you provide: your name, organization, email address, role and
                the details of your inquiry. When you subscribe to the
                newsletter, we collect your email address. We do not collect
                information you have not chosen to give us.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-paper">How we use it</h2>
              <p className="mt-4">
                Contact information is used solely to respond to your inquiry
                and, where a conversation continues, to conduct that
                engagement. Newsletter addresses are used only to send the
                newsletter you signed up for. We do not sell, rent or trade
                personal information, and we do not use it for advertising.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-paper">
                Cookies and analytics
              </h2>
              <p className="mt-4">
                This site does not use advertising cookies or tracking
                pixels. If analytics are enabled, they run through a
                cookie-free, privacy-focused service that collects aggregate
                usage statistics without identifying individual visitors.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-paper">
                Service providers
              </h2>
              <p className="mt-4">
                Form submissions and newsletter subscriptions are processed
                by third-party service providers acting on our instructions,
                such as an email delivery service and a newsletter platform.
                These providers receive only the data needed to perform their
                function.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-paper">Retention</h2>
              <p className="mt-4">
                Inquiry correspondence is retained for as long as needed to
                handle the inquiry and any resulting engagement, and for
                reasonable business record-keeping afterward. You can
                unsubscribe from the newsletter at any time using the link in
                any issue.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-paper">Your rights</h2>
              <p className="mt-4">
                You may request access to, correction of or deletion of the
                personal information we hold about you. Depending on where
                you live, additional rights may apply under local data
                protection law. To exercise any of these rights, email{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-signal underline decoration-edge underline-offset-4"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-paper">Changes</h2>
              <p className="mt-4">
                If this policy changes, the updated version will be posted on
                this page with a new effective date.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
