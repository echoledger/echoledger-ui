import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import {
  SectionEyebrow,
  SectionTitle,
  SectionLede,
} from "@/components/SectionPrimitives";

export const metadata: Metadata = {
  title: "StateTwins · EchoLedger's Uniswap Position Monitor",
  description:
    "StateTwins is EchoLedger's AI agent — it watches your Uniswap LP positions, consults EchoLedger's hosted analytics, and reports its findings. Analysis only; you make every decision. Built on the open-source defipy State Twins substrate.",
  alternates: { canonical: "/agent" },
  openGraph: {
    type: "website",
    url: "https://echoledger.ai/agent",
    siteName: "EchoLedger",
    title: "StateTwins · EchoLedger's Uniswap Position Monitor",
    description:
      "An AI agent that watches your Uniswap positions and reports — analysis only, you decide. Powered by EchoLedger's hosted MCP endpoint.",
  },
};

const ENDPOINT = "https://mcp.echoledger.ai/mcp";

// ─── Presentational helpers ──────────────────────────────────────────────────

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-md border border-[rgb(58_106_120/0.25)] bg-[var(--color-bg-elevated)] px-4 py-3 font-mono text-[0.82rem] leading-[1.6] text-[var(--color-text-secondary)]">
      <code>{children}</code>
    </pre>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function StateTwinsPage() {
  return (
    <>
      <Nav />
      <main>
        {/*
          HERO — single-column. Name first (SectionTitle = "StateTwins."),
          descriptor as the small eyebrow above.
        */}
        <section className="px-8 pb-14 pt-28">
          <div className="mx-auto max-w-[1100px]">
            <div className="max-w-[760px]">
              <SectionEyebrow>
                EchoLedger&rsquo;s AI agent
              </SectionEyebrow>
              <SectionTitle>StateTwins.</SectionTitle>
              <SectionLede>
                StateTwins watches your Uniswap liquidity positions, consults
                EchoLedger&rsquo;s hosted analytics, and reports its findings so
                you can make informed decisions. It does not trade,
                rebalance, or move funds &mdash; you make every decision.
              </SectionLede>

              <p className="mb-8 max-w-[55ch] text-[0.9375rem] leading-[1.65] text-[var(--color-text-muted)]">
                Named for the State Twins substrate it runs on &mdash; an
                off-chain replica of on-chain pool state.
              </p>

              <div className="flex flex-wrap gap-3.5">
                <a
                  href="#install"
                  className="inline-flex items-center justify-center rounded-md bg-[var(--color-accent)] px-6 py-3 text-[0.9375rem] font-medium text-[var(--color-bg-base)] transition-colors hover:bg-[var(--color-accent-hover)]"
                >
                  Install
                </a>
                <a
                  href="https://github.com/echoledger/echoledger"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-[var(--color-accent-deep)] bg-transparent px-6 py-3 text-[0.9375rem] font-medium text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-text-primary)]"
                >
                  Source on GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What it does */}
        <section className="border-t border-[rgb(58_106_120/0.2)] px-8 py-20">
          <div className="mx-auto max-w-[1100px]">
            <SectionEyebrow>What it does</SectionEyebrow>
            <SectionTitle>Watch. Analyze. Report.</SectionTitle>
            <SectionLede>
              On a schedule you set, StateTwins cycles through every pool in your
              watchlist, asks EchoLedger&rsquo;s hosted tools to inspect each one,
              and prints the result. Two tools run by default &mdash;{" "}
              <strong className="font-medium text-[var(--color-text-primary)]">
                CheckPoolHealth
              </strong>{" "}
              and{" "}
              <strong className="font-medium text-[var(--color-text-primary)]">
                DetectRugSignals
              </strong>{" "}
              &mdash; chosen because they suit continuous watching. Three more
              are available at the same endpoint and one line of code away.
            </SectionLede>

            <p className="mb-6 max-w-[68ch] text-base leading-[1.7] text-[var(--color-text-secondary)]">
              A real cycle against the hosted endpoint, watching a Uniswap V3
              USDC/WETH pool on mainnet:
            </p>

            <div className="max-w-[820px]">
              <CodeBlock>{`StateTwins is watching 1 pool(s) via https://mcp.echoledger.ai/mcp
Cycle every 60s. Analysis only — StateTwins reports, you decide.

[2026-06-15 19:40:25Z] USDC/WETH 0.05% (V3) — CheckPoolHealth
{
  "version": "V3",
  "spot_price": 0.000547,
  "tvl_in_token0": 515430872.65,
  "num_lps": 1,
  "top_lp_share_pct": 1.0,
  "has_activity": false,
  "fee_pips": 500
}

[2026-06-15 19:40:26Z] USDC/WETH 0.05% (V3) — DetectRugSignals
{
  "single_sided_concentration": true,
  "signals_detected": 1,
  "risk_level": "medium",
  "details": [
    "single_sided_concentration: top LP holds 100.0% of supply (threshold 90.0%)"
  ]
}
  ⚠ ALERT: rug signal tripped: single_sided_concentration`}</CodeBlock>
            </div>

            <p className="mt-8 max-w-[68ch] text-[0.9375rem] leading-[1.65] text-[var(--color-text-muted)]">
              StateTwins prints the full payload every cycle and emits an{" "}
              <span className="font-mono">⚠ ALERT</span> line when a signal
              trips. When nothing changes, you see steady output; when something
              changes, the change is loud.
            </p>
          </div>
        </section>

        {/* Install */}
        <section
          id="install"
          className="border-t border-[rgb(58_106_120/0.2)] px-8 py-20"
        >
          <div className="mx-auto max-w-[1100px]">
            <SectionEyebrow>Install</SectionEyebrow>
            <SectionTitle>The 10-minute path.</SectionTitle>
            <SectionLede>
              StateTwins ships as the{" "}
              <span className="font-mono text-[var(--color-text-primary)]">
                echoledger
              </span>{" "}
              Python package. Install, point it at your pools, run. The hosted
              endpoint is authless &mdash; no account, no API key, no wallet
              signature. You supply your own RPC URL per call (bring-your-own-RPC);
              it&rsquo;s never stored or logged.
            </SectionLede>

            <div className="space-y-10">
              <div>
                <h3 className="mb-3 text-base font-medium text-[var(--color-text-primary)]">
                  1. Install the package
                </h3>
                <div className="max-w-[640px]">
                  <CodeBlock>{`git clone https://github.com/echoledger/echoledger.git
cd echoledger
python -m venv .venv && source .venv/bin/activate
pip install .`}</CodeBlock>
                </div>
                <p className="mt-3 max-w-[68ch] text-[0.875rem] leading-[1.6] text-[var(--color-text-muted)]">
                  Requires Python 3.11+. Installing the package puts a{" "}
                  <span className="font-mono">echoledger</span> command on your
                  PATH.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-base font-medium text-[var(--color-text-primary)]">
                  2. Configure your watchlist
                </h3>
                <div className="max-w-[640px]">
                  <CodeBlock>{`cp config.example.toml config.toml
# edit config.toml — set rpc_url and add [[pools]] blocks`}</CodeBlock>
                </div>
                <p className="mt-3 max-w-[68ch] text-[0.875rem] leading-[1.6] text-[var(--color-text-muted)]">
                  A pool block looks like:
                </p>
                <div className="mt-3 max-w-[640px]">
                  <CodeBlock>{`rpc_url = "https://your-rpc-provider.example/v2/<key>"
endpoint = "https://mcp.echoledger.ai/mcp"
poll_interval_seconds = 60

[[pools]]
label = "USDC/WETH 0.05% (V3)"
address = "0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640"
pool_type = "uniswap_v3"
chain_id = 1`}</CodeBlock>
                </div>
                <p className="mt-3 max-w-[68ch] text-[0.875rem] leading-[1.6] text-[var(--color-text-muted)]">
                  <span className="font-mono">config.toml</span> is git-ignored.
                  Your RPC URL stays local; the server reads chain state through
                  it but never persists it.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-base font-medium text-[var(--color-text-primary)]">
                  3. Run it
                </h3>
                <div className="max-w-[640px]">
                  <CodeBlock>echoledger</CodeBlock>
                </div>
                <p className="mt-3 max-w-[68ch] text-[0.875rem] leading-[1.6] text-[var(--color-text-muted)]">
                  StateTwins prints its intro line, runs a cycle, sleeps for{" "}
                  <span className="font-mono">poll_interval_seconds</span>, and
                  repeats. Ctrl-C to stop.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*
          Under the hood — the call-flow ASCII + three property cards.
          State Twins was previously a fourth card here; it's been promoted to
          its own section ("Substrate" / "The State Twin.") immediately below,
          since it's the fulcrum behind defipy and EchoLedger and earned dedicated
          surface area. The remaining three properties read tighter at 3-col.
        */}
        <section className="border-t border-[rgb(58_106_120/0.2)] px-8 py-20">
          <div className="mx-auto max-w-[1100px]">
            <SectionEyebrow>Under the hood</SectionEyebrow>
            <SectionTitle>A thin client. Open math underneath.</SectionTitle>
            <SectionLede>
              The{" "}
              <span className="font-mono text-[var(--color-text-primary)]">
                echoledger
              </span>{" "}
              package holds the loop. The hosted MCP endpoint does the chain
              reads and the AMM math. The math itself is open-source. Three
              layers, each one stateless, each one verifiable.
            </SectionLede>

            <div className="max-w-[820px]">
              <CodeBlock>{`  StateTwins (echoledger package)      EchoLedger endpoint               substrate
  ─────────────────────────────      ─────────────────               ─────────
  read config.toml
  for each pool, each cycle:
    call a tool  ──────────────────▶ mcp.echoledger.ai/mcp
                                     reads chain via your RPC  ────▶  defipy
                                     runs the analysis               State Twins
    receive result  ◀──────────────  returns a typed result
    report / alert
  sleep, repeat`}</CodeBlock>
            </div>

            <div className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-3">
              <div>
                <h3 className="mb-2 text-base font-medium text-[var(--color-text-primary)]">
                  Authless, BYO-RPC
                </h3>
                <p className="text-[0.9375rem] leading-[1.65] text-[var(--color-text-secondary)]">
                  The endpoint requires no API key and no account. You supply
                  your own RPC URL per call &mdash; it carries any keys you
                  hold, it stays in your config, the server reads through it
                  once and redacts it from every receipt.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-base font-medium text-[var(--color-text-primary)]">
                  Stateless by construction
                </h3>
                <p className="text-[0.9375rem] leading-[1.65] text-[var(--color-text-secondary)]">
                  Each call builds a fresh State Twin, runs an AMM primitive,
                  returns a typed result. Nothing is cached between calls.
                  Nothing is logged except a redacted JSON receipt per
                  invocation.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-base font-medium text-[var(--color-text-primary)]">
                  Powered by open-source defipy
                </h3>
                <p className="text-[0.9375rem] leading-[1.65] text-[var(--color-text-secondary)]">
                  The AMM math behind every StateTwins report lives in the{" "}
                  <a
                    href="https://defipy.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-[rgb(93_168_160/0.3)] pb-px text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
                  >
                    defipy
                  </a>{" "}
                  library &mdash; open, peer-style researched, verifiable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*
          Substrate / The State Twin — a dedicated section for the fulcrum
          paper. The diagram (state-twins.png) is designed for the dark page
          background, so it sits directly on #0A0E1A with no card frame.

          The diagram container is LEFT-ALIGNED with the text above and below
          (no flex/justify-center wrapper) — matches the page convention used
          by the CodeBlocks in "What it does" and "Under the hood".
        */}
        <section className="border-t border-[rgb(58_106_120/0.2)] px-8 py-20">
          <div className="mx-auto max-w-[1100px]">
            <SectionEyebrow>Substrate</SectionEyebrow>
            <SectionTitle>The State Twin.</SectionTitle>
            <SectionLede>
              StateTwins&rsquo; reasoning runs against a typed, in-memory replica
              of on-chain pool state &mdash; a State Twin. Without it, every
              &ldquo;what if?&rdquo; question would cost an RPC read or a real
              transaction. With it, an agent can fork, replay, and explore
              counterfactuals at memory speed.
            </SectionLede>

            <div className="relative my-12 aspect-[16/9] w-full max-w-[820px]">
              <Image
                src="/state-twins.png"
                alt="State Twin mechanism: an off-chain replica of on-chain AMM pool state that enables forking, replay, and counterfactual reasoning without each query incurring a new RPC call"
                fill
                sizes="(min-width: 820px) 820px, 100vw"
                className="object-contain"
              />
            </div>

            <div className="max-w-[68ch] space-y-5 text-base leading-[1.75] text-[var(--color-text-secondary)]">
              <p>
                Agentic DeFi reasoning today couples to chain time. Every
                analytical question &mdash; <em>will this position survive a
                30% drop?</em>, <em>what&rsquo;s the slippage at twice the
                size?</em>, <em>how would this position have done if we&rsquo;d
                entered last week?</em> &mdash; incurs either a fresh RPC read
                or, worse, a real transaction. The agent&rsquo;s effective
                action space is bounded by block confirmation latency and gas.
                That&rsquo;s a structural problem, not a performance one.
              </p>
              <p>
                The State Twin is the missing layer: a typed, in-memory replica
                of an on-chain AMM pool that preserves the protocol&rsquo;s
                exact mathematics while admitting the operations on-chain state
                cannot. Forking. Replay. Branching. Counterfactual rollout. A
                single live RPC read can seed N independent twins under
                distinct scenarios, all evaluated in sub-second wall-clock
                time. The math is identical to the chain; the questions are
                unbounded.
              </p>
              <p>
                This is the substrate StateTwins runs on. Every{" "}
                <span className="font-mono text-[var(--color-text-primary)]">
                  CheckPoolHealth
                </span>{" "}
                report, every{" "}
                <span className="font-mono text-[var(--color-text-primary)]">
                  DetectRugSignals
                </span>{" "}
                trip, every counterfactual it&rsquo;ll eventually run as new
                modes ship &mdash; all of it happens against State Twin
                replicas of the pools you care about. The formal definition,
                fidelity bound, and reference implementation are in the paper.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="https://arxiv.org/abs/2605.11522"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-[rgb(93_168_160/0.3)] pb-px text-[0.9375rem] font-medium text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
              >
                Read the paper &middot; arXiv:2605.11522 &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Scope */}
        <section className="border-t border-[rgb(58_106_120/0.2)] bg-[var(--color-bg-elevated)] px-8 py-20">
          <div className="mx-auto max-w-[1100px]">
            <SectionEyebrow>Scope</SectionEyebrow>
            <SectionTitle>Analysis only. You decide.</SectionTitle>
            <div className="max-w-[68ch] space-y-5 text-base leading-[1.75] text-[var(--color-text-secondary)]">
              <p>
                StateTwins produces{" "}
                <strong className="font-medium text-[var(--color-text-primary)]">
                  analysis
                </strong>
                , not{" "}
                <strong className="font-medium text-[var(--color-text-primary)]">
                  advice
                </strong>{" "}
                and not{" "}
                <strong className="font-medium text-[var(--color-text-primary)]">
                  action
                </strong>
                . It does not tell you to enter, exit, or rebalance a position.
                It does not transact. It does not hold keys.
              </p>
              <p>
                What it reports is information about your positions&rsquo;
                current state and risk; the decision is always yours. This is
                intentional and it is where the line stays. The agentic stack
                StateTwins runs in is observation-only by design &mdash; the State
                Twins paper formalizes why the boundary belongs there.
              </p>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="border-t border-[rgb(58_106_120/0.2)] px-8 py-20">
          <div className="mx-auto max-w-[1100px]">
            <SectionEyebrow>Roadmap</SectionEyebrow>
            <SectionTitle>It&rsquo;s always StateTwins, in modes.</SectionTitle>
            <SectionLede>
              Today StateTwins runs one mode: monitoring. New capabilities arrive as
              new modes &mdash; each one a question-shape StateTwins can carry, each
              one composed from the same hosted tools and the same open-source
              substrate.
            </SectionLede>

            <div className="grid max-w-[820px] gap-x-10 gap-y-5 sm:grid-cols-2">
              <div className="border-l-2 border-[var(--color-accent)] pl-4">
                <div className="mb-1 text-[0.75rem] font-medium uppercase tracking-[0.08em] text-[var(--color-accent)]">
                  Today
                </div>
                <h3 className="mb-1 text-base font-medium text-[var(--color-text-primary)]">
                  Monitoring
                </h3>
                <p className="text-[0.9rem] leading-[1.6] text-[var(--color-text-secondary)]">
                  Watch a list of pools on a schedule. Pool health and rug
                  signals, every cycle.
                </p>
              </div>
              <div className="border-l-2 border-[var(--color-accent-deep)] pl-4">
                <div className="mb-1 text-[0.75rem] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                  Coming
                </div>
                <h3 className="mb-1 text-base font-medium text-[var(--color-text-primary)]">
                  Screening
                </h3>
                <p className="text-[0.9rem] leading-[1.6] text-[var(--color-text-secondary)]">
                  Filter a candidate set of pools against thresholds; surface
                  the ones worth a closer look.
                </p>
              </div>
              <div className="border-l-2 border-[var(--color-accent-deep)] pl-4">
                <div className="mb-1 text-[0.75rem] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                  Coming
                </div>
                <h3 className="mb-1 text-base font-medium text-[var(--color-text-primary)]">
                  Treasury
                </h3>
                <p className="text-[0.9rem] leading-[1.6] text-[var(--color-text-secondary)]">
                  Multi-position view for DAOs and funds &mdash; concentration,
                  correlation, aggregate IL trajectory.
                </p>
              </div>
            </div>

            <p className="mt-10 max-w-[68ch] text-[0.875rem] leading-[1.65] text-[var(--color-text-muted)]">
              v0.1 is the free AI agent. Heavier paid-compute analyses
              may later be offered as a metered tier &mdash; opt-in, not part of
              the free agent.
            </p>
          </div>
        </section>

        {/* Built on */}
        <section className="border-t border-[rgb(58_106_120/0.2)] px-8 py-20">
          <div className="mx-auto max-w-[1100px]">
            <SectionEyebrow>Built on</SectionEyebrow>
            <SectionTitle>Open math. Open source. Open paper.</SectionTitle>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
              <a
                href="https://github.com/echoledger/echoledger"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-[rgb(93_168_160/0.3)] pb-px text-[0.9375rem] font-medium text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
              >
                Source: echoledger (GitHub) &rarr;
              </a>
              <a
                href={ENDPOINT}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-[rgb(93_168_160/0.3)] pb-px text-[0.9375rem] font-medium text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
              >
                MCP endpoint &rarr;
              </a>
              <a
                href="https://defipy.org"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-[rgb(93_168_160/0.3)] pb-px text-[0.9375rem] font-medium text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
              >
                defipy.org &rarr;
              </a>
              <a
                href="https://arxiv.org/abs/2605.11522"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-[rgb(93_168_160/0.3)] pb-px text-[0.9375rem] font-medium text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
              >
                State Twins paper &rarr;
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
