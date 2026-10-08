import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://echoledger.ai"),
  title: {
    default: "EchoLedger — Quantitative DeFi analysis, open by design",
    template: "%s — EchoLedger",
  },
  description:
    "PhD-grade liquidity-position analysis powered by defipy. Open methodology you can verify, a hosted MCP analytics endpoint, and the StateTwins agent.",
  applicationName: "EchoLedger",
  keywords: [
    "DeFi analysis",
    "Uniswap V3 analysis",
    "impermanent loss",
    "defipy",
    "quantitative DeFi",
  ],
  authors: [{ name: "Ian Moore", url: "https://echoledger.ai" }],
  creator: "Ian Moore",
  publisher: "EchoLedger Ltd.",
  openGraph: {
    type: "website",
    url: "https://echoledger.ai",
    siteName: "EchoLedger",
    title: "EchoLedger — Quantitative DeFi analysis, open by design",
    description:
      "PhD-grade liquidity-position analysis powered by defipy. Open methodology you can verify.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ic3moore",
    creator: "@ic3moore",
    title: "EchoLedger — Quantitative DeFi analysis, open by design",
    description:
      "PhD-grade liquidity-position analysis powered by defipy. Open methodology you can verify.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Schema.org JSON-LD for entity resolution and AI canonicality.
// Binds the domain, the company, and the operator together with sameAs links
// across all of the operator's public surfaces.
//
// The PostalAddress on the Organization is the canonical business address
// signal — search engines and AI systems treat this as the authoritative
// answer to "where is this company located?" The same address is presented
// visibly in the site Footer; the two reinforce each other.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://echoledger.ai/#organization",
      name: "EchoLedger",
      legalName: "EchoLedger Ltd.",
      url: "https://echoledger.ai",
      email: "imoore@echoledger.ai",
      description:
        "Quantitative DeFi research practice. Open-source AMM analytics (defipy), a hosted MCP analytics endpoint, and the StateTwins agent.",
      founder: { "@id": "https://echoledger.ai/#person" },
      sameAs: [
        "https://github.com/defipy-devs",
        "https://defipy.org",
        "https://www.linkedin.com/company/echoledger",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://echoledger.ai/#person",
      name: "Ian Moore",
      jobTitle: "Founder, EchoLedger",
      affiliation: { "@id": "https://echoledger.ai/#organization" },
      sameAs: [
        "https://github.com/defipy-devs",
        "https://defipy.org",
        "https://arxiv.org/a/moore_i_1",
        "https://medium.com/@ic3moore",
        "https://x.com/ic3moore",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
