module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
}

const withSass = require('@zeit/next-sass')
module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
})

// const prod = process.env.NODE_ENV === 'production'
// module.exports = {
//   // some configuration
//   assetPrefix: process.env.NODE_ENV === 'production' ? '/NextJS_Landing' : '',
//   // another configuration
//}

// const withSass = require('@zeit/next-sass')
// module.exports = withSass({
//   cssModules: true
// })