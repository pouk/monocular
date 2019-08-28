import { Rectangle, Measure } from '@monocular/types'

import * as H from './helpers'

// specs

const props = {
  originalSize: Measure,
  focusArea: Rectangle
}

function data () {
  return {
    scale: void 0
  }
}

const computed = {
  displayStyles () {
    const { originalSize, scale } = this

    const size = originalSize.scale(scale)

    return H.cssFrom(size)
  },
  markerStyles () {
    const { focusArea, scale } = this

    const { position, size } = focusArea.scaleFromOrigin(scale)

    return [
      H.cssFrom(position),
      H.cssFrom(size)
    ]
  }
}

function mounted () {
  const resetLayout = this.resetLayout.bind(this)

  window.addEventListener('resize', resetLayout)
  resetLayout()
}

const methods = {
  resetLayout (e) {
    const { originalSize } = this
    const container = this.$el

    this.scale = container.clientWidth / originalSize.x
  }
}

export default {
  name: 'MxMinimap',
  props,
  data,
  computed,
  methods,
  mounted
}
