/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.GITHUB_PAGES === 'true' ? '/portfolio' : '',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  }
}

export default nextConfig
