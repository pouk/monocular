import MxInputViewport from './input-viewport.vue'

// helpers

const props = {
  originalLayout: Object,
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
  methods,
  components: {
    MxInputViewport
  },
  mounted
}
