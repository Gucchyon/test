/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // あなたの実際のリポジトリ名を設定してください
  basePath: process.env.NODE_ENV === 'production' ? '/test' : '',
  // GitHub Pages用の設定を追加
  assetPrefix: process.env.NODE_ENV === 'production' ? '/test' : '',
  trailingSlash: true,
}

module.exports = nextConfig