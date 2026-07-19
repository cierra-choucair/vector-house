import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description: "Terms governing the use of the Vector House website.",
  path: "/terms",
});

/**
 * Website terms of use.
 * [VERIFIED CONTENT REQUIRED] — have counsel review before launch, and
 * update the effective date below when the terms change.
 */
const EFFECTIVE_DATE = "July 2026";

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        lede={`Effective ${EFFECTIVE_DATE}. These terms govern your use of the ${siteConfig.name} website.`}
      />

      <section>
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl space-y-10 text-[0.95rem] leading-relaxed text-paper/85">
            <div>
              <h2 className="font-serif text-2xl text-paper">Use of this site</h2>
              <p className="mt-4">
                This website is provided for general information about{" "}
                {siteConfig.name} and its services. You may browse, link to
                and share its content for lawful purposes. You may not use
                the site in a way that disrupts its operation or attempts to
                gain unauthorized access to its systems.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-paper">
                Not professional advice
              </h2>
              <p className="mt-4">
                Content on this site, including articles and analysis, is
                provided for general information. It does not constitute
                investment, legal, financial or other professional advice,
                and it should not be relied on as the basis for any decision
                without independent verification appropriate to your
                situation.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-paper">
                Intellectual property
              </h2>
              <p className="mt-4">
                Unless otherwise noted, the content of this site, including
                text, design and graphics, belongs to {siteConfig.name}. You
                may quote brief excerpts with attribution and a link.
                Reproducing substantial portions requires prior written
                permission.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-paper">
                Client engagements
              </h2>
              <p className="mt-4">
                Advisory and intelligence engagements are governed by the
                written agreement signed for each engagement, not by these
                website terms. Nothing on this site creates a client
                relationship.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-paper">
                Limitation of liability
              </h2>
              <p className="mt-4">
                The site is provided on an as-is basis. To the fullest extent
                permitted by law, {siteConfig.name} disclaims liability for
                loss or damage arising from use of the site or reliance on
                its content.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-paper">Contact</h2>
              <p className="mt-4">
                Questions about these terms can be sent to{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-signal underline decoration-edge underline-offset-4"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
