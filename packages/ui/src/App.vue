<template lang="pug">
  div#document
    mx-main-view
</template>

<style>
html,
body {
  height: 100%;
  margin: 0
}

#document {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

#app {
  outline: 1px dotted #ddd;
}
</style>

<script>
import MxMainView from '@/views/MxMain'

export default {
  name: 'MxApp',
  components: {
    MxMainView
  }
}
</script>
