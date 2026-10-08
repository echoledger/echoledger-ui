> **Archived 2026-10-08:** this document describes the services practice, which is now paused. See tag/branch `archive/services-v1`. Kept for reference only.

# EchoLedger.ai — Site Build Seed

*Handoff brief for the build thread. Pairs with the existing project docs (Services Seed, Defipy Extension, Full Offering Outline) — this doc adds the implementation-layer context those don't cover: stack, visual spec, positioning shift, and build scope.*

*Last updated: April 28, 2026*

---

## Purpose of This Doc

The previous thread worked through positioning, offering, brand identity, naming, LinkedIn, outreach, and visual direction. This doc captures the implementation-relevant decisions that came out of that work, so the build thread can move directly into scaffolding without re-litigating settled questions.

The build thread's job is to produce the actual echoledger.ai site — Next.js project, deployed to Vercel, ready to go live.

---

## Positioning Shift to Carry Forward

**The Services Seed and Full Offering Outline both describe a productized consulting practice with agentic advisory as an optional fourth SKU. That framing has shifted.**

The updated framing: **EchoLedger is positioned as agentic DeFi analytics, front-door.** The thesis is that AI agents will increasingly run DeFi analytics, and EchoLedger is the practice operating at that intersection — the operator (Ian Moore) is the trust anchor, defipy is the engine, and the work is agent-augmented analysis with human review and sign-off.

**Why the shift:**

- The brand has always carried this signal — echoledger.ai (.ai TLD, May 2025 brand origin)
- The September 2025 whitepaper was originally an agent product concept
- The thesis has matured: "agents running DeFi analytics" is the imminent reality, not a long-term hypothesis
- AnchorRegistry's research on operator-gated provenance gives the agentic positioning credibility that pure AI-DeFi consultants don't have
- The .ai TLD isn't decoration — the brand expresses an agentic identity

**What this means for the homepage:**

- Hero leads with agentic, not consulting
- SKUs reframe as agent-augmented analytics rather than human-delivered reports
- The trust-anchor argument (operator sign-off, AR-style provenance, defendable methodology) becomes load-bearing copy
- AnchorRegistry's role evolves from footer mention to credibility-binding — *"the operator who publishes the canonical research on agentic trust infrastructure is the operator running this practice"*
- The fourth SKU evolves from "Agentic DeFi Advisory" (services to teams building agents) to something more like "Agent Analytics Infrastructure" (methodology stack for teams who want it inside their own product)

**What stays the same:**

- The four SKU structure (LP audit, treasury review, pool health, the fourth being the build-with-EchoLedger option)
- The introductory pricing strategy
- The methodology-open principle (defipy as public, reports as paid)
- The corporate operating frame (EchoLedger Inc., contracted engagements)
- The credibility row (defipy 50K+ downloads, ETH Denver, book + courses, arXiv, PhD, ex-Syscoin)

**Important caveat for the build thread:**

The previous thread didn't fully redraft the homepage copy under the agentic-first framing. The Full Offering Outline still reflects the older framing. The build thread should treat the offering structure (SKU names, prices, deliverables, turnarounds) as canonical from that doc, but the *narrative wrapping* — hero, about, methodology section — needs fresh copy aligned to the agentic-analytics positioning. That's part of the build work.

---

## The Stack

**Next.js 15 (App Router) + TypeScript + Tailwind + shadcn/ui, deployed on Vercel.**

This was the explicit recommendation and it stands. The reasoning:

- Vercel-native deployment, smoothest dev loop
- Server Components render static-feeling marketing copy with full SEO indexability
- App Router structure scales from "marketing page today" to "buyer dashboard + agent infrastructure later" without rebuilding
- Stripe integration well-documented (deferred for v1, but architecture-ready)
- shadcn/ui gives polished components without bespoke design overhead
- Tailwind v4 is the right styling layer — fast iteration, design-token-friendly
- TypeScript by default — overkill for a marketing page, but free, and useful when async/agent flows enter later

**Tooling commitments for v1:**

- Next.js 15, App Router, TypeScript, strict mode
- Tailwind CSS v4
- shadcn/ui (cherry-pick components — Button, Card — don't bulk-install)
- Resend for transactional email (intake confirmations, contact form replies)
- Vercel for hosting and domain
- MDX optionally for SKU content if it makes editing easier later

**Deliberately NOT building in v1:**

- Auth (no buyer accounts yet — Stripe Checkout, when added, handles guest flow)
- Database (no buyer state to persist)
- Buyer dashboard
- Stripe self-serve checkout (CTAs route to email/Calendly for v1; Stripe added when self-serve actually makes sense)
- Any AI/agent infrastructure on the live site (defipy runs locally for report production; site doesn't call it)
- Any visible defipy integration (the methodology link is sufficient for v1)

**Forward-compatibility decision worth making at scaffold time:**

Even with no database now, structure all data-fetching as server-side (Server Components, Server Actions). Don't sprinkle client-side `fetch()` calls. When a database lands later, the data layer is already in the right place to receive it.

**The Python boundary (relevant in 6–12 months, not now):**

Defipy is Python; the Next.js site is TypeScript. When agentic features eventually land on the live site, defipy lives as a separate service the Next.js app calls — likely FastAPI on Railway/Fly/Render, or a containerized worker triggered via Inngest or similar. Not a build-thread concern, but worth knowing the eventual architecture so today's choices don't foreclose it.

---

## Visual Identity

### Logo

**Keep the existing mark.** The current echoledger.ai logo (network-graph mandala in white-on-black, with the "echoledger.ai" wordmark in lowercase humanist sans) is good. Reads as both network and cognition, asymmetric enough to have character, scales well from favicon to hero, works on light and dark backgrounds.

The build thread should treat the logo as fixed input. SVG version should be used wherever possible for crispness across resolutions.

### Color Spec

The colors from the previous brand exploration (the navy → teal → green-cyan gradient) are the right family. **The gradient itself is dropped** — gradients in this saturation range read consumer-wellness, not quant-practice. Pulled apart into a structured palette with a dark base and restrained accent use, the same colors deliver the right "serious technical practice" signal.

**Backgrounds & surfaces (80% of the visual real estate):**

- `#0A0E1A` — Primary background. Near-black with subtle blue undertone.
- `#141A2C` — Elevated surface. Card backgrounds, sections needing subtle separation.
- `#1F2742` — Deepest accent surface. SKU cards, hero treatments.

**Text:**

- `#FFFFFF` — Primary text on dark backgrounds (headlines, key copy)
- `#B8C2D8` — Secondary text (body copy, captions)
- `#6B7590` — Muted text (footer, fine print, less-emphasized chrome)

**Accents (used sparingly — single accents, not combinations):**

- `#5DA8A0` — Primary accent (teal). CTAs, link hover, status indicators, key emphases.
- `#70C8A8` — Secondary accent (mint-green). Success states, occasional emphasis where primary accent isn't visible enough.
- `#3A6A78` — Subdued accent (deeper teal). Borders, dividers, less-prominent UI chrome.

**Functional / semantic (defined for future use):**

- `#E85A5A` (or desaturated `#C77575`) — Reserved for genuine warnings or risk highlights in sample report typography. Used almost never on the marketing surface itself, but defined for downstream report templates.

### Usage Principles

- **Dark base, sparse accents.** The page is overwhelmingly the `#0A0E1A` background with white type. Color is reserved for moments that genuinely need it — a single CTA, a status dot, a hover state.
- **One accent per zone.** Don't combine teal and mint in the same component. Pick one. The mint is for occasional emphasis where the teal would be too quiet.
- **No gradients.** Single solid colors. The gradient treatment is the consumer-tech tell that's specifically being avoided.
- **Generous whitespace.** Layouts breathe. The visual equivalent of the seed brief's tone direction: *"boring on purpose. Serious buyers read flat credentialed copy and think 'good, finally.'"*
- **Typography does most of the work.** Color is a secondary layer; type weight, scale, and hierarchy carry the page.

### Reference Aesthetic

The visual languages that work for practices in EchoLedger's tier — research-grade, technical, quant-flavored — tend toward:

- Stripe's documentation pages (calm, technical, restrained color)
- Anthropic's marketing surfaces (monochrome with single accent, generous whitespace)
- Linear (flat, dark, considered, single saturated accent)
- Vercel's docs (similar pattern)

Build thread should use this aesthetic family as reference rather than consumer-tech or crypto-native visual idioms.

### Typography

Not formally specified yet, but the existing wordmark is set in what reads as a humanist sans (likely Inter, IBM Plex Sans, or similar). The build thread should pick one humanist sans and use it across the site — body, headings, UI. Recommended candidates:

- **Inter** — workhorse, widely used, looks clean at all sizes, free via next/font
- **IBM Plex Sans** — slightly more characterful, good technical-brand fit
- **Geist** — Vercel's own, integrates seamlessly, very modern feel

Any of the three would work. Pick one and commit; don't combine.

---

## Build Scope for v1

### What v1 includes:

1. **Single-page marketing site** at echoledger.ai
2. **Hero** — agentic-analytics positioning, single CTA
3. **Four SKU cards** — names, scopes, deliverables, turnarounds, prices
4. **Methodology section** — defipy reference, GitHub link, "math is open, reports are paid" framing
5. **Sample report area** — either embedded preview or "Available on request" placeholder, depending on whether sample exists at launch
6. **Credibility row** — defipy 50K+, ETH Denver, book + courses, arXiv, PhD, ex-Syscoin
7. **About section** — short operator paragraph
8. **Contact** — email + Calendly link (no form needed for v1)
9. **Footer** — EchoLedger Inc. line, AnchorRegistry small mention, copyright

### What v1 routes to:

- LP Audit, Pool Health → email (`contact@echoledger.ai`) or Calendly link with subject pre-fill
- Treasury Review, Agent Analytics Infrastructure → Calendly intake call
- General contact → email

### Technical requirements:

- **Performance:** sub-1s load on first visit, all assets optimized
- **SEO basics:** semantic HTML, meta tags, OpenGraph, Twitter card, sitemap.xml, robots.txt
- **Structured data:** Schema.org `Organization` + `Person` markup with `sameAs` links to defipy GitHub, arXiv author page, Medium, X profile, Zenodo. This binds the LinkedIn entity, the domain, and the operator together for entity-resolution systems.
- **Accessibility:** WCAG AA contrast minimums, semantic HTML, keyboard navigation
- **Mobile:** responsive, tested on small screens (most of the buyer audience is desktop, but mobile bounce would still be costly)

### Open decisions for the build thread:

- **Sample report at launch:** does the page show a real sample PDF, or "Available on request" placeholder? Affects launch timing.
- **About paragraph copy:** drafted in outline form across multiple docs, but not finalized prose
- **Hero exact wording:** direction set (agentic-analytics framing), final line not locked
- **Photo of operator:** include or omit on the page
- **Headline typography choice:** Inter vs. IBM Plex Sans vs. Geist
- **Whether MDX is worth the ergonomic overhead for the SKU content** at v1 size

These are real decisions to make in the build thread, not blockers.

---

## Cross-Surface Binding (Important for Entity Resolution)

The previous thread surfaced that EchoLedger has search and AI canonicality on the name (Google AI Mode resolves "EchoLedger" to Ian Moore specifically). This is a meaningful asset and should be reinforced by the build, not eroded.

Concretely, the v1 site should explicitly bind to:

- **GitHub:** github.com/defipydevs (defipy)
- **defipy.org** (the open-source library home)
- **arXiv:** the AnchorRegistry paper (arXiv:2604.03434)
- **Zenodo:** the September 2025 whitepaper (DOI link)
- **Medium:** Ian Moore's author page
- **X:** @ic3moore
- **LinkedIn:** the EchoLedger-AI company page (created with echoledger.ai as website field)

These should appear:
- In `Schema.org` structured data as `sameAs` links on the Organization and Person entities
- In the page's HTML head as `link rel="me"` tags where appropriate
- In a visible footer or credibility section

This is what reinforces the AI canonicality. Skipping it leaves passive entity-resolution work on the table.

---

## Out of Scope for v1 (Explicit Non-Goals)

- Buyer accounts, login, dashboards
- Stripe self-serve checkout
- A blog or `/writing` route (add later as cadence accumulates content)
- A `/case-studies` route (add when first anonymized engagements complete)
- Any AI agent UI on the marketing surface
- Multi-page architecture (single-page is correct for v1)
- A custom logo redesign (existing mark is good)
- Bespoke illustrations or imagery beyond logo + structured layout

These are all valid future additions. Building any of them in v1 is overinvestment for the function the site is currently serving.

---

## Reference Docs in Project Knowledge

The build thread should pull from:

1. **EchoLedger_Services_Seed.md** — the operating brief
2. **EchoLedger_as_Defipy_Extension.md** — the positioning thesis (defipy = open math, EchoLedger = paid analysis)
3. **EchoLedger_Services_Full_Offering_Outline.md** — the SKU specs, page-ready copy starting points, service architecture

This doc — the build seed — is the fourth, focused on the implementation layer.

---

## Suggested Opening Move for the Build Thread

Scaffold the Next.js project with the structure outlined above, the color palette as design tokens in Tailwind config, the typography choice committed, and a placeholder hero that the thread can iterate on. Then layer in the SKU cards, methodology section, credibility row, about, contact, and footer in that order.

Aim for first deployable v1 within a few focused hours of build work. Polish iteratively after deployment, not before.

---

*Document prepared April 28, 2026. Living artifact — update as build decisions resolve.*
