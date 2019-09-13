import Regl from 'regl'

import vert from './gl/identity.vert'
import frag from './gl/identity.frag'

function render (image) {
  const { canvas } = this.$refs

  const regl = Regl(canvas)

  const draw = regl({
    frag,
    vert,

    attributes: {
      position: [
        -2, 0,
        0, -2,
        2, 2
      ]
    },

    uniforms: {
      texture: regl.texture(image)
    },

    count: 3
  })

  draw()
}

export default {
  render
}
