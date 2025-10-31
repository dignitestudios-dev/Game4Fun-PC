import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "1b75nbwh-8000.inc1.devtunnels.ms",
      },
      {
        protocol: "https",
        hostname: "1b75nbwh-8000.inc1.devtunnels.ms",
      },
      {
        protocol: "https",
        hostname: "games4fun.s3.us-east-2.amazonaws.com",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
