import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
   remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: '1b75nbwh-8080.inc1.devtunnels.ms',
      },
    ],
  }
};

export default nextConfig;
