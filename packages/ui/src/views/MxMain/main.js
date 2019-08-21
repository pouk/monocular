import { Rectangle } from '@monocular/types'

import MxMinimap from '@/components/MxMinimap'
import MxDisplay from '@/components/MxDisplay-next'

// helpers

const aspectRatioOf = rect => {
  const { width, height } = rect

  return width / height
}

// specs

const data = () => {
  const imageSource = '/images/the-fight.jpg'
  const imageShape = Rectangle.createBase(4800, 3466)

  return {
    displayShape: void 0,
    focusArea: void 0,
    zoomFactor: void 0,
    //
    imageSource,
    imageShape
  }
}

const computed = {
  imageAspectRatio () {
    const { imageShape } = this

    return aspectRatioOf(imageShape)
  },
  displayAspectRatio () {
    const { displayShape } = this

    if (!displayShape) return void 0

    return aspectRatioOf(displayShape)
  }
}

const watch = {
  displayShape () {
    const { imageShape, displayShape } = this

    const imageARC = aspectRatioOf(imageShape)
    const displayARC = aspectRatioOf(displayShape)

    this.zoomFactor = imageARC < displayARC
      ? imageShape.width / displayShape.width
      : imageShape.height / displayShape.height
  },
  zoomFactor () {
    const { displayShape, imageShape, zoomFactor } = this

    this.focusArea = displayShape
      .scale(zoomFactor)
      .alignCenterWith(imageShape)
  }
}

export default {
  name: 'MxMainView',
  data,
  computed,
  watch,
  components: {
    MxMinimap,
    MxDisplay
  }
}
