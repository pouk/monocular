import test from 'ava'

import { Distance2 } from '@monocular/types-measure'

import Point from '..'

test('equals', t => {
  t.true(Point(2, 1).equals(Point(2, 1)))
  t.false(Point(1, 2).equals(Point(2, 1)))
})

test('map', t => {
  t.deepEqual(
    Point(2, 1).map(x => x + 1),
    Point(3, 2)
  )
})

test('translate', t => {
  t.deepEqual(
    Point(2, 1).translate(4, 3),
    Point(6, 4)
  )
})

test('translateBy', t => {
  t.deepEqual(
    Point(2, 1).translateBy(Distance2(4, 3)),
    Point(6, 4)
  )
})

test('distanceTo', t => {
  t.deepEqual(
    Point(2, 1).distanceTo(Point(6, 4)),
    Distance2(4, 3)
  )
})

test('distanceFrom', t => {
  t.deepEqual(
    Point(2, 1).distanceFrom(Point(6, 4)),
    Distance2(-4, -3)
  )
})
