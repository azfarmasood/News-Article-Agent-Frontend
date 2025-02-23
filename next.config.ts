import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',  // Allow all hostnames temporarily for testing
        pathname: '/**',
      }
    ],
    unoptimized: true,  // Disable image optimization to avoid some loading issues
  },
};

export default nextConfig;
