/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  // Only use basePath in production, and make it configurable
  basePath: process.env.NODE_ENV === 'production' ? '/intro_landing' : '',
  // Add assetPrefix for production
  assetPrefix: process.env.NODE_ENV === 'production' ? '/intro_landing/' : '',
}

module.exports = nextConfig
