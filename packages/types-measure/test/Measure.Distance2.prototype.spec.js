import test from 'ava'

import { Distance2 } from '..'

test('equals', t => {
  t.true(Distance2(1, 1).equals(Distance2(1, 1)))
  t.false(Distance2(1, 1).equals(Distance2(2, 1)))
})

test('map', t => {
  t.deepEqual(Distance2(1, 2).map(n => n + 1), Distance2(2, 3))
})

test('concat', t => {
  t.deepEqual(Distance2(1, 2).concat(Distance2(2, 3)), Distance2(3, 5))
})

test('invert', t => {
  t.deepEqual(Distance2(1, 2).invert(), Distance2(-1, -2))
})

test('scale', t => {
  t.deepEqual(Distance2(1, 2).scale(2), Distance2(2, 4))
})

test('reduce', t => {
  const sum = (a, b) => a + b

  t.deepEqual(Distance2(1, 2).reduce(sum, 0), 3)
})
