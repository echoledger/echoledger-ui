import { SectionEyebrow, SectionLede, SectionTitle } from "./SectionPrimitives";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-[var(--color-bg-deep)] px-8 py-28"
    >
      <div className="mx-auto max-w-[1100px]">
        <SectionEyebrow>Contact</SectionEyebrow>
        <SectionTitle>Two paths in.</SectionTitle>
        <SectionLede>
          Productized SKUs route to email; scoped engagements start with a
          30-minute call.
        </SectionLede>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-[rgb(58_106_120/0.3)] bg-[var(--color-bg-elevated)] p-7">
            <h3 className="mb-2.5 text-base font-medium text-[var(--color-text-primary)]">
              LP Audits &amp; Pool Health
            </h3>
            <p className="mb-6 text-[0.9375rem] leading-[1.6] text-[var(--color-text-secondary)]">
              Email imoore@echoledger.ai with the position or pool address and
              your inputs. Reply within 24 hours.
            </p>
            <a
              href="mailto:imoore@echoledger.ai"
              className="border-b border-[rgb(93_168_160/0.3)] pb-px text-[0.9375rem] font-medium text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
            >
              imoore@echoledger.ai &rarr;
            </a>
          </div>

          <div className="rounded-lg border border-[rgb(58_106_120/0.3)] bg-[var(--color-bg-elevated)] p-7">
            <h3 className="mb-2.5 text-base font-medium text-[var(--color-text-primary)]">
              Treasury Reviews &amp; Scoped Work
            </h3>
            <p className="mb-6 text-[0.9375rem] leading-[1.6] text-[var(--color-text-secondary)]">
              Book a 30-minute scoping call. We&rsquo;ll cover scope, inputs,
              timeline, and price before any commitment.
            </p>
            <a
              href="https://calendly.com/imoore-echoledger"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-[rgb(93_168_160/0.3)] pb-px text-[0.9375rem] font-medium text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
            >
              Book a call &rarr;
            </a>
          </div>
        </div>

        {/*
          Mailing address — secondary contact register. The two action cards
          above are the PRIMARY contact paths (email + Calendly); this block
          is the postal channel and the canonical-address surface.

          Visually lighter than the cards by design — smaller heading
          weight, no card chrome, separated by a horizontal rule that splits
          the section into primary actions / secondary postal.

          The same address also lives in the site Footer (every page) and is
          asserted as structured data in the root layout's JSON-LD
          Organization → PostalAddress. Three reinforcing surfaces:
            1. Footer  — present on every page, every visit
            2. Contact — present here on the homepage where humans look
            3. JSON-LD — structured data signal for search and AI

          "EchoLedger" is the FIRST LINE of the <address> block — required by
          the virtual mail service (return-to-sender if the recipient name
          is missing). The label "Mailing address:" is the parsable adjacent
          context that helps crawlers recognize what this address represents.
        */}
        <div className="mt-12 border-t border-[rgb(58_106_120/0.2)] pt-10">
          <div className="flex flex-col items-start gap-2 text-[0.9375rem] leading-[1.7] text-[var(--color-text-secondary)] sm:flex-row sm:gap-6">
            <div className="shrink-0 font-medium text-[var(--color-text-primary)]">
              Mailing address:
            </div>
            <address className="not-italic">
              <strong className="font-medium text-[var(--color-text-primary)]">
                EchoLedger
              </strong>
              <br />
              4949 Canoe Pass Way, Suite 1008
              <br />
              Tsawwassen, BC V4M 0B2
              <br />
              Canada
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
