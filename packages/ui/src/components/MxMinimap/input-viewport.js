import { Point, Rectangle } from '@monocular/types'

import { Draggable } from 'draggable-vue-directive'

// helpers

const originOfElement = el => {
  const { x, y } = el.getBoundingClientRect()
  return Point.create(x, y)
}

const rectFromElement = el => {
  const origin = originOfElement(el)
  const { clientHeight, clientWidth } = el

  return Rectangle.create(origin, clientWidth, clientHeight)
}

const props = {
  model: Rectangle,
  zoomFactor: {
    type: Number,
    default: 1
  }
}

function data () {
  return {
    draggableOptions: null,
    container: null
  }
}

const computed = {
  scaleFactor () {
    const { model, container } = this

    const xFactor = container.width / model.width
    const yFactor = container.height / model.height

    return Math.min(xFactor, yFactor)
  },
  arena () {
    const { model, container, scaleFactor } = this

    return Rectangle
      .scale(scaleFactor, model)
      .alignCenterWith(container)
  },
  selection () {
    const { model, zoomFactor, scaleFactor } = this

    return model
      .scale(1 / zoomFactor) // real viewport
      .scale(scaleFactor) // minimap scale
  },
  selectionStyle () {
    const { selection } = this

    return {
      width: `${selection.width}px`,
      height: `${selection.height}px`
    }
  }
}

function mounted () {
  const { boundingElement } = this.$refs

  this.container = rectFromElement(boundingElement)

  this.setupDraggable()
}

const methods = {
  setupDraggable () {
    const { container, arena, selection } = this
    const { boundingElement } = this.$refs

    const { x, y } = selection
      .alignCenterWith(container)
      .getOrigin()
    const initialPosition = {
      left: x,
      top: y
    }

    const dx = (container.width - arena.width) / 2
    const dy = (container.height - arena.height) / 2
    const boundingRectMargin = {
      left: dx,
      top: dy,
      right: dx,
      bottom: dy
    }

    this.draggableOptions = {
      boundingElement,
      boundingRectMargin,
      initialPosition,
      onPositionChange: this.onDrag
    }
  },
  onDrag (e, absolutePosition) {
    if (!absolutePosition) return null

    const { arena, selection, scaleFactor } = this

    const { left, top } = absolutePosition
    const { x, y } = arena.getOrigin()

    const target = selection
      .translate(left - x, top - y)
      .scaleFromBase(1 / scaleFactor)

    this.$emit('update', target)
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
