import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Routes from the pre-rebrand structure (Vector House era) map onto
    // the consolidated Fourth Axis architecture.
    return [
      { source: "/insights", destination: "/ideas", permanent: true },
      { source: "/insights/:slug", destination: "/ideas/:slug", permanent: true },
      { source: "/strategic-intelligence", destination: "/services", permanent: true },
      { source: "/founder-advisory", destination: "/services", permanent: true },
      { source: "/ecosystem-market-entry", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
