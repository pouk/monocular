import { Measure, Rectangle } from '@monocular/types'

import MxMacroLens from '@/components/MxMacroLens'

// spec

const props = {
  size: Measure,
  imageSize: Measure,
  image: Image, // eslint-disable-line
  focusArea: Rectangle,
  effects: {
    type: Object,
    default: () => ({})
  }
}

const computed = {}

function data () {
  return {
    area: void 0,
    imageData: void 0
  }
}

const watch = {
  effects () {
    const { area, imageData } = this

    if (!imageData) return void 0

    this.update({ area, imageData })
  }
}

const methods = {
  cache (e) {
    const { data, width, height } = e.imageData

    const dataCopy = new Uint8ClampedArray(data)

    this.imageData = new ImageData(dataCopy, width, height) // eslint-disable-line
    this.area = e.area
  },
  update (e) {
    const { effects } = this

    this.cache(e)

    // process

    const { data } = e.imageData

    if (effects.invert) {
      for (let i = 0; i < data.length; i += 4) {
        data[i] = 255 - data[i] // red
        data[i + 1] = 255 - data[i + 1] // green
        data[i + 2] = 255 - data[i + 2] // blue
      }
    }

    this.$emit('update', e)
  }
}

export default {
  name: 'MxScaner',
  props,
  computed,
  data,
  watch,
  methods,
  components: {
    MxMacroLens
  }
}
