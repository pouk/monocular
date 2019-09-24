<template lang="pug">
div.container(
  :style="containerStyles"
)
  mx-image.canvas(
    :src="imageSource"
    :width="imageSize.x"
    :height="imageSize.y"
    :style="canvasStyles"
  )
</template>

<script src="./main.js"></script>

<style scoped>
.container {
  position: relative;
  overflow: hidden;
}

.canvas {
  position: absolute;
}
</style>
