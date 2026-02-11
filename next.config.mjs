/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  }
}

export default nextConfig
