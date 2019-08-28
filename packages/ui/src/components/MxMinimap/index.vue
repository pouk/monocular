<template lang="pug">
div.container(
  :style="displayStyles"
)

  figure
    slot

  div.marker(ref="markerElement"
    :style="markerStyles"
  )
</template>

<script src="./main.js"></script>

<style scoped>
div.container {
  position: relative;
  overflow: hidden;
}

div.marker {
  position: absolute;
  background: rgba(255,255,255,0.3);
  outline: rgba(255,255,255,0.6);
}

figure {
  margin: 0;
}
</style>
