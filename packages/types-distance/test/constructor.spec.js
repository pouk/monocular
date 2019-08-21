import test from 'ava'

import Distance from '..'

test('Distance', t => {
  const ctor = Distance.Distance

  t.is(typeof ctor, 'function')
})

test('Distance2', t => {
  const ctor = Distance.Distance2

  t.is(typeof ctor, 'function')
})
