import { SectionEyebrow, SectionLede, SectionTitle } from "./SectionPrimitives";

// Replaces the former services rail. Client services (audits, reviews,
// consulting) are paused; the open-source and self-serve surfaces remain.
// Keeps id="services" so any old /#services links still land here.
export function ServicesNotice() {
  return (
    <section id="services" className="px-8 py-28">
      <div className="mx-auto max-w-[1100px]">
        <SectionEyebrow>Services</SectionEyebrow>
        <SectionTitle>Client services are paused.</SectionTitle>
        <SectionLede>
          EchoLedger is not taking new audit, review, or consulting
          engagements at this time. The open-source defipy library, the hosted
          MCP endpoint, and the StateTwins agent remain available.
        </SectionLede>
      </div>
    </section>
  );
}
