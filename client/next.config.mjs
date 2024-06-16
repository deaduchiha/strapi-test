/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", port: "", hostname: "images.unsplash.com" },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
