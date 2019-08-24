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
  t.is(typeof Rectangle, 'function')

  const position = Point(2, 1)
  const size = Measure.Distance2(4, 3)

  // constructor

  t.true(Rectangle(position, size) instanceof Rectangle)

  t.throws(() => Rectangle(position), TypeError, 'no less args')
  t.throws(() => Rectangle(position, 4, 3), TypeError, 'no more args')

  // attributes

  const rect = Rectangle(position, size)

  t.deepEqual(rect.position, position)
  t.deepEqual(rect.size, size)
})
