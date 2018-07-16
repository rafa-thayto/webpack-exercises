/* eslint-disable */
const webpack = require('webpack')
/* eslint-enable */
const modoDev = process.env.NODE_ENV !== 'production'
const path = require('path')
const MiniCssEstractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: modoDev ? 'development' : 'production',
  entry: './src/principal.js',
  output: {
    filename: 'principal.js',
    path: path.join(__dirname, '/public')
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssEstractPlugin({
      filename: 'style.css'
    })
  ],
  devServer: {
    contentBase: './public',
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssEstractPlugin.loader,
          // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
          'css-loader', // Interpreta @import, url()...
          'sass-loader'
        ]
      }, {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: ['file-loader']
      }
    ]
  }
}
