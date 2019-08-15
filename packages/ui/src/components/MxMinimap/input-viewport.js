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
  const model = {
    position: null,
    size: null
  }

  const draggableOptions = {
    onPositionChange: this.onPositionChange
  }

  return {
    model,
    containerSize: null,
    draggableOptions
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
  const { $container } = this.$refs

  this.containerSize = sizeOfElement($container)

  this.draggableOptions.boundingElement = $container
  this.draggableOptions.boundingRectMargin = this.boundingRectMargin
}

const methods = {
  onPositionChange (e, absolutePosition) {
    if (!absolutePosition) return null

    const { left: x, top: y } = absolutePosition

    const { boundingRectMargin, scaleFactor } = this

    const { $container } = this.$refs

    const boundingRect = originOfElement($container)

    const dx = boundingRect.x + boundingRectMargin.left
    const dy = boundingRect.y + boundingRectMargin.top

    const scaled = scaledToFactor(1 / scaleFactor)

    const left = scaled(x - dx)
    const top = scaled(y - dy)

    const position = { left, top }
    const size = this.viewportSize

    this.model = { position, size }
  }
}

const watch = {
  model ({ position, size }) {
    this.$emit('update', { position, size })
  }
}

export default {
  name: 'MxInputViewport',
  props,
  data,
  computed,
  watch,
  methods,
  directives: {
    Draggable
  },
  mounted
}
