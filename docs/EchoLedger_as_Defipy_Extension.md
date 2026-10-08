> **Archived 2026-10-08:** this document describes the services practice, which is now paused. See tag/branch `archive/services-v1`. Kept for reference only.

# EchoLedger Services — The Monetary Extension of Defipy

*Positioning document. How the open-source library and the consulting practice relate, why both exist, and what each is for.*

*Last updated: April 28, 2026*

---

## The One-Line

**Defipy is the math, open and free. EchoLedger is the analysis, productized and paid.**

Same operator. Same methodology. Two surfaces — one for the community, one for the buyer who needs the work done.

---

## Why This Structure

Defipy.org has done what good open-source does: it built trust at scale. 50,000+ downloads over two years, full coverage of the AMM surface that matters in production (Uniswap V2, Uniswap V3, Balancer weighted pools, Curve stableswaps), and a v2 release coming with a proper home of its own.

What defipy.org doesn't do — and shouldn't — is sell anything. It's a library. It's `pip install defipy`. It's documentation, examples, and the math, openly verifiable.

But underneath every download is a real question the user is trying to answer:

- *Is my LP position actually making money, or am I bleeding to impermanent loss?*
- *Is this pool safe to deploy into?*
- *What's the real risk in our DAO's treasury?*

Most users will answer those questions themselves with defipy. That's the point of the library. A meaningful fraction, though — funds, DAOs, protocol teams, individual large LPs — would rather have the answer delivered as a finished report than do the work themselves. They have the capital. They don't have the time, the quant background, or the appetite to translate library output into a defensible recommendation.

**EchoLedger Services is for that fraction.**

It's not a fork of defipy, not a paid tier, not a closed version. It's the same math — applied by the author, written into a report, delivered with a recommendation, billed to a corporate entity.

---

## The Two Surfaces

### defipy.org — The Open Layer

**Purpose:** Methodology. Trust. Distribution.

**Who it's for:** Quants, developers, researchers, analysts, students. Anyone who wants to understand AMM mechanics or run their own analysis.

**What it offers:**
- The full library — V2, V3, Balancer, Curve
- Documentation, examples, tutorials
- GitHub source (defipydevs)
- The math, openly published, peer-verifiable

**What it costs:** Nothing.

**What it signals:** *The methodology is real. You can verify it yourself. Nothing is hidden behind a paywall.*

### echoledger.ai — The Productized Layer

**Purpose:** Done-for-you analysis. Reports. Engagements.

**Who it's for:** DAOs with treasury LPs, smaller funds, family offices with crypto exposure, protocol teams holding positions in their own pools, individual large LPs, agentic DeFi teams.

**What it offers:**
- LP Position Audit — single-position forensic report
- DAO Treasury Review — full treasury, governance-forum-ready
- Pool Health & Rug Risk Assessment — pre-entry due diligence
- Agentic DeFi Advisory — strategy, retainer, or hourly

**What it costs:** $1,500 to $30,000+ per engagement, depending on scope.

**What it signals:** *We do the work. You get the report. The math behind it is the math we publish openly.*

---

## Why Buyers Pay When the Library Is Free

This is the question that comes up, so it's worth answering directly.

**1. Time.** A senior analyst at a fund makes more in three days than a Pool Health report costs. Outsourcing it is rational.

**2. Defensibility.** A DAO governance forum is not the place to publish hand-rolled analysis. A branded PDF authored by a PhD with shipped open-source tooling and a published book is citable in a way a Discord screenshot isn't.

**3. Range.** Defipy does the math. It doesn't know which position to analyze, which pool to flag, which recommendation to make. The library is the engine. The practice is the driver.

**4. Author advantage.** Running defipy correctly on a complex V3 concentrated position — with the right entry block, the right price feeds, the right IL baseline — is non-trivial. The author runs it correctly the first time.

**5. The report is the product.** What buyers actually want is a 6–10 page PDF they can forward to their CFO, post to their governance forum, or file with their LPs. Defipy outputs are inputs to that artifact, not substitutes for it.

The free library doesn't cannibalize the paid practice. It *qualifies* it. Buyers who arrive at echoledger.ai through defipy already trust the math — that's most of the sale, done for free, before the first conversation.

---

## The Flywheel

The two surfaces feed each other.

**Defipy → EchoLedger:**
- Library users discover the practice
- Open methodology is the credential that justifies the price
- 50K+ downloads is the warm distribution surface most consultants never have

**EchoLedger → Defipy:**
- Real engagement work surfaces edge cases, missing functions, unclear documentation
- Improvements get pushed back into the library
- Library gets stronger; the credential gets stronger; the practice gets stronger

This is the asymmetry the seed brief named: most DeFi consultants ship one of the two, never both. The combination is rare and durable.

---

## What This Means in Practice

**For defipy.org:**
- Stays free, stays open, stays the engineering and educational home
- v2 site launches as planned
- A small, non-prominent reference to echoledger.ai for users who want done-for-you analysis ("Need this run on your position? echoledger.ai") — placed where it's findable but not pushy

**For echoledger.ai:**
- Productized services page, fixed prices, fast turnaround
- Defipy is referenced prominently as the methodology backbone — *"powered by defipy, open-source, 50,000+ downloads"*
- GitHub link visible
- Sample report demonstrates the math being applied

**For the operator:**
- One brand and identity for engineering and teaching (defipy)
- One brand and identity for client work (EchoLedger)
- Both contracted through EchoLedger Inc.
- Same person, same math, two surfaces, one arc

---

## What This Is Not

**Not a freemium funnel.** Defipy is not a teaser for EchoLedger. The library is fully featured, will remain fully featured, and stands on its own merit. EchoLedger exists for buyers who want the work done — not for users who hit a paywall.

**Not a "premium tier" of defipy.** There is no EchoLedger-only function, dataset, or capability that defipy users don't have. The math is the same.

**Not a rebrand.** Defipy stays defipy. EchoLedger stays EchoLedger. They're complementary, not consolidated.

**Not a hedge.** This isn't "defipy in case open-source works, EchoLedger in case it doesn't." Both are intentional and permanent. The library is the methodology layer. The practice is the analysis layer. Both will exist five years from now.

---

## The Larger Arc

EchoLedger Services is the cashflow practice. It funds the operator and underwrites continued investment in defipy and in adjacent research (including AnchorRegistry, the separate venture building provenance infrastructure for agentic systems).

Defipy is the trust foundation. It's the public artifact that makes everything else credible — the consulting practice today, and whatever the agentic-DeFi convergence looks like later.

Together they form a coherent operator profile that's hard to assemble from scratch:

- **Open-source tooling with measurable adoption** (defipy, 50K+ downloads)
- **Operator-grade analysis available for hire** (EchoLedger Services)
- **Academic foundation** (PhD Applied Mathematics)
- **Industry credentials** (ex-Chief Data Scientist, Syscoin)
- **Public visibility** (ETH Denver speaker, published book and courses)
- **Forward-looking research** (AnchorRegistry, arXiv:2604.03434)

Defipy alone is a respected library. EchoLedger alone would be one consultant among many. Together — open math underneath, productized analysis on top — they're a category of one.

---

*Document prepared April 28, 2026. Living artifact — update as the surfaces evolve.*
