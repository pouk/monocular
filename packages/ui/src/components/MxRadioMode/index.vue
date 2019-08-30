<template lang="pug">
el-radio-group(v-model="mode")
  el-radio-button(label="pan")
    i.el-icon-rank

  el-radio-button(label="zoom")
    i.el-icon-search

  el-radio-button(
    label="annotate"
    disabled
  )
    i.el-icon-edit

</template>

<style scoped></style>

<script src="./main.js"></script>
