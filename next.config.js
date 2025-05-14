/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/intro_landing' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/intro_landing/' : '',
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;
