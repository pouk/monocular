import { Measure, Rectangle, Point } from '@monocular/types'

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
      top: `${obj.x}px`,
      height: `${obj.y}px`
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
  }
}

const methods = {
  render () {
    const { image } = this

    const { canvas } = this.$refs

    const ctx = canvas.getContext('2d')

    const draw = () => ctx.drawImage(image, 0, 0)

    return image.complete
      ? draw()
      : image.addEventListener('load', draw)
  }
}

function mounted () {
  this.render()
}

export default {
  name: 'MxCanvas',
  props,
  computed,
  methods,
  mounted
}
