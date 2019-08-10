import test from 'ava'

import { Point } from '..'

test('signature', t => {
  t.is(typeof Point, 'function')
})

test('attributes', t => {
  const point = Point(3, 2)

  t.is(point.x, 3)
  t.is(point.y, 2)
})
