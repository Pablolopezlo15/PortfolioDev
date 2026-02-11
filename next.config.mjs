/** @type {import('next').NextConfig} */
const isGithubPagesBuild = process.env.GITHUB_PAGES === 'true' || process.env.GITHUB_ACTIONS === 'true'
const repository = process.env.GITHUB_REPOSITORY || ''
const repoName = repository.split('/')[1] || 'PortfolioDev'
const basePath = isGithubPagesBuild ? `/${repoName}` : ''

const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
