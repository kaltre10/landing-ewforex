/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
  reactStrictMode: true,
  images: {
    remotePatterns: []
  },
  output: 'export'
}

module.exports = nextConfig
