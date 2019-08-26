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
      mx-display(v-model="displayShape")
        mx-canvas(
          v-if="displayShape"
          :size="displayShape.size"
          :image="image"
          :target="focusArea"
        )
</template>

<script src="./main.js"></script>

<style></style>
