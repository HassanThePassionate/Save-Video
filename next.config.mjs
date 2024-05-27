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
      {
        protocol: "https",
        hostname: "savemp3.net",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
      },
      {
        protocol: "https",
        hostname: "i3.wp.com",
      },
    ],
  },
};

export default nextConfig;
