/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // リポジトリ名を設定（例：リポジトリ名が"my-next-app"の場合）
  basePath: process.env.NODE_ENV === 'production' ? '/test' : '',
}

module.exports = nextConfig