import Image from "next/image";
import { SectionEyebrow, SectionTitle } from "./SectionPrimitives";

// Capability groups surfaced under the methodology section. Each names the
// real defipy functions that back it, doing buyer-qualifying work for
// technical readers who recognize the math.
const capabilities = [
  {
    title: "PnL attribution",
    body: "Decompose a position's return into fee income, impermanent loss, price exposure, swap costs, and gas. Powered by AnalyzePosition for V2/V3, AnalyzeBalancerPosition for weighted pools, AnalyzeStableswapPosition for Curve.",
  },
  {
    title: "Risk decomposition",
    body: "Quantify depeg exposure for stableswap LPs (AssessDepegRisk), IL trajectory under named price scenarios (SimulatePriceMove and variants), and exit slippage at the position's size.",
  },
  {
    title: "Pool diagnostics",
    body: "TVL trend, fee/volume ratio, liquidity stability, depth at notional sizes, and rug-signal screens (CheckPoolHealth, DetectRugSignals). Captures the operating health of the host pool, not just the position.",
  },
  {
    title: "Slippage and price impact",
    body: "Decompose slippage into pool-state impact and execution cost across V2/V3 (CalculateSlippage). Useful pre-entry, pre-exit, and for sizing rebalances.",
  },
];

export function Methodology() {
  return (
    <section id="method" className="px-8 py-28">
      <div className="mx-auto max-w-[1100px]">
        <SectionEyebrow>Method</SectionEyebrow>
        <SectionTitle>The math is open. The reports are paid.</SectionTitle>

        <div className="text-base leading-[1.75] text-[var(--color-text-secondary)]">
          <Image
            src="/defipy-mark.png"
            alt="defipy"
            width={192}
            height={192}
            className="float-left mr-6 mb-3 h-24 w-24 shrink-0 [shape-outside:circle()] md:mr-8 md:h-28 md:w-28"
          />

          <div className="space-y-5">
            <p>
              EchoLedger analysis is powered by{" "}
              <strong className="font-medium text-[var(--color-text-primary)]">
                defipy
              </strong>{" "}
              &mdash; our open-source DeFi analytics library, maintained on
              GitHub with 55,000+ downloads across two years. Full coverage of
              Uniswap V2 and V3, Balancer weighted pools, and Curve-style
              stableswaps.
            </p>
            <p>
              Buyers don&rsquo;t pay for proprietary math. They pay for the
              analysis: the right position selected, the data pulled cleanly,
              the model run correctly the first time, and the recommendation
              written by the operator behind the methodology.
            </p>
            <p>
              Every report cites the defipy functions used, links to the source,
              and is reproducible by anyone who wants to verify it.
            </p>
          </div>

          <div className="clear-left mt-12 grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {capabilities.map((cap) => (
              <div key={cap.title}>
                <h3 className="mb-2 text-base font-medium text-[var(--color-text-primary)]">
                  {cap.title}
                </h3>
                <p className="text-[0.9375rem] leading-[1.65] text-[var(--color-text-secondary)]">
                  {cap.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-6">
            <a
              href="https://github.com/defipy-devs"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-[rgb(93_168_160/0.3)] pb-px text-[0.9375rem] font-medium text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
            >
              GitHub: defipy-devs &rarr;
            </a>
            <a
              href="https://defipy.org"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-[rgb(93_168_160/0.3)] pb-px text-[0.9375rem] font-medium text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
            >
              defipy.org &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
