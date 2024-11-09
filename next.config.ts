/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // この行が重要です
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/test' : '',
}

module.exports = nextConfig