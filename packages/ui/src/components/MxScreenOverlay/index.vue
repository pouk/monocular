<template lang="pug">
div.mx-overlay(
  @mousedown="onMouseDown"
  @mouseup="onMouseUp"
  @click="onClick"
  @dblclick="onDblClick"
)
  slot
</template>

<script src="./main.js"></script>

<style scoped>
.mx-overlay {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
