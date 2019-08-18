import MxMinimap from '@/components/MxMinimap'
import MxDisplay from '@/components/MxDisplay'

function handleFocusChange (e) {
  this.selectedLayout = e
  console.log(JSON.stringify(e, null, 2))
}

const props = {
  imageFileName: String
}

const data = () => {
  const size = {
    width: 4800,
    height: 3466
  }

  return {
    size,
    selectedLayout: void 0
  }
}

const computed = {
  imageSource () {
    const { imageFileName } = this
    return `/images/${imageFileName}`
  }
}

export default {
  name: 'MonocularView',
  props,
  data,
  computed,
  methods: {
    handleFocusChange
  },
  components: {
    MxMinimap,
    MxDisplay
  }
}
