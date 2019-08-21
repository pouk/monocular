const { Rectangle } = require('@monocular/types')

// helpers

const shapeOfElement = el => {
  const { x, y } = el.getBoundingClientRect()

  return Rectangle
    .createBase(el.clientWidth, el.clientHeight)
    .translate(x, y)
}

// specs

const props = {
  value: {
    type: Rectangle
  }
}

function mounted () {
  const { containerElement } = this.$refs

  this.$emit('input', shapeOfElement(containerElement))
}

export default {
  name: 'MxDisplay',
  props,
  mounted
}
