/**
 * Check if proportionally similar
 *
 * @param {Rectangle} r1
 * @param {Rectangle} r2
 *
 * @returns {Boolean}
 */

function isSimilar (r1, r2) {
  const factorX = r1.width / r2.width
  const factorY = r1.height / r2.height

  return factorX === factorY
}

module.exports = isSimilar
