# EchoLedger Services — Full Offering Outline

*Complete service architecture: SKU specs, page-ready copy, and end-to-end workflow.*

*Last updated: April 28, 2026*

---

## Layer 1 — Detailed SKU Specs

### SKU 1: LP Position Audit

**One-line scope:** Forensic analysis of a single liquidity position — what it's actually doing, why, and what to do next.

**In scope:**
- One LP position on Uniswap V2, Uniswap V3, Balancer (2-asset weighted), or Curve (2-asset stableswap)
- PnL attribution decomposed into: fee income, impermanent loss, price exposure, swap costs, gas
- Risk decomposition: IL trajectory under price moves, exit slippage, concentration, depeg exposure (stableswaps only)
- Pool health context for the host pool
- 1–3 concrete recommendations with reasoning
- Methodology appendix (defipy functions used, GitHub references)

**Out of scope:**
- Tax accounting or jurisdictional compliance
- Multi-position portfolio analysis (that's the Treasury Review)
- Forward-looking trade execution or order routing
- Counterparty/protocol legal due diligence

**defipy functions deployed:** `AnalyzePosition`, `AnalyzeBalancerPosition`, `AnalyzeStableswapPosition`, `AssessDepegRisk`, `SimulatePriceMove` (and Balancer/Stableswap variants), `CheckPoolHealth`, `CalculateSlippage`

**Inputs required from buyer:**
- Position address (LP token holder) or NFT ID for V3
- Pool address
- Entry timestamp or block (or "best estimate")
- Optional: their thesis when they entered (informs the recommendation tone)

**Deliverable:** 6–10 page branded PDF, structure per seed (Exec Summary → Position Breakdown → PnL Attribution → Risk → Pool Health → Recommendation → Methodology Appendix)

**Turnaround:** 5 business days from receipt of inputs

**Price:** $2,500 introductory → $4,500–6,000 target

**Revisions:** One round of clarification questions included, no scope changes

---

### SKU 2: DAO Treasury Review

**One-line scope:** Governance-grade review of a DAO's full LP/treasury position book, written for forum publication.

**In scope:**
- Up to 10 LP positions across V2/V3/Balancer/Curve (more by quote)
- Per-position: PnL attribution, IL exposure, risk decomposition (same depth as SKU 1)
- Cross-position analysis: concentration risk, correlated exposures, aggregate IL trajectory, depeg cluster risk
- Treasury-level health summary: total LP value, fee yield, net PnL, risk-weighted exposure
- Stress scenarios: 2–3 named price/depeg shocks run across the full book
- Recommendations prioritized by impact: rebalance, exit, hedge, hold
- Designed for governance forum posting (Snapshot, Discourse, Commonwealth)

**Out of scope:**
- Non-LP treasury (token holdings, staking, lending positions) — can be added at quote
- Live monitoring or ongoing oversight (separate retainer if desired)
- Governance proposal drafting beyond the report itself
- Smart contract security review

**defipy functions deployed:** Full library — all `Analyze*`, `Simulate*`, `Assess*`, `CheckPoolHealth`

**Inputs required from buyer:**
- Treasury wallet addresses
- List of LP positions (or permission to derive from on-chain)
- Governance context: any prior treasury policy, risk mandate, or active proposals
- Publication preference: forum-ready markdown + PDF, or PDF only

**Deliverable:** 20–35 page PDF + forum-formatted markdown export, branded EchoLedger, citable methodology section

**Turnaround:** 2–3 weeks from kickoff call

**Price:** $10,000–12,000 introductory → $20,000–30,000 target

**Process:** Kickoff call (30 min) → data collection (buyer side, 2–5 days) → analysis → draft delivery → 1 round of revisions → final

---

### SKU 3: Pool Health & Rug Risk Assessment

**One-line scope:** Pre-entry due diligence on a pool a buyer is considering deploying capital into.

**In scope:**
- Pool-level health metrics: TVL, TVL trend, fee/volume ratio, depth at notional sizes
- Rug signal screen: liquidity concentration, LP holder distribution, ownership/admin keys (where on-chain visible), suspicious mint/burn patterns
- Liquidity stability analysis: how much of TVL is sticky vs. mercenary
- Slippage curves at buyer's intended deployment size
- MEV exposure assessment for the pool's typical flow
- Go/no-go recommendation with stated thresholds

**Out of scope:**
- Smart contract code audit (refer out)
- Tokenomics analysis of the underlying assets
- Macro thesis on the asset pair
- Position-level PnL projection (that's SKU 1, post-entry)

**defipy functions deployed:** `CheckPoolHealth`, `DetectRugSignals`, `CalculateSlippage`

**Inputs required from buyer:**
- Pool address
- Intended deployment size (notional)
- Time horizon (informs which signals matter most)

**Deliverable:** 4–6 page PDF, scannable, ends with explicit recommendation

**Turnaround:** 3 business days

**Price:** $1,500–2,500 introductory → $3,000–5,000 target

**Note:** Highest-velocity SKU. Designed to be repeatable. A buyer who runs three of these is a candidate for a retainer arrangement (future product).

---

### SKU 4: Agentic DeFi Advisory

**One-line scope:** Strategic and quantitative advisory for teams building, deploying, or evaluating agentic systems that interact with DeFi.

**Why this SKU now:** Agentic DeFi is the convergence corridor between EchoLedger Services and AnchorRegistry. Teams shipping agents that execute on-chain need someone who understands both the AMM math (defipy) and the trust/provenance problem (AnchorRegistry paper). Few people are credibly positioned to advise on both. Spec'd now to capture demand as it appears, even if marketing stays quiet.

**Three engagement modes:**

**4a — Strategy Engagement (fixed-scope project)**
- 2–4 week engagement on a defined question
- Examples: "Should our agent execute on V3 or aggregate via Balancer for this pair?", "What's our risk envelope if we let the agent rebalance autonomously?", "How should our agent's decision log establish auditability?"
- Deliverable: written recommendation memo (10–20 pages) + working session(s) with the team
- Price: $15,000–25,000 introductory → $30,000–50,000 target

**4b — Retainer Advisory (ongoing)**
- Monthly retainer, 8–16 hours/month
- Standing availability for the team's quant/agent questions
- Monthly written check-in on positions/strategies the agent is running
- Quarterly deep-dive review
- Price: $5,000/month introductory → $10,000–15,000/month target
- Minimum 3-month commitment

**4c — Hourly Consultation**
- For teams who need targeted input but not a full engagement
- $500/hour introductory → $750–1,000/hour target
- 4-hour minimum block

**In scope across modes:**
- Quantitative review of agent strategies that touch AMMs (V2/V3/Balancer/Curve)
- Risk envelope design and stress testing
- Decision-logging and audit-trail architecture (where AR thesis applies)
- Failure-mode analysis: what does this agent do in adversarial conditions
- Performance attribution for agent-run positions

**Out of scope:**
- Writing production agent code (advisory, not implementation)
- Direct integration of AnchorRegistry into the buyer's stack — that's an AR conversation, not a EchoLedger one
- Regulatory or legal positioning of the agent
- Front-end or UX of agent products

**Buyer profile:** Teams building autonomous LP managers, vault strategies with agentic rebalancing, agent-driven yield products, or research groups studying agentic DeFi behavior.

**Brand hygiene flag:** The seed is explicit that AR conversations and EchoLedger sales channels stay separate. This SKU sits inside EchoLedger. If a 4a/4b engagement uncovers genuine demand for AR integration, that conversation gets handed to the AR side cleanly — it's not bundled into the EchoLedger invoice.

---

## Layer 2 — Page-Ready Offering Copy

What goes on echoledger.ai under each SKU. Tone: flat, credentialed, no hype. Numbers visible. Buyer can self-qualify.

---

**LP Position Audit**
*Single-position forensic analysis. PnL attribution, risk decomposition, recommendation.*

We model your position with the same math we publish openly through defipy. You get a 6–10 page report covering fee income vs. impermanent loss, exit slippage, depeg exposure where relevant, and 1–3 concrete actions backed by reasoning.

Covers Uniswap V2, Uniswap V3, Balancer weighted pools, and Curve stableswaps.

**Deliverable:** Branded PDF, 6–10 pages
**Turnaround:** 5 business days
**Price:** $2,500
**[Request audit →]**

---

**DAO Treasury Review**
*Multi-position treasury review, written for governance forum publication.*

Comprehensive review of your DAO's LP positions: per-position PnL, cross-position risk, stress scenarios, and prioritized recommendations. Designed to be posted directly to your governance forum, with citable methodology.

Up to 10 positions across V2, V3, Balancer, and Curve. Larger books quoted on request.

**Deliverable:** PDF + forum-ready markdown, 20–35 pages
**Turnaround:** 2–3 weeks
**Price:** From $10,000
**[Request quote →]**

---

**Pool Health & Rug Risk Assessment**
*Pre-entry due diligence on a pool you're considering.*

Pool-level TVL trend, fee/volume health, liquidity stability, rug signal screen, and slippage curves at your deployment size. Ends with an explicit go/no-go recommendation against stated thresholds.

**Deliverable:** Branded PDF, 4–6 pages
**Turnaround:** 3 business days
**Price:** From $1,500
**[Request assessment →]**

---

**Agentic DeFi Advisory**
*Quantitative advisory for teams building agents that act on-chain.*

Strategy engagements, monthly retainers, and hourly consultation for teams shipping agentic DeFi products. Risk envelope design, strategy review, failure-mode analysis, and decision-logging architecture — grounded in defipy's AMM math and adjacent to ongoing research on agentic trust infrastructure.

**Engagement modes:** Project ($15k+), retainer ($5k/mo), or hourly ($500/hr)
**[Request intro call →]**

---

**Method footer (sits below the four SKUs):**

The math is open. The reports are paid.

EchoLedger analysis is powered by **defipy**, our open-source DeFi analytics library — 50,000+ downloads, full coverage of Uniswap V2/V3, Balancer, and Curve. Buyers pay for the analysis, the report, and the operator behind both. The methodology is verifiable.

[GitHub: defipydevs](https://github.com/defipydevs) · [Sample report (PDF)]

---

## Layer 3 — Full Service Architecture

The end-to-end workflow: how a buyer enters, gets scoped, gets delivered, and exits (or returns).

### Stage 1 — Inbound

**Channels:**
- echoledger.ai SKU CTAs (primary)
- Direct email to contact@echoledger.ai
- Inbound from weekly public analysis cadence (X / future content)
- Warm intros (defipy users, book readers, course students, Syscoin/ETH Denver network)

**Routing by SKU:**
- LP Audit, Pool Health → Stripe Checkout (productized, fixed price)
- Treasury Review → Calendly intake (30 min scoping call) → custom invoice
- Agentic Advisory → Calendly intake (30 min discovery call) → mode selection → invoice or retainer setup

### Stage 2 — Intake & Scoping

**For productized SKUs (1, 3):**
- Buyer pays via Stripe
- Auto-email triggers an intake form: position/pool address, inputs per SKU spec, any context
- 24-hour acknowledgment with confirmed start date
- If inputs are insufficient or position is out-of-scope (e.g., V3 concentrated position requires extra work, or chain isn't supported): refund or rescope offered before work begins

**For scoped SKUs (2, 4):**
- Discovery call → written scope confirmation email → invoice → 50% deposit triggers start, 50% on delivery
- For retainers (4b): full first month upfront, monthly thereafter

**Standard engagement contract attached to all engagements above $5k.** One template, IP-clean, brief, reusable.

### Stage 3 — Execution

**Workflow per SKU:**

| Stage | LP Audit | Pool Health | Treasury Review | Advisory |
|---|---|---|---|---|
| Day 0 | Inputs received | Inputs received | Kickoff call | Kickoff call |
| Day 1–2 | Data pull, defipy run | Data pull, defipy run, signal screen | Data pull (buyer side) | Scoping doc |
| Day 3–4 | Analysis, drafting | Drafting, recommendation | Per-position analysis | Analysis blocks |
| Day 5 | Final review, PDF, delivery | Final review, delivery | Cross-position synthesis | — |
| Week 2 | — | — | Stress scenarios, drafting | Working sessions |
| Week 3 | — | — | Final delivery | Delivery |

**Internal artifacts (non-buyer-facing):**
- Per-engagement working folder (raw data, defipy outputs, draft, final)
- Anonymized case-study capture file (for future marketing) — populated at engagement close
- Quote/scope archive (informs future repricing)

### Stage 4 — Delivery

- Branded PDF delivered via email + secure download link
- For Treasury Review: also markdown export for forum posting
- Delivery email includes: short summary, PDF, GitHub link to defipy version used (reproducibility), revision policy reminder
- One round of clarification questions included; out-of-scope additions are quoted as separate engagements

### Stage 5 — Post-Engagement

- 7 days after delivery: brief check-in email — questions, follow-up needs
- 30 days after: testimonial/case-study request (anonymized acceptable)
- Tag in CRM-lite (a notes file is fine at this scale): SKU, date, price paid, satisfaction, repeat-likelihood, intro-source
- Repeat buyers and warm referral sources flagged for future retainer or upsell conversations

### Stage 6 — Pipeline & Compounding

- Anonymized case study added to echoledger.ai sample library after each completed engagement (with permission)
- Methodology refinements pushed back into defipy where appropriate (this is a flywheel — engagement work strengthens the open-source library, which strengthens the practice)
- After 3–5 engagements: reprice all SKUs to target tier
- After ~10 engagements: evaluate productizing recurring patterns (e.g., quarterly treasury monitoring as a retainer)

### Cross-Cutting Operational Notes

- **All invoicing under EchoLedger Inc.** Stripe and bank account configured to corporate entity, not personal. Footer of every PDF: *"EchoLedger Inc. · contact@echoledger.ai"*
- **AR firewall:** Engagements that surface genuine AR-relevant questions are handled cleanly — EchoLedger delivers the contracted scope, AR conversation is offered separately if appropriate, never bundled into the same invoice.
- **Capacity ceiling at sole-operator scale:** Realistic monthly throughput is roughly 4–6 LP Audits + 1 Treasury Review + 2–3 Pool Health, OR one significant Advisory engagement displacing some of the above. When inbound exceeds capacity, the lever is price (raise it), not throughput (don't dilute quality).

---

*Document prepared April 28, 2026. Living artifact — update as SKUs evolve and engagements accumulate.*
