const { Point } = require('@monocular/types')

// helpers

const positionOfEvent = e => {
  const { clientX: x, clientY: y } = e
  return Point.create(x, y)
}

// specs

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
    const position = positionOfEvent(e)

    this.$emit('click', { position })
  },
  onDblClick (e) {
    const position = positionOfEvent(e)

    this.$emit('dblclick', { position })
  },
  onMouseDown (e) {
    const position = positionOfEvent(e)

    this.handleDrag(e)

    this.$emit('mousedown', { position })
  },
  onMouseUp (e) {
    const position = positionOfEvent(e)

    this.$emit('mouseup', { position })
  },
  onDragStart (e) {
    const position = positionOfEvent(e)

    this.$emit('dragstart', { position })
  },
  onDrag (e, ePrev, eFirst) {
    const position = positionOfEvent(e)
    const movement = positionOfEvent(ePrev).distanceTo(position)

    this.$emit('drag', { position, movement })
  },
  onDragEnd (e, ePrev, eFirst) {
    const position = positionOfEvent(e)

    this.$emit('dragend', { position })
  }
}

export default {
  name: 'MxScreenOverlay',
  methods
}
