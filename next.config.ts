import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'test-image.bioli.ink',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
