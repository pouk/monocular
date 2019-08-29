import { Measure, Point, Rectangle } from '@monocular/types'

import MxMinimap from '@/components/MxMinimap'
import MxScreenOverlay from '@/components/MxScreenOverlay'
import MxCanvas from '@/components/MxCanvas'
import MxToolset from '@/components/MxToolset'

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
    zoomFactor: 1,
    initialZoom: 1,
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
  focusPosition: {
    get () {
      const { deltaPan } = this

      return Point
        .create(0, 0)
        .translateBy(deltaPan)
    },
    set (point) {
      const { imageSize, focusSize } = this

      const dx = focusSize.x / 2
      const dy = focusSize.y / 2

      const x = Math.max(dx, Math.min(imageSize.x - dx, point.x))
      const y = Math.max(dy, Math.min(imageSize.y - dy, point.y))

      this.deltaPan = Distance2.create(x, y)
    }
  },
  focusSize () {
    const { zoomFactor, canvasSize } = this

    if (!canvasSize) return void 0

    return canvasSize.scale(zoomFactor)
  },
  focusArea () {
    const { focusPosition, focusSize } = this

    if (!focusSize) return void 0

    const bias = focusSize
      .scale(1 / 2)
      .invert()

    return Rectangle
      .createFromOrigin(focusSize)
      .translateTo(focusPosition)
      .translateBy(bias)
  }
}

const watch = {
  canvasSize () {
    console.log('isReady')
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
  onZoomIn () {
    this.zoomFactor *= 0.8
  },
  onZoomOut () {
    const zoomFactor = this.zoomFactor / 0.8

    this.zoomFactor = Math.min(zoomFactor, this.initialZoom)
    this.focusPosition = this.focusPosition.translate(0, 0)
  },
  onReset () {
    this.resetLayout()
  },
  resetLayout () {
    const { imageSize } = this

    const { canvasContainer } = this.$refs

    const canvasSize = sizeOfElement(canvasContainer)

    const imageARC = aspectRatioOf(imageSize)
    const displayARC = aspectRatioOf(canvasSize)

    this.initialZoom = imageARC < displayARC
      ? imageSize.x / canvasSize.x
      : imageSize.y / canvasSize.y

    this.zoomFactor = this.initialZoom

    this.deltaPan = imageSize.scale(1 / 2)

    this.canvasSize = canvasSize
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
    MxCanvas,
    MxToolset
  },
  mounted
}
