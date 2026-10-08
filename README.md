# echoledger-ui

Site for [EchoLedger](https://echoledger.ai) — a quantitative DeFi research practice.

Client services (LP audits, treasury reviews, pool health assessments) are **paused** as of 2026-10-08; the previous services site is preserved at tag/branch `archive/services-v1`. The site now presents the open-source [defipy](https://defipy.org) library (55,000+ downloads), the hosted MCP endpoint (`/mcp`) and the StateTwins agent (`/agent`).

## Stack

- Next.js 16 (App Router)
- TypeScript, strict mode
- Tailwind CSS v4
- `next/font` — Geist
- Deployed on Vercel

## Local development

```bash
npm install
npm run dev
```

Visits `http://localhost:3000`.

## Project structure

```
src/
  app/
    layout.tsx          # Root layout, metadata, Schema.org JSON-LD
    page.tsx            # Single-page composition
    globals.css         # Design tokens (Tailwind v4 @theme)
    icon.png            # Favicon (Next.js file convention)
    apple-icon.png      # iOS touch icon
  components/
    Nav.tsx
    Hero.tsx
    Credibility.tsx
    Methodology.tsx
    About.tsx
    WhatsNext.tsx
    Contact.tsx
    Footer.tsx
    SectionPrimitives.tsx   # Eyebrow / Title / Lede
docs/                   # Project briefs, build seed, brand assets
public/                 # Static assets served at root
```

## Design tokens

Defined in `src/app/globals.css` under `@theme`:

| Token | Hex | Use |
|---|---|---|
| `--color-bg-base` | `#0A0E1A` | Page background |
| `--color-bg-elevated` | `#141A2C` | Card and elevated section backgrounds |
| `--color-bg-deep` | `#1F2742` | Deepest surface (contact zone) |
| `--color-text-primary` | `#FFFFFF` | Headlines and key text |
| `--color-text-secondary` | `#B8C2D8` | Body copy |
| `--color-text-muted` | `#6B7590` | Footer, fine print |
| `--color-accent` | `#5DA8A0` | CTAs, links, prices |
| `--color-accent-hover` | `#70C8A8` | Primary CTA hover |
| `--color-accent-deep` | `#3A6A78` | Borders, dividers, secondary buttons |

## Reference docs

The full positioning, offering structure, and build seed live in [`docs/`](./docs):

- `EchoLedger_Services_Seed.md` — operating brief
- `EchoLedger_as_Defipy_Extension.md` — positioning thesis (open math, paid analysis)
- `EchoLedger_Services_Full_Offering_Outline.md` — SKU specs and service architecture
- `EchoLedger_Build_Seed.md` — implementation-layer decisions
