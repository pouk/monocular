import { throttle } from 'throttle-debounce'

import { Rectangle, Measure } from '@monocular/types'

// specs

const props = {
  image: Image, // eslint-disable-line
  imageSize: Measure,
  focusArea: Rectangle
}

const computed = {
  context () {
    const { canvas } = this.$refs

    if (!canvas) return void 0

    return canvas.getContext('2d')
  }
}

const watch = {
  focusArea (area) {
    this.onRefocus(area)
  }
}

const methods = {
  render () {
    const { context, image } = this

    const draw = () => context.drawImage(image, 0, 0)

    return image.complete
      ? draw()
      : image.addEventListener('load', draw)
  },
  scan (area) {
    const { context } = this

    const { x: sx, y: sy } = area.position
    const { x: sw, y: sh } = area.size
    const imageData = context.getImageData(sx, sy, sw, sh)

    this.$emit('update', {
      area,
      imageData
    })
  }
}

function mounted () {
  this.render()

  this.onRefocus = throttle(400, this.scan)
}

export default {
  name: 'MxMacroLens',
  props,
  computed,
  watch,
  methods,
  mounted
}
