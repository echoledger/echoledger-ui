# Archive: EchoLedger / DeFiMind services site (v1)

## What this is

A frozen snapshot of the EchoLedger (formerly DeFiMind) productized-services marketing site,
taken **2026-10-08**, before services were paused. It is kept for the record only.
It is not the live site and is not meant to be deployed or indexed.

- Tag: `archive/services-v1` (annotated)
- Branch: `archive/services-v1`
- Source commit: `b5a55c80ebc438ca698a5d0736eb7f902b2f266b`
  ("fix: correct GitHub org + LinkedIn references"), the head of `main` at the time.
- The pristine source is exactly what the tag points to. The branch adds the commits below.

## What differs from production (archive branch only)

- `next.config.ts`: `output: "export"`, `trailingSlash: true`.
- Noindex: `robots: { index: false, follow: false }` in `src/app/layout.tsx`, and `robots.ts`
  disallows everything.
- `sitemap.ts` removed. Vercel Analytics removed so the snapshot sends no traffic.
- `vercel.json`: Git deployments disabled for this branch, plus an `X-Robots-Tag: noindex` header.
- `archive/services-v1-static/`: the committed static build (`next build` output, 3 pages: `/`, `/agent/`, `/mcp/`).
- This file.

## View it locally

Serve the committed static build (no Node needed):

```bash
cd archive/services-v1-static
python3 -m http.server 8000   # then open http://localhost:8000
```

Or rebuild from source (Next.js 16.2.4, Node 20+):

```bash
npm ci
npm run build    # writes ./out (git-ignored)
npx serve out    # or any static file server
```

## Caveats

- **Prices are stale.** The three service prices on the home page ($2,500, from $10,000,
  from $1,500) are as of 2026-10-08 and are no longer offers.
- **There are no payment links.** The site never had a checkout or Stripe integration.
  Engagements were arranged by email and call.
- **Booking links are intentionally dead.** The "Book a call" button points at
  `https://calendly.com/imoore-echoledger` and `mailto:imoore@echoledger.ai`. They are left
  untouched in this snapshot for fidelity. Treat them as retired and do not rely on them.
  Retiring the Calendly page itself is done in Calendly, not in this repo.
- Outbound links (defipy.org, arXiv, GitHub, MCP registry, `mcp.echoledger.ai`) are third-party
  and may change or disappear.
- Do not deploy or index this snapshot. Do not merge this branch into `main`.
