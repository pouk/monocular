import test from 'ava'

import * as R from 'ramda'

import Shape from '..'

const { Point, Line, Rectangle } = Shape

test.beforeEach(t => {
  const A = Point(3, 2)
  const B = Point(6, 2)
  const C = Point(6, 4)
  const D = Point(3, 4)

  t.context = { A, B, C, D }
})

test('.equals', t => {
  const { A, B, C, D } = t.context

  const AB = Line(A, B)
  const ABCD = Rectangle(A, B, C, D)

  t.true(R.equals(A, Point(3, 2)))
  t.false(R.equals(A, Point(6, 4)))

  t.true(R.equals(AB, Line(A, B)))
  t.false(R.equals(AB, Line(B, C)))

  t.throws(() => A.equals(AB), TypeError)
  t.throws(() => A.equals(ABCD), TypeError)
  t.throws(() => AB.equals(ABCD), TypeError)
})

test('.map(fn)', t => {
  const A = R.map(R.identity, Point(3, 2))
  t.true(A.equals(Point(3, 2)))

  const B = R.map(R.multiply(2), Point(3, 2))
  t.true(B.equals(Point(6, 4)))
})
