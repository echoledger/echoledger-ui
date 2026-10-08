import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Archive snapshot: emit a fully static site to ./out
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
