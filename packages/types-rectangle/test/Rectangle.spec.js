import test from 'ava'

import Point from '@monocular/types-point'
import { Distance2 } from '@monocular/types-measure'

import Rectangle from '..'

test('create(position, size)', t => {
  const position = Point.create(2, 1)
  const size = Distance2.create(3, 4)

  t.deepEqual(
    Rectangle.create(position, size),
    Rectangle(position, size)
  )
})

test('createBase(size)', t => {
  const position = Point.create(0, 0)
  const size = Distance2.create(3, 4)

  t.deepEqual(
    Rectangle.createBase(size),
    Rectangle(position, size)
  )
})

test('from({ position, size })', t => {
  const position = Point(2, 1)
  const size = Distance2.create(3, 4)

  t.deepEqual(
    Rectangle.from({ position, size }),
    Rectangle(position, size)
  )
})

test('is(rect)', t => {
  const position = Point(2, 1)
  const size = Distance2.create(3, 4)

  t.true(Rectangle.is(Rectangle(position, size)))
  t.false(Rectangle.is({ position, size }))
})

test('equals(r1, r2)', t => {
  const position1 = Point(1, 1)
  const position2 = Point(2, 1)

  const size1 = Distance2.create(3, 4)
  const size2 = Distance2.create(4, 4)

  // class

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

  // instance

  t.true(
    Rectangle(position1, size1)
      .equals(Rectangle(position1, size1))
  )

  t.false(
    Rectangle(position1, size1)
      .equals(Rectangle(position2, size2))
  )
})

test('isSimilar(r1, r2)', t => {
  const { isSimilar, createBase } = Rectangle

  // class

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

  // instance

  t.true(
    createBase(Distance2(4, 3))
      .isSimilar(createBase(Distance2(8, 6)))
  )
})

test('translate(x, y, rect)', t => {
  const position1 = Point(1, 1)
  const size = Distance2(1, 1)

  const rect1 = Rectangle(position1, size)
  const rect2 = Rectangle.translate(2, 3, rect1)

  // class

  t.not(rect1, rect2, 'no mutate')
  t.deepEqual(rect2.position, Point(3, 4))

  // instance

  t.deepEqual(rect1.translate(2, 3), rect2)
})

test('translateTo(point, rect)', t => {
  const position = Point(1, 1)
  const size = Distance2(2, 2)

  const rect1 = Rectangle.createBase(size)
  const rect2 = Rectangle.translateTo(position, rect1)

  // class

  t.not(rect1, rect2, 'no mutate')
  t.deepEqual(rect2, Rectangle(position, size))

  // instance

  t.deepEqual(rect1.translateTo(position), rect2)
})

test('translateCenterTo(point, rect)', t => {
  const size1 = Distance2(2, 2)

  const rect1 = Rectangle.createBase(size1)
  const rect2 = Rectangle.translateCenterTo(Point(3, 3), rect1)

  // class

  t.not(rect1, rect2, 'no mutate')
  t.deepEqual(rect2, Rectangle(Point(2, 2), size1))

  // instance

  t.deepEqual(rect1.translateCenterTo(Point(3, 3)), rect2)
})

test('scale(n, rect)', t => {
  const position = Point(1, 1)
  const size = Distance2(2, 3)

  const rect1 = Rectangle(position, size)
  const rect2 = Rectangle.scale(2, rect1)

  // class

  t.not(rect1, rect2, 'no mutate')
  t.deepEqual(rect2, Rectangle(position, size.scale(2)))

  // instance

  t.deepEqual(rect1.scale(2), rect2)
})

test('scaleFromCenter(n, rect)', t => {
  const rect1 = Rectangle(Point(1, 1), Distance2(2, 2))
  const rect2 = Rectangle.scaleFromCenter(2, rect1)

  // class

  t.not(rect1, rect2, 'no mutate')
  t.deepEqual(rect2, Rectangle(Point(0, 0), Distance2(4, 4)))

  // instance

  t.deepEqual(rect1.scaleFromCenter(2), rect2)
})

test('scaleFromBase(n, rect)', t => {
  const r1 = Rectangle(Point(1, 1), Distance2(2, 2))
  const r2 = Rectangle.scaleFromBase(2, r1)

  // class

  t.not(r1, r2, 'no mutate')
  t.deepEqual(r2, Rectangle(Point(2, 2), Distance2(4, 4)))

  // prototype

  t.deepEqual(r1.scaleFromBase(2), r2)
})

test('centerOf(rect)', t => {
  const position = Point(1, 2)
  const size = Distance2(2, 4)

  const rect = Rectangle.create(position, size)

  // class

  t.deepEqual(Rectangle.centerOf(rect), Point(2, 4))

  // instance

  t.deepEqual(rect.getCenter(), Point(2, 4))
})

test('alignCenterWith(rect)', t => {
  const size1 = Distance2(2, 4)
  const size2 = Distance2(6, 6)

  const rect1 = Rectangle.createBase(size1)
  const rect2 = Rectangle.createBase(size2)

  // class
  t.deepEqual(
    Rectangle.alignCenterWith(rect2, rect1),
    Rectangle.translateCenterTo(Point(3, 3), rect1)
  )

  // instance

  t.deepEqual(
    rect1.alignCenterWith(rect2).getCenter(),
    Point(3, 3)
  )
})

test('positionOf(rect)', t => {
  const position = Point(1, 1)
  const size = Distance2(2, 3)

  const rect = Rectangle.create(position, size)

  // class

  t.deepEqual(Rectangle.positionOf(rect), position)

  // instance

  t.deepEqual(rect.getPosition(), position)
})
