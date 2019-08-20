/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import { Rectangle } from '@monocular/types'

import MxDisplay from '@/components/MxDisplay'

const CaseWithImage = {
  template: `
    <mx-display
      image-source="/images/the-fight.jpg"
      :original-layout="originalShape"
    />
  `,
  data () {
    const originalShape = Rectangle.createBase(600, 400)

    return {
      originalShape
    }
  },
  components: {
    MxDisplay
  }
}

storiesOf('MxDisplay', module)
  .add('with image', () => CaseWithImage)
