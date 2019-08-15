<template lang="pug">
  div.home
    img(src="../assets/logo.png")
    div#minimap-wrapper
      mx-minimap(
        @update="handleFocusChange"
        :original-size="{ 'width': 500, 'height': 1000 }"
        :scale-factor="1 / 5"
        :zoom-level="1"
      )
</template>

<script>
// @ is an alias to /src
import MxMinimap from '@/components/MxMinimap'

function handleFocusChange (e) {
  console.log(JSON.stringify(e, null, 2))
}

export default {
  name: 'home',
  components: {
    MxMinimap
  },
  methods: {
    handleFocusChange
  }
}
</script>

<style>
#minimap-wrapper {
  position: absolute;
  bottom: 50px;
  right: 50px;
  width: 400px;
  height: 400px;
}
</style>
