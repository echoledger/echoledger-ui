import { SectionEyebrow } from "./SectionPrimitives";

export function About() {
  return (
    <section
      id="about"
      className="bg-[var(--color-bg-elevated)] px-8 py-28"
    >
      <div className="mx-auto max-w-[1100px]">
        <SectionEyebrow>About</SectionEyebrow>

        {/*
          Two-line title block: name on top, role underneath.
          The role line is rendered in the teal accent at a smaller size so it
          reads as a sub-title rather than a competing headline. Same overall
          visual weight as a one-line SectionTitle but with cleaner stacking.
        */}
        <div className="mb-8 max-w-[28ch]">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-[1.1] tracking-[-0.02em] text-[var(--color-text-primary)]">
            Ian Moore, PhD
          </h2>
          <p className="mt-2 text-[clamp(1rem,1.5vw,1.25rem)] font-medium tracking-[0.01em] text-[var(--color-accent)]">
            Principal, EchoLedger
          </p>
        </div>

        <div className="max-w-[62ch] space-y-5 text-base leading-[1.75] text-[var(--color-text-secondary)]">
          <p>
            EchoLedger is a quantitative DeFi research practice. Engagements range
            from productized work &mdash; LP audits, treasury reviews, pool
            diagnostics &mdash; through scoped advisory for teams whose
            problems don&rsquo;t fit a fixed-scope SKU. The methodology is
            grounded in defipy, the open-source AMM analytics library Ian
            founded and maintains.
          </p>

          <p>
            PhD in Engineering Mathematics from Queen&rsquo;s University, with a
            specialization in time-series analysis. Four years as Research
            Scientist at the{" "}
            <strong className="font-medium text-[var(--color-text-primary)]">
              Syscoin Foundation
            </strong>{" "}
            (2021&ndash;2025) &mdash; first on Bitcoin L2 architecture, then on
            AMM mechanics across Uniswap V2/V3, Balancer, and Curve. Five years
            of peer-style preprints on EIP-1559 dynamics, on-chain provenance,
            and the cost analysis of append-only registry primitives. Selected
            speaker at{" "}
            <strong className="font-medium text-[var(--color-text-primary)]">
              ETH Denver 2024
            </strong>{" "}
            on protocol-level liquidity research.
          </p>

          <p>
            Prior to DeFi, ten years as a senior data scientist and applied
            mathematician. Senior Data Scientist at{" "}
            <strong className="font-medium text-[var(--color-text-primary)]">
              GE Digital
            </strong>{" "}
            working on the Predix industrial IoT platform; Forecasting
            Specialist at the{" "}
            <strong className="font-medium text-[var(--color-text-primary)]">
              Government of Ontario
            </strong>
            , building statistical and time-series models that informed over
            $200M in long-term capital allocation. Peer-reviewed publications
            in applied harmonic analysis (over 170 citations), biostatistics,
            and anesthesiology. Adjunct Lecturer in Biostatistics at the{" "}
            <strong className="font-medium text-[var(--color-text-primary)]">
              University of Toronto
            </strong>
            , 2010&ndash;2014.
          </p>

          <p>
            Also founder of AnchorRegistry, a separate venture building
            provenance infrastructure for the agentic economy (
            <a
              href="https://arxiv.org/abs/2604.03434"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-[rgb(93_168_160/0.3)] text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
            >
              arXiv:2604.03434
            </a>
            ).
          </p>

          <p className="pt-2 text-[0.9375rem] text-[var(--color-text-muted)]">
            Based in British Columbia. Engagements contracted through EchoLedger
            Inc.
          </p>
        </div>
      </div>
    </section>
  );
}
