<template lang="pug">
div.container(
  :style="containerStyles"
)
  canvas.canvas(
    ref="canvas"
    :width="imageSize.x"
    :height="imageSize.y"
    :style="canvasStyles"
  )

  mx-scaner(
    :image="image"
    :image-size="imageSize"
    :focus-area="focusArea"
    :effects="effects"
    @update="renderPartial"
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
