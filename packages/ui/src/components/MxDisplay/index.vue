<template lang="pug">
  div.container(
    ref="containerElement"
    )
    div.clamp(
      :style="clampStyle"
      )
      figure.display(
        ref="displayElement"
        :style="displayStyle"
        )
        img(
          :src="source"
          :style="imageStyle"
          )
</template>

<script src="./main.js"></script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  margin: 0;
}

.display {
  position: relative;
  margin: 0;
  padding: 0;
  overflow: hidden;
  outline: 1px solid #ddd;
}

img {
  position: absolute;
}
</style>
