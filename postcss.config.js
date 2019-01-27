module.exports = {
  plugins: {
    'postcss-import': {
      addModulesDirectories: [
        './src/components',
        './src/styles'
      ]
    },
    'postcss-preset-env': {},
    'cssnano': {},
    'autoprefixer': {}
  }
}
