import { Measure, Rectangle } from '@monocular/types'

import MxMacroLens from '@/components/MxMacroLens'

// spec

const props = {
  size: Measure,
  imageSize: Measure,
  image: Image, // eslint-disable-line
  focusArea: Rectangle
}

const computed = {}

const methods = {
  update (e) {
    const { area, imageData } = e

    const { data } = imageData
    for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3
      data[i] = avg // red
      data[i + 1] = avg // green
      data[i + 2] = avg // blue
    }

    this.$emit('update', { area, imageData })
  }
}

export default {
  name: 'MxScaner',
  props,
  computed,
  methods,
  components: {
    MxMacroLens
  }
}
