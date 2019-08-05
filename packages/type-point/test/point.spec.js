import test from 'ava'

import Point from '..'

test('signature', t => {
  t.is(typeof Point, 'function')

  t.true(Point(1, 1) instanceof Point, 'works w/o `new`')
  t.true(new Point(1, 1) instanceof Point)
})

test('attributes', t => {
  const p = Point(2, 3)

  t.is(p.x, 2)
  t.is(p.y, 3)
})
