/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  webpack5 : true,
  webpack: (config) => {
    config.resolve.fallback = { fs : false, net : false, tls : false, cardinal : false };
    return config;
  },
  swcMinify: true,
  sassOptions : {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
