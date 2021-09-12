const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { merge } = require('webpack-merge')
const main = require('./webpack.config')
const path = require('path');

module.exports = merge(main, {
    mode: 'production',
    plugins:[
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [
          `...`,
          new TerserPlugin(),
          new CssMinimizerPlugin(),
        ],
      },
})