import { render } from './gl'

const props = {
  src: {
    type: String,
    required: true
  },
  width: {
    type: Number
  },
  height: {
    type: Number
  }
}

const methods = {
  render (image) {
    const { canvas } = this.$refs

    render(canvas, image)
  }
}

function mounted () {
  const { src } = this

  // load image
  const image = new Image() // eslint-disable-line
  const render = () => this.render(image)

  image.src = src
  image.complete
    ? render()
    : image.addEventListener('load', render)
}

export default {
  name: 'MxImage',
  props,
  methods,
  mounted
}
