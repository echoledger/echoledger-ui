import type { MetadataRoute } from "next";

// Archive snapshot: disallow all crawlers. No sitemap is advertised.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
