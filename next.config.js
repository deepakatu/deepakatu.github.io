const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  output: 'export', // Enable static exports for GitHub Pages
  trailingSlash: true, // Ensure URLs work properly on GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '' : '', // Add your repo name here if not using custom domain
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../'),
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: { 
    unoptimized: true // Required for static export
  },
};

module.exports = nextConfig;
