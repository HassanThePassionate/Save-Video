/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "save-video-two.vercel.app",
      },
    ],
  },
};

export default nextConfig;
