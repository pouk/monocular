import { Measure, Rectangle, Point } from '@monocular/types'

import MxScaner from '@/components/MxScaner'

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
  image: Image, // eslint-disable-line
  focusArea: Rectangle
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

const methods = {
  render (image) {
    const { context } = this

    context.drawImage(image, 0, 0)
  },
  renderPartial (e) {
    const { context } = this
    const { area, imageData } = e

    const { x: dx, y: dy } = area.position
    context.putImageData(imageData, dx, dy)
  }
}

function mounted () {
  const { image } = this

  const render = () => this.render(image)
  image.complete
    ? render()
    : image.addEventListener('load', render)
}

export default {
  name: 'MxDisplay',
  props,
  computed,
  methods,
  mounted,
  components: {
    MxScaner
  }
}
