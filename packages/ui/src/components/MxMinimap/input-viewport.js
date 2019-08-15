import { Draggable } from 'draggable-vue-directive'

// helpers
const scaledToFactor = scaleFactor => value =>
  value * scaleFactor

const scaledToZoomLevel = level => value => {
  const scaled = scaledToFactor(1 / Math.pow(2, level))
  return scaled(value)
}

const sizeOfElement = el => {
  const { clientHeight, clientWidth } = el

  return {
    height: clientHeight,
    width: clientWidth
  }
}

const originOfElement = el => {
  const { x, y } = el.getBoundingClientRect()
  return { x, y }
}

//

const props = {
  originalSize: Object,
  zoomLevel: {
    type: Number,
    default: 0
  }
}

function data () {
  return {
    draggableOptions: null,
    containerSize: null
  }
}

const computed = {
  scaleFactor () {
    const { originalSize, containerSize } = this

    if (!containerSize) {
      return 0
    }

    const xFactor = containerSize.width / originalSize.width
    const yFactor = containerSize.height / originalSize.height

    return Math.min(xFactor, yFactor)
  },
  arenaSize () {
    const { originalSize, scaleFactor } = this

    const width = originalSize.width * scaleFactor
    const height = originalSize.height * scaleFactor

    return {
      width,
      height
    }
  },
  boundingRectMargin () {
    const { containerSize, arenaSize } = this

    const boundsFrom = (dx, dy) => {
      return {
        left: dx,
        top: dy,
        right: dx,
        bottom: dy
      }
    }

    if (!containerSize) {
      return boundsFrom(0, 0)
    }

    const dx = (containerSize.width - arenaSize.width) / 2
    const dy = (containerSize.height - arenaSize.height) / 2

    return boundsFrom(dx, dy)
  },
  initialPosition () {
    const { containerSize, selectionSize } = this

    if (!containerSize) {
      return {
        top: 0,
        left: 0
      }
    }

    const { boundingElement } = this.$refs

    const { x, y } = originOfElement(boundingElement)

    const dx = (containerSize.width - selectionSize.width) / 2
    const dy = (containerSize.height - selectionSize.height) / 2

    return {
      left: x + dx,
      top: y + dy
    }
  },
  viewportSize () {
    const { originalSize, zoomLevel } = this

    const scaled = scaledToZoomLevel(zoomLevel)

    const width = scaled(originalSize.width)
    const height = scaled(originalSize.height)

    return {
      width,
      height
    }
  },
  selectionSize () {
    const { viewportSize, scaleFactor } = this

    const scaled = scaledToFactor(scaleFactor)

    const width = scaled(viewportSize.width)
    const height = scaled(viewportSize.height)

    return {
      width,
      height
    }
  },
  selectionStyle () {
    const { selectionSize } = this

    return {
      width: `${selectionSize.width}px`,
      height: `${selectionSize.height}px`
    }
  }
}

function mounted () {
  const { boundingElement } = this.$refs

  this.containerSize = sizeOfElement(boundingElement)

  this.setupDraggable()
}

const methods = {
  setupDraggable () {
    const { boundingElement } = this.$refs

    const { boundingRectMargin, onPositionChange, initialPosition } = this

    this.draggableOptions = {
      boundingElement,
      boundingRectMargin,
      initialPosition,
      onPositionChange
    }
  },
  onPositionChange (e, absolutePosition) {
    if (!absolutePosition) return null

    const { left: x, top: y } = absolutePosition

    const { boundingRectMargin, scaleFactor } = this

    const { boundingElement } = this.$refs

    const boundingRect = originOfElement(boundingElement)

    const dx = boundingRect.x + boundingRectMargin.left
    const dy = boundingRect.y + boundingRectMargin.top

    const scaled = scaledToFactor(1 / scaleFactor)

    const left = scaled(x - dx)
    const top = scaled(y - dy)

    const position = { left, top }
    const size = this.viewportSize

    this.$emit('update', { position, size })
  }
}

export default {
  name: 'MxInputViewport',
  props,
  data,
  computed,
  methods,
  directives: {
    Draggable
  },
  mounted
}
