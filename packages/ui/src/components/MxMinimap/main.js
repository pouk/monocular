import { Point, Rectangle, Measure } from '@monocular/types'

import * as H from './helpers'

// specs

const props = {
  originalSize: Measure,
  markerSize: Measure,
  value: Point
}

function data () {
  return {
    displayScale: void 0
  }
}

const computed = {
  // readable alias
  markerPosition () {
    return this.value
  },
  markerShape () {
    const { markerPosition, markerSize } = this

    return Rectangle.create(markerPosition, markerSize)
  },
  getBoundedOriginFrom () {
    const { originalSize, markerShape } = this

    const rangeX = originalSize.x - markerShape.size.x
    const rangeY = originalSize.y - markerShape.size.y

    return point => {
      const x = Math.max(0, Math.min(rangeX, point.x))
      const y = Math.max(0, Math.min(rangeY, point.y))

      return Point.create(x, y)
    }
  },
  displayStyles () {
    const { originalSize, displayScale } = this

    const size = originalSize.scale(displayScale)

    return H.cssFrom(size)
  },
  markerStyles () {
    const { markerShape, displayScale } = this

    const { position, size } = markerShape.scaleFromOrigin(displayScale)

    return [
      H.cssFrom(position),
      H.cssFrom(size)
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
    const { originalSize } = this
    const { displayElement } = this.$refs

    this.displayScale = displayElement.clientWidth / originalSize.x
  },
  onDragStart (e) {
    const { markerElement, displayElement } = this.$refs

    const { x, y } = H.relativePointTo(displayElement, markerElement)

    const dx = x - e.clientX
    const dy = y - e.clientY

    const onMouseMove = e => {
      const point = Point
        .create(e.clientX, e.clientY)
        .translate(dx, dy)

      this.onDrag(point)
    }

    H.onMouseMoveGlobal(onMouseMove)
  },
  onDrag (point) {
    const { displayScale } = this

    const position = point.map(n => n / displayScale)
    const nextValue = this.getBoundedOriginFrom(position)

    this.$emit('input', nextValue)
  }
}

export default {
  name: 'MxMinimap',
  props,
  data,
  computed,
  methods,
  mounted
}
