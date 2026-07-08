# EchoLedger Services — Project Seed Brief

*Bootstrap context for the EchoLedger Services project. Drop this into project knowledge so the project starts informed, not blank.*

*Last updated: April 28, 2026*

---

## What EchoLedger Services Is

EchoLedger Services is a productized quantitative DeFi analysis practice operating through an existing incorporated entity (EchoLedger, with corporate bank account in place). Sole operator: Ian Moore, PhD Applied Mathematics.

**One-line positioning:** Quantitative DeFi analysis from a PhD-trained research practice. Productized reports, open-source methodology, fixed prices.

**Operational role:** EchoLedger Services generates near-term consulting income that funds AnchorRegistry runway. AnchorRegistry is the long-term product company; EchoLedger Services is the cashflow practice. The two are deliberately kept as separate brands with separate URLs, separate audiences, and separate sales motions. They likely converge later as agentic DeFi matures, but the convergence is not forced — it will be customer-driven when it happens.

**The unifying thesis:** Ian Moore is a DeFi quant who saw the agentic transition coming early enough to build the trust infrastructure for it. EchoLedger Services is the analysis layer for the human era of finance. AnchorRegistry is the trust layer for the AI era of finance. Same operator, two layers, one arc.

**Front-facing surface:** echoledger.ai (currently a holder card; needs to be replaced with a productized services page).

**Operating status:** Ready to invoice. Not "in formation."

---

## The Founder Stack — Eight Building Blocks

What EchoLedger brings to the practice. Eight pieces that have been accumulating for years and now resolve into a coherent operator profile:

1. **Sharp brand name (echoledger.ai).** Wide enough to hold both the consulting practice today and eventual agent products later, without strain.
2. **Existing corporate entity with bank account.** EchoLedger is incorporated, banking is set up, ready to invoice and receive funds today. Not a sole-proprietor side project — an operating business.
3. **Defipy v2 — open-source DeFi analytics library, 50,000+ downloads over 2 years.** Not a portfolio piece. A product with a measurable user base. Proper v2 website launching (replacing RTD docs).
4. **ETH Denver 2024 speaker** — Pachira: Liquidity Tree Protocol. Conference visibility in the DeFi-native audience.
5. **Published book + courses** — organized teaching materials on DeFi quant. Existing readers and students. A warm distribution channel that hasn't been tapped for services.
6. **Former Chief Data Scientist, Syscoin / SYS Labs** — operator credential at a layer-1. P&L responsibility on adversarial-environment systems. Not a CV line; a stakes credential.
7. **Seasoned PhD, Applied Mathematics.** The academic foundation that makes the math defensible.
8. **AnchorRegistry founder** — separate company, but inside the larger thesis it demonstrates the agentic-transition foresight. Author of *Trustless Provenance Trees: A Game-Theoretic Framework for Operator-Gated Blockchain Registries* (arXiv:2604.03434, April 2026).

This stack is unusually complete relative to the visible DeFi consulting market. Most LinkedIn-visible DeFi consultants have one or two of these. The combination of all eight is rare and is the basis for premium pricing.

**Particular note on block #2.** Most new consulting practices burn the first month on incorporation, EIN, business banking, contracts, and invoicing infrastructure before they can legally bill. EchoLedger is past all of that. The practice can issue an invoice this week, accept a wire this week, and process Stripe payments under a corporate entity (not a personal one) — which matters for buyers who do procurement through finance teams (most DAOs and funds do).

---

## Defipy — The Anchor of the Practice

Defipy is the operational core of EchoLedger Services. Not a portfolio piece — the analytical engine, with measurable adoption.

**What it is:** Open-source Python library for DeFi position analysis. Maintained under github.com/defipydevs. **50,000+ downloads over 2 years.** v2 release with new dedicated website (not RTD) in progress.

**Coverage:** Uniswap V2, Uniswap V3, Balancer weighted pools, Curve-style stableswaps. Covers essentially the full AMM surface relevant to LP positions in production.

**Capabilities (function-level):**
- `AnalyzePosition` — Uniswap V2/V3 LP PnL attribution
- `AnalyzeBalancerPosition` — 2-asset Balancer weighted pool LP PnL
- `AnalyzeStableswapPosition` — 2-asset Curve stableswap LP PnL with amplified math
- `AssessDepegRisk` — quantifies stablecoin depeg exposure for stableswap LPs
- `CalculateSlippage` — slippage and price-impact decomposition for swaps
- `CheckPoolHealth` — pool-level TVL, fee/volume, depth metrics
- `DetectRugSignals` — threshold checks on V2/V3 pools for rug indicators
- `SimulatePriceMove` — projects LP position value under hypothetical price moves
- `SimulateBalancerPriceMove`, `SimulateStableswapPriceMove` — equivalents for other pool types

**Why it matters for credibility:**
- It's the receipt that the math works. Anyone can `pip install` it and verify.
- It pre-dates the consulting motion by years (UniswapPy work goes back to 2024).
- 50K+ downloads is *traction*, not just availability. People use this.
- The breadth across V2/V3/Balancer/Curve is itself a credential.
- It bridges "academic with theory" and "operator with shipped tools" — the bridge where a consulting practice can credibly live.

**How it should be presented on echoledger.ai:**
- For technical buyers: prominent — "methodology powered by defipy, open-source on GitHub, 50K+ downloads."
- For non-technical buyers: translated — "we model your position with the same math we publish openly."

---

## Distribution Assets Already in Place

A point worth naming separately because most consultants don't have any of this when they start:

- **Defipy user base** — 50K+ downloads. People who have used the tooling. Some fraction would respond to direct outreach about paid analysis services.
- **Book readers and course students** — existing audience that bought into Ian's teaching. Warm to a services announcement.
- **arXiv paper readership** — researchers who've read or cited *Trustless Provenance Trees*. Adjacent to the agentic DeFi thesis if/when it activates.
- **ETH Denver attendee network** — conference connections, particularly anyone who saw the Pachira talk.
- **Syscoin alumni network** — operator-level connections in the L1 space.

These are not "leads" — they're a warm distribution surface that EchoLedger Services can plug into instead of building from zero. Specifically: an announcement of EchoLedger Services to defipy users, book readers, and course students is a meaningfully different first-week move than cold outreach.

---

## Corporate / Operating Structure

EchoLedger is an incorporated entity with corporate banking already in place. AnchorRegistry is a separate venture.

**Open structural questions** (for an accountant, not for this project to answer, but worth flagging):

- Does AR get developed inside EchoLedger Inc. as a project, or as a separately-held entity that EchoLedger funds?
- How does cashflow from EchoLedger consulting engagements flow to AR development? (W2 to Ian who then funds AR? Inter-company transfer? Loan?)
- What's the IP allocation between EchoLedger work product (audits, reports, defipy maintenance) and AR work product (smart contracts, paper IP, USPTO filings)?

These get simpler the earlier they're sorted. Worth a 1-hour conversation with a startup-fluent accountant before serious EchoLedger revenue starts flowing.

**For the page and prospect conversations:** the relevant signal is just that EchoLedger operates as a corporate entity. Buyers don't need to see the structure — they just need to know they're contracting with a company, not an individual. *"Engagements contracted through EchoLedger Inc."* near the SKUs (or in the footer) is enough.

---

## The Offering — Three Productized SKUs

Productized, fixed-price, fixed-scope. Not "consulting" in the conversational sense.

### 1. LP Position Audit
- **What it is:** Single-position analysis. PnL attribution, IL exposure, slippage decomposition, depeg risk if applicable, pool health context, recommendations.
- **Deliverable:** 6–10 page PDF report.
- **Turnaround:** ~5 business days.
- **Introductory price:** $2,500. Target post-case-study price: $4,500–6,000.
- **Buyer profile:** DAOs with treasury LPs, individual large LPs, fund analysts.

### 2. DAO Treasury Review
- **What it is:** Multi-position treasury review, written for governance forum publication.
- **Deliverable:** Comprehensive PDF report suitable for posting on governance forums (Snapshot, Discourse, etc.).
- **Turnaround:** 2–3 weeks.
- **Introductory price:** $10,000–12,000. Target post-case-study price: $20,000–30,000.
- **Buyer profile:** DAO core contributors, treasury committees, governance leads.

### 3. Pool Health & Rug Risk Assessment
- **What it is:** Due diligence on a pool a buyer is considering entering. Pool-level health metrics, rug signal screen, liquidity stability, MEV exposure.
- **Deliverable:** Shorter PDF report.
- **Turnaround:** ~3 business days.
- **Introductory price:** $1,500–2,500. Target post-case-study price: $3,000–5,000.
- **Buyer profile:** Funds doing due diligence, audit firms, individual large allocators.

**Pricing logic:** Introductory prices are deliberately below market for the founder stack involved, because the practice has no public testimonials yet and needs case studies more than marginal revenue. Once 3–5 engagements are in the books — even anonymized — prices move to target ranges within a quarter.

**Optional fourth SKU (forward-looking):** Agentic DeFi advisory, retainer or hourly. Held for now until the agentic DeFi thesis has a clearer market signal. Premature to productize.

---

## Market Position

### The DeFi consulting market, roughly tiered:

**Tier A — top of market.** Ex-Jump/Jane Street/Citadel quants, ex-protocol-team engineers, audit firm partners. $400–800/hr or $50k+ engagements. Institutional credibility, warm pipelines. Not the competitive set.

**Tier B — visible middle.** People with one of: real technical background but no shipped artifacts, OR shipped artifacts but no formal credentials, OR good distribution but thin technical depth. $150–400/hr. Most of LinkedIn-visible DeFi consulting lives here.

**Tier C — noise floor.** Pivoted-from-web2 "DeFi advisors." $50–150/hr. Thin work.

### Where EchoLedger sits:

**Tier A capability, currently Tier B (or below) public social distribution — but with substantial warm audience already in place AND operating infrastructure already built.** That's the asymmetry. The work product EchoLedger ships at $2,500 is qualitatively better than what Tier B ships at $5,000. The temporary asymmetry is exploitable: discount price, premium product, builds case studies, raises prices once distribution catches up.

**Distribution caveat:** "Tier B distribution" understates it. Ian has 50K+ defipy downloads, book readers, and course students already. The *social* distribution (Twitter, LinkedIn) is thin, but the *user base* distribution is meaningful and warm. The fix is connecting the existing warm audience to the new services offering — not building distribution from zero.

What's missing relative to Tier A: warm institutional pipelines, fund/DAO logos, public case studies, social-media presence. All learnable. Most fixable through consistent public output plus tapping existing warm audiences.

---

## Buyer Targeting

### Right buyers
- **Defipy users with paying capacity** — already use the tooling, already trust the math, may want the analysis done by the author rather than DIY.
- **Book readers and course students** — already bought into Ian's teaching, warm to a service offering from the same source.
- **DAOs with active treasury LPs** — public governance forums, public positions, can write to forum posters directly.
- **Smaller funds and family offices with crypto exposure** — warm intros only; cold doesn't work in this tier.
- **DeFi protocol teams holding LP positions in their own pools** — more common than expected, often under-analyzed.
- **Newsletters and DeFi research outlets** — not customers, but distribution leverage. Free analyses they cite drive inbound.

### Wrong buyers (do not pitch services to)
- **DeFi infrastructure companies with internal quant teams** (Veda, Odos, similar). They have the analytical capability in-house. Pitching services here misreads what they do and damages future AR-related conversations.
- **Top-of-stack institutional funds.** Already in Tier A consultant relationships. Out of reach without warm intros.
- **AnchorRegistry network contacts.** Keep AR conversations and EchoLedger sales channels separate. Mixing dilutes both.

---

## Distribution — Connecting the Existing Audience

The earlier framing of "distribution is the gap" was too pessimistic given what's actually in place. The corrected framing:

**What's in place:**
- Defipy users (50K+ downloads, ongoing)
- Book readers
- Course students
- arXiv paper readers
- ETH Denver and Syscoin networks

**What's thin:**
- Public social media presence (@ic3moore: 296 followers, 0 posts)
- Visible case studies
- Weekly cadence of public analysis

**The fix:**

- **Connect the warm audience to the offering first.** Email or post announcement to defipy users / book readers / course students that EchoLedger Services is open. This is the highest-conversion first move and most consultants don't have this lever at all.
- **Begin a public weekly defipy analysis cadence** — pick a real pool, real position, or real recent event. Run defipy. Publish. Tag the protocol. Do it again next week. Cadence target: 1 substantive post per week, minimum 8 weeks before evaluating impact.
- **Compounding goal:** the substance becomes the marketing. By the 10th–15th post, inbound starts. By the 30th, the consulting framing flips — buyers send positions and ask the price, instead of being pitched.

---

## The Sample Report — Highest Priority Deliverable

**Why it comes before the page:** The echoledger.ai page describes a product. Without the product existing as a tangible artifact, the page is a brochure. With the sample report in hand, the page becomes a transaction.

**Recommended sample type:** LP Position Audit. Most replicable SKU. Most likely first sale. Most direct showcase of defipy.

**Recommended target:** A real, public, currently-underperforming LP position on a well-known pool. On-chain data, no permission needed, verifiable. Avoid synthetic or anonymized positions — they signal "I'm hiding something" or "this is fake."

**Structure (also serves as the template for every future audit):**

1. **Executive Summary** — 3–5 sentences. Position, headline finding, recommendation. Quotable for governance forums or CFOs.
2. **Position Breakdown** — what it is, entry value, current value, realized vs. unrealized.
3. **PnL Attribution** — fee income, IL, price exposure, swap costs, gas. Decomposed. Charted.
4. **Risk Decomposition** — depeg risk (if applicable), IL trajectory under price moves, concentration risk, exit slippage.
5. **Pool Health Context** — TVL trend, fee/volume ratio, liquidity stability, rug signals (even on legitimate pools).
6. **Recommendation** — 1–3 concrete actions with reasoning.
7. **Methodology Appendix** — defipy functions used, GitHub link, math citations.

**Length:** 6–10 pages. Under 4 = thin. Over 12 = unread.

**Format:** Clean, well-typeset PDF. Branded "EchoLedger." Markdown or Notion exports signal hobbyist; PDFs signal practice. Footer of the report should reference the corporate entity (e.g. *"EchoLedger Inc. · contact@echoledger.ai"*) — small, professional.

**Asymmetric value:** Writing this once produces both the sample artifact AND the template for every future audit. Future audits become "swap in new position data, run defipy, fill the template." This is product, productized.

---

## echoledger.ai — The Page

**Current state:** Holder card with placeholder framing ("AI Safety-as-a-Service: The AI Crypto Trust Layer"). Drop this framing entirely — it's two confused theses smashed together and serves no buyer.

**Target state:** Static services page. Single-purpose: convert a visitor into a paying customer or qualified call.

**Page structure (minimum viable):**

- **Hero** — flat, credentialed, no hype. Candidate: *"Quantitative DeFi analysis from a PhD-trained research practice. Position audits, treasury reviews, and pool risk assessments — productized, fixed-price, fast turnaround."*
- **Three SKU cards** — name, scope, deliverable, turnaround, price, "Request audit" CTA.
- **Method section** — defipy reference, GitHub link, "the math is open, the reports are paid."
- **Sample report** — PDF download or preview. Critical for conversion.
- **Credibility row** — defipy 50K+ downloads, ETH Denver speaker, book + courses, arXiv paper, PhD Applied Math, ex-Syscoin Chief Data Scientist. Compact, scannable.
- **About** — credentials paragraph. Tells the operator arc in 2–3 sentences.
- **Operating signals** — small line near SKUs or in footer: *"Engagements contracted through EchoLedger Inc."* Establishes corporate entity without drawing focus.
- **Footer line referencing AnchorRegistry** — small, non-prominent. *"Also building AnchorRegistry — provenance infrastructure for the agentic economy. anchorregistry.com."* Builds the convergence bridge without confusing the buyer.

**Tone:** Boring on purpose. Serious buyers read flat credentialed copy and think "good, finally." Tier B writes hype. EchoLedger doesn't have to.

**What not to put on the page:**
- AnchorRegistry as a feature or product — it's not. Footer mention only.
- Testimonials before they exist (don't fake or stretch).
- "Contact for pricing." Numbers on the page.
- A long About page or multiple navigation tabs. Single-page storefront.

**Intake:** Stripe checkout for the productized SKUs (LP Audit, Pool Health) — set up under EchoLedger corporate. Calendly + scoped invoice for Treasury Reviews (variable scope), invoiced on EchoLedger letterhead.

**Build time:** 1–2 days once the sample report exists. Don't optimize the page, optimize the report.

---

## Sequence of Work

In order of priority. Each step unblocks the next.

1. **Produce the sample LP Position Audit report** — pick a target position, run defipy, write the 6–10 page PDF in the structure above. This is the unlock for everything else.
2. **Stand up echoledger.ai as the productized services page** — hero, SKUs, method, sample, credibility row, about, corporate footer. Stripe + Calendly under EchoLedger Inc. 1–2 days.
3. **Stripe + invoicing setup** — three SKUs configured under the corporate entity. Test transaction. Confirm cash flows to EchoLedger bank account cleanly.
4. **Standard engagement contract template** — short, clear, IP-clean. Reusable for all SKUs. Worth a 1-hour conversation with a startup lawyer if one is available; otherwise a clean self-drafted template covers introductory engagements.
5. **Announce EchoLedger Services to existing warm audiences** — defipy users, book readers, course students. This is leverage no new consultant has and most never build.
6. **Begin weekly public analysis cadence on X (@ic3moore)** — defipy analyses on real positions, real pools, real events. 1 post/week minimum. Compounding distribution.
7. **Identify and approach 3–5 first prospects** — DAO treasurers, smaller funds, public LPs with known underperformance. Warm or warm-ish intros preferred.
8. **First paying engagement** — heavily document, refine the template, anonymize and use as the next case study.
9. **Reprice after 3–5 engagements** — move from introductory tier to target tier on all SKUs.

---

## Brand Hygiene — Things to Hold

- EchoLedger Services and AnchorRegistry stay separate. Different URLs, different audiences, different sales motions. Convergence happens when a customer asks for both at once — not before.
- The original "EchoLedger" agent product concept is on hold. The brand is being repurposed for services. If/when the agent vision returns, it lives inside the EchoLedger brand as a product line, not as a competing identity. The name is wide enough to hold this.
- AR conversations don't get the consulting pitch. Consulting prospects don't get the AR pitch. Both are real, both are Ian, both stay in their own room.
- EchoLedger Inc. is the operating entity for the consulting practice. AR is a separate venture — flow of funds and IP allocation between the two should be clarified with an accountant before serious revenue moves through.

---

## What's Open

Decisions and artifacts not yet made. To be resolved in this project as work progresses:

- **Hero copy** — direction set (flat, credentialed), exact wording TBD.
- **Sample report target position** — to be selected from current public LP positions.
- **Brand visuals** — logo, type, color palette for echoledger.ai and PDF report template.
- **Stripe product setup** — three SKUs to be configured under EchoLedger Inc.
- **Standard engagement contract template** — short, IP-clean, reusable across SKUs.
- **First-prospect list** — 3–5 specific named DAOs/funds/contributors to approach.
- **Weekly post schedule** — start date, topic backlog for first 8 weeks.
- **Existing-audience announcement plan** — channel (email list? Twitter? defipy v2 site banner?), message, timing.
- **Defipy v2 site launch coordination** — does it cross-reference echoledger.ai? How prominently?
- **EchoLedger ↔ AnchorRegistry structural relationship** — accountant conversation; how does cashflow/IP flow between the two?

---

*Project seed prepared April 28, 2026. Living document — update as decisions are made.*
