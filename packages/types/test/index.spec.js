import test from 'ava'

import Types from '..'

test('types', t => {
  t.not(Types, undefined)
})

test.todo('Point')
test.todo('Rectangle')

test.todo('Size')
