import test from 'ava'

import { Distance2 } from '@monocular/types-measure'

import Point from '..'

test('create', t => {
  t.deepEqual(
    Point.create(2, 1),
    Point(2, 1)
  )
})

test('from', t => {
  t.deepEqual(
    Point.from({ x: 2, y: 1 }),
    Point(2, 1)
  )
})

test('is', t => {
  t.true(Point.is(Point(2, 1)))
  t.false(Point.is({ x: 2, y: 1 }))
})

test('equals', t => {
  const p = Point(2, 1)

  t.true(Point.equals(p, Point(2, 1)))
  t.false(Point.equals(p, Point(1, 2)))
})

test('map', t => {
  const p = Point(2, 1)
  const q = Point.map(x => x + 1, p)

  t.not(p, q, 'not mutate')
  t.deepEqual(q, Point(3, 2))
})

test('translate', t => {
  const p = Point(2, 1)
  const q = Point.translate(4, 3, p)

  t.not(p, q, 'not mutate')
  t.deepEqual(q, Point(6, 4))
})

test('translateBy', t => {
  const p = Point(2, 1)
  const delta = Distance2(4, 3)

  const q = Point.translateBy(delta, p)

  t.not(p, q, 'not mutate')
  t.deepEqual(q, Point(6, 4))
})

test('distanceTo', t => {
  const p = Point(2, 1)
  const q = Point(4, 4)

  const d = Point.distanceTo(q, p)

  t.deepEqual(d, Distance2(2, 3))
})

test('distanceFrom', t => {
  const p = Point(2, 1)
  const q = Point(4, 4)

  const d = Point.distanceFrom(q, p)

  t.deepEqual(d, Distance2(-2, -3))
})
