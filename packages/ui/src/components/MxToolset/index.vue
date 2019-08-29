<template lang="pug">
  nav
    el-button(
      circle
      type="primary"
      title="Pan"
      icon="el-icon-rank"
    )

    el-button(
      circle
      title="Zoom in"
      icon="el-icon-zoom-in"
      @click.prevent="onZoomIn"
    )

    el-button(
      circle
      title="Zoom out"
      icon="el-icon-zoom-out"
      @click.prevent="onZoomOut"
    )

    el-button(
      circle
      disabled
      title="Level"
      icon="el-icon-sunrise"
    )

    el-button(
      circle
      disabled
      title="Annotate"
      icon="el-icon-edit"
    )

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

<style scoped>
nav {
  padding: 20px 0;
}
</style>

<script src="./main.js"></script>
