const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'scss')],
  },
}

module.exports = nextConfig