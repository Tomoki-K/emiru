// webpack base config
module.exports = {
  mode: process.env.NODE_ENV || 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      }
    ],
  },
  resolve: {
    modules: [ 'node_modules' ],
    extensions: [ '.js', '.ts', '.tsx' ]
  }
};
