import test from 'ava'

import { Distance } from '..'

test('create', t => {
  const { create } = Distance

  t.deepEqual(create(1), Distance(1))

  t.throws(() => create())
  t.throws(() => create(1, 2))
})

test('is', t => {
  const { is } = Distance

  t.true(is(Distance(1)))

  t.false(is(1))
  t.false(is({ x: 1 }))
})

test('equals', t => {
  const { equals } = Distance

  t.true(equals(Distance(1), Distance(1)))
  t.false(equals(Distance(2), Distance(1)))
})

test('map', t => {
  const { map } = Distance

  t.deepEqual(map(x => x + 1, Distance(1)), Distance(2))
})

test('concat', t => {
  const { concat } = Distance

  t.deepEqual(concat(Distance(2), Distance(1)), Distance(3))
})

test('empty', t => {
  const { empty } = Distance

  t.deepEqual(empty(), Distance(0))
})
