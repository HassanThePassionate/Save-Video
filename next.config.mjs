/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "save-video-two.vercel.app",
      },
      {
        protocol: "https",
        hostname: "m2.getsitecontrol.com",
      },
    ],
  },
};

export default nextConfig;
