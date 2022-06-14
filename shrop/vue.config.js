module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://backend:3000/',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }