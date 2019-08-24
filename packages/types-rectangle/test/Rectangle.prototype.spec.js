import test from 'ava'

import Point from '@monocular/types-point'
import { Distance2 } from '@monocular/types-measure'

import Rectangle from '..'

test('equals', t => {
  const position1 = Point(1, 1)
  const position2 = Point(2, 1)

  const size1 = Distance2.create(3, 4)
  const size2 = Distance2.create(4, 4)

  t.true(
    Rectangle(position1, size1)
      .equals(Rectangle(position1, size1)),
    'same position, same size -> equal'
  )

  t.false(
    Rectangle(position1, size1)
      .equals(Rectangle(position2, size1)),
    'different position, same size -> not equal'
  )

  t.false(
    Rectangle(position1, size1)
      .equals(Rectangle(position1, size2)),
    'same position, different size -> not equal'
  )
})

test('translate', t => {
  const size = Distance2(1, 1)

  t.deepEqual(
    Rectangle(Point(1, 1), size).translate(2, 3),
    Rectangle(Point(3, 4), size)
  )
})

test('translateTo', t => {
  const size = Distance2(1, 1)

  t.deepEqual(
    Rectangle(Point(1, 1), size).translateTo(Point(0, 0)),
    Rectangle(Point(0, 0), size)
  )
})

test('translateCenterTo', t => {
  const size = Distance2(2, 2)

  t.deepEqual(
    Rectangle(Point(2, 2), size).translateCenterTo(Point(1, 1)),
    Rectangle(Point(0, 0), size)
  )
})

test('scale', t => {
  t.deepEqual(
    Rectangle(Point(1, 1), Distance2(2, 3)).scale(2),
    Rectangle(Point(1, 1), Distance2(4, 6))
  )
})

test('scaleFromCenter', t => {
  t.deepEqual(
    Rectangle(Point(1, 1), Distance2(2, 2)).scaleFromCenter(2),
    Rectangle(Point(0, 0), Distance2(4, 4))
  )
})

test('scaleFromBase', t => {
  t.deepEqual(
    Rectangle(Point(1, 1), Distance2(2, 2)).scaleFromBase(2),
    Rectangle(Point(2, 2), Distance2(4, 4))
  )
})

test('centerOf', t => {
  t.deepEqual(
    Rectangle(Point(1, 1), Distance2(4, 4)).getCenter(),
    Point(3, 3)
  )
})

test('alignCenterWith', t => {
  const rect1 = Rectangle(Point(1, 1), Distance2(2, 4))
  const rect2 = Rectangle(Point(1, 1), Distance2(6, 6))

  t.deepEqual(
    rect1.alignCenterWith(rect2),
    Rectangle(Point(3, 2), Distance2(2, 4))
  )
})

test('positionOf', t => {
  t.deepEqual(
    Rectangle(Point(2, 3), Distance2(1, 1)).getPosition(),
    Point(2, 3)
  )
})
