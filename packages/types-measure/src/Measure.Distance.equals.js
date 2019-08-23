const isDistance = require('./Measure.Distance.is')

function equals (d2, d1) {
  if (!isDistance(d1) || !isDistance(d2)) {
    throw new TypeError('`equals` accepts argumens of type `Distance`')
  }

  return d1.x === d2.x
}

module.exports = equals
