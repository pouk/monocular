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
  arenaPosition () {
    const { containerSize } = this
    const { width, height } = this.arenaSize

    if (!containerSize) {
      return {
        left: 0,
        top: 0
      }
    }

    const centerX = containerSize.width / 2
    const centerY = containerSize.height / 2

    const left = centerX - (width / 2)
    const top = centerY - (height / 2)

    return {
      left,
      top
    }
  },
  arenaStyle () {
    const { arenaSize } = this

    return {
      width: `${arenaSize.width}px`,
      height: `${arenaSize.height}px`
    }
  },
  wrapperStyle () {
    const { arenaPosition } = this

    return {
      'padding-top': `${arenaPosition.top}px`,
      'padding-left': `${arenaPosition.left}px`
    }
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
  const { container } = this.$refs

  const { clientHeight, clientWidth } = container

  this.containerSize = {
    height: clientHeight,
    width: clientWidth
  }

  const $arena = this.$refs['arena']
  this.draggableOptions.boundingElement = $arena
}

const methods = {
  onPositionChange (e, absolutePosition) {
    const $arena = this.$refs['arena']

    if (!$arena || !absolutePosition) return null

    const boundingRect = $arena.getBoundingClientRect()

    const x = absolutePosition.left - boundingRect.left
    const y = absolutePosition.top - boundingRect.top

    const scaled = scaledToFactor(1 / this.scaleFactor)

    const left = scaled(x)
    const top = scaled(y)

    const position = { left, top }
    const size = this.selectionSize

    this.model = { position, size }
  }
}

const watch = {
  model ({ position, size }) {
    this.$emit('update', { position, size })
    // console.log(JSON.stringify(x, null, 2))
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
