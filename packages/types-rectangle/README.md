# `types-rectangle`

Type class for rectangle

## Usage

```
const Point = require('@monocular/types-point')
const { Distance2 } = require('@monocular/types-measure')

const Rectangle = require('@monocular/types-rectangle')

const position = Point(2, 3)
const size = Distance2(4, 3)

const rect = Rectangle(position, size)
```
