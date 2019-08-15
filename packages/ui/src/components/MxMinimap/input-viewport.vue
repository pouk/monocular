<template lang="pug">
div.container(ref="$container")
  div.selection(
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
