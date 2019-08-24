import test from 'ava'

import Point from '@monocular/types-point'
import { Distance2 } from '@monocular/types-measure'

import Rectangle from '..'

test('create', t => {
  const position = Point.create(2, 1)
  const size = Distance2.create(3, 4)

  t.deepEqual(
    Rectangle.create(position, size),
    Rectangle(position, size)
  )
})

test('createBase', t => {
  const position = Point.create(0, 0)
  const size = Distance2.create(3, 4)

  t.deepEqual(
    Rectangle.createBase(size),
    Rectangle(position, size)
  )
})

test('from', t => {
  const position = Point(2, 1)
  const size = Distance2.create(3, 4)

  t.deepEqual(
    Rectangle.from({ position, size }),
    Rectangle(position, size)
  )
})

test('is', t => {
  const position = Point(2, 1)
  const size = Distance2.create(3, 4)

  t.true(Rectangle.is(Rectangle(position, size)))
  t.false(Rectangle.is({ position, size }))
})

test('equals', t => {
  const position1 = Point(1, 1)
  const position2 = Point(2, 1)

  const size1 = Distance2.create(3, 4)
  const size2 = Distance2.create(4, 4)

  t.true(
    Rectangle.equals(
      Rectangle(position1, size1),
      Rectangle(position1, size1)
    ),
    'same position, same size -> equal'
  )

  t.false(
    Rectangle.equals(
      Rectangle(position1, size1),
      Rectangle(position1, size2)
    ),
    'different position, same size -> not equal'
  )

  t.false(
    Rectangle.equals(
      Rectangle(position1, size1),
      Rectangle(position2, size1)
    ),
    'same position, different size -> not equal'
  )
})

test('isSimilar', t => {
  const { isSimilar, createBase } = Rectangle

  t.true(
    isSimilar(
      createBase(Distance2(4, 3)),
      createBase(Distance2(4, 3))
    )
  )

  t.true(
    isSimilar(
      createBase(Distance2(4, 3)),
      createBase(Distance2(2, 1.5))
    )
  )

  t.false(
    isSimilar(
      createBase(Distance2(4, 3)),
      createBase(Distance2(5, 7))
    )
  )
})

test('translate', t => {
  const position1 = Point(1, 1)
  const size = Distance2(1, 1)

  const rect1 = Rectangle(position1, size)
  const rect2 = Rectangle.translate(2, 3, rect1)

  t.not(rect1, rect2, 'no mutate')
  t.deepEqual(rect2.position, Point(3, 4))
})

test('translateTo', t => {
  const position = Point(1, 1)
  const size = Distance2(2, 2)

  const rect1 = Rectangle.createBase(size)
  const rect2 = Rectangle.translateTo(position, rect1)

  t.not(rect1, rect2, 'no mutate')
  t.deepEqual(rect2, Rectangle(position, size))
})

test('translateCenterTo', t => {
  const size1 = Distance2(2, 2)

  const rect1 = Rectangle.createBase(size1)
  const rect2 = Rectangle.translateCenterTo(Point(3, 3), rect1)

  t.not(rect1, rect2, 'no mutate')
  t.deepEqual(rect2, Rectangle(Point(2, 2), size1))
})

test('scale', t => {
  const position = Point(1, 1)
  const size = Distance2(2, 3)

  const rect1 = Rectangle(position, size)
  const rect2 = Rectangle.scale(2, rect1)

  t.not(rect1, rect2, 'no mutate')
  t.deepEqual(rect2, Rectangle(position, size.scale(2)))
})

test('scaleFromCenter', t => {
  const rect1 = Rectangle(Point(1, 1), Distance2(2, 2))
  const rect2 = Rectangle.scaleFromCenter(2, rect1)

  t.not(rect1, rect2, 'no mutate')
  t.deepEqual(rect2, Rectangle(Point(0, 0), Distance2(4, 4)))
})

test('scaleFromBase', t => {
  const r1 = Rectangle(Point(1, 1), Distance2(2, 2))
  const r2 = Rectangle.scaleFromBase(2, r1)

  t.not(r1, r2, 'no mutate')
  t.deepEqual(r2, Rectangle(Point(2, 2), Distance2(4, 4)))
})

test('centerOf', t => {
  const position = Point(1, 2)
  const size = Distance2(2, 4)

  const rect = Rectangle.create(position, size)

  t.deepEqual(Rectangle.centerOf(rect), Point(2, 4))
})

test('alignCenterWith', t => {
  const size1 = Distance2(2, 4)
  const size2 = Distance2(6, 6)

  const rect1 = Rectangle.createBase(size1)
  const rect2 = Rectangle.createBase(size2)

  t.deepEqual(
    Rectangle.alignCenterWith(rect2, rect1),
    Rectangle(Point(2, 1), Distance2(2, 4))
  )
})

test('positionOf', t => {
  const position = Point(1, 1)
  const size = Distance2(2, 3)

  const rect = Rectangle.create(position, size)

  t.deepEqual(Rectangle.positionOf(rect), position)
})
