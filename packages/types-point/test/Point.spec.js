import test from 'ava'

import { Distance2 } from '@monocular/types-measure'

import Point from '..'

test('.create(x, y)', t => {
  t.deepEqual(
    Point.create(2, 1),
    Point(2, 1)
  )
})

test('.from({ x, y })', t => {
  t.deepEqual(
    Point.from({ x: 2, y: 1 }),
    Point(2, 1)
  )
})

test('.is(p)', t => {
  t.true(Point.is(Point(2, 1)))
  t.false(Point.is({ x: 2, y: 1 }))
})

test('.equals(p, q)', t => {
  const p = Point(2, 1)

  // class

  t.true(Point.equals(p, Point(2, 1)))
  t.false(Point.equals(p, Point(1, 2)))

  // instance

  t.true(Point(2, 1).equals(p))
  t.false(Point(1, 2).equals(p))
})

test('.map(f, p)', t => {
  const p = Point(2, 1)
  const q = Point.map(x => x + 1, p)

  // class

  t.not(p, q, 'not mutate')
  t.deepEqual(q, Point(3, 2))

  // instance

  t.deepEqual(p.map(x => x + 1), q)
})

test('.translate(dx, dy, p)', t => {
  const p = Point(2, 1)
  const q = Point.translate(4, 3, p)

  // class

  t.not(p, q, 'not mutate')
  t.deepEqual(q, Point(6, 4))

  // instance

  t.deepEqual(p.translate(4, 3), q)
})

test('.translateBy(delta, point)', t => {
  const p = Point(2, 1)
  const delta = Distance2(4, 3)

  const q = Point.translateBy(delta, p)

  // class

  t.not(p, q, 'not mutate')
  t.deepEqual(q, Point(6, 4))

  // instance

  t.deepEqual(p.translateBy(delta), q)
})

test('.distanceTo(target, point)', t => {
  const p = Point(2, 1)
  const q = Point(4, 4)

  const d = Point.distanceTo(q, p)

  t.deepEqual(d, Distance2(2, 3))
})

test('.distanceFrom(target, point)', t => {
  const p = Point(2, 1)
  const q = Point(4, 4)

  const d = Point.distanceFrom(q, p)

  t.deepEqual(d, Distance2(-2, -3))
})
