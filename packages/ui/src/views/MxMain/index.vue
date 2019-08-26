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
        canvas(v-if="displayShape"
          ref="canvasElement"
          :width="displayShape.size.x"
          :height="displayShape.size.y"
        )
</template>

<script src="./main.js"></script>

<style></style>
