import { Measure } from '@monocular/types'

const props = {
  size: Measure,
  image: Image, // eslint-disable-line
  target: Object
}

const computed = {

}

const watch = {
  target () {
    this.render()
  }
}

const methods = {
  render () {
    const { image, size, target } = this

    const { canvas } = this.$refs

    const ctx = canvas.getContext('2d')

    const { x: sx, y: sy } = target.position
    const { x: sw, y: sh } = target.size
    const { x: dw, y: dh } = size

    ctx.drawImage(image, sx, sy, sw, sh, 0, 0, dw, dh)
  }
}

export default {
  name: 'MxCanvas',
  props,
  computed,
  watch,
  methods
}
