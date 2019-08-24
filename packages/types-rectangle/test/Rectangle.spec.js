import test from 'ava'

import Point from '@monocular/types-point'
import { Distance2 } from '@monocular/types-measure'

import Rectangle from '..'

test('create', t => {
  const position = Point(2, 1)
  const size = Distance2(3, 4)

  t.deepEqual(
    Rectangle.create(position, size),
    Rectangle(position, size)
  )
})

test('createSpread', t => {
  const { createSpread } = Rectangle

  t.deepEqual(
    createSpread(2, 3, 6, 8),
    Rectangle(Point(2, 3), Distance2(6, 8))
  )
})

test('createFromOrigin', t => {
  const size = Distance2(3, 4)

  t.deepEqual(
    Rectangle.createFromOrigin(size),
    Rectangle(Point(0, 0), size)
  )
})

test('from', t => {
  const position = Point(2, 1)
  const size = Distance2(3, 4)

  t.deepEqual(
    Rectangle.from({ position, size }),
    Rectangle(position, size)
  )
})

test('is', t => {
  const position = Point(2, 1)
  const size = Distance2(3, 4)

  t.true(Rectangle.is(Rectangle(position, size)))
  t.false(Rectangle.is({ position, size }))
})

test('equals', t => {
  const position1 = Point(1, 1)
  const position2 = Point(2, 1)

  const size1 = Distance2(3, 4)
  const size2 = Distance2(4, 4)

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

test('bimap', t => {
  const { bimap } = Rectangle

  const f = position => position.map(n => n + 2)
  const g = size => size.scale(2)

  t.deepEqual(
    bimap(f, g, Rectangle(Point(1, 1), Distance2(2, 2))),
    Rectangle(Point(3, 3), Distance2(4, 4))
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

test('translateBy', t => {
  const { translateBy } = Rectangle

  const size = Distance2(1, 1)

  t.deepEqual(
    translateBy(Distance2(2, 3), Rectangle(Point(1, 1), size)),
    Rectangle(Point(3, 4), size)
  )
})

test('translateTo', t => {
  const { translateTo } = Rectangle

  const size = Distance2(2, 2)

  t.deepEqual(
    translateTo(Point(2, 3), Rectangle(Point(1, 1), size)),
    Rectangle(Point(2, 3), size)
  )
})

test('translateCenterTo', t => {
  const { translateCenterTo } = Rectangle

  const size = Distance2(2, 2)

  // curried
  const translated = translateCenterTo(Point(3, 3))

  t.deepEqual(
    translated(Rectangle(Point(0, 0), size)),
    Rectangle(Point(2, 2), size)
  )
})

test('scale', t => {
  const { scale } = Rectangle

  t.deepEqual(
    scale(2, Rectangle(Point(1, 1), Distance2(2, 3))),
    Rectangle(Point(1, 1), Distance2(4, 6))
  )
})

test('scaleFrom', t => {
  const { scaleFrom } = Rectangle

  const rect = Rectangle(Point(3, 3), Distance2(3, 3))

  t.deepEqual(
    scaleFrom(Point(4, 4), 3, rect),
    Rectangle(Point(1, 1), Distance2(9, 9))
  )
})

test('scaleFromCenter', t => {
  const { scaleFromCenter } = Rectangle

  t.deepEqual(
    scaleFromCenter(2, Rectangle(Point(1, 1), Distance2(2, 2))),
    Rectangle(Point(0, 0), Distance2(4, 4))
  )
})

test('scaleFromOrigin', t => {
  const { scaleFromOrigin } = Rectangle

  t.deepEqual(
    scaleFromOrigin(2, Rectangle(Point(1, 1), Distance2(2, 2))),
    Rectangle(Point(2, 2), Distance2(4, 4))
  )
})

test('alignCenterWith', t => {
  const { alignCenterWith } = Rectangle

  const rect1 = Rectangle(Point(1, 1), Distance2(2, 4))
  const rect2 = Rectangle(Point(2, 2), Distance2(6, 6))

  t.deepEqual(
    alignCenterWith(rect2, rect1),
    Rectangle(Point(4, 3), Distance2(2, 4))
  )
})

test('positionOf', t => {
  const { positionOf } = Rectangle

  t.deepEqual(
    positionOf(Rectangle(Point(1, 1), Distance2(1, 1))),
    Point(1, 1)
  )
})

test('centerOf', t => {
  const { centerOf } = Rectangle

  t.deepEqual(
    centerOf(Rectangle(Point(1, 2), Distance2(2, 2))),
    Point(2, 3)
  )
})

test('sizeOf', t => {
  const { sizeOf } = Rectangle

  t.deepEqual(
    sizeOf(Rectangle(Point(1, 1), Distance2(2, 3))),
    Distance2(2, 3)
  )
})

test('widthOf', t => {
  const { widthOf } = Rectangle

  t.is(widthOf(Rectangle(Point(1, 1), Distance2(2, 3))), 2)
})

test('heightOf', t => {
  const { heightOf } = Rectangle

  t.is(heightOf(Rectangle(Point(1, 1), Distance2(2, 3))), 3)
})
