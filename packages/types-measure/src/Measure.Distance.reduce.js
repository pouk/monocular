function reduce (fn, acc, d) {
  return fn(acc, d.x)
}

module.exports = reduce
