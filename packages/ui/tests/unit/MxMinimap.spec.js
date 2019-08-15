import test from 'ava'
import { shallowMount } from '@vue/test-utils'

import MxMinimap from '@/components/MxMinimap'

test('should render', t => {
  const wrapper = shallowMount(MxMinimap)

  t.is(wrapper.constructor.name, 'VueWrapper')
})

test('should have proper layout', t => {
  const propsData = {
    originalSize: {
      width: 1920,
      height: 1080
    },
    scaleFactor: 1 / 10,
    zoomLevel: 1
  }

  const wrapper = shallowMount(MxMinimap, {
    propsData
  })

  const innerAttrs = wrapper
    .find('.inner-area')
    .attributes()

  // display proportionally
  t.true(innerAttrs.style.includes('width: 96px'))
  t.true(innerAttrs.style.includes('height: 54px'))

  // center by default
  t.true(innerAttrs.style.includes('left: 48px'))
  t.true(innerAttrs.style.includes('top: 27px'))
})
