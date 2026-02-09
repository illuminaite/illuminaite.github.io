/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: 'https://illuminaite.github.io',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig