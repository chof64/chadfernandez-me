/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      "emojipedia-us.s3.dualstack.us-west-1.amazonaws.com",
    ]
  }
}

module.exports = nextConfig
