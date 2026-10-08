import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import {
  SectionEyebrow,
  SectionTitle,
  SectionLede,
} from "@/components/SectionPrimitives";

export const metadata: Metadata = {
  title: "MCP Endpoint",
  description:
    "API reference for the EchoLedger MCP endpoint — eleven live tools over Uniswap V2/V3, Balancer, and Curve stableswap pools, plus a portable State Twin builder, over the Model Context Protocol. Authless, bring-your-own-RPC, powered by open-source defipy.",
  alternates: { canonical: "/mcp" },
  openGraph: {
    type: "website",
    url: "https://echoledger.ai/mcp",
    siteName: "EchoLedger",
    title: "MCP Endpoint — EchoLedger",
    description:
      "API reference for the EchoLedger MCP endpoint — eleven live tools over Uniswap V2/V3, Balancer, and Curve stableswap pools, plus a portable State Twin builder. Authless, bring-your-own-RPC.",
  },
};

const ENDPOINT = "https://mcp.echoledger.ai/mcp";

// ─── Reference data ──────────────────────────────────────────────────────────

type Field = {
  name: string;
  type: string;
  req?: boolean;
  scope?: string;
  note: string;
};

const commonParams: Field[] = [
  {
    name: "pool_address",
    type: "string",
    req: true,
    note: "On-chain address of the pool/pair (Uniswap pair, Balancer weighted pool, or Curve stableswap pool). Lowercase, uppercase, or checksum casing all accepted.",
  },
  {
    name: "rpc_url",
    type: "string",
    req: true,
    note: "An Ethereum (or L2) JSON-RPC URL used to read live pool state. You supply it per call; it is never stored or logged.",
  },
  {
    name: "pool_type",
    type: '"uniswap_v2" | "uniswap_v3" | "balancer" | "stableswap"',
    req: true,
    note: "Which protocol the pool belongs to. Each tool advertises only the values it accepts — the Uniswap tools take uniswap_v2/uniswap_v3, the Balancer tools balancer, the stableswap tools stableswap, and BuildStateTwin all four.",
  },
  {
    name: "chain_id",
    type: "integer",
    note: "Optional guard. If supplied and the RPC reports a different chain, the call is rejected.",
  },
  {
    name: "block_number",
    type: "integer",
    note: "Optional. Pin the read to a historical block. Omit to read the latest block.",
  },
];

type Tool = {
  name: string;
  scope: string;
  desc: string;
  query: string;
  params: Field[];
  returns: Field[];
};

const tools: Tool[] = [
  {
    name: "AnalyzePosition",
    scope: "V2 · V3",
    desc: "Decompose an LP position's PnL into impermanent loss, accumulated fees, and net result, measured against the entry basis you provide.",
    query: "Analyze my position in this Uniswap V3 USDC/ETH pool.",
    params: [
      { name: "lp_init_amt", type: "number", req: true, note: "LP tokens held by the position, in human units." },
      { name: "entry_x_amt", type: "number", req: true, note: "Amount of token0 deposited at entry." },
      { name: "entry_y_amt", type: "number", req: true, note: "Amount of token1 deposited at entry." },
      { name: "lwr_tick", type: "integer", scope: "V3", note: "Lower tick of the position range. Omit for full range / V2." },
      { name: "upr_tick", type: "integer", scope: "V3", note: "Upper tick of the position range. Omit for full range / V2." },
      { name: "holding_period_days", type: "number", note: "Optional. If supplied, real_apr is annualized from net PnL." },
    ],
    returns: [
      { name: "net_pnl", type: "number", note: "current_value − hold_value, in token0 numeraire." },
      { name: "il_percentage", type: "number", note: "Pure price-divergence impermanent loss (fraction)." },
      { name: "fee_income", type: "number", note: "Isolated fee component, in token0 numeraire." },
      { name: "real_apr", type: "number | null", note: "Annualized net return (null unless holding_period_days given)." },
      { name: "diagnosis", type: "string", note: '"net_positive" | "fee_compensated" | "il_dominant".' },
    ],
  },
  {
    name: "SimulatePriceMove",
    scope: "V2 · V3",
    desc: "Project a position's value at a hypothetical price change from the current pool state. Size-invariant paper value; fee income is not modeled.",
    query: "If ETH drops 30%, what happens to my V3 position?",
    params: [
      { name: "price_change_pct", type: "number", req: true, note: "Fractional change from current price; must be > −1.0. e.g. −0.30 = a 30% drop. Or pass the vector form price_change_pcts." },
      { name: "price_change_pcts", type: "number[]", note: "Vector form — sweep a grid of price changes in one call (≤256). Supply this OR the scalar, not both; returns an ordered array of results." },
      { name: "position_size_lp", type: "number", req: true, note: "LP tokens held, in human units; must be > 0." },
      { name: "lwr_tick", type: "integer", scope: "V3", note: "Lower tick of the position range." },
      { name: "upr_tick", type: "integer", scope: "V3", note: "Upper tick of the position range." },
    ],
    returns: [
      { name: "new_value", type: "number", note: "Position value at the simulated price (token0 numeraire)." },
      { name: "il_at_new_price", type: "number", note: "Impermanent loss at the simulated price (fraction, ≤ 0)." },
      { name: "value_change_pct", type: "number", note: "Fractional change in position value from current." },
      { name: "new_price_ratio", type: "number", note: "Alpha = new_price / current_price." },
      { name: "fee_projection", type: "null", note: "Always null — fee projection is out of scope for this tool." },
    ],
  },
  {
    name: "CheckPoolHealth",
    scope: "V2 · V3",
    desc: "Pool-level snapshot: TVL, reserves, spot price, LP concentration, fee tier, and activity. Answers “would I deposit into this pool?” at the pool level.",
    query: "Is this V3 pool healthy?",
    params: [
      { name: "recent_window", type: "integer", scope: "V2", note: "Rolling window (swap count) for fee_accrual_rate_recent. Default 20; ignored on V3." },
    ],
    returns: [
      { name: "tvl_in_token0 / tvl_in_token1", type: "number", note: "Total value locked in each token numeraire." },
      { name: "reserve0 / reserve1", type: "number", note: "Decimal-adjusted reserves." },
      { name: "spot_price", type: "number", note: "Current price of token0 in token1 terms." },
      { name: "num_lps / top_lp_share_pct", type: "integer / number", note: "LP count and the top LP's share." },
      { name: "fee_pips / tick_current", type: "integer | null", scope: "V3", note: "Fee tier (pips) and current tick; null on V2." },
      { name: "num_swaps / fee_accrual_rate_recent", type: "integer | null", scope: "V2", note: "Swap count and recent fee rate; null on V3." },
    ],
  },
  {
    name: "DetectRugSignals",
    scope: "V2 · V3",
    desc: "Threshold-based rug-pull screen composed over pool health: suspiciously low TVL, top-LP concentration, and inactive-pool-with-liquidity.",
    query: "Any rug signals on this V2 pair?",
    params: [
      { name: "lp_concentration_threshold", type: "number", note: "Top-LP share that trips the concentration flag. (0, 1]; default 0.90; pass 1.0 to disable." },
      { name: "tvl_floor", type: "number", note: "Minimum acceptable TVL in token0; values at/below fire the low-TVL flag. Default 10.0 — override per pair." },
    ],
    returns: [
      { name: "risk_level", type: "string", note: '"low" | "medium" | "high" | "critical" (count-based bucket).' },
      { name: "signals_detected", type: "integer", note: "Count of fired signals (0–3)." },
      { name: "tvl_suspiciously_low", type: "boolean", note: "TVL below the floor." },
      { name: "single_sided_concentration", type: "boolean", note: "One LP owns a dominant share." },
      { name: "inactive_with_liquidity", type: "boolean", scope: "V2", note: "Liquidity present but no swap activity. Always false on V3." },
      { name: "details", type: "string[]", note: "Human-readable lines explaining which signals fired." },
    ],
  },
  {
    name: "CalculateSlippage",
    scope: "V2 · V3",
    desc: "Slippage and price-impact decomposition for a proposed swap: spot vs execution price, slippage %, cost, and (V2) the max trade within 1% slippage.",
    query: "How much slippage on a 50,000 USDC buy here?",
    params: [
      { name: "amount_in", type: "number", req: true, note: "Amount of token_in to trade, in human units; must be > 0. Or pass the vector form amounts_in." },
      { name: "amounts_in", type: "number[]", note: "Vector form — quote a range of trade sizes in one call (≤256). Supply this OR the scalar, not both; returns an ordered array of results." },
      { name: "token_in_name", type: "string", req: true, note: "Symbol of the input token (e.g. \"USDC\", \"WETH\") — must match one of the pool's two tokens." },
      { name: "lwr_tick", type: "integer", scope: "V3", note: "Lower tick of the active range." },
      { name: "upr_tick", type: "integer", scope: "V3", note: "Upper tick of the active range." },
    ],
    returns: [
      { name: "slippage_pct", type: "number", note: "Slippage as a fraction of spot." },
      { name: "price_impact_pct", type: "number", note: "Price impact of the trade." },
      { name: "spot_price / execution_price", type: "number", note: "Pre-trade spot and realized execution price." },
      { name: "slippage_cost", type: "number", note: "Cost in output-token units." },
      { name: "max_size_at_1pct", type: "number | null", scope: "V2", note: "Largest trade staying within 1% slippage; null on V3." },
    ],
  },
  {
    name: "AnalyzeBalancerLP",
    scope: "Balancer",
    desc: "Decompose a 2-asset Balancer weighted-pool position's PnL using the weighted-pool IL formula, where the base token's weight shapes IL magnitude. Fee income is not attributed in v1 (vault-level fees only).",
    query: "How is my 80/20 BAL/WETH Balancer position doing?",
    params: [
      { name: "lp_init_amt", type: "number", req: true, note: "Pool shares held by this position, in human units." },
      { name: "entry_base_amt", type: "number", req: true, note: "Amount of the base (first) token deposited at entry." },
      { name: "entry_opp_amt", type: "number", req: true, note: "Amount of the opp (second) token deposited at entry." },
      { name: "holding_period_days", type: "number", note: "Optional. If supplied, real_apr is annualized from net PnL." },
    ],
    returns: [
      { name: "net_pnl", type: "number", note: "current_value − hold_value, in opp-token numeraire." },
      { name: "il_percentage", type: "number", note: "Weighted-pool impermanent loss (fraction)." },
      { name: "base_weight", type: "number", note: "The base token's pool weight (e.g. 0.8)." },
      { name: "alpha", type: "number", note: "Current base-in-opp price ratio vs entry." },
      { name: "diagnosis", type: "string", note: '"net_positive" | "fee_compensated" | "il_dominant".' },
    ],
  },
  {
    name: "SimulateBalancerMove",
    scope: "Balancer",
    desc: "Project a 2-asset Balancer position's value at a hypothetical base-token price move from current state. IL depends on both the shock magnitude and the pool weights.",
    query: "If BAL drops 30%, what happens to my BAL/WETH Balancer LP?",
    params: [
      { name: "price_change_pct", type: "number", req: true, note: "Fractional base-in-opp price change; must be > −1.0. Or pass the vector form price_change_pcts." },
      { name: "price_change_pcts", type: "number[]", note: "Vector form — sweep a grid in one call (≤256). Supply this OR the scalar, not both; returns an ordered array." },
      { name: "lp_init_amt", type: "number", req: true, note: "Pool shares held, in human units; must be > 0." },
    ],
    returns: [
      { name: "new_value", type: "number", note: "Position value at the simulated price (opp numeraire)." },
      { name: "il_at_new_price", type: "number", note: "Impermanent loss at the simulated price (fraction, ≤ 0)." },
      { name: "value_change_pct", type: "number", note: "Fractional change in position value from current." },
      { name: "new_price_ratio", type: "number", note: "Alpha = new_price / current_price." },
    ],
  },
  {
    name: "AnalyzeStableswapLP",
    scope: "Stableswap",
    desc: "Decompose a 2-asset Curve stableswap position's PnL via the amplified-invariant IL formula — small depegs can produce outsized IL at high A. Values in peg-numeraire.",
    query: "Analyze my position in the crvUSD/USDC pool.",
    params: [
      { name: "lp_init_amt", type: "number", req: true, note: "LP tokens held, in human units." },
      { name: "entry_amounts", type: "number[]", req: true, note: "Per-token entry amounts in pool order — exactly 2 (2-asset pools only)." },
      { name: "holding_period_days", type: "number", note: "Optional. If supplied, real_apr is annualized from net PnL." },
    ],
    returns: [
      { name: "il_percentage", type: "number | null", note: "Amplified-invariant IL (null in the unreachable-alpha regime)." },
      { name: "net_pnl", type: "number | null", note: "current_value − hold_value, in peg-numeraire." },
      { name: "A", type: "integer", note: "The pool's amplification coefficient." },
      { name: "token_names", type: "string[]", note: "Pool tokens in order." },
      { name: "diagnosis", type: "string", note: 'e.g. "at_peg" | "net_positive" | "il_dominant".' },
    ],
  },
  {
    name: "SimulateStableswapMove",
    scope: "Stableswap",
    desc: "Project a 2-asset stableswap position's value at a hypothetical peg shift. At high A, large shocks may be physically unreachable — those fields return null.",
    query: "What happens to my USDC/DAI Curve LP if USDC depegs 2%?",
    params: [
      { name: "price_change_pct", type: "number", req: true, note: "Fractional shock to the current alpha; must be > −1.0. Or pass the vector form price_change_pcts." },
      { name: "price_change_pcts", type: "number[]", note: "Vector form — sweep a grid in one call (≤256). Supply this OR the scalar, not both; returns an ordered array." },
      { name: "lp_init_amt", type: "number", req: true, note: "LP tokens held, in human units; must be > 0." },
    ],
    returns: [
      { name: "new_value", type: "number | null", note: "Value at the simulated peg (null if unreachable at this A)." },
      { name: "il_at_new_price", type: "number | null", note: "IL at the simulated peg (null if unreachable)." },
      { name: "value_change_pct", type: "number | null", note: "Fractional value change (null if unreachable)." },
      { name: "new_price_ratio", type: "number", note: "Simulated alpha = 1 + price_change_pct." },
    ],
  },
  {
    name: "AssessDepegRisk",
    scope: "Stableswap",
    desc: "Impermanent loss across a ladder of depeg levels for a 2-asset stableswap position, each with an optional constant-product (V2) benchmark.",
    query: "How exposed is my crvUSD/USDC position to a depeg?",
    params: [
      { name: "lp_init_amt", type: "number", req: true, note: "LP tokens held, in human units; must be > 0." },
      { name: "depeg_token_name", type: "string", note: "Symbol of the asset assumed to depeg. Optional — defaults to the pool's first token." },
      { name: "depeg_levels", type: "number[]", note: "Depeg magnitudes in (0, 1). Default [0.02, 0.05, 0.10, 0.20, 0.50]." },
      { name: "compare_v2", type: "boolean", note: "If true (default), each scenario reports the equivalent V2 constant-product IL." },
    ],
    returns: [
      { name: "scenarios", type: "object[]", note: "Per level: depeg_pct, peg_price, il_pct, lp/hold value, v2_il_comparison." },
      { name: "depeg_token", type: "string", note: "The asset assumed to depeg." },
      { name: "current_peg_deviation", type: "number", note: "Current deviation from peg." },
      { name: "n_assets", type: "integer", note: "Number of pool assets (2)." },
    ],
  },
  {
    name: "BuildStateTwin",
    scope: "V2 · V3 · Balancer · Stableswap",
    desc: "Read a pool once and return a portable State Twin — the pool's state as JSON, with a content_hash. A client rehydrates it locally and runs unlimited counterfactuals off the MCP, zero further RPC. Spans all four pool types.",
    query: "Build me a reusable twin of the USDC/ETH 0.05% pool.",
    params: [
      { name: "lwr_tick", type: "integer", scope: "V3", note: "Optional position range, uniswap_v3 only. Omit for the full active-liquidity range; ignored for other pool types." },
      { name: "upr_tick", type: "integer", scope: "V3", note: "Optional position range, uniswap_v3 only." },
    ],
    returns: [
      { name: "__type__", type: "string", note: "Snapshot class — V2 / V3 / Balancer / StableswapPoolSnapshot." },
      { name: "(snapshot fields)", type: "various", note: "pool_id, protocol, reserves, weights/A, fee/ticks, block_number, chain_id, …" },
      { name: "content_hash", type: "string", note: '"0x" + sha256 over the body (sort_keys) — recompute to verify integrity.' },
    ],
  },
];

const errors: { code: string; note: string }[] = [
  { code: "BadPoolType", note: "pool_type is not one of uniswap_v2 / uniswap_v3 / balancer / stableswap." },
  { code: "IncompatiblePoolType", note: "The tool doesn't accept that pool_type (e.g. a stableswap tool on a uniswap_v2 pool) — rejected before any chain read." },
  { code: "MissingArgument", note: "pool_address, rpc_url, or pool_type was omitted." },
  { code: "ChainMismatch", note: "Declared chain_id ≠ the chain the RPC reports." },
  { code: "Error reading pool", note: "RPC unreachable, or the address isn't a contract on that chain." },
  { code: "Token not found", note: "token_in_name doesn't match either pool token (the error lists the available symbols)." },
];

const links: { label: string; href: string }[] = [
  { label: "Official MCP Registry", href: "https://registry.modelcontextprotocol.io/?search=echoledger" },
  { label: "Smithery", href: "https://smithery.ai/servers/ic3moore/echoledger" },
  { label: "Source (GitHub)", href: "https://github.com/echoledger/echoledger-mcp" },
  { label: "defipy.org", href: "https://defipy.org" },
  { label: "State Twins paper", href: "https://arxiv.org/abs/2605.11522" },
];

// ─── Presentational helpers ──────────────────────────────────────────────────

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-md border border-[rgb(58_106_120/0.25)] bg-[var(--color-bg-elevated)] px-4 py-3 font-mono text-[0.82rem] leading-[1.6] text-[var(--color-text-secondary)]">
      <code>{children}</code>
    </pre>
  );
}

function FieldRow({ field }: { field: Field }) {
  return (
    <div className="border-t border-[rgb(58_106_120/0.15)] py-3">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <code className="font-mono text-[0.875rem] font-medium text-[var(--color-text-primary)]">
          {field.name}
        </code>
        <span className="font-mono text-[0.75rem] text-[var(--color-text-muted)]">
          {field.type}
        </span>
        {field.req ? (
          <span className="rounded-sm bg-[rgb(93_168_160/0.15)] px-1.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-[var(--color-accent)]">
            required
          </span>
        ) : null}
        {field.scope ? (
          <span className="rounded-sm border border-[rgb(58_106_120/0.4)] px-1.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-[var(--color-text-muted)]">
            {field.scope} only
          </span>
        ) : null}
      </div>
      <p className="mt-1 text-[0.875rem] leading-[1.55] text-[var(--color-text-secondary)]">
        {field.note}
      </p>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function McpPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Header */}
        <section className="px-8 pb-14 pt-36">
          <div className="mx-auto max-w-[1100px]">
            <SectionEyebrow>MCP Endpoint</SectionEyebrow>
            <SectionTitle>EchoLedger, inside your AI client.</SectionTitle>
            <SectionLede>
              A Model Context Protocol endpoint exposing eleven live tools over
              Uniswap V2/V3, Balancer weighted, and Curve stableswap pools
              &mdash; ten reactive analytics primitives plus{" "}
              <span className="font-mono">BuildStateTwin</span>, a portable State
              Twin you can run counterfactuals against locally. Connect from
              Claude, Cursor, or any MCP-compatible client, then ask in plain
              language or call the tools directly &mdash; the analytics are exact
              AMM math, powered by open-source defipy.
            </SectionLede>

            <div className="max-w-[640px]">
              <div className="mb-2 text-[0.8125rem] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                Endpoint &middot; streamable-HTTP &middot; authless
              </div>
              <CodeBlock>{ENDPOINT}</CodeBlock>
            </div>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <a
                href="#install"
                className="inline-flex items-center justify-center rounded-md bg-[var(--color-accent)] px-6 py-3 text-[0.9375rem] font-medium text-[var(--color-bg-base)] transition-colors hover:bg-[var(--color-accent-hover)]"
              >
                Install
              </a>
              <a
                href="#reference"
                className="inline-flex items-center justify-center rounded-md border border-[var(--color-accent-deep)] bg-transparent px-6 py-3 text-[0.9375rem] font-medium text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-text-primary)]"
              >
                API reference
              </a>
            </div>
          </div>
        </section>

        {/* Install */}
        <section id="install" className="border-t border-[rgb(58_106_120/0.2)] px-8 py-20">
          <div className="mx-auto max-w-[1100px]">
            <SectionEyebrow>Install</SectionEyebrow>
            <SectionTitle>Connect in one step.</SectionTitle>
            <SectionLede>
              Authless &mdash; no account, no API key. You supply an Ethereum RPC
              URL per call (bring-your-own-RPC); nothing is stored or logged.
            </SectionLede>

            <div className="space-y-8">
              <div>
                <h3 className="mb-3 text-base font-medium text-[var(--color-text-primary)]">
                  Claude Code
                </h3>
                <CodeBlock>{`claude mcp add --transport http echoledger ${ENDPOINT}`}</CodeBlock>
              </div>
              <div>
                <h3 className="mb-3 text-base font-medium text-[var(--color-text-primary)]">
                  Claude Desktop
                </h3>
                <p className="text-[0.9375rem] leading-[1.65] text-[var(--color-text-secondary)]">
                  Settings &rarr; Connectors &rarr; Add custom connector, using the
                  endpoint URL above.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-base font-medium text-[var(--color-text-primary)]">
                  Cursor
                </h3>
                <p className="text-[0.9375rem] leading-[1.65] text-[var(--color-text-secondary)]">
                  Settings &rarr; MCP &rarr; Add new MCP server. Name{" "}
                  <span className="font-mono text-[var(--color-text-primary)]">echoledger</span>,
                  type <span className="font-mono text-[var(--color-text-primary)]">http</span>,
                  URL the endpoint above.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quickstart */}
        <section id="quickstart" className="border-t border-[rgb(58_106_120/0.2)] px-8 py-20">
          <div className="mx-auto max-w-[1100px]">
            <SectionEyebrow>Quickstart</SectionEyebrow>
            <SectionTitle>A first call.</SectionTitle>
            <SectionLede>
              Once connected, ask a natural-language question and the agent picks
              the tool and fills the arguments &mdash; or call a tool directly with
              an arguments object like this:
            </SectionLede>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-[0.95rem] font-medium text-[var(--color-text-primary)]">
                  Tool call &mdash; CheckPoolHealth on a mainnet V3 pool
                </h3>
                <CodeBlock>{`{
  "name": "CheckPoolHealth",
  "arguments": {
    "pool_address": "0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640",
    "rpc_url": "https://ethereum-rpc.publicnode.com",
    "pool_type": "uniswap_v3"
  }
}`}</CodeBlock>
              </div>
              <div>
                <h3 className="mb-3 text-[0.95rem] font-medium text-[var(--color-text-primary)]">
                  Response (abridged)
                </h3>
                <CodeBlock>{`{
  "version": "V3",
  "spot_price": 0.000414,
  "tvl_in_token0": 241360294.59,
  "tvl_in_token1": 143584.31,
  "num_lps": 1,
  "fee_pips": 500,
  "tick_current": -74265,
  "has_activity": false
}`}</CodeBlock>
              </div>
            </div>
            <p className="mt-6 text-[0.875rem] leading-[1.6] text-[var(--color-text-muted)]">
              The <span className="font-mono">rpc_url</span> above is a public node
              for trying it out &mdash; use your own provider (Alchemy, Infura, etc.)
              for production. It is read once, server-side, and never persisted.
            </p>
          </div>
        </section>

        {/* Common parameters */}
        <section id="reference" className="border-t border-[rgb(58_106_120/0.2)] px-8 py-20">
          <div className="mx-auto max-w-[1100px]">
            <SectionEyebrow>API reference</SectionEyebrow>
            <SectionTitle>Common parameters.</SectionTitle>
            <SectionLede>
              Every tool accepts these. Tool-specific parameters are listed under
              each tool below.
            </SectionLede>
            <div className="max-w-[760px]">
              {commonParams.map((f) => (
                <FieldRow key={f.name} field={f} />
              ))}
            </div>
          </div>
        </section>

        {/* Tool reference */}
        <section className="px-8 pb-20">
          <div className="mx-auto max-w-[1100px] space-y-16">
            {tools.map((tool) => (
              <div key={tool.name}>
                <div className="mb-2 flex flex-wrap items-baseline gap-x-3">
                  <h3 className="font-mono text-[1.15rem] font-medium text-[var(--color-accent)]">
                    {tool.name}
                  </h3>
                  <span className="rounded-sm border border-[rgb(58_106_120/0.4)] px-1.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-[var(--color-text-muted)]">
                    {tool.scope}
                  </span>
                </div>
                <p className="mb-2 max-w-[68ch] text-[0.95rem] leading-[1.65] text-[var(--color-text-secondary)]">
                  {tool.desc}
                </p>
                <p className="mb-6 border-l-2 border-[var(--color-accent-deep)] pl-3 text-[0.9rem] italic text-[var(--color-text-muted)]">
                  {tool.query}
                </p>

                <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
                  <div>
                    <div className="mb-1 text-[0.75rem] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                      Parameters
                    </div>
                    {tool.params.map((f) => (
                      <FieldRow key={f.name} field={f} />
                    ))}
                  </div>
                  <div>
                    <div className="mb-1 text-[0.75rem] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                      Returns
                    </div>
                    {tool.returns.map((f) => (
                      <FieldRow key={f.name} field={f} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <p className="max-w-[68ch] text-[0.9375rem] leading-[1.65] text-[var(--color-text-muted)]">
              The four scenario tools (
              <span className="font-mono">SimulatePriceMove</span>,{" "}
              <span className="font-mono">SimulateBalancerMove</span>,{" "}
              <span className="font-mono">SimulateStableswapMove</span>,{" "}
              <span className="font-mono">CalculateSlippage</span>) also take a
              vector input to sweep a grid in one call.{" "}
              <span className="font-mono">BuildStateTwin</span> returns a portable
              twin you rehydrate locally to run those primitives off the MCP with
              zero further RPC &mdash; build once, run N. Full reference, including
              the twin round-trip:{" "}
              <a
                href="https://github.com/echoledger/echoledger-mcp/blob/main/docs/TOOLS.md"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-[rgb(93_168_160/0.3)] text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
              >
                docs/TOOLS.md
              </a>
              .
            </p>
          </div>
        </section>

        {/* Usage notes */}
        <section id="usage" className="border-t border-[rgb(58_106_120/0.2)] px-8 py-20">
          <div className="mx-auto max-w-[1100px]">
            <SectionEyebrow>Usage notes</SectionEyebrow>
            <SectionTitle>Things worth knowing.</SectionTitle>
            <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-base font-medium text-[var(--color-text-primary)]">
                  Bring your own RPC
                </h3>
                <p className="text-[0.9375rem] leading-[1.65] text-[var(--color-text-secondary)]">
                  Any Ethereum or L2 JSON-RPC works (Alchemy, Infura, public
                  nodes). Passed per call, read once server-side, never stored or
                  logged &mdash; it is redacted from every receipt.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-base font-medium text-[var(--color-text-primary)]">
                  chain_id guard
                </h3>
                <p className="text-[0.9375rem] leading-[1.65] text-[var(--color-text-secondary)]">
                  Supply <span className="font-mono">chain_id</span> to have the
                  call rejected if your RPC points at a different chain than the
                  pool &mdash; catches a wrong-network RPC before it returns junk.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-base font-medium text-[var(--color-text-primary)]">
                  V3 ticks &amp; liquidity
                </h3>
                <p className="text-[0.9375rem] leading-[1.65] text-[var(--color-text-secondary)]">
                  The twin is built from the pool&rsquo;s full-range active
                  liquidity. <span className="font-mono">lwr_tick</span>/
                  <span className="font-mono">upr_tick</span> describe your{" "}
                  <em>position</em> range and feed the concentrated-liquidity IL
                  math &mdash; they don&rsquo;t re-scope the pool snapshot.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-base font-medium text-[var(--color-text-primary)]">
                  Read-only
                </h3>
                <p className="text-[0.9375rem] leading-[1.65] text-[var(--color-text-secondary)]">
                  Analytics only &mdash; the endpoint never signs or sends
                  transactions. Some fields are protocol-specific (marked{" "}
                  <span className="text-[var(--color-text-muted)]">V2 only</span> /{" "}
                  <span className="text-[var(--color-text-muted)]">V3 only</span>{" "}
                  above) and return null on the other.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Errors */}
        <section id="errors" className="border-t border-[rgb(58_106_120/0.2)] px-8 py-20">
          <div className="mx-auto max-w-[1100px]">
            <SectionEyebrow>Errors</SectionEyebrow>
            <SectionTitle>Structured, never silent.</SectionTitle>
            <SectionLede>
              Bad input or an unreachable RPC returns a clear error message (your
              RPC URL is scrubbed from it), not a crash or empty result.
            </SectionLede>
            <div className="max-w-[760px]">
              {errors.map((e) => (
                <div
                  key={e.code}
                  className="border-t border-[rgb(58_106_120/0.15)] py-3"
                >
                  <code className="font-mono text-[0.875rem] font-medium text-[var(--color-text-primary)]">
                    {e.code}
                  </code>
                  <p className="mt-1 text-[0.875rem] leading-[1.55] text-[var(--color-text-secondary)]">
                    {e.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="border-t border-[rgb(58_106_120/0.2)] px-8 py-20">
          <div className="mx-auto max-w-[1100px]">
            <SectionEyebrow>How it works</SectionEyebrow>
            <SectionTitle>The math is open.</SectionTitle>
            <div className="max-w-[68ch] space-y-5 text-base leading-[1.75] text-[var(--color-text-secondary)]">
              <p>
                Each call reads live Uniswap V2/V3 pool state through your RPC,
                builds a stateless twin, runs a closed-form AMM primitive, and
                returns a typed result. Nothing is cached between calls.
              </p>
              <p>
                The analytics are powered by the open-source{" "}
                <a
                  href="https://defipy.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-[rgb(93_168_160/0.3)] pb-px font-medium text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
                >
                  defipy
                </a>{" "}
                library and its State Twin substrate &mdash; the same methodology
                behind EchoLedger&rsquo;s analysis. The library is open and verifiable, and this endpoint is a free, self-serve surface.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-[rgb(93_168_160/0.3)] pb-px text-[0.9375rem] font-medium text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
                >
                  {link.label} &rarr;
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
