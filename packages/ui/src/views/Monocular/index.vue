<template lang="pug">
  main
    div#display-wrapper
      mx-display(
        :original-size="size"
        :image-source="imageSource"
        :original-layout="originalLayout"
        :selected-layout="selectedLayout"
      )
    div#minimap-wrapper
      mx-minimap(
        @update="handleFocusChange"
        :original-layout="originalLayout"
        :scale-factor="1 / 5"
        :zoom-level="1"
      )
</template>

<script src="./main.js"></script>

<style>
main {
  height: 100%;
}

#display-wrapper {
  width: 100%;
  height: 100%;
  opacity: 0.35;
}

#minimap-wrapper {
  position: absolute;
  bottom: 50px;
  right: 50px;
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
