import { Measure, Rectangle } from '@monocular/types'

import MxMinimap from '@/components/MxMinimap'
import MxDisplay from '@/components/MxDisplay-next'

//

const { Distance2 } = Measure

// helpers

const aspectRatioOf = ({ x, y }) => x / y

// specs

const data = () => {
  const imageSource = '/images/the-fight.jpg'
  const imageSize = Distance2(4800, 3466)

  // eslint-disable-next-line
  const image = new Image()
  image.src = imageSource

  return {
    displayShape: void 0,
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
  displaySize () {
    const { displayShape } = this

    if (!displayShape) return void 0

    return displayShape.getSize()
  },
  displayAspectRatio () {
    const { displaySize } = this

    if (!displaySize) return void 0

    return aspectRatioOf(displaySize)
  },
  focusArea () {
    const { focusPosition, focusSize } = this

    return Rectangle.create(focusPosition, focusSize)
  },
  canvasCtx () {
    const { canvasElement } = this.$refs

    if (!canvasElement) return void 0

    return canvasElement.getContext('2d')
  }
}

const watch = {
  displayShape () {
    const { imageSize, displaySize } = this

    const imageARC = aspectRatioOf(imageSize)
    const displayARC = aspectRatioOf(displaySize)

    this.zoomFactor = imageARC < displayARC
      ? imageSize.x / displaySize.x
      : imageSize.y / displaySize.y
  },
  zoomFactor () {
    const { displayShape, zoomFactor } = this

    const { position, size } = displayShape.scale(zoomFactor)

    this.focusPosition = position
    this.focusSize = size
  },
  focusArea () {
    this.redraw()
  }
}

const methods = {
  redraw () {
    const { image, displaySize, focusArea } = this

    const { canvasElement } = this.$refs

    if (!canvasElement) return void 0

    const ctx = canvasElement.getContext('2d')

    const { x: sx, y: sy } = focusArea.position
    const { x: sw, y: sh } = focusArea.size
    const { x: dw, y: dh } = displaySize

    ctx.drawImage(image, sx, sy, sw, sh, 0, 0, dw, dh)
  }
}

export default {
  name: 'MxMainView',
  data,
  computed,
  watch,
  methods,
  components: {
    MxMinimap,
    MxDisplay
  }
}
