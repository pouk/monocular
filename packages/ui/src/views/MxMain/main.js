import { Rectangle } from '@monocular/types'

import MxMinimap from '@/components/MxMinimap'
import MxDisplay from '@/components/MxDisplay'

function handleFocusChange (e) {
  this.selectedLayout = e
  console.log(JSON.stringify(e, null, 2))
}

const data = () => {
  const imageSource = '/images/the-fight.jpg'

  const size = {
    width: 4800,
    height: 3466
  }

  const originalLayout = Rectangle.createBase(4800, 3466)

  // -

  const imageShape = originalLayout

  const initialZoomFactor = 2
  const focusArea = imageShape.scale(1 / initialZoomFactor)

  // -

  return {
    size,
    originalLayout,
    selectedLayout: void 0,
    //
    imageSource,
    imageShape,
    focusArea
  }
}

export default {
  name: 'MxMainView',
  data,
  methods: {
    handleFocusChange
  },
  components: {
    MxMinimap,
    MxDisplay
  }
}
