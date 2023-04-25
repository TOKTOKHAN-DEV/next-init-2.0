/** @type {import('next').NextConfig} */
module.exports = {
  // images: {
  //   domains: ['example.com'], // remote 이미지를 next image 로 랜더링하고싶다면 도메인을 설정해주세요
  // },
  swcMinify: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./src/scripts/generate-sitemap-json');
    }
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
};
