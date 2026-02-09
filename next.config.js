/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/illuminaite.github.io',
  assetPrefix: '/illuminaite.github.io/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig