import test from 'ava'

import { Point, Line } from '..'

test('signature', t => {
  t.is(typeof Line, 'function')
})

test('attributes', t => {
  const a = Point(3, 2)
  const b = Point(6, 3)

  const line = Line(a, b)

  t.is(line.a, a)
  t.is(line.b, b)
})
