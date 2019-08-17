import test from 'ava'

import Point from '@monocular/types-point'

import Rectangle from '..'

test('create(origin, width, height)', t => {
  const origin = Point(2, 1)

  t.deepEqual(
    Rectangle.create(origin, 4, 3),
    Rectangle(origin, 4, 3)
  )
})

test('createBase(width, height)', t => {
  t.deepEqual(
    Rectangle.createBase(4, 3),
    Rectangle(Point(0, 0), 4, 3)
  )
})

test('from({ origin, width, height })', t => {
  const origin = Point(2, 1)
  const width = 4
  const height = 3

  t.deepEqual(
    Rectangle.from({ origin, width, height }),
    Rectangle(origin, width, height)
  )
})

test('baseFrom({ width, height })', t => {
  const width = 4
  const height = 3

  t.deepEqual(
    Rectangle.baseFrom({ width, height }),
    Rectangle(Point(0, 0), width, height)
  )
})

test('is(rect)', t => {
  const origin = Point(2, 1)
  const width = 4
  const height = 3

  const rect = Rectangle(origin, width, height)

  t.true(Rectangle.is(rect))
  t.false(Rectangle.is({ origin, width, height }))
})

test('equals(r1, r2)', t => {
  const rect = Rectangle.createBase(4, 3)

  // class

  t.true(
    Rectangle.equals(rect, Rectangle.createBase(4, 3)),
    'same origin, same size > equal'
  )

  t.false(
    Rectangle.equals(rect, Rectangle(Point(1, 1), 4, 3)),
    'different origin, same size > not equal'
  )

  t.false(
    Rectangle.equals(rect, Rectangle.createBase(3, 4)),
    'same origin, different size > not equal'
  )

  // instance

  t.true(Rectangle.createBase(4, 3).equals(rect))
  t.false(Rectangle.createBase(4, 2).equals(rect))
})

test('isSimilar(r1, r2)', t => {
  const Base = Rectangle.createBase

  // class

  t.true(Rectangle.isSimilar(Base(4, 3), Base(4, 3)))

  t.true(Rectangle.isSimilar(Base(4, 3), Base(2, 1.5)))

  t.false(Rectangle.isSimilar(Base(4, 3), Base(5, 7)))

  // instance

  t.true(Base(4, 3).isSimilar(Base(8, 6)))
})

test('translate(x, y, rect)', t => {
  const r1 = Rectangle(Point(1, 1), 2, 2)
  const r2 = Rectangle.translate(2, 3, r1)

  // class

  t.not(r1, r2, 'no mutate')
  t.deepEqual(r2, Rectangle(Point(3, 4), 2, 2))

  // instance

  t.deepEqual(r1.translate(2, 3), r2)
})

test('translateTo(point, rect)', t => {
  const o = Point(1, 1)

  const r1 = Rectangle.createBase(2, 2)
  const r2 = Rectangle.translateTo(o, r1)

  // class

  t.not(r1, r2, 'no mutate')
  t.deepEqual(r2, Rectangle(o, 2, 2))

  // instance

  t.deepEqual(r1.translateTo(o), r2)
})

test('translateCenterTo(point, rect)', t => {
  const o = Point(3, 3)

  const r1 = Rectangle.createBase(2, 2)
  const r2 = Rectangle.translateCenterTo(o, r1)

  // class

  t.not(r1, r2, 'no mutate')
  t.deepEqual(r2, Rectangle(Point(2, 2), 2, 2))

  // instance

  t.deepEqual(r1.translateCenterTo(o), r2)
})

test('scale(n, rect)', t => {
  const origin = Point(1, 1)

  const r1 = Rectangle(origin, 2, 2)
  const r2 = Rectangle.scale(2, r1)

  // class

  t.not(r1, r2, 'no mutate')
  t.deepEqual(r2, Rectangle(origin, 4, 4))

  // instance

  t.deepEqual(r1.scale(2), r2)
})

test('scaleFromCenter(n, rect)', t => {
  const r1 = Rectangle(Point(1, 1), 2, 2)
  const r2 = Rectangle.scaleFromCenter(2, r1)

  // class

  t.not(r1, r2, 'no mutate')
  t.deepEqual(r2, Rectangle(Point(0, 0), 4, 4))

  // instance

  t.deepEqual(r1.scaleFromCenter(2), r2)
})

test('scaleFromBase(n, rect)', t => {
  const r1 = Rectangle(Point(1, 1), 2, 2)
  const r2 = Rectangle.scaleFromBase(2, r1)

  // class

  t.not(r1, r2, 'no mutate')
  t.deepEqual(r2, Rectangle(Point(2, 2), 4, 4))

  // prototype

  t.deepEqual(r1.scaleFromBase(2), r2)
})

test('centerOf(rect)', t => {
  const rect = Rectangle.createBase(2, 4)

  // class
  t.deepEqual(Rectangle.centerOf(rect), Point(1, 2))

  // instance

  t.deepEqual(rect.getCenter(), Point(1, 2))
})

test('alignCenterWith(rect)', t => {
  const r1 = Rectangle.createBase(2, 4)
  const r2 = Rectangle.createBase(6, 6)

  // class
  t.deepEqual(
    Rectangle.alignCenterWith(r2, r1),
    Rectangle.translateCenterTo(Point(3, 3), r1)
  )

  // instance

  t.deepEqual(r1.alignCenterWith(r2).getCenter(), Point(3, 3))
})

test('originOf(rect)', t => {
  const origin = Point(0, 0)
  const rect = Rectangle.createBase(2, 4)

  // class

  t.deepEqual(Rectangle.originOf(rect), origin)

  // instance

  t.deepEqual(rect.getOrigin(), origin)
})
