import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack(config, context) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    config.resolve.alias['@styles'] = path.resolve(__dirname, 'styles');

    return config;
  },
};

export default nextConfig;
