import test from 'ava'

import { Point } from '..'

test('.is(point)', t => {
  const x = 2
  const y = 1

  const p = Point(x, y)

  t.true(Point.is(p))
  t.false(Point.is({ x, y }))
})
