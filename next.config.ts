import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/test' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/test' : '',
  trailingSlash: true,
  // distDir を明示的に指定
  distDir: process.env.NODE_ENV === 'production' ? 'out' : '.next',
}

export default nextConfig