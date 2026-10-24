import type { MetadataRoute } from "next";

const BASE_URL = "https://echoledger.ai";

// Home page is the canonical indexable surface. As content surfaces are
// added (/case-studies, /writing, etc.), append entries here. Keep
// changeFrequency conservative so search engines don't waste crawl budget
// revisiting an unchanged surface.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
