/**
 * Check if proportionally similar
 *
 * @param {Rectangle} r1
 * @param {Rectangle} r2
 *
 * @returns {Boolean}
 */

function isSimilar (r1, r2) {
  const factorX = r1.size.x / r2.size.x
  const factorY = r1.size.y / r2.size.y

  return factorX === factorY
}

module.exports = isSimilar
