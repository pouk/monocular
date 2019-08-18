<template lang="pug">
div
  figure(:style="displayStyle")
    img(
      :src="imageSource"
      :style="imageStyle"
      )
</template>

<script src="./display.js"></script>

<style scoped>
div {
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

figure {
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
