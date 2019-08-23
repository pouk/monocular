function reduce (fn, acc, d) {
  const { x, y } = d
  return [x, y].reduce(fn, acc)
}

module.exports = reduce
