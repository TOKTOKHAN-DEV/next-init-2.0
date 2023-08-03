module.exports = {
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
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '#{PROJECT_NAME}-dev-bucket.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/_media/**',
      },
      {
        protocol: 'https',
        hostname: '#{PROJECT_NAME}-prod-bucket.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/_media/**',
      },
    ],
  },
};
