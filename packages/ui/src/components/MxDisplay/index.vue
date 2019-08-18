<template lang="pug">
  div.container(ref="containerElement")
    mx-display(
      v-if="isReady"
      :image-source="source"
      :original-layout="originalLayout"
      :selected-layout="selectedLayout"
      :bbox="bbox"
      )
</template>

<script src="./main.js"></script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
