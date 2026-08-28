import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Cloudflare Pages 無料枠向け：静的書き出し + Pages Functions で /api/contact のみ動かす
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
};

export default nextConfig;
