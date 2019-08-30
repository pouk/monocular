const props = {
  value: {
    type: Object,
    default () {
      return {
        invert: false,
        window: 0,
        level: 0
      }
    }
  }
}

const computed = {
  invert: {
    get () {
      return this.value.invert
    },
    set (invert) {
      const form = Object.assign({}, this.value, { invert })
      this.$emit('input', form)
    }
  }
}

function data () {
  return {
    level: 0,
    window: 0
  }
}

const watch = {}

const methods = {}

export default {
  name: 'MxFormEffects',
  props,
  computed,
  data,
  watch,
  methods
}
