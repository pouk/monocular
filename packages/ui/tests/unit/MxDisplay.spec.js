import test from 'ava'
import { shallowMount } from '@vue/test-utils'

import { Rectangle } from '@monocular/types'

import MxDisplay from '@/components/MxDisplay/display.vue'

test.beforeEach(t => {
  const imageSource = '/images/the-fight.jpg'
  const bbox = Rectangle.createBase(720, 960)
  const originalLayout = Rectangle.createBase(2000, 1000)
  const selectedLayout = Rectangle
    .createBase(1000, 500)
    .translate(125, 125)

  const propsData = {
    bbox,
    originalLayout,
    selectedLayout,
    imageSource
  }

  t.context = {
    propsData
  }
})

test('should source image', t => {
  const wrapper = shallowMount(MxDisplay, t.context)

  const imgAttrs = wrapper
    .find('img')
    .attributes()

  t.is(imgAttrs.src, t.context.propsData.imageSource)
})

test('should zoom image properly to selection', t => {
  const wrapper = shallowMount(MxDisplay, t.context)

  const imgAttrs = wrapper
    .find('img')
    .attributes()

  // display proportionally
  t.true(imgAttrs.style.includes('width: 1440px'))
  t.true(imgAttrs.style.includes('height: 720px'))
  t.true(imgAttrs.style.includes('left: -90px'))
  t.true(imgAttrs.style.includes('top: -90px'))
})
