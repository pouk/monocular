<template lang="pug">
  el-container
    el-main
      mx-display(v-model="displayShape")
        code
          pre {{ displayShape }}
          pre {{ focusArea }}

    el-aside
      mx-minimap(
        v-if="focusArea"
        v-model="focusArea"
        :original-shape="imageShape"
      )
        img(:src="imageSource")
</template>

<script src="./main.js"></script>

<style></style>
