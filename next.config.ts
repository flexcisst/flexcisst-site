import type { NextConfig } from "next";

// Static export: the site builds to plain HTML in out/ and runs on Vercel,
// Netlify, GitHub Pages or any static host.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: false,
};
export default nextConfig;
