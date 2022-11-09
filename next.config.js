const withImages = require('next-images');

module.exports = withImages({
  reactStrictMode: true,
  //concurrentFeatures: true,
  swcMinify: true,
  images: {
    domains: ['firebasestorage.googleapis.com', 'storage.googleapis.com', 'cloudflare-ipfs.com', 'tixy.mypinata.cloud', 'ipfs.pixura.io', 'tixynft.infura-ipfs.io'],
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  //future: { webpack5: true },
})