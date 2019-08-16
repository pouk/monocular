<template lang="pug">
  div.container
    mx-input-viewport(
      :model="model"
      :zoom-factor="2"
      @update="onViewportUpdate"
      )
</template>

<script src="./main.js"></script>
<style scoped src="./style.css"></style>
