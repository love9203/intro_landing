import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
    domains: ['images.unsplash.com'],
  },
  // Only use basePath in production
  basePath: process.env.NODE_ENV === 'production' ? '/intro_landing' : '',
  // Add assetPrefix for production
  assetPrefix: process.env.NODE_ENV === 'production' ? '/intro_landing/' : '',
  // Disable ESLint
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
