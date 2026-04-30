/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: process.env.USE_ASSET_PREFIX === 'true' ? 'https://illuminaite.github.io' : '',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig