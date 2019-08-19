import { Point, Rectangle } from '@monocular/types'

// helpers

const clamp = (min, max) => n => {
  return Math.min(max, Math.max(min, n))
}

const positionOfElement = el => {
  const { x, y } = el.getBoundingClientRect()
  return Point.create(x, y)
}

const cssPositionOfRect = rect => {
  const { x, y } = rect.origin

  return {
    top: `${y}px`,
    left: `${x}px`
  }
}

const cssSizeOfRect = rect => {
  const { width, height } = rect

  return {
    width: `${width}px`,
    height: `${height}px`
  }
}

// specs

const props = {
  imageSource: String,
  imageShape: Rectangle,
  value: Rectangle
}

function data () {
  const displayScale = void 0

  return {
    displayScale
  }
}

const computed = {
  displayShape () {
    const { imageShape, displayScale } = this

    const { displayElement } = this.$refs
    const origin = positionOfElement(displayElement)

    return imageShape
      .scale(displayScale)
      .translateTo(origin)
  },
  inputArea () {
    const { value, displayScale } = this
    return value.scaleFromBase(displayScale)
  },
  inputAreaStyles () {
    const { inputArea } = this

    return [
      cssPositionOfRect(inputArea),
      cssSizeOfRect(inputArea)
    ]
  }
}

function mounted () {
  const resetLayout = this.resetLayout.bind(this)

  window.addEventListener('resize', resetLayout)
  resetLayout()
}

const methods = {
  resetLayout (e) {
    const { imageShape } = this
    const { displayElement } = this.$refs

    const displayWidth = displayElement.clientWidth
    this.displayScale = displayWidth / imageShape.width
  },
  onDragStart (e) {
    const { inputElement } = this.$refs

    const { clientX: x, clientY: y } = e

    const targetOrigin = positionOfElement(inputElement)

    const { x: dx, y: dy } = targetOrigin.translate(-x, -y)

    const onMouseMove = e => {
      const { clientX, clientY } = e

      const point = Point
        .create(clientX, clientY)
        .translate(dx, dy)

      this.onDrag(point)
    }

    const onMouseUp = e => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  },
  onDrag (e) {
    const { displayShape, displayScale, value, imageShape } = this

    const point = displayShape.origin
      .map(n => -n)
      .translate(e.x, e.y)
      .map(n => n / displayScale)

    const { x: xMin, y: yMin } = imageShape.origin
    const { x: xMax, y: yMax } = imageShape.origin
      .translate(imageShape.width, imageShape.height)
      .translate(-value.width, -value.height)

    const clampedX = clamp(xMin, xMax)
    const clampedY = clamp(yMin, yMax)

    const origin = Point.create(clampedX(point.x), clampedY(point.y))

    this.$emit('input', value.translateTo(origin))
  }
}

export default {
  name: 'MxMinimapBox',
  props,
  data,
  computed,
  methods,
  mounted
}
