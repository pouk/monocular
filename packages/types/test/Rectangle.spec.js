import test from 'ava'

import { Point, Rectangle } from '..'

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
  const o1 = Point(2, 1)
  const o2 = Point(1, 2)

  t.true(
    Rectangle.equals(
      Rectangle(o1, 4, 3),
      Rectangle(o1, 4, 3)
    ),
    'same origin, same size > equal'
  )

  t.false(
    Rectangle.equals(
      Rectangle(o1, 4, 3),
      Rectangle(o2, 4, 3)
    ),
    'different origin, same size > not equal'
  )

  t.false(
    Rectangle.equals(
      Rectangle(o1, 4, 3),
      Rectangle(o1, 3, 4),
      'same origin, different size > not equal'
    )
  )
})

test('isSimilar(r1, r2)', t => {
  const origin = Point(2, 1)

  t.true(
    Rectangle.isSimilar(
      Rectangle(origin, 4, 3),
      Rectangle(origin, 4, 3)
    )
  )

  t.true(
    Rectangle.isSimilar(
      Rectangle(origin, 4.5, 3.5),
      Rectangle(origin, 2.25, 1.75)
    )
  )

  t.false(
    Rectangle.equals(
      Rectangle(origin, 3, 4),
      Rectangle(origin, 4, 7),
      'same origin, different size > not equal'
    )
  )
})

test('translate(x, y, rect)', t => {
  const r1 = Rectangle(Point(1, 1), 2, 2)
  const r2 = Rectangle.translate(2, 3, r1)

  t.not(r1, r2, 'no mutate')
  t.deepEqual(r2, Rectangle(Point(3, 4), 2, 2))
})

test('translateTo(point, rect)', t => {
  const r1 = Rectangle(Point(1, 1), 2, 2)
  const r2 = Rectangle.translateTo(Point(2, 2), r1)

  t.not(r1, r2, 'no mutate')
  t.deepEqual(r2, Rectangle(Point(2, 2), 2, 2))
})

test('translateCenterTo(point, rect)', t => {
  const r1 = Rectangle(Point(1, 1), 2, 2)
  const r2 = Rectangle.translateCenterTo(Point(3, 3), r1)

  t.not(r1, r2, 'no mutate')
  t.deepEqual(r2, Rectangle(Point(2, 2), 2, 2))
})

test('scale(n, rect)', t => {
  const origin = Point(1, 1)

  const r1 = Rectangle(origin, 2, 2)
  const r2 = Rectangle.scale(2, r1)

  t.not(r1, r2, 'no mutate')
  t.deepEqual(r2, Rectangle(origin, 4, 4))
})

test('scaleFromCenter(n, rect)', t => {
  const r1 = Rectangle(Point(1, 1), 2, 2)
  const r2 = Rectangle.scaleFromCenter(2, r1)

  t.not(r1, r2, 'no mutate')
  t.deepEqual(r2, Rectangle(Point(0, 0), 4, 4))
})

test('scaleFromBase(n, rect)', t => {
  const r1 = Rectangle(Point(1, 1), 2, 2)
  const r2 = Rectangle.scaleFromBase(2, r1)

  t.not(r1, r2, 'no mutate')
  t.deepEqual(r2, Rectangle(Point(2, 2), 4, 4))
})
