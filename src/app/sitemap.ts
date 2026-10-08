import type { MetadataRoute } from "next";

const BASE_URL = "https://echoledger.ai";

// Home page plus the /mcp and /agent surfaces are canonically indexable.
// As content surfaces are added (/case-studies, /writing, etc.), append
// entries here. Keep changeFrequency conservative so search
// engines don't waste crawl budget revisiting an unchanged surface.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
            url: `${BASE_URL}/mcp`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/agent`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
