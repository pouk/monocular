module.exports = {
  chainWebpack: config => {
    // GraphQL Loader
    config.module
      .rule('glsl')
      .test(/\.(frag|vert|glsl)$/)
      .use('glsl-shader-loader')
      .loader('glsl-shader-loader')
      .end()
  }
}
