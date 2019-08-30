<template lang="pug">
  nav
    el-button(
      circle
      title="Reset"
      icon="el-icon-refresh"
      @click.prevent="onReset"
    )

    el-button(
      circle
      disabled
      title="Layout"
      icon="el-icon-menu"
    )

    el-button(
      circle
      disabled
      title="More"
      icon="el-icon-more"
    )
</template>

<style scoped></style>

<script src="./main.js"></script>
