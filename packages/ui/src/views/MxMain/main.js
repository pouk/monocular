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
    focusPosition: void 0,
    focusSize: void 0,
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
  focusArea () {
    const { focusPosition, focusSize } = this

    return Rectangle.create(focusPosition, focusSize)
  }
}

const watch = {
  canvasSize () {
    const { imageSize, canvasSize } = this

    const imageARC = aspectRatioOf(imageSize)
    const displayARC = aspectRatioOf(canvasSize)

    this.zoomFactor = imageARC < displayARC
      ? imageSize.x / canvasSize.x
      : imageSize.y / canvasSize.y
  },
  zoomFactor () {
    const { canvasSize, zoomFactor } = this

    this.focusPosition = Point.create(0, 0)
    this.focusSize = canvasSize.scale(zoomFactor)
  }
}

const methods = {
  onDrag (e) {
    const { focusPosition, zoomFactor } = this

    const movement = e.movement
      .scale(zoomFactor)
      .invert()

    this.focusPosition = focusPosition.translateBy(movement)
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
