/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ocufbllgoonzjowlkkhp.supabase.co',
      },
    ],
  },
};

module.exports = nextConfig;
