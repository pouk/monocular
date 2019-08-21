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
  originalShape: Rectangle,
  selectedShape: Rectangle,
  imageSource: String
}

const computed = {
  displayScaleFactor () {
    const { originalShape, bbox } = this

    if (!bbox) return void 0

    return scaleFactorToFitInto(bbox, originalShape)
  },
  displayShape () {
    const { originalShape, displayScaleFactor } = this

    if (!displayScaleFactor) return void 0

    return originalShape.scale(displayScaleFactor)
  },
  imageShape () {
    const { selectedShape, originalShape, displayScaleFactor } = this

    if (!selectedShape) return void 0

    const zoomFactor = scaleFactorToFitInto(originalShape, selectedShape)
    const scaleFactor = displayScaleFactor * zoomFactor

    const shape = selectedShape.scaleFromBase(scaleFactor)
    const origin = shape.origin.map(l => -l)

    return originalShape
      .translateTo(origin)
      .scale(scaleFactor)
  },
  displayStyle () {
    const { displayShape } = this

    const { width, height } = displayShape

    return {
      width: `${width}px`,
      height: `${height}px`
    }
  },
  imageStyle () {
    const { imageShape } = this

    const { width, height } = imageShape
    const { x, y } = imageShape.origin

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
