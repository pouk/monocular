import test from 'ava'

import { Measure, Point, Rectangle } from '..'

test('Measure', t => {
  const { Distance, Distance2 } = Measure

  t.is(typeof Distance, 'function')
  t.is(typeof Distance2, 'function')
})

test('Point', t => {
  t.is(typeof Point, 'function')

  const x = 2
  const y = 1

  // constructor

  t.true(Point(x, y) instanceof Point, 'constructor')

  // arguments

  t.throws(() => Point(x), TypeError, 'no less args')
  t.throws(() => Point(x, y, 1), TypeError, 'no more args')

  // attributes

  const p = Point(x, y)

  t.is(p.x, x, 'arg 1 -> x')
  t.is(p.y, y, 'arg 2 -> y')
})

test('Rectangle', t => {
  t.is(typeof Point, 'function')

  const origin = Point(2, 1)
  const width = 4
  const height = 3

  // constructor

  t.true(Rectangle(origin, width, height) instanceof Rectangle)

  t.throws(() => Rectangle(origin, width), TypeError, 'no less args')
  t.throws(() => Rectangle(origin, width, height, 1), TypeError, 'no more args')

  // attributes

  const rect = Rectangle(origin, width, height)

  t.deepEqual(rect.origin, origin)
  t.is(rect.width, width)
  t.is(rect.height, height)
})
