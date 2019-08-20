/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import { action } from '@storybook/addon-actions'

import { Rectangle } from '@monocular/types'

import MxMinimap from '@/components/MxMinimap'

const CaseWithImage = {
  template: `
    <mx-minimap
      v-model="focusArea"
      :original-shape="originalShape"
      @input="onUpdate"
    >
      <img
        src="/images/the-fight.jpg"
        style="width: 100%;"/>
    </mx-minimap>
  `,
  data () {
    const originalShape = Rectangle.createBase(4800, 3466)
    const focusArea = originalShape.scale(1 / 2)

    return {
      originalShape,
      focusArea
    }
  },
  methods: {
    onUpdate: action('updated')
  },
  components: {
    MxMinimap
  }
}

storiesOf('MxMinimap', module)
  .add('with image', () => CaseWithImage)
