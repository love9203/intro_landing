/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/intro_landing' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/intro_landing/' : '',
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
