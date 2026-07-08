const links = [
  { label: "GitHub", href: "https://github.com/defipy-devs" },
  { label: "defipy.org", href: "https://defipy.org" },
  { label: "arXiv", href: "https://arxiv.org/abs/2605.11522" },
  { label: "Medium", href: "https://medium.com/@ic3moore" },
  { label: "X", href: "https://x.com/ic3moore" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/echoledger-ai" },
];

export function Footer() {
  return (
    <footer className="mt-8 border-t border-[rgb(58_106_120/0.2)] px-8 pb-10 pt-12">
      <div className="mx-auto max-w-[1100px]">
        <ul className="mb-6 flex flex-wrap gap-6 list-none">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="space-y-2 text-[0.8125rem] leading-[1.7] text-[var(--color-text-muted)]">
          {/*
            Canonical contact block. Layout: "Contact Us:" label on the left,
            address+email block on the right (top-aligned). On mobile (<640px)
            the label stacks above the address since side-by-side won't fit.

            Uses the semantic <address> element so crawlers, screen readers,
            and AI systems recognize this as the organization's contact info.
            "EchoLedger" is the FIRST LINE of the address — this is required so
            the block is shippable as-is: the virtual mail service rejects
            (return-to-sender) any parcel that doesn't carry the registered
            business name on the label, and most copy-pasters will grab the
            whole <address> block as the recipient string. Email is included
            inside <address> too — semantically correct under HTML5, which
            scopes <address> to contact info generally, not just postal
            addresses.

            The same address is asserted as structured data in the root
            layout's JSON-LD Organization → PostalAddress, which is the
            strongest signal to search and AI systems for canonical business
            location. Organization.name = "EchoLedger" in the JSON-LD links the
            recipient identity to this PostalAddress.

            `not-italic` overrides the default italic styling of <address>.
          */}
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:gap-6">
            <div className="shrink-0 font-medium text-[var(--color-text-secondary)]">
              Contact Us:
            </div>
            <address className="not-italic">
              <strong className="font-medium text-[var(--color-text-secondary)]">
                EchoLedger
              </strong>
              <br />
              4949 Canoe Pass Way, Suite 1008
              <br />
              Tsawwassen, BC V4M 0B2
              <br />
              Canada
              <br />
              <a
                href="mailto:imoore@echoledger.ai"
                className="border-b border-[rgb(107_117_144/0.3)] text-[var(--color-text-secondary)]"
              >
                imoore@echoledger.ai
              </a>
            </address>
          </div>

          <p className="pt-4">
            Also building{" "}
            <strong className="font-medium text-[var(--color-text-secondary)]">
              AnchorRegistry
            </strong>{" "}
            &mdash; provenance infrastructure for the agentic economy.{" "}
            <a
              href="https://anchorregistry.com"
              className="border-b border-[rgb(107_117_144/0.3)] text-[var(--color-text-secondary)]"
            >
              anchorregistry.com
            </a>
          </p>
          <p className="pt-4 text-xs text-[var(--color-text-muted)]">
            &copy; 2026 EchoLedger Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
