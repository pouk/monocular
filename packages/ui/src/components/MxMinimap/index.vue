<template lang="pug">
  div.container(ref="container")
    div.wrapper(:style="wrapperStyle")

      div.arena(ref="arena"
        :style="arenaStyle"
        )
        div.highlight(
          :style="highlightStyle"
          v-draggable="draggableOptions"
          )
</template>

<script src="./main.js"></script>
<style scoped src="./style.css"></style>
