/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withKnobs, number, boolean, select } from '@storybook/addon-knobs'

import MxImage from '@/components/MxImage'

// settings

const SOURCES = [
  '/images/the-fight.jpg',
  '/images/the-tower.jpg'
]

// init

const stories = storiesOf('MxImage', module)

stories.addDecorator(withKnobs)

// stories

stories.add('basic',
  () => ({
    template: `
      <mx-image src="${SOURCES[0]}" />
    `,
    components: {
      MxImage
    }
  }),
  {
    notes: {
      markdown: 'Similar to HTML `img` tag'
    }
  }
)

stories.add('source', () => ({
  template: `
    <mx-image :src="source" />
  `,
  props: {
    source: select('Source', SOURCES, SOURCES[0])
  },
  components: {
    MxImage
  }
}))

stories.add('size', () => ({
  template: `
    <mx-image src="${SOURCES[0]}"
      :width="width"
      :height="height"
    />
  `,
  props: {
    width: {
      default: number('Width', 1000, {}, 'Size')
    },
    height: {
      default: number('Height', 1000, {}, 'Size')
    }
  },
  components: {
    MxImage
  }
}))

stories.add('Filters', () => ({
  template: `
    <mx-image src="${SOURCES[0]}"
      :filter-invert="filterInvert"
      :filter-window="filterWindow"
      :filter-level="filterLevel"
    />
  `,
  props: {
    filterInvert: {
      default: boolean('Invert', false)
    },
    filterWindow: {
      default: number('Window', 255, {
        range: true,
        min: 0,
        max: 255,
        step: 1
      }, 'Window/Level')
    },
    filterLevel: {
      default: number('Level', 127, {
        range: true,
        min: 0,
        max: 255,
        step: 1
      }, 'Window/Level')
    }
  },
  components: {
    MxImage
  }
}))
