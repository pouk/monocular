<template lang="pug">
  el-container
    el-aside
      mx-minimap(
        v-if="focusPosition"
        v-model="focusPosition"
        :original-size="imageSize"
        :marker-size="focusSize"
      )
        img(:src="imageSource")

    el-main
      div.mx-container(ref="canvasContainer")
        mx-canvas(
          v-if="displaySize"
          :size="displaySize"
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
</style>
