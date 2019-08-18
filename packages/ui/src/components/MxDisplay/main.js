const { Rectangle } = require('@monocular/types')

// helpers

const layoutOfElement = el => {
  if (!el) return el

  const bbox = el.getBoundingClientRect()

  const { top, left, bottom, right } = bbox

  const width = right - left
  const height = bottom - top

  return Rectangle.createBase(width, height)
}

const scaleFactorToFitInto = (box, rect) => {
  if (!box || !rect) return null

  const ratioX = box.width / rect.width
  const ratioY = box.height / rect.height

  return Math.min(ratioX, ratioY)
}

// specs

const props = {
  source: String,
  originalSize: Object,
  selectedLayout: Rectangle
}

const data = () => {
  return {
    containerLayout: null
  }
}

const computed = {
  originalLayout () {
    const { originalSize } = this

    return Rectangle.baseFrom(originalSize)
  },
  displayScaleFactor () {
    const { originalLayout, containerLayout } = this

    return scaleFactorToFitInto(containerLayout, originalLayout)
  },
  displayLayout () {
    const { originalLayout, containerLayout, displayScaleFactor } = this

    if (!displayScaleFactor) return void 0

    return originalLayout
      .scale(displayScaleFactor)
      .alignCenterWith(containerLayout)
  },
  imageLayout () {
    const { selectedLayout, originalLayout, displayScaleFactor } = this

    if (!selectedLayout) return void 0

    const zoomFactor = scaleFactorToFitInto(originalLayout, selectedLayout)
    const scaleFactor = displayScaleFactor * zoomFactor

    const layout = selectedLayout
      .scaleFromBase(scaleFactor)

    const origin = layout.origin
      .map(l => -l)

    return originalLayout
      .translateTo(origin)
      .scale(scaleFactor)
  },
  clampStyle () {
    const { displayLayout } = this

    if (!displayLayout) return void 0

    const { x, y } = displayLayout.origin

    return {
      'padding-left': `${x}px`,
      'padding-right': `${x}px`,
      'padding-top': `${y}px`,
      'padding-bottom': `${y}px`
    }
  },
  displayStyle () {
    const { displayLayout } = this

    if (!displayLayout) return void 0

    const { width, height } = displayLayout

    return {
      width: `${width}px`,
      height: `${height}px`
    }
  },
  imageStyle () {
    const { imageLayout } = this

    if (!imageLayout) return void 0

    const { width, height } = imageLayout
    const { x, y } = imageLayout.origin

    return {
      left: `${x}px`,
      top: `${y}px`,
      width: `${width}px`,
      height: `${height}px`
    }
  }
}

function mounted () {
  window.addEventListener('resize', e => this.onResize(e))

  this.calcLayout()
}

const methods = {
  onResize (e) {
    this.calcLayout()
  },
  calcLayout () {
    const { containerElement } = this.$refs

    this.containerLayout = layoutOfElement(containerElement)
  }
}

export default {
  name: 'MxDisplay',
  props,
  data,
  computed,
  methods,
  // hooks
  mounted
}
