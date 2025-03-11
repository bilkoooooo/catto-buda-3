import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        localPatterns: [
            {
                pathname: '/gallery/**',
                search: '',
            },
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'kisbrigi.com',
                port: '',
                pathname: '/**',
                search: '',
            },
        ],
    },
};

export default nextConfig;
