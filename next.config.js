/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      "emojipedia-us.s3.dualstack.us-west-1.amazonaws.com",
      "www.notion.so",
      "s3.us-west-2.amazonaws.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
