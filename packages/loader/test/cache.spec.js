import test from 'ava'

import { Cache } from '..'

test('constructor', t => {
  t.is(typeof Cache, 'function')

  const cache = new Cache()
  t.true(cache instanceof Cache)
})

test('basic functionality', t => {
  const cache = new Cache()

  cache.insert({
    minX: 1,
    minY: 1,
    maxX: 3,
    maxY: 3
  })

  cache.insert({
    minX: 3,
    minY: 3,
    maxX: 5,
    maxY: 5
  })

  cache.insert({
    minX: 5,
    minY: 5,
    maxX: 7,
    maxY: 7
  })

  const focusArea = { minX: 2, minY: 2, maxX: 4, maxY: 4 }

  t.deepEqual(
    cache.search(focusArea),
    [ { minX: 2, minY: 2, maxX: 3, maxY: 3 },
      { minX: 3, minY: 3, maxX: 4, maxY: 4 } ]
  )
})
