# arrify [![Build Status](https://travis-ci.org/sindresorhus/arrify.svg?branch=master)](https://travis-ci.org/sindresorhus/arrify)

> Convert a value to an array

## Install

```
$ npm install --save arrify
```

## Usage

```js
const arrify = require('arrify')

arrify('unicorn')
//=> ['unicorn']

arrify(['unicorn'])
//=> ['unicorn']

arrify(null)
//=> []

arrify(undefined)
//=> []

arrify([1, [2, [3]]], true)
//=> [1, 2, 3]
// (optionally pass 'true' (as second argument) for flattening)
```

_Supplying `null` or `undefined` results in an empty array._

## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
