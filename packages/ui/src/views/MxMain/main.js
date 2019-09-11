import * as R from 'ramda'

import { Measure, Point, Rectangle } from '@monocular/types'

import MxMinimap from '@/components/MxMinimap'
import MxScreenOverlay from '@/components/MxScreenOverlay'
import MxDisplay from '@/components/MxDisplay'
import MxToolset from '@/components/MxToolset'
import MxRadioMode from '@/components/MxRadioMode'
import MxFormEffects from '@/components/MxFormEffects'

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
    mode: 'pan',
    //
    effects: void 0,
    //
    canvasSize: void 0,
    //
    deltaPan: Distance2.empty(),
    //
    zoomFactor: 1,
    zoomMin: 1,
    zoomMax: 10,
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

      const x = R.clamp(dx, imageSize.x - dx, point.x)
      const y = R.clamp(dy, imageSize.y - dy, point.y)

      this.deltaPan = Distance2.create(x, y)
    }
  },
  focusSize () {
    const { zoomFactor, canvasSize } = this

    if (!canvasSize) return void 0

    return canvasSize.scale(1 / zoomFactor)
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

const watch = { }

const methods = {
  onDrag (e) {
    const { mode } = this

    switch (mode) {
      case 'pan':
        return this.doPan(e)
      case 'zoom':
        return this.doZoom(e)
    }
  },
  doPan (e) {
    const { focusPosition, zoomFactor } = this

    const movement = e.movement
      .scale(1 / zoomFactor)
      .invert()

    this.focusPosition = focusPosition.translateBy(movement)
  },
  doZoom (e) {
    const { zoomMin, zoomMax } = this

    const delta = e.movement.y / 100

    const factor = this.zoomFactor - delta

    this.zoomFactor = R.clamp(zoomMin, zoomMax, factor)
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

    this.zoomMin = imageARC < displayARC
      ? canvasSize.x / imageSize.x
      : canvasSize.y / imageSize.y

    this.zoomFactor = this.zoomMin

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
    MxDisplay,
    MxToolset,
    MxRadioMode,
    MxFormEffects
  },
  mounted
}
