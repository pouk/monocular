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

const methods = {}

function mounted () {
  const { src } = this

  const { canvas } = this.$refs

  // init 2d context
  const ctx = canvas.getContext('2d')

  // load image
  const image = new Image() // eslint-disable-line
  const render = () => ctx.drawImage(image, 0, 0)

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
