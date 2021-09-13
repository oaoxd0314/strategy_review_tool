const { merge } = require('webpack-merge')
const main = require('./webpack.config')
const path = require('path');

module.exports = merge(main, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      static:path.resolve(__dirname, '../dist'),
      port: 8000,
  },
})