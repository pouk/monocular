const Daggy = require('daggy')

const Rectangle = Daggy.tagged('Rectangle', ['origin', 'width', 'height'])

//

module.exports = Rectangle
