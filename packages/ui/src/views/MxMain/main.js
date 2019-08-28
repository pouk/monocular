import { Measure, Point, Rectangle } from '@monocular/types'

import MxMinimap from '@/components/MxMinimap'
import MxScreenOverlay from '@/components/MxScreenOverlay'
import MxCanvas from '@/components/MxCanvas'

//

const { Distance2 } = Measure

// helpers

const aspectRatioOf = ({ x, y }) => x / y

const sizeOfElement = el => {
  const { clientWidth: x, clientHeight: y } = el
  return Distance2.create(x, y)
}

// specs

const data = () => {
  const imageSource = '/images/the-fight.jpg'
  const imageSize = Distance2(4800, 3466)

  // eslint-disable-next-line
  const image = new Image()
  image.src = imageSource

  return {
    canvasSize: void 0,
    deltaPan: Distance2.empty(),
    zoomFactor: void 0,
    //
    image,
    imageSource,
    imageSize
  }
}

const computed = {
  imageAspectRatio () {
    const { imageSize } = this

    return aspectRatioOf(imageSize)
  },
  displayAspectRatio () {
    const { canvasSize } = this

    if (!canvasSize) return void 0

    return aspectRatioOf(canvasSize)
  },
  focusPosition () {
    const { deltaPan } = this

    return Point
      .create(0, 0)
      .translateBy(deltaPan)
  },
  focusArea () {
    const { deltaPan, zoomFactor, canvasSize } = this

    const size = canvasSize.scale(zoomFactor)

    const bias = size
      .scale(1 / 2)
      .invert()

    const delta = deltaPan.concat(bias)

    const position = Point
      .create(0, 0)
      .translateBy(delta)

    return Rectangle.create(position, size)
  }
}

const watch = {
  canvasSize () {
    const { imageSize, canvasSize } = this

    const imageARC = aspectRatioOf(imageSize)
    const displayARC = aspectRatioOf(canvasSize)

    const zoomFactor = imageARC < displayARC
      ? imageSize.x / canvasSize.x
      : imageSize.y / canvasSize.y

    const deltaPan = imageSize.scale(1 / 2)

    this.zoomFactor = zoomFactor
    this.deltaPan = deltaPan
  }
}

const methods = {
  onDrag (e) {
    const { deltaPan, zoomFactor } = this

    const movement = e.movement
      .scale(zoomFactor)
      .invert()

    this.deltaPan = deltaPan.concat(movement)
  },
  resetLayout () {
    const { canvasContainer } = this.$refs

    this.canvasSize = sizeOfElement(canvasContainer)
  }
}

function mounted () {
  this.resetLayout()
}

export default {
  name: 'MxMainView',
  data,
  computed,
  watch,
  methods,
  components: {
    MxMinimap,
    MxScreenOverlay,
    MxCanvas
  },
  mounted
}
