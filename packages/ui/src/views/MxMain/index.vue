<template lang="pug">
  el-container
    el-main
      mx-display(v-model="displayShape")
        code
          pre {{ displayShape }}
          pre
            | {{ focusPosition }}
            | {{ focusSize }}

    el-aside
      mx-minimap(
        v-if="focusPosition"
        v-model="focusPosition"
        :original-size="imageSize"
        :marker-size="focusSize"
      )
        img(:src="imageSource")
</template>

<script src="./main.js"></script>

<style></style>
