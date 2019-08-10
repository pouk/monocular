const R = require('ramda')

/** Get predicate for given constructor
   *
   * @param {Any} group
   * @param {Function} ctor
   *
   * @returns {Function}
   */

function predForCtor (group, ctor) {
  switch (ctor) {
    case String:
    case Number:
    case Boolean:
    case Array:
    case Function:
    case Object:
      return R.is(ctor)
    case undefined:
      return group
    default:
      return ctor
  }
}

function validate (group, validators, name, args) {
  if (args.length > validators.length) {
    const tagline = `too many arguments supplied to constructor ${name}`
    const summary = `expected ${validators.length} but got ${args.length}`

    throw new TypeError(`${tagline} (${summary})`)
  }

  const check = (v, i) => {
    const isValid = predForCtor(group, validators[i])

    const hasPrototype = isValid.prototype !== undefined
    const isCallable = typeof isValid === 'function'

    // eslint-disable-next-line no-prototype-builtins
    const A = hasPrototype && isValid.prototype.isPrototypeOf(v)
    const B = isCallable && isValid(v)

    if (!A && !B) {
      throw new TypeError(`wrong value ${v} passed as N${i} argument to constructor ${name}`)
    }
  }

  Array
    .from(args)
    .forEach(check)
}

module.exports = validate
