<template lang="pug">
el-container

  el-main
    mx-display(
      :original-size="size"
      :image-source="imageSource"
      :original-layout="originalLayout"
      :selected-layout="selectedLayout")

  el-aside
    mx-minimap(
      v-model="focusArea"
      :original-shape="imageShape"
    )
      img(:src="imageSource")
</template>

<script src="./main.js"></script>

<style>
.display-fit {
  height: 100%;
  width: 100%;
  margin: 0;
}

#display-wrapper {
  width: 50%;
  height: 100%;
  float: left;
  opacity: 0.35;
}

#control-panel {
  width: 50%;
  float: left;
  background-color: rgba(255, 255, 255, 0.5);
  outline: 3px solid green;
}
</style>
