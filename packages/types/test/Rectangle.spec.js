import test from 'ava'

import { Point, Rectangle } from '..'

test('.is(rect)', t => {
  const origin = Point(2, 1)
  const width = 4
  const height = 3

  const rect = Rectangle(origin, width, height)

  t.true(Rectangle.is(rect))
  t.false(Rectangle.is({ origin, width, height }))
})
