const baseConfig = require('./webpack.config');
const path = require('path');

// client config
module.exports = Object.assign(baseConfig, {
  entry: path.resolve(__dirname, '../src/client.tsx'),
  output: {
    path: path.resolve(__dirname, '../public/assets'),
    // publicPath: `${}`,
    filename: 'client.js'
  },
});
