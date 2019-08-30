<template lang="pug">
canvas(ref="canvas"
  :width="imageSize.x"
  :height="imageSize.y"
)
</template>

<script src="./main.js"></script>

<style scoped>
canvas {
  display: none;
}
</style>
