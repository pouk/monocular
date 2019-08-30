const methods = {
  onReset () {
    this.$emit('reset')
  },
  onZoomIn () {
    this.$emit('zoomin')
  },
  onZoomOut () {
    this.$emit('zoomout')
  }
}

export default {
  name: 'MxToolset',
  methods
}
