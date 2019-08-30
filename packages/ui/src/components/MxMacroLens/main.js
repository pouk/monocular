import { throttle } from 'throttle-debounce'

import { Rectangle, Measure } from '@monocular/types'

// helpers

// function greyscale (bitmap) {
//   const { area, data } = bitmap
//
//   const { x, y } = area.size
//
//   const avgFor = i => (data[i] + data[i + 1] + data[i + 2]) / 3
//
//   for (let dy = 0; dy < y; dy++) {
//     for (let dx = 0; dx < x; dx++) {
//       const i = (dy * x + dx) * 4
//       const avg = avgFor(i)
//
//       data[i] = avg
//       data[i + 1] = avg
//       data[i + 2] = avg
//     }
//   }
//
//   return {
//     area,
//     data
//   }
// }

// specs

const props = {
  image: Image, // eslint-disable-line
  imageSize: Measure,
  focusArea: Rectangle
}

function data () {
  return { }
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

    const bitmap = {
      area,
      imageData
    }

    this.$emit('update', bitmap)
  }
}

function mounted () {
  this.render()

  this.onRefocus = throttle(1000, this.scan)
}

export default {
  name: 'MxMacroLens',
  props,
  computed,
  data,
  watch,
  methods,
  mounted
}
