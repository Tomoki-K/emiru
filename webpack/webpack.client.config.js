const baseConfig = require('./webpack.config');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// client config
module.exports = Object.assign(baseConfig, {
  entry: path.resolve(__dirname, '../src/client.tsx'),
  output: {
    path: path.resolve(__dirname, '../public/assets'),
    filename: 'client.js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          mangle: true,
          extractComments: true,
          compress: {drop_console: true}
        },
      })
    ],
  },
});
