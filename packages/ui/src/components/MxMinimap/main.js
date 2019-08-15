import MxInputViewport from './input-viewport.vue'

// helpers

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

const computed = { }

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
