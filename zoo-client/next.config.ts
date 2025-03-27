import type { NextConfig } from 'next';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withVideos = require('next-videos');

const nextConfig: NextConfig = {
  images: {
    domains: ['i.pinimg.com', `${process.env.NEXT_PUBLIC_S3_HOSTNAME}`],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_S3_HOSTNAME || 'default-hostname',
        pathname: process.env.NEXT_PUBLIC_S3_PATHNAME,
        port: '',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withVideos(nextConfig);
