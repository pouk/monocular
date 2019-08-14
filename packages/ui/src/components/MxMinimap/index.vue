<template lang="pug">
  div.container(ref="$container")
      div.arena(ref="$arena")
        div.highlight(
          :style="highlightStyle"
          v-draggable="draggableOptions"
          )
</template>

<script src="./main.js"></script>
<style scoped src="./style.css"></style>
