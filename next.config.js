/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.techinasia.com',
        port: '',
        pathname: '/data/images/**',
      },
    ],
  },
}

module.exports = nextConfig
