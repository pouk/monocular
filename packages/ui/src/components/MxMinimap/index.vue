<template lang="pug">
  div.container
    mx-input-viewport(
      :original-size="originalSize"
      :zoom-level="1"
      @update="onViewportUpdate"
      )
</template>

<script src="./main.js"></script>
<style scoped src="./style.css"></style>
