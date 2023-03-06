import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// isProduction
const isProduction = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: isProduction
      ? {
          exclude: ['error']
        }
      : false
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false
          }
        }
      ]
    })
    return config
  },
  images: {
    disableStaticImages: true // importした画像の型定義設定を無効にする
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    additionalData: `
      @use "sass:map";
      @use "sass:math";
      @use "${__dirname}/src/styles/_variables.scss" as *;
      @use "${__dirname}/src/styles/_mixin.scss" as *;
    `
  }
}

export default nextConfig
