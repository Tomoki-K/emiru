const baseConfig = require('./webpack.config');
const path = require('path');

// client config
module.exports = Object.assign({}, {
  entry: path.resolve(__dirname, '../src/client.tsx'),
  output: {
    path: path.resolve(__dirname, '../public/assets/'),
    publicPath: `public/assets/`,
    filename: 'client.js'
  },
}, baseConfig);
