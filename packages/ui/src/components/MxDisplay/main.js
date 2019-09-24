import { Measure, Rectangle, Point } from '@monocular/types'

import MxImage from '@/components/MxImage'

// helpers

const cssFor = obj => {
  if (Measure.is(obj)) {
    return {
      width: `${obj.x}px`,
      height: `${obj.y}px`
    }
  }

  if (Point.is(obj)) {
    return {
      top: `${obj.y}px`,
      left: `${obj.x}px`
    }
  }

  return {}
}

// spec

const props = {
  size: Measure,
  imageSize: Measure,
  imageSource: String, // eslint-disable-line
  focusArea: Rectangle,
  effects: Object
}

const computed = {
  scaleFactor () {
    const { size, focusArea } = this

    return size.x / focusArea.size.x
  },
  displayPosition () {
    const { focusArea, scaleFactor } = this

    const movement = Point
      .create(0, 0)
      .distanceFrom(focusArea.position)
      .scale(scaleFactor)

    return Point
      .create(0, 0)
      .translateBy(movement)
  },
  displaySize () {
    const { imageSize, scaleFactor } = this
    return imageSize.scale(scaleFactor)
  },
  containerStyles () {
    return cssFor(this.size)
  },
  canvasStyles () {
    const { displaySize, displayPosition } = this

    return [
      cssFor(displaySize),
      cssFor(displayPosition)
    ]
  },
  context () {
    const { canvas } = this.$refs

    if (!canvas) return void 0

    return canvas.getContext('2d')
  }
}

export default {
  name: 'MxDisplay',
  props,
  computed,
  components: {
    MxImage
  }
}
