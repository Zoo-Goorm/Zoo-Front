import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['i.pinimg.com'], // 임시 외부 이미지를 사용하기 위한 설정입니다. 추후 삭제가 필요합니다.
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

export default nextConfig;
