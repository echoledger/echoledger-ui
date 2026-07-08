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
    default: "EchoLedger — Quantitative DeFi analysis, productized",
    template: "%s — EchoLedger",
  },
  description:
    "PhD-grade liquidity-position analysis powered by defipy. Fixed-price reports, operator sign-off, methodology you can verify. LP audits, DAO treasury reviews, pool health assessments.",
  applicationName: "EchoLedger",
  keywords: [
    "DeFi analysis",
    "liquidity position audit",
    "DAO treasury review",
    "pool health assessment",
    "Uniswap V3 analysis",
    "impermanent loss",
    "defipy",
    "quantitative DeFi",
  ],
  authors: [{ name: "Ian Moore", url: "https://echoledger.ai" }],
  creator: "Ian Moore",
  publisher: "EchoLedger Inc.",
  openGraph: {
    type: "website",
    url: "https://echoledger.ai",
    siteName: "EchoLedger",
    title: "EchoLedger — Quantitative DeFi analysis, productized",
    description:
      "PhD-grade liquidity-position analysis powered by defipy. Fixed-price reports, operator sign-off, methodology you can verify.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ic3moore",
    creator: "@ic3moore",
    title: "EchoLedger — Quantitative DeFi analysis, productized",
    description:
      "PhD-grade liquidity-position analysis powered by defipy. Fixed-price reports, operator sign-off, methodology you can verify.",
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
      legalName: "EchoLedger Inc.",
      url: "https://echoledger.ai",
      email: "imoore@echoledger.ai",
      description:
        "Productized quantitative DeFi analysis practice. LP audits, DAO treasury reviews, pool health assessments. Methodology powered by defipy.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4949 Canoe Pass Way, Suite 1008",
        addressLocality: "Tsawwassen",
        addressRegion: "BC",
        postalCode: "V4M 0B2",
        addressCountry: "CA",
      },
      founder: { "@id": "https://echoledger.ai/#person" },
      sameAs: [
        "https://github.com/defipy-devs",
        "https://defipy.org",
        "https://www.linkedin.com/company/echoledger-ai",
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
