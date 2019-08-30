const props = {
  value: String
}

const computed = {
  mode: {
    get () {
      return this.value
    },
    set (mode) {
      this.$emit('input', mode)
    }
  }
}

export default {
  name: 'MxRadioMode',
  props,
  computed
}
