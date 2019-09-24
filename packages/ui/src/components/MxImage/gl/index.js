import Regl from 'regl'

import vert from './identity.vert'
import frag from './identity.frag'

function render (canvas, image) {
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

export {
  render
}
