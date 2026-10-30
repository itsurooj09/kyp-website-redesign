/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kyp.io',
      },
      {
        protocol: 'https',
        hostname: 'kypio.b-cdn.net',
      },
    ],
  },
};

export default nextConfig;
