import test from 'ava'

import { Point, Rectangle } from '..'

test('Point', t => {
  t.is(typeof Point, 'function')

  const x = 2
  const y = 1

  // constructor

  t.true(Point(x, y) instanceof Point)
  t.true(Point.from({ x, y }) instanceof Point, 'factory')

  t.throws(() => Point(x), TypeError, 'no less args')
  t.throws(() => Point(x, y, 1), TypeError, 'no more args')

  // attributes

  const p = Point(x, y)

  t.is(p.x, x, 'point.x')
  t.is(p.y, y, 'point.y')
})

test('Rectangle', t => {
  t.is(typeof Point, 'function')

  const origin = Point(2, 1)
  const width = 4
  const height = 3

  // constructor

  t.true(Rectangle(origin, width, height) instanceof Rectangle)
  t.true(Rectangle.from({ origin, width, height }) instanceof Rectangle)

  t.throws(() => Rectangle(origin, width), TypeError, 'no less args')
  t.throws(() => Rectangle(origin, width, height, 1), TypeError, 'no more args')

  // attributes

  const rect = Rectangle(origin, width, height)

  t.deepEqual(rect.origin, origin)
  t.is(rect.width, width)
  t.is(rect.height, height)
})
