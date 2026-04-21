import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/products/**",
      },
    ],
    dangerouslyAllowSVG: true,
    unoptimized: true, // ← easiest fix for local dev
  },
};

export default nextConfig;
