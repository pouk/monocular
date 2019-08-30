import { Rectangle, Measure } from '@monocular/types'

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

    const data = context.getImageData(sx, sy, sw, sh)

    this.$emit('update', {
      area,
      data
    })

    this.$emit('update:area', area)
    this.$emit('update:data', data)
  }
}

const watch = {
  focusArea (area) {
    this.scan(area)
  }
}

function mounted () {
  this.render()
}

export default {
  name: 'MxMacroLens',
  props,
  computed,
  watch,
  methods,
  mounted
}
