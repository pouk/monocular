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
