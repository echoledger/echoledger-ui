import type { MetadataRoute } from "next";

const BASE_URL = "https://echoledger.ai";

// All pages indexable. No private routes, no admin surface, no staging paths
// to disallow. Sitemap reference points crawlers at the canonical entry.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
