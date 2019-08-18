<template lang="pug">
  div.home
    div#display-wrapper
      mx-display(
        :original-size="size"
        :source="source"
        :selected-layout="selectedLayout"
      )
    div#minimap-wrapper
      mx-minimap(
        @update="handleFocusChange"
        :original-size="size"
        :scale-factor="1 / 5"
        :zoom-level="1"
      )
</template>

<script>
// @ is an alias to /src
import MxMinimap from '@/components/MxMinimap'
import MxDisplay from '@/components/MxDisplay'

function handleFocusChange (e) {
  this.selectedLayout = e
  console.log(JSON.stringify(e, null, 2))
}

const data = () => {
  const size = {
    width: 4800,
    height: 3466
  }

  const source = '/images/the-fight.jpg'

  return {
    source,
    size,
    selectedLayout: void 0
  }
}

export default {
  name: 'home',
  data,
  components: {
    MxMinimap,
    MxDisplay
  },
  methods: {
    handleFocusChange
  }
}
</script>

<style>
.home {
  height: 100%;
}

#display-wrapper {
  width: 100%;
  height: 100%;
}

#minimap-wrapper {
  position: absolute;
  bottom: 50px;
  right: 50px;
  width: 400px;
  height: 400px;
}
</style>
