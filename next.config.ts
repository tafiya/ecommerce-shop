import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.dummyjson.com"], // <-- Add this
  }
  /* config options here */
};

export default nextConfig;
