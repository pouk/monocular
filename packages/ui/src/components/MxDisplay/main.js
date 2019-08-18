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
  imageSource: String,
  originalLayout: Rectangle,
  selectedLayout: {
    type: Rectangle,
    default () {
      return this.originalLayout
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
