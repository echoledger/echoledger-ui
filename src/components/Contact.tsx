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
      </div>
    </section>
  );
}
