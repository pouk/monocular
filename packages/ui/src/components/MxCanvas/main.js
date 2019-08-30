import { Measure } from '@monocular/types'

const props = {
  size: Measure,
  imageData: Image, // eslint-disable-line
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
    const { imageData } = this

    const { canvas } = this.$refs

    const ctx = canvas.getContext('2d')

    ctx.putImageData(imageData, 0, 0)
  }
}

function mounted () {
  this.render()
}

export default {
  name: 'MxCanvas',
  props,
  computed,
  watch,
  methods,
  mounted
}
