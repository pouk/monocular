import test from 'ava'

import { Point, Rectangle } from '..'

test.beforeEach(t => {
  const left = 1
  const top = 2
  const right = 4
  const bottom = 6

  const a = Point(left, top)
  const b = Point(right, top)
  const c = Point(right, bottom)
  const d = Point(left, bottom)

  t.context = { a, b, c, d }
})

test('constuctor', t => {
  t.is(typeof Rectangle, 'function')
})

test('attributes', t => {
  const { a, b, c, d } = t.context

  const rect = Rectangle(a, b, c, d)

  t.is(rect.a, a)
  t.is(rect.b, b)
  t.is(rect.c, c)
  t.is(rect.d, d)
})

test('iterator', t => {
  const { a, b, c, d } = t.context

  const rect = Rectangle(a, b, c, d)

  t.deepEqual([...rect], [a, b, c, d])
})
