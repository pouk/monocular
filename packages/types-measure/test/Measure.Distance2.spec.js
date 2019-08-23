import test from 'ava'

import { Distance2 } from '..'

test('create', t => {
  const { create } = Distance2

  t.deepEqual(create(1, 2), Distance2(1, 2))

  t.throws(() => create(1))
  t.throws(() => create(1, 2, 3))
})

test('is', t => {
  const { is } = Distance2

  t.true(is(Distance2(1, 2)))

  t.false(is({ x: 1, y: 2 }))
})

test('equals', t => {
  const { equals } = Distance2

  t.true(equals(Distance2(1, 1), Distance2(1, 1)))
  t.false(equals(Distance2(2, 1), Distance2(1, 1)))
})

test('map', t => {
  const { map } = Distance2

  t.deepEqual(map(n => n + 1, Distance2(1, 2)), Distance2(2, 3))
})

test('concat', t => {
  const { concat } = Distance2

  t.deepEqual(concat(Distance2(2, 3), Distance2(1, 1)), Distance2(3, 4))
})

test('empty', t => {
  const { empty } = Distance2

  t.deepEqual(empty(), Distance2(0, 0))
})
