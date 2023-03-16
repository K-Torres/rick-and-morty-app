/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_RICK_AND_MORTY_API_URI: process.env.BASE_RICK_AND_MORTY_API_URI,
  },
}

module.exports = nextConfig
