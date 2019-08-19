import { Point, Rectangle } from '@monocular/types'

import * as H from './helpers'

// specs

const props = {
  originalShape: Rectangle,
  value: Rectangle
}

function data () {
  return {
    displayScale: void 0
  }
}

const computed = {
  // readable alias
  markerShape () {
    return this.value
  },
  getBoundedOriginFrom () {
    const { originalShape, markerShape } = this

    const rangeX = originalShape.width - markerShape.width
    const rangeY = originalShape.height - markerShape.height

    return point => {
      const x = Math.max(0, Math.min(rangeX, point.x))
      const y = Math.max(0, Math.min(rangeY, point.y))

      return Point.create(x, y)
    }
  },
  displayStyles () {
    const { originalShape, displayScale } = this

    const displayShape = originalShape.scale(displayScale)

    return H.cssSizeOfRect(displayShape)
  },
  markerStyles () {
    const { markerShape, displayScale } = this

    const markerRegion = markerShape.scaleFromBase(displayScale)

    return [
      H.cssPositionOfRect(markerRegion),
      H.cssSizeOfRect(markerRegion)
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
    const { originalShape } = this
    const { displayElement } = this.$refs

    this.displayScale = displayElement.clientWidth / originalShape.width
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
    const { displayScale, markerShape } = this

    const position = point.map(n => n / displayScale)
    const origin = this.getBoundedOriginFrom(position)

    const nextValue = markerShape.translateTo(origin)
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
