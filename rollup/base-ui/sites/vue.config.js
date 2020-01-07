const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@lib": path.join(__dirname, '../components/')
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      // .loader('vue-loader')
      // .end()
      // .use('vue-markdown-loader')
      // .loader('vue-markdown-loader/lib/markdown-compiler')
      // .options({
      //   raw: true
      // })
      .loader('markdown-loader')
      .loader('html-loader')
  }
}