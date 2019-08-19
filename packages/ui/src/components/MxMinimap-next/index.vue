<template lang="pug">
div.display(ref="displayElement")
  div.focus(
    ref="inputElement"
    @mousedown="onDragStart"
    :style="inputAreaStyles"
    )
  img(:src="imageSource")
</template>

<script src="./main.js"></script>

<style scoped>
div.display {
  position: relative;
}

div.focus {
  position: absolute;
  background: rgba(255,255,255,0.3)
}

img {
  max-width: 100%;
  max-height: 100%;
}
</style>
