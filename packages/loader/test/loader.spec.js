import test from 'ava'

import loader from '..'

test('loader', t => {
  t.is(typeof loader, 'function')
})
