import test from 'ava'

import Point from '@monocular/type-point'

import Rectangle from '..'

test('signature', t => {
  t.is(typeof Rectangle, 'function')

  const tl = Point(1, 2)
  const br = Point(4, 6)

  t.true(Rectangle(tl, br) instanceof Rectangle)
  t.true(new Rectangle(tl, br) instanceof Rectangle)
})

test('attributes', t => {
  const tl = Point(1, 2)
  const br = Point(4, 6)

  const rect = Rectangle(tl, br)

  t.is(rect.a, tl)
  t.is(rect.c, br)
})

test('computed properties', t => {
  const tl = Point(1, 2)
  const br = Point(4, 6)

  const rect = Rectangle(tl, br)

  t.is(rect.top, 2)
  t.is(rect.left, 1)
  t.is(rect.bottom, 6)
  t.is(rect.right, 4)

  t.is(rect.width, 3)
  t.is(rect.height, 4)

  t.is(rect.area, 12)
})
