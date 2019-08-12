module.exports = {
  presets: [
    '@vue/app'
  ],
  env: {
    test: {
      plugins: [
        [
          'module-resolver',
          {
            root: './',
            alias: {
              '@': './src'
            }
          }
        ]
      ]
    }
  }
}
