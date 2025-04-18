import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['yourcdn.com', 'res.cloudinary.com', 'imgur.com', 'picsum.photos'], // Add domains you're using
  }, theme: {
    extend: {
      animation: {
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },

};

export default nextConfig;
