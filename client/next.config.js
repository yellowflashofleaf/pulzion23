/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.imgur.com", "pulzion-website-images.s3.ap-south-1.amazonaws.com", "cdn.svgator.com"],
  },
};

module.exports = nextConfig;
