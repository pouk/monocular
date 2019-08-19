<template lang="pug">
div.container
  main#display-wrapper
    mx-display(
      :original-size="size"
      :image-source="imageSource"
      :original-layout="originalLayout"
      :selected-layout="selectedLayout"
    )
  aside#control-panel
    mx-minimap(
      v-model="focusArea"
      :image-shape="imageShape"
      :image-source="imageSource"
    )
</template>

<script src="./main.js"></script>

<style>
.container {
  height: 100%;
  width: 100%;
  margin: 0;
}

main {
  height: 100%;
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
