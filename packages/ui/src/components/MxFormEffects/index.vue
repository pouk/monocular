<template lang="pug">
el-popover(
  placement="bottom"
  trigger="click"
  width="300"
)

  el-form(
    ref="form"
    label-width="120px"
  )
    el-form-item(label="Invert")
      el-switch(
        v-model="invert"
      )

    el-form-item(label="Window")
      el-slider(
        disabled
        :min="-100"
        :max="100"
        :value="0"
      )

    el-form-item(label="Level")
      el-slider(
        disabled
        :min="-100"
        :max="100"
        :value="0"
      )

  el-button(
    slot="reference"
    icon="el-icon-magic-stick"
  )

</template>

<style scoped></style>

<script src="./main.js"></script>
