const { Point } = require('@monocular/types')

// specs

const props = {
  relative: {
    type: Boolean,
    default: false
  }
}

const computed = {
  origin () {
    if (!this.relative) {
      return Point.create(0, 0)
    }

    const { x, y } = this.$el.getBoundingClientRect()
    return Point.create(x, y)
  },
  positionOfEvent () {
    const { origin } = this

    const delta = Point
      .create(0, 0)
      .distanceFrom(origin)

    return e => {
      const { clientX: x, clientY: y } = e

      return Point
        .create(x, y)
        .translateBy(delta)
    }
  }
}

const methods = {
  handleDrag (eDown) {
    let eLastDrag = void 0

    const onDrag = eDrag => {
      if (!eLastDrag) this.onDragStart(eDown)

      this.onDrag(eDrag, eLastDrag || eDown, eDown)

      eLastDrag = eDrag
    }

    const onDragEnd = eDragEnd => {
      window.removeEventListener('mousemove', onDrag)
      window.removeEventListener('mouseup', onDragEnd)

      if (!eLastDrag) return void 0

      this.onDragEnd(eDragEnd, eLastDrag, eDown)
    }

    window.addEventListener('mousemove', onDrag)
    window.addEventListener('mouseup', onDragEnd)
  },
  onClick (e) {
    const position = this.positionOfEvent(e)

    this.$emit('click', { position })
  },
  onDblClick (e) {
    const position = this.positionOfEvent(e)

    this.$emit('dblclick', { position })
  },
  onMouseDown (e) {
    const position = this.positionOfEvent(e)

    this.handleDrag(e)

    this.$emit('mousedown', { position })
  },
  onMouseUp (e) {
    const position = this.positionOfEvent(e)

    this.$emit('mouseup', { position })
  },
  onDragStart (e) {
    const position = this.positionOfEvent(e)

    this.$emit('dragstart', { position })
  },
  onDrag (e, ePrev, eFirst) {
    const { positionOfEvent } = this

    const position = positionOfEvent(e)
    const movement = positionOfEvent(ePrev).distanceTo(position)

    this.$emit('drag', { position, movement })
  },
  onDragEnd (e, ePrev, eFirst) {
    const position = this.positionOfEvent(e)

    this.$emit('dragend', { position })
  }
}

export default {
  name: 'MxScreenOverlay',
  props,
  computed,
  methods
}
