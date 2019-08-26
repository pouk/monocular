<template lang="pug">
div.mx-display-container(ref="containerElement")
  slot
</template>

<script src="./main.js"></script>

<style scoped>
.mx-display-container {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
