import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/test' : '',
  trailingSlash: true,
  // GitHub Pages用の設定を追加
  assetPrefix: process.env.NODE_ENV === 'production' ? '/test' : '',
}

export default nextConfig