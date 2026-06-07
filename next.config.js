/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: 'https://thelumens.github.io',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
