import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.resolve(__dirname),
  turbopack: {
    root: path.resolve(__dirname),
  },
  env: {
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
  },
};

export default nextConfig;
