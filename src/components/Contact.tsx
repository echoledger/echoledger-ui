import { SectionEyebrow, SectionLede, SectionTitle } from "./SectionPrimitives";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-[var(--color-bg-deep)] px-8 py-28"
    >
      <div className="mx-auto max-w-[1100px]">
        <SectionEyebrow>Contact</SectionEyebrow>
        <SectionTitle>Get in touch.</SectionTitle>
        <SectionLede>
          For research collaboration, questions about defipy or the MCP
          endpoint, or press.
        </SectionLede>

        <div className="max-w-[520px] rounded-lg border border-[rgb(58_106_120/0.3)] bg-[var(--color-bg-elevated)] p-7">
          <h3 className="mb-2.5 text-base font-medium text-[var(--color-text-primary)]">
            Email
          </h3>
          <p className="mb-6 text-[0.9375rem] leading-[1.6] text-[var(--color-text-secondary)]">
            Client engagements are currently paused.
          </p>
          <a
            href="mailto:imoore@echoledger.ai"
            className="border-b border-[rgb(93_168_160/0.3)] pb-px text-[0.9375rem] font-medium text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
          >
            imoore@echoledger.ai &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
