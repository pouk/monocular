<template lang="pug">
  div.home
    img(src="../assets/logo.png")
    mx-minimap#minimap(@input="handleFocusChange")
</template>

<script>
// @ is an alias to /src
import MxMinimap from '@/components/MxMinimap'

function handleFocusChange (e) {
  console.log(e)
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
#minimap {
  width: 400px;
  height: 400px;
}
</style>
