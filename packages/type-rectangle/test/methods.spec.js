import test from 'ava'

import Point from '@monocular/type-point'

import Rectangle from '..'

test('hasIntersection', t => {
  const { hasIntersection } = Rectangle

  t.is(typeof hasIntersection, 'function')

  const A = Rectangle(Point(1, 1), Point(3, 3))
  const B = Rectangle(Point(2, 2), Point(4, 4))
  const C = Rectangle(Point(3, 3), Point(5, 5))
  const D = Rectangle(Point(4, 4), Point(6, 6))

  t.true(hasIntersection(A, B))
  t.true(hasIntersection(A, C))
  t.false(hasIntersection(A, D))
})

test('intersectionOf', t => {
  const { intersectionOf } = Rectangle

  t.is(typeof intersectionOf, 'function')

  const A = Rectangle(Point(1, 1), Point(3, 3))
  const B = Rectangle(Point(2, 2), Point(4, 4))
  const C = Rectangle(Point(3, 3), Point(5, 5))
  const D = Rectangle(Point(4, 4), Point(6, 6))

  t.deepEqual(
    intersectionOf(A, B),
    Rectangle(Point(2, 2), Point(3, 3))
  )

  t.deepEqual(
    intersectionOf(A, C),
    void 0,
    'intersection point/line is void'
  )

  t.deepEqual(
    intersectionOf(A, D),
    void 0
  )
})
