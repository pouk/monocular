<template lang="pug">
  el-container
    el-aside
      mx-minimap(
        v-if="focusArea"
        :original-size="imageSize"
        :focus-area="focusArea"
      )
        img.thumbnail(:src="imageSource")

    el-main
      div.mx-container(ref="canvasContainer")
        mx-screen-overlay(
          @drag="onDrag"
        )
          mx-canvas(
            v-if="canvasSize"
            :size="canvasSize"
            :image="image"
            :target="focusArea"
          )
</template>

<script src="./main.js"></script>

<style>
.mx-container {
  width: 100%;
  height: 100%;
  margin: 0;
}

.thumbnail {
  max-width: 100%;
  max-height: 100%;
}
</style>
