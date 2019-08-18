import { Rectangle } from '@monocular/types'

import MxDisplay from './display.vue'

// helpers

const layoutOfElement = el => {
  if (!el) return el

  const { top, left, bottom, right } = el.getBoundingClientRect()

  const width = right - left
  const height = bottom - top

  return Rectangle.createBase(width, height)
}

// specs

const props = {
  source: String,
  originalSize: Object,
  selectedLayout: {
    type: Rectangle,
    default () {
      return Rectangle.baseFrom(this.originalSize)
    }
  }
}

const data = () => {
  return {
    bbox: null
  }
}

const computed = {
  isReady () {
    return !!this.bbox
  },
  originalLayout () {
    return Rectangle.baseFrom(this.originalSize)
  }
}

function mounted () {
  const updateLayout = this.updateLayout.bind(this)

  window.addEventListener('resize', updateLayout)
  updateLayout()
}

const methods = {
  updateLayout () {
    const { containerElement } = this.$refs
    this.bbox = layoutOfElement(containerElement)
  }
}

export default {
  name: 'MxDisplayBox',
  props,
  data,
  computed,
  methods,
  // hooks
  mounted,
  components: {
    MxDisplay
  }
}
