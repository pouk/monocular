import { Draggable } from 'draggable-vue-directive'

// helpers

const scaledToFactor = scaleFactor => value =>
  value * scaleFactor

const scaledToZoomLevel = level => value => {
  const scaled = scaledToFactor(1 / Math.pow(2, level))
  return scaled(value)
}

//

const props = {
  originalSize: Object,
  zoomLevel: Number
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
  selectionSize () {
    const { originalSize, zoomLevel } = this

    const scaled = scaledToZoomLevel(zoomLevel)

    const width = scaled(originalSize.width)
    const height = scaled(originalSize.height)

    return {
      width,
      height
    }
  },
  highlightSize () {
    const { selectionSize, scaleFactor } = this

    const scaled = scaledToFactor(scaleFactor)

    const width = scaled(selectionSize.width)
    const height = scaled(selectionSize.height)

    return {
      width,
      height
    }
  },
  highlightStyle () {
    const { highlightSize } = this

    return {
      width: `${highlightSize.width}px`,
      height: `${highlightSize.height}px`
    }
  }
}

function mounted () {
  const { $container, $arena } = this.$refs

  const { clientHeight, clientWidth } = $container

  this.containerSize = {
    height: clientHeight,
    width: clientWidth
  }

  this.draggableOptions.boundingElement = $arena
  this.draggableOptions.boundingRectMargin = this.boundingRectMargin
}

const methods = {
  onPositionChange (e, absolutePosition) {
    const { $arena } = this.$refs

    if (!$arena || !absolutePosition) return null

    const { boundingRectMargin, scaleFactor } = this

    const { left: x, top: y } = absolutePosition

    const boundingRect = $arena.getBoundingClientRect()

    const dx = boundingRect.left + boundingRectMargin.left
    const dy = boundingRect.top + boundingRectMargin.top

    const scaled = scaledToFactor(1 / scaleFactor)

    const left = scaled(x - dx)
    const top = scaled(y - dy)

    const position = { left, top }
    const size = this.selectionSize

    this.model = { position, size }
  }
}

const watch = {
  model ({ position, size }) {
    this.$emit('update', { position, size })
  }
}

export default {
  name: 'MxMinimap',
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
