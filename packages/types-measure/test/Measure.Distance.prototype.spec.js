import test from 'ava'

import { Distance } from '..'

test('equals', t => {
  t.true(Distance(1).equals(Distance(1)))
  t.false(Distance(1).equals(Distance(2)))
})

test('map', t => {
  t.deepEqual(Distance(1).map(x => x + 1), Distance(2))
})

test('concat', t => {
  t.deepEqual(Distance(1).concat(Distance(2)), Distance(3))
})

test('invert', t => {
  t.deepEqual(Distance(1).invert(), Distance(-1))
})

test('scale', t => {
  t.deepEqual(Distance(1).scale(2), Distance(2))
})

test('reduce', t => {
  const sum = (a, b) => a + b
  t.deepEqual(Distance(1).reduce(sum, 0), 1)
})
