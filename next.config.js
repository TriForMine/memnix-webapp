const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withPreact = require('next-plugin-preact')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  experimental: {
    esmExternals: false,
  },
  images: {
    domains: ['github.com'],
  },
  webpack(config) {
    config.plugins.push(
      require('unplugin-icons/webpack')({
        compiler: 'jsx',
        jsx: 'react',
      })
    )

    return config
  },
  i18n: {
    locales: ['en', 'de', 'fr'],
    defaultLocale: 'en',
  },
}

module.exports = withBundleAnalyzer(withPreact(nextConfig))
