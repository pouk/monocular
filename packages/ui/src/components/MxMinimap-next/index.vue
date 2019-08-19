<template lang="pug">
div.display(
  ref="displayElement"
  :style="displayStyles"
)

  figure
    slot

  div.marker(
    ref="markerElement"
    :style="markerStyles"
    @mousedown="onDragStart"
  )
</template>

<script src="./main.js"></script>

<style scoped>
div.display {
  position: relative;
  overflow: hidden;
}

div.marker {
  position: absolute;
  background: rgba(255,255,255,0.3)
}

figure {
  margin: 0;
}

figure > * {
  max-height: 100%;
  max-width: 100%;
}
</style>
