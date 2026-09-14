import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // SDK ships as UMD/CJS; let Next transpile/interop it.
  transpilePackages: ["@diy-website-builder/sdk"],
};

export default nextConfig;
