import test from 'ava'
import { shallowMount } from '@vue/test-utils'

import MxMinimap from '@/components/MxMinimap'

test('MxMinimap should render', t => {
  const wrapper = shallowMount(MxMinimap)
  t.is(wrapper.constructor.name, 'VueWrapper')
})
