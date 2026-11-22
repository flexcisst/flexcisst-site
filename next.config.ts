import type { NextConfig } from "next";

// Static export: the site builds to plain HTML in out/ and runs on Vercel,
// Netlify, GitHub Pages or any static host.
const nextConfig: NextConfig = {
  output: "export",
  // Set by the GitHub Pages workflow (e.g. "/flexcisst-site"). Empty on a custom domain.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  images: { unoptimized: true },
  trailingSlash: false,
};
export default nextConfig;
