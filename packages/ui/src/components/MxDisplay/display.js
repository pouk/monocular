import { Rectangle } from '@monocular/types'

// helpers

const scaleFactorToFitInto = (box, rect) => {
  const ratioX = box.width / rect.width
  const ratioY = box.height / rect.height

  return Math.min(ratioX, ratioY)
}

// specs

const props = {
  bbox: Rectangle,
  originalLayout: Rectangle,
  selectedLayout: Rectangle,
  imageSource: String
}

const computed = {
  displayScaleFactor () {
    const { originalLayout, bbox } = this

    if (!bbox) return void 0

    return scaleFactorToFitInto(bbox, originalLayout)
  },
  displayLayout () {
    const { originalLayout, displayScaleFactor } = this

    if (!displayScaleFactor) return void 0

    return originalLayout.scale(displayScaleFactor)
  },
  imageLayout () {
    const { selectedLayout, originalLayout, displayScaleFactor } = this

    if (!selectedLayout) return void 0

    const zoomFactor = scaleFactorToFitInto(originalLayout, selectedLayout)
    const scaleFactor = displayScaleFactor * zoomFactor

    const layout = selectedLayout.scaleFromBase(scaleFactor)
    const origin = layout.origin.map(l => -l)

    return originalLayout
      .translateTo(origin)
      .scale(scaleFactor)
  },
  displayStyle () {
    const { displayLayout } = this

    const { width, height } = displayLayout

    return {
      width: `${width}px`,
      height: `${height}px`
    }
  },
  imageStyle () {
    const { imageLayout } = this

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

export default {
  name: 'MxDisplay',
  props,
  computed
}
