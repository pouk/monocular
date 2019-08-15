<template lang="pug">
div.container(ref="boundingElement")
  div.selection(
    v-if="draggableOptions"
    :style="selectionStyle"
    v-draggable="draggableOptions"
    )
</template>

<script src="./input-viewport.js"></script>

<style scoped>
.selection {
  border: 1px solid;
}
</style>
