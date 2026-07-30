import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Routes from earlier site structures map onto the current
    // architecture. While the Ideas section is unpublished
    // (featureFlags.showIdeas = false), old editorial URLs go home;
    // point them back to /ideas when the section relaunches.
    return [
      { source: "/insights", destination: "/", permanent: false },
      { source: "/insights/:slug", destination: "/", permanent: false },
      { source: "/work", destination: "/about/portfolio", permanent: true },
      { source: "/strategic-intelligence", destination: "/services", permanent: true },
      { source: "/founder-advisory", destination: "/services", permanent: true },
      { source: "/ecosystem-market-entry", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
