// const webpack = require("webpack");
// const CompressionWebpackPlugin = require('compression-webpack-plugin');
// const productionGzipExtensions = ['js', 'css'];
// require("babel-polyfill");
module.exports = {
  // publicPath: './',
  // outputDir: 'dist',// 打包后的目录名称
  // assetsDir: 'static',// 静态资源目录名称
  // productionSourceMap:false,  //去掉打包的时候生成的map文件
  // lintOnSave: true,
  // filenameHashing: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  devServer: {
    // hot: true
    port: 8777, // 端口号
    host: 'localhost',
    open: true,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://192.168.1.13:8666', // 代理接口地址
        secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/api': '/api'   //需要rewrite的, 这里理解成以'/api'开头的接口地址，把/api代替target中的地址
        }
      }
    }
    // disableHostCheck: true
  },
  configureWebpack: {
    resolve: {
      symlinks: true
    }
  },
  // css: {
  //   loaderOptions: {
  //     // 给 sass-loader 传递选项
  //     sass: {
  //       // @/ 是 src/ 的别名
  //       // 所以这里假设你有 `src/variables.scss` 这个文件
  //       data: `@import "@/variables.scss";`
  //     }
  //   }
  // },
  // baseUrl: './'
}
