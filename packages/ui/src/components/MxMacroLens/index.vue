<template lang="pug">
div

  canvas.hidden(ref="canvas"
    :width="imageSize.x"
    :height="imageSize.y"
  )

  slot
</template>

<script src="./main.js"></script>

<style scoped>
.hidden {
  display: none;
}
</style>
