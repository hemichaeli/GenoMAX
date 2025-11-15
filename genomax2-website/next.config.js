/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'cdn.sanity.io'],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['genomax2.ai', 'www.genomax2.ai'],
    },
  },
}

module.exports = nextConfig
