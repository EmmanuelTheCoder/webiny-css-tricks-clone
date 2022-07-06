/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['d4v2b6pamgmyx.cloudfront.net', 'dev-to-uploads.s3.amazonaws.com']
  }
}


module.exports = nextConfig
