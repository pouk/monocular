import * as R from 'ramda'

//

const defaults = R.always({
  invert: false,
  window: 0,
  level: 0
})

const props = {
  value: {
    type: Object,
    default: defaults
  }
}

const computed = {
  invert: {
    get () {
      return this.value.invert
    },
    set (invert) {
      const form = R.merge(this.value, { invert })
      this.$emit('input', form)
    }
  }
}

export default {
  name: 'MxFormEffects',
  props,
  computed
}
