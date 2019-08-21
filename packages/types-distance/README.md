# `types-distance`

Sum type for signed distance for 1- and 2- dimensions

## Usage

```js
const { Distance, Distance2 } = require('@monocular/types-distance')

const x = Distance(400)
const y = Distance(600)

const size = Distance2(x, y)

size.x // Distance(400)
size.y // Distance(600)
```
