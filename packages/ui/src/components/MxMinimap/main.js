import { Rectangle } from '@monocular/types'

import MxInputViewport from './input-viewport.vue'

// helpers

//

const props = {
  originalSize: Object,
  zoomLevel: Number
}

function data () {
  const draggableOptions = {
    onPositionChange: this.onPositionChange
  }

  return {
    containerSize: null,
    draggableOptions
  }
}

const computed = {
  model () {
    return Rectangle.baseFrom(this.originalSize)
  }
}

function mounted () { }

const methods = {
  onViewportUpdate (e) {
    this.$emit('update', e)
  }
}

export default {
  name: 'MxMinimap',
  props,
  data,
  computed,
  methods,
  components: {
    MxInputViewport
  },
  mounted
}
