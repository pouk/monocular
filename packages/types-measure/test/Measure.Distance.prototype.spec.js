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
